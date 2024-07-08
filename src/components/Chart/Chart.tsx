import LayoutWrapper from "../LayoutWrapper";
import styles from "./Chart.module.css";
import { comparison } from "../../lib/data";

const Chart = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.tr}>
                <th className={styles.th}>Type</th>
                <th className={styles.th}>Price</th>
                <th className={styles.th}>Dim</th>
                <th className={styles.th}>Weight</th>
                <th className={styles.th}>Year</th>
                <th className={styles.th}>Price</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {comparison.map((item) => (
                <tr key={item.id} className={styles.tr}>
                  <td className={styles.td}>{item.model}</td>
                  <td className={styles.td}>{item.loft}</td>
                  <td className={styles.td}>{item.dim}</td>
                  <td className={styles.td}>{item.weight}</td>
                  <td className={styles.td}>{item.year}</td>
                  <td className={styles.td}>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Chart;
