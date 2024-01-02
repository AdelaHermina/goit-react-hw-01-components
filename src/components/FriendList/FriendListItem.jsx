import React from 'react';
import styles from './FriendListItem.module.css'; 

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={styles.item}>
            <span className={styles.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}></span>
            <img className={styles.avatar} src={avatar} alt={`Avatarul lui ${name}`} />
            <p className={styles.name}>{name}</p>
        </li>
    );
};

export default FriendListItem;
