import { useEffect, useState } from "react";
import OrderComponent, { IOrderComponentProps } from "./OrderComponent"


const Orders = () => {
    const [orderData, setOrderData] = useState<IOrderComponentProps[]>([]);
    const getOrdersData = async()=>{
        try{
            const res = await fetch("src/models/mockOrdersData.json");
            const data = await res.json();
            setOrderData(data);

        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getOrdersData();
        return setOrderData([]);
    },[])
  return (
     <div  className="common_component_wrap project_order_wrap">
      <h2 className="component_heading">Orders Overview</h2>
          <p className="component_sub_heading">
            <b>+30%</b> this
            month
          </p>
    <ul>
      {orderData.map((orderDataElem) => {
        return <OrderComponent {...orderDataElem} key={orderDataElem.id} />;
      })}
    </ul>
     </div>
  );
}

export default Orders
