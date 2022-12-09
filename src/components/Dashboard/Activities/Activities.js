import { AVATAR_MODE } from "../../../constants/configs";
import Avatar from "../Avatar";
import activitiesStyles from './Activities.module.scss'

const Activities = () => <div className={activitiesStyles.activities__frame}>
    <h3 className={activitiesStyles.title}>Activities</h3>
    <div>
        <Avatar mode={AVATAR_MODE.activity} index={0} name='Peter' role='1st place in running race' lastUpdated='11 mins ago' />
        <Avatar mode={AVATAR_MODE.activity} index={2} name='Mary' role='Class topper' lastUpdated='3 days ago'/>
        <Avatar mode={AVATAR_MODE.activity} index={3} name='Peter' role='Lead science exhibition' lastUpdated='33 mins ago' />
        <Avatar mode={AVATAR_MODE.activity} index={1} name='David' role='Class topper' lastUpdated='33 mins ago' />
        <Avatar mode={AVATAR_MODE.activity} index={4} name='Warren' role='Maths competition Winner' lastUpdated='33 mins ago' />
    </div>

</div>

export default Activities;