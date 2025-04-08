import React, { useState } from "react";
import { Tabs } from "antd";
import styles from "./drawer-content.module.css";
import ProductItem from "./ProductItem";
import { useAppSelector } from "@/hooks/reduxHooks";
import TabTitle from "./TabTitle";
import BuyerPanel from "./BuyerPanel";

export default function DrawerContent() {
  const [activeTab, setActiveTab] = useState("1");
  const { videos, fotos, musics } = useAppSelector((state) => state.cart);

  const tabDataList = [
    {
      key: "1",
      title: "视频",
      items: videos,
    },
    {
      key: "2",
      title: "图片",
      items: fotos,
    },
    {
      key: "3",
      title: "音乐",
      items: musics,
    },
  ];
  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Tabs
      activeKey={activeTab}
      onChange={handleTabChange}
      className={styles.customTabs}
      tabBarGutter={40}
      tabBarStyle={{ margin: "0 40px" }}
      style={{ flex: 1, minHeight: 0 }}
      items={tabDataList.map((tab) => ({
        label: <TabTitle title={tab.title} count={tab.items.length} />,
        key: tab.key,
        children: (
          <form className="flex flex-col h-full" onSubmit={handleSubmit}>
            <div className="flex-1 flex flex-col w-full overflow-auto pt-5 px-5 lg:pt-3 lg:px-0">
              {tab.items.map((items, index) => (
                <div key={index}>
                  <ProductItem
                    imageSrc={items.coverImage}
                    description={items.title}
                  />
                </div>
              ))}
            </div>
            <hr
              aria-orientation="horizontal"
              className="dioa-divider border-0 border-b w-full h-[0px] border-current text-[#F0F0F0]"
            ></hr>
            <BuyerPanel />
          </form>
        ),
      }))}
    ></Tabs>
  );
}
