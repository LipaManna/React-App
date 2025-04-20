import {
  Breadcrumb,
  Breadcrumbs,
  Button,
  Input,
  Link,
  SearchField,
} from "react-aria-components";
import { FaUserAlt } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

const DashboardHeader = () => {
  return (
    <div className="dashboard_header_wrap">
      <Breadcrumbs isDisabled>
        <Breadcrumb>
          <Link href="/">Pages</Link>
        </Breadcrumb>
        <Breadcrumb>
          <Link href="/react-aria/">Dashboard</Link>
        </Breadcrumb>
      </Breadcrumbs>
      <div className="search_field_wrap">
        <SearchField>
          <Input placeholder="Type here..."/>
        </SearchField>
        <Link><span><FaUserAlt /></span>Sign In</Link>
        <Button className='secondary_button'><IoNotifications /></Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
