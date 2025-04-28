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
  return (
    <div className={`${wrapClassName} dashboard_header_wrap`}>
      <Breadcrumbs isDisabled>
        {breadCrumbList.map((breadcrumb) => {
          return (
            <Breadcrumb>
              <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
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
          Sign In
        </Link>
        <Button className="secondary_button">
          <IoNotifications />
        </Button>
      </div>
    </div>
  );
};

export default Header;
