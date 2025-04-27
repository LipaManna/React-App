import React, { useEffect, useState } from 'react'
import ActiveUserElement, { IActiveUserElementProps } from './ActiveUserElement'
import * as RIcons from "react-icons/io5";
import './activeUser.scss'

const ActiveUserElementWrap = () => {
  const [activeUsersData, setActiveUserData] = useState<
    IActiveUserElementProps[]
  >([]);
  const getActiveUserData = async () => {
    try {
      const res = await fetch('src/models/mockRevenueData.json');
      const data = await res.json();
      setActiveUserData(data.activeUsersData);
    }
    catch (err) {
      console.log("Error", err);
    }
  }
  useEffect(() => {
    getActiveUserData();
    return setActiveUserData([]);
  },[])
  return (
    <>
      <h2 className="component_heading">Active Users</h2>
      <p className="active_user_card_row_sub_heading">
        <span>(+23)</span> than last week
      </p>
      <ul className="active_user_card_row">
        {activeUsersData.map((dataItem) => {
          const IconComponent = RIcons[dataItem.img as keyof typeof RIcons];
          return (
            <ActiveUserElement
              {...dataItem}
              key={dataItem.id}
              IconComponent={IconComponent}
            />
          );
        })}
      </ul>
    </>
  );
}

export default ActiveUserElementWrap
