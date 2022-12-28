import PropTypes from 'prop-types';
import style from './TransactionHistory.module.scss'
import { TransactionItem } from "./TransactionItem";

export const TransactionHistory = ({transactions}) => {
    return (
        <table className={style["transaction-history"]}>
            <thead className={style["table-head"]}>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            
            <tbody className={style["table-body"]}>
                {transactions.map(transaction => (<TransactionItem type={transaction.type} amount={transaction.amount} currency={transaction.currency} key={transaction.id} />))}
            </tbody>
        </table>
    )
}


TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })).isRequired
}




