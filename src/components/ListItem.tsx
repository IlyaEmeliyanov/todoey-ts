
import React, { FC, useState } from "react";

// Importing types
import { ItemType } from '../types'

// Importing css
import itemStyles from '../css/item.module.css'

// Importing icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons'

// Importing components
import FloatingBadge from '../components/FloatingBadge'

type ListItemProps = ItemType;
const ListItem: FC<ListItemProps> = ({ title, description, completed }) => {

    const [curTitle, setTitle] = useState<typeof title>(title);
    const [curDesc, setDesc] = useState<typeof description>(description);
    const [isCompleted, setCompleted] = useState<typeof completed>(completed);
    const [descAdded, setDescAdded] = useState<boolean>(false);

    function changeState<T>(value: T, setter: React.Dispatch<React.SetStateAction<T>>) {
        setter(value);
    }

    const customDescription = <div className={itemStyles.item__desc__wrapper}>
        <textarea onChange={(e: React.FormEvent<HTMLTextAreaElement>) => changeState<string>(e.currentTarget.value, setDesc)} value={curDesc} rows={3} className={itemStyles.item__desc} placeholder="Enter task description..." />
        <button onClick={() => setDescAdded(!descAdded)}><FontAwesomeIcon icon={faCircleMinus} /></button>
        <FloatingBadge message={curDesc ? "hide description" : "remove description"}/>
    </div>

    return (
        <div className={itemStyles.wrapper}>
            <div className={itemStyles.item}>
                <div className="flex align-center">
                    <input onChange={(e: React.FormEvent<HTMLInputElement>) => changeState<string>(e.currentTarget.value, setTitle)} value={curTitle} placeholder="Enter task name..." type="text" className={itemStyles.item__title} style={{textDecoration: `${isCompleted ? "line-through" : "none"}`}}/>
                    <button onClick={() => setCompleted(!isCompleted)} className={itemStyles.item__state}>
                        <img src={isCompleted ? require(`../images/check.svg`).default : require(`../images/circle.svg`).default} alt="icon" width={"30px"} />
                    </button>
                    <FloatingBadge message="mark completed"/>
                </div>
                {descAdded ? customDescription : <button onClick={() => setDescAdded(!descAdded)} className={itemStyles.add__desc}>{curDesc ? "Show description" : "Add description +"}</button>}
            </div>
        </div>
    );
}

export default ListItem;