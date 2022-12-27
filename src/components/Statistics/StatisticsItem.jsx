import PropTypes from 'prop-types';
import styles from './Statistics.module.scss'

export const StatisticItem = ({ label, percentage}) => {
    return (<li className={styles["item"]}>
      <span className={styles["label"]}>{label}</span>
      <span className={styles["percentage"]}> {percentage}%</span>
    </li>)
}

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
}

