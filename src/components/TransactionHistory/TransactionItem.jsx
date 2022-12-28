import PropTypes from 'prop-types';
import style from './TransactionHistory.module.scss'

export const TransactionItem = ({ type, amount, currency }) => {
    return (
            <tr className={style["table-row"]}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
    )
}

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}