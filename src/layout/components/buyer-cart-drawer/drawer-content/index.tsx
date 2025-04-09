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
  const [selectItems, setSelectItems] = useState<CartItem[]>([]);

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
  const handleTabChange = (key: string) => {
    setActiveTab(key as CartItemType);
    setSelectItems([]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("购买");
  };

  const handleItemSelect = (item: CartItem) => {
    setSelectItems((prev) => {
      const index = prev.indexOf(item);
      if (index === -1) {
        return [...prev, item];
      } else {
        return prev.filter((selectItem) => selectItem !== item);
      }
    });
  };

  const handleSelectAll = (checked: boolean, items: CartItem[]) => {
    if (checked) {
      setSelectItems(items);
    } else {
      setSelectItems([]);
    }
  };

  const calculateTotalPrice = () => {
    {
      return selectItems.reduce((total, item) => total + item.price, 0);
    }
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
                    checked={selectItems.includes(item)}
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
              checked={tab.items.length === selectItems.length}
              totalPrice={calculateTotalPrice()}
              selectCount={selectItems.length}
              onChange={(checked) => {
                handleSelectAll(checked, tab.items);
              }}
            />
          </form>
        ),
      }))}
    ></Tabs>
  );
}
