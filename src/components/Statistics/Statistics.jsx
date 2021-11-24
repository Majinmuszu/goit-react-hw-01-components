import React from "react";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

//const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//console.log(randomColor);

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title.length > 0 && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(({id, label, percentage}) => (
          <li className={styles.item} key={id}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
export default Statistics;
