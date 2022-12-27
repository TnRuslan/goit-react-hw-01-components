import PropTypes from 'prop-types';
import { TransactionItem } from "./TransactionItem";

export const TransactionHistory = ({transactions}) => {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            
            <tbody>
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




