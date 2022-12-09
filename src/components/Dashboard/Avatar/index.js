import { useState } from "react"
import { AVATAR_MODE } from "../../../constants/configs"
import avatarStyles from './Avatar.module.scss'

const Avatar = ({ src = '', mode = AVATAR_MODE.projectList, name = 'name', role = 'default', index, lastUpdated }) => {
    const [newSrc, setNewSrc] = useState('')
    const avatars = ['curly-hair-man', 'female-avatar', 'girl-avatar', 'indian-woman', 'village-avatars']

    const getRandomAvatar = () => {
        const randomIndex = Math.floor(Math.random() * avatars.length)
        const avatarName = avatars[randomIndex];
        const path = `../../../../assets/avatars/${avatarName}.svg`
        console.log(path)
        return path
    }

    if (mode == AVATAR_MODE.activity) {
        return <div className={avatarStyles.activity__container}>
            <div className={avatarStyles.activity_image_frame}>
                <img className={avatarStyles.activity_image} src={`../../../../assets/avatars/${avatars[index]}.svg`} />
            </div>
            <div className={avatarStyles.activity_content}>
                <p className={avatarStyles.profile_name}>{name}</p>
                <p className={avatarStyles.profile_task}>{role}</p>
                <p className={avatarStyles.profile_time}>{lastUpdated}</p>
            </div>
            <div>
                <span className={`${avatarStyles.proceed_button} uil-angle-right`}></span>
            </div>
        </div>
    }

    return <div>
        <img className={avatarStyles.image} src={`../../../../assets/avatars/${avatars[index]}.svg`} />
        <p className={avatarStyles.name}>{name}</p>
        <p className={avatarStyles.role}>{role}</p>
    </div>
}

export default Avatar;