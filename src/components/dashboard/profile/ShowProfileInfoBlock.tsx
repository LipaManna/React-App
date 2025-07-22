import GenericUserAvatar from "../../shared/avatar/GenericUserAvatar"
import UploadImg from "../../shared/avatar/UploadImg"

const ShowProfileInfoBlock = () => {
  
  return (
    <div className="show_profile_info_wrap">
      <div className="generic_user_wrap">
      <GenericUserAvatar  size={40} />
      <UploadImg />
      </div>
      <div className="profile_info">
        <h2 className="small_h2">Esthera Jackson</h2>
        <p>esthera@simmmple.com</p>
      </div>
    </div>
  )
}

export default ShowProfileInfoBlock
