import React from 'react'
import { FaUser } from 'react-icons/fa'
import './avatar.scss'

export interface IGenericUserAvatar {
    size?: string | number | undefined
}

const GenericUserAvatar:React.FC<IGenericUserAvatar> = ({size}) => {
  return (
    <div className="generic_user_wrap">
        <FaUser size={size}/>
    </div>
  ) 
}

export default GenericUserAvatar
