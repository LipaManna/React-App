import ProfileInfoCard from './ProfileInfoCard'
import ProfilePlatformSettings from './ProfilePlatformSettings'
import ShowProfileInfoBlock from './ShowProfileInfoBlock'
import './profile.scss'

const ProfileContentWrap = () => {
  return (
    <div className='common_dashboard_wrap'>
      <ShowProfileInfoBlock/>
      <div className="platform_settings_profile_info component_wrapper">
        <ProfilePlatformSettings/>
        <ProfileInfoCard/>
      </div>
    </div>
  )
}

export default ProfileContentWrap
