import LeftPanel from "./leftpanel/LeftPanel";
import Header from "./Header";
import { useLocation } from "react-router-dom";


const AppWrapper:React.FC = () => {
    const location = useLocation();

  return (
    <>
      <Header wrapClassName={`${location.pathname.includes("profile") ? 'profile_header' : ''}`}/>
      <LeftPanel />
    </>
  );
};

export default AppWrapper;
