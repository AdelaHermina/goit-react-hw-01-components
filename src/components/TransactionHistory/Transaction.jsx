import React from 'react';
import styles from './Transaction.module.css'; 

const Transaction = ({ type, amount, currency }) => {
    return (
        <tr className={styles.transaction}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    );
};

export default Transaction;
