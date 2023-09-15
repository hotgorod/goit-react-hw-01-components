import css from './TransactionHystory.module.css'

const TransactionHistory = ({ items }) => {
    return <table className={css.transactionHistory}>
                <thead className={css.tHead}>
                    <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                {items.map(transaction => <tr key = {transaction.id}>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.currency}</td>
                    </tr>)}
                    
                </tbody>
            </table>
}

export default TransactionHistory