import React from "react";
import styles from "./Transactions.module.css";
import PropTypes from "prop-types";

const Transactions = ({ items }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
Transactions.propTypes = {
  items: PropTypes.array 
}
export default Transactions;
