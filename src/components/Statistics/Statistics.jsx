import StatisticsItem from './StatisticsItem';
import css from './Statistics.module.css'

const Statistics = ({ title, stats }) => {
  return <section className={css.statistics}>
    <h2 className="title">{title}</h2>
    <ul className={css.statisticsName}>
        {stats.map(item => <li key={item.id} className={css.item}>
            <StatisticsItem 
              label={item.label}
              percentage = {item.percentage}
            />
        </li>)

        }
       
    </ul>

</section>

}

export default Statistics