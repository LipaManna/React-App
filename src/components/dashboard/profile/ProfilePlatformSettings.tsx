import { Switch } from "react-aria-components";

const accountSwitchOptions = [
  {
    id: 1,
    label: "Low power mode",
    value: "LPM",
  },
  {
    id: 2,
    label: "Email me when someone answers on my post",
    value: "answer",
  },
  {
    id: 3,
    label: "Email me when someone mentions me",
    value: "mention",
  },
];

const applicationSwitchOptions = [
    {
      id: 1,
      label: "New launches and projects",
      value: "NLP",
    },
    {
      id: 2,
      label: "Monthly product updates",
      value: "MPU",
    },
    {
      id: 3,
      label: "Subscribe to newsletter",
      value: "SN",
    },
  ];

const ProfilePlatformSettings = () => {
  return (
    <div className="generic_profile_info_wrap common_component_wrap">
      <h4>Platform Settings</h4>
      <h5>Account</h5>
      <ul>
        {accountSwitchOptions.map((eachOption) => {
          return (
            <li>
              <Switch>
                <div className="indicator" />
                {eachOption.label}
              </Switch>
            </li>
          );
        })}
      </ul>
      <h5 className="mt-2">Application</h5>
      <ul>
      {applicationSwitchOptions.map((eachOption) => {
          return (
            <li>
              <Switch>
                <div className="indicator" />
                {eachOption.label}
              </Switch>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProfilePlatformSettings;
