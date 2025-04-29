import React from "react";
import './avatar.scss'
export interface IMember {
  fullName: string;
  avatar: string;
}
interface IAvatarStackProps {
  members: IMember[];
}

const AvatarStack: React.FC<IAvatarStackProps> = ({ members }) => {
  const visibleMembers = members.slice(0, 4);
  const extraCount = members.length - 4;
  return (
    <>
      <span>
        {visibleMembers.map((member) => {
          return (
            <img src={member.avatar} alt={member.fullName} className="avatar" />
          );
        })}
      </span>
      {extraCount > 0 && <span className="extraCount">+{extraCount}</span>}
    </>
  );
};

export default AvatarStack;
