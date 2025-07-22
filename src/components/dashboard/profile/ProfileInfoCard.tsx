import { Link } from "react-router-dom";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
} from "react-icons/io5";
import { CiEdit } from "react-icons/ci";

const ProfileInfoCard = () => {
  return (
    <div className="generic_profile_info_wrap common_component_wrap profile_info">
      <div className="d-flex justify-between align-center">
      <h4>Profile Information</h4>
      <button className="no_style_button"><CiEdit /></button>
      </div>
      <p className="text_secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
        consequuntur eius ipsum debitis excepturi labore inventore sequi numquam
        modi aut dolores error possimus nostrum vitae iusto placeat.
      </p>
      <ul className="profile_data">
        <li>
          <b className="body_text_color">Full Name:</b> Alec M. Thompson
        </li>
        <li>
          <b className="body_text_color">Email:</b> alec@simmmple.com
        </li>
        <li>
          <b className="body_text_color">Phone:</b> (406) 555_0120
        </li>
        <li>
          <b className="body_text_color">Location:</b> USA
        </li>
        <li>
          <b className="body_text_color">Social Media:</b>{" "}
          <Link to="">
            <IoLogoFacebook />
          </Link>
          <Link to="">
            <IoLogoTwitter />
          </Link>
          <Link to="">
            <IoLogoInstagram />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileInfoCard;
