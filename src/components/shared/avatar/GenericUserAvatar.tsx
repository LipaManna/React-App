import React from 'react';
import { FaUser } from 'react-icons/fa';
import './avatar.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';


export interface IGenericUserAvatar {
  size?: string | number;
}

const GenericUserAvatar: React.FC<IGenericUserAvatar> = ({ size = 40 }) => {
  const reduxAvatar = useSelector((state: RootState) => state.avatar.profileImgSrc);
  return (
    <>
      {typeof reduxAvatar === 'string' && reduxAvatar.trim() !== ''  ? (
        
        
        <img
          src={reduxAvatar}
          alt="User Avatar"
          
        />
      ) : (
        <FaUser size={size} />
      )}
   </>
  );
};

export default GenericUserAvatar;
