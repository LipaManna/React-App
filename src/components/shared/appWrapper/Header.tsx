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
import "./header.scss";
import { useLocation } from "react-router-dom";

interface IHeaderProps {
  wrapClassName?: string;
}

const breadCrumbList = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Tables",
    href: "/tables",
  },
  {
    label: "Billing",
    href: "/billing",
  },
  {
    label: "Profile",
    href: "/profile",
  },
];

const Header: React.FC<IHeaderProps> = ({ wrapClassName }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);
  
  return (
    <div className={`${wrapClassName} dashboard_header_wrap`}>
      <Breadcrumbs>
        {pathnames.map((segment, index) => {
          const href = "/" + pathnames.slice(0, index + 1).join("/");     
          const label = segment.charAt(0).toUpperCase() + segment.slice(1);

          return (
            <Breadcrumb key={href}>
              <span className="disabled">Pages </span><Link href={href}>{`/ ` + label}</Link>
            </Breadcrumb>
          );
        })}
      </Breadcrumbs>
      <div className="search_field_wrap">
        <SearchField>
          <Input placeholder="Type here..." />
        </SearchField>
        <Link>
          <span>
            <FaUserAlt />
          </span>
          Sign Out
        </Link>
        <Button className="secondary_button">
          <IoNotifications />
        </Button>
      </div>
    </div>
  );
};

export default Header;
