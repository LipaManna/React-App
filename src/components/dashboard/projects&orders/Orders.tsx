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
    <ul className="common_component_wrap">
      {orderData.map((orderDataElem) => {
        return <OrderComponent {...orderDataElem} key={orderDataElem.id} />;
      })}
    </ul>
  );
}

export default Orders
