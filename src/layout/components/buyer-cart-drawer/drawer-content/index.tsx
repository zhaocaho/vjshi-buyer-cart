import React, { useState } from "react";
import { Tabs } from "antd";
import styles from "./drawer-content.module.css";
import ProductItem from "./ProductItem";
import { useAppSelector } from "@/hooks/reduxHooks";
import TabTitle from "./TabTitle";
import BuyerPanel from "./BuyerPanel";
import { CartItem } from "@/store/slices/cartSlices";

enum CartItemType {
  video = "video",
  foto = "foto",
  music = "music",
}

export default function DrawerContent() {
  const [activeTab, setActiveTab] = useState<CartItemType>(CartItemType.video);
  const { videos, fotos, musics } = useAppSelector((state) => state.cart);
  const [selectItemIds, setSelectItemIds] = useState<number[]>([]);

  const tabDataList: { key: CartItemType; title: string; items: CartItem[] }[] = [
    {
      key: CartItemType.video,
      title: "视频",
      items: videos,
    },
    {
      key: CartItemType.foto,
      title: "图片",
      items: fotos,
    },
    {
      key: CartItemType.music,
      title: "音乐",
      items: musics,
    },
  ];

  const getItemId = (item: CartItem) => {
    if ("vid" in item) return item.vid;
    if ("fid" in item) return item.fid;
    return item.mid;
  };

  const handleTabChange = (key: string) => {
    setActiveTab(key as CartItemType);
    setSelectItemIds([]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("业务线:", activeTab);
    console.log("ids:", selectItemIds);
    console.log("总价:", calculateTotalPrice());
  };

  const handleItemSelect = (itemId: number) => {
    setSelectItemIds((prev) => {
      const index = prev.indexOf(itemId);
      if (index === -1) {
        return [...prev, itemId];
      } else {
        return prev.filter((id) => id !== itemId);
      }
    });
  };

  const handleSelectAll = (checked: boolean, items: CartItem[]) => {
    if (checked) {
      setSelectItemIds(items.map((item) => getItemId(item)));
    } else {
      setSelectItemIds([]);
    }
  };

  const calculateTotalPrice = () => {
    const items = tabDataList.find((item) => item.key === activeTab)?.items as CartItem[];
    return items
      .filter((item) => selectItemIds.includes(getItemId(item)))
      .reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <Tabs
      activeKey={activeTab}
      onChange={handleTabChange}
      className={styles.customTabs}
      tabBarGutter={40}
      tabBarStyle={{ margin: "0 40px", height: "56px" }}
      style={{ flex: 1, minHeight: 0 }}
      items={tabDataList.map((tab) => ({
        label: <TabTitle title={tab.title} count={tab.items.length} />,
        key: tab.key,
        children: (
          <form className="flex h-full flex-col" onSubmit={handleSubmit}>
            <div className="flex w-full flex-1 flex-col overflow-auto px-5 pt-5 lg:px-0 lg:pt-3">
              {tab.items.map((item, index) => (
                <div key={index}>
                  <ProductItem
                    item={item}
                    id={getItemId(item)}
                    checked={selectItemIds.includes(getItemId(item))}
                    onChange={handleItemSelect}
                  />
                </div>
              ))}
            </div>
            <hr
              aria-orientation="horizontal"
              className="h-[0px] w-full border-0 border-b border-current text-[#F0F0F0]"
            ></hr>
            <BuyerPanel
              checked={tab.items.length === selectItemIds.length}
              totalPrice={calculateTotalPrice()}
              selectCount={selectItemIds.length}
              onChange={(checked) => {
                handleSelectAll(checked, tab.items);
              }}
              disabled={selectItemIds.length === 0}
            />
          </form>
        ),
      }))}
    ></Tabs>
  );
}
