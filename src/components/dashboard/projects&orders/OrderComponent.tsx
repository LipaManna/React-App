
export interface IOrderComponentProps {
  id: number;
  icon: string;
  orderName: string;
  time: string | number | Date;
}

function randomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


function formatDate() {
  const dateObj = randomDate(new Date(2012, 0, 1), new Date())
  

  if (isNaN(dateObj.getTime())) {
    return { day: "--", month: "--" };
  }
  

  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("default", { month: "short" });
  const time = dateObj.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  return { day, month, time };
}


const OrderComponent: React.FC<IOrderComponentProps> = ({
  id,
  icon,
  orderName,
}) => {
  const { day, month, time } = formatDate();

  return (
    <li key={id} className="order_list_item">
      <img src={icon} alt="Order Icon" />
      <div className="order_list_item_text">
        <p className="order_name">{orderName}</p>
        <p>
          <span>
            {day} {month} {" "}
          </span>
          <span>{time}</span>
        </p>
      </div>
    </li>
  );
};

export default OrderComponent;
