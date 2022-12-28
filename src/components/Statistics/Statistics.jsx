import PropTypes from 'prop-types'
import styles from './Statistics.module.scss'
import { StatisticItem } from "./StatisticsItem"

export const Statistic = ({ title, datas }) => {
    return (
    <section className={styles["statistics"]}>
        <h2 className={styles["title"]}>{title}</h2>
        <ul className={styles["stat-list"]}>
            {datas.map(data => (<StatisticItem label={data.label} percentage={data.percentage} key={data.id} />))}
        </ul>
    </section>)
}

Statistic.propTypes = {
    title: PropTypes.string.isRequired,
    datas: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })).isRequired
}