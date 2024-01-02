import React from 'react';
import Transaction from './Transaction'; 
import styles from './TransactionHistory.module.css'; 

const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <Transaction key={item.id} {...item} />
                ))}
            </tbody>
        </table>
    );
};

export default TransactionHistory;
