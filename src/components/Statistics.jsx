import StatisticsItem from './StatisticsItem';

const Statistics = ({ title, stats }) => {
  return <section className="statistics">
    <h2 className="title">{title}</h2>
    <ul className='statistics-name'>
        {stats.map(item => <li key={item.id} className="item">
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