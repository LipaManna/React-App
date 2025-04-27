import { ReactNode } from "react";

export interface IOrderComponentProps {
  id: number;
  icon: string;
  orderName: string;
  time: string | number | Date;
}


function formatDate(date: string | number | Date) {
  const dateObj = new Date(date);

  if (isNaN(dateObj.getTime())) {
    return { day: "--", month: "--" };
  }

  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("default", { month: "short" });
  return { day, month };
}


const OrderComponent: React.FC<IOrderComponentProps> = ({
  id,
  icon,
  orderName,
  time,
}) => {
  const { day, month } = formatDate(time);

  return (
    <li>
      <img src={icon} alt="Order Icon" />
      <div>
        <p>{orderName}</p>
        <p>
          <span>
            {day} {month}
          </span>
          <span>{new Date(time).toLocaleString()}</span>
        </p>
      </div>
    </li>
  );
};

export default OrderComponent;
