
import Styles from "./Profile-card.module.css"
import React from 'react'

function ProfileCard(props) {
    return (
        <div className={Styles.container}>
             <div className={Styles.card}>

                <img src={props.image} alt="." className={Styles.card_img} />
                <span className={Styles.card_name}>{props.name}</span>
                <span className={Styles.card_title}>{props.title}</span>
                <span className={Styles.card_body}>{props.body}</span>
            </div>
        </div>
    )
}
// {props.image}
// {props.name}
// {props.title}
// {props.body}
export default ProfileCard;
