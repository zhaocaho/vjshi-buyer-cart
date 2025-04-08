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
      tabBarStyle={{ margin: "0 40px", height: "56px" }}
      style={{ flex: 1, minHeight: 0 }}
      items={tabDataList.map((tab) => ({
        label: <TabTitle title={tab.title} count={tab.items.length} />,
        key: tab.key,
        children: (
          <form className="flex h-full flex-col" onSubmit={handleSubmit}>
            <div className="flex w-full flex-1 flex-col overflow-auto px-5 pt-5 lg:px-0 lg:pt-3">
              {tab.items.map((items, index) => (
                <div key={index}>
                  <ProductItem imageSrc={items.coverImage} description={items.title} />
                </div>
              ))}
            </div>
            <hr
              aria-orientation="horizontal"
              className="dioa-divider h-[0px] w-full border-0 border-b border-current text-[#F0F0F0]"
            ></hr>
            <BuyerPanel />
          </form>
        ),
      }))}
    ></Tabs>
  );
}
