import GenericUserAvatar from "../../shared/avatar/GenericUserAvatar"

const ShowProfileInfoBlock = () => {
  return (
    <div className="show_profile_info_wrap">
      <GenericUserAvatar  size={40}/>
      <div className="profile_info">
        <h2>Esthera Jackson</h2>
        <p>esthera@simmmple.com</p>
      </div>
    </div>
  )
}

export default ShowProfileInfoBlock
