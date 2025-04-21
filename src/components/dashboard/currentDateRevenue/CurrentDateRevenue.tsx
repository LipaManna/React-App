import { IoWallet } from "react-icons/io5"
import CurrentDateRevenueCard from "./CurrentDateRevenueCard"

const staticRevenueData = [
    {
      id:1,
        cardHeading:   "Today's Money",
        value: 53000,
        img: <IoWallet />
    },
    {
      id:2,
        cardHeading:   "Today's Money",
        value: 53000,
        img: <IoWallet />
    },
    {
      id:3,
        cardHeading:   "Today's Money",
        value: 53000,
        img: <IoWallet />
    }
]



const CurrentDateRevenue = () => {
  return (
    <div>
      {
        staticRevenueData.map((dataElement)=>{
            return <CurrentDateRevenueCard cardHeading={dataElement.cardHeading} value={dataElement.value} img={dataElement.img} key={dataElement.id}/>
        })
      }
    </div>
  )
}

export default CurrentDateRevenue
