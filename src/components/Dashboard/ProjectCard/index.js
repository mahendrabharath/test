import Avatar from '../Avatar';
import projectCard from './ProjectCard.module.scss'

const ProjectCard = () => {
    return <div className={`${projectCard.class__card}`}>
        <div>
            <span className={`${projectCard.title__header}`}>Project</span>
            <div className={`${projectCard.title__content}`}>
                <span>1 <sup>st</sup></span>
                <span>standard</span>
            </div>
        </div>
        <div>
            <span className={`${projectCard.title__header}`}>Team members</span>
            <div className={`${projectCard.profiles}`}>
               <Avatar index={1} name='Peter' role='Teacher'/>
               <Avatar index={2} name='Harry' role='Class Rep'/>
               <Avatar index={3} name='Diane' role='Topper'/>
               <Avatar index={4} name='Bojack' role='Sports'/>
            </div>
        </div>
        <div>
            <span className={`${projectCard.title__header}`}>Project Progress</span>
            <div className={`${projectCard.title__content}`} style={{height: '95px', width: '95px'}}>

            </div>
        </div>
    </div>
}

export default ProjectCard;