import { useState } from "react"
import badgeStyles from './Badges.module.scss'

export const Badges = ({ lists = [], selected = '', onSelect }) => {


    return <div className={badgeStyles.container}>
        {lists.map((list, i) => <a key={i} onClick={(e) => {
            e.preventDefault();
            onSelect({ isSelected: list == selected, item: list })
        }} className={`${badgeStyles.tag} ${list == selected && badgeStyles.active}`} href="#">{list}</a>)}
    </div>
}
