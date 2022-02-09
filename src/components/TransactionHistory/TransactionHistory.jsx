import propTypes from "prop-types";
import s from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => { 
    return (
      <table className={s.TransactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
                {items.map(({id, type, amount, currency }) => {
                return (
                  <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                  </tr>
                );
            })}
        </tbody>
      </table>
    );
};

TransactionHistory.propTypes = {
    items: propTypes.arrayOf(propTypes.object),
};

export default TransactionHistory;