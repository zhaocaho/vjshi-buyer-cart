import { useState } from "react";
import { Tabs } from "antd";
import styles from "./drawer-content.module.css";
import ProductItem from "./ProductItem";

const tabDataList = [
  {
    key: "1",
    title: "视频",
    data: [
      {
        auditStatus: "SUCCESS",
        coverImage: "https://picsum.photos/300/200",
        price: 100,
        softwareType: "视频素材",
        title: "视频素材",
        licType: "NP",
        vid: "123",
      },
      {
        auditStatus: "SUCCESS",
        coverImage: "https://picsum.photos/300/200",
        price: 50,
        softwareType: "视频素材",
        title: "视频素材",
        licType: "NP",
        vid: "123",
      },
    ],
  },
  {
    key: "2",
    title: "图片",
    data: [
      {
        auditStatus: "SUCCESS",
        coverImage: "https://picsum.photos/300/200",
        price: 100,
        softwareType: "视频素材",
        title: "视频素材",
        licType: "NP",
        vid: "123",
      },
    ],
  },
  {
    key: "3",
    title: "音乐",
    data: [],
  },
];
export default function DrawerContent() {
  const [activeTab, setActiveTab] = useState(tabDataList[0].key);

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <Tabs
      activeKey={activeTab}
      onChange={handleTabChange}
      className={styles.customTabs}
      tabBarGutter={40}
      tabBarStyle={{ margin: "0 40px" }}
      items={tabDataList.map((tab) => ({
        label: (
          <div className="flex justify-between items-center pl-1 pr-1 text-base font-medium">
            <span>{tab.title}</span>
            <span className="ml-1">{tab.data.length}</span>
          </div>
        ),
        key: tab.key,
        children: (
          <form className="flex flex-col h-full">
            <div className="flex-1 flex flex-col w-full overflow-auto pt-5 px-5 lg:pt-3 lg:px-0">
              {tab.data.map((data, index) => (
                <div key={index}>
                  <ProductItem
                    imageSrc={data.coverImage}
                    description={data.title}
                  />
                </div>
              ))}
            </div>
          </form>
        ),
      }))}
    ></Tabs>
  );
}
