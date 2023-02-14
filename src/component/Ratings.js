import RatingCards from "./RatingCard";
import styles from "./Ratings.module.css";
import rate from "./rate";

const Ratings = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.align}>
          <h2 className={styles.center}>Testimonials</h2>
          <div className={styles.cardflex}>
            <RatingCards className={styles.card} rate={rate}/>
            <RatingCards className={styles.card} rate={rate}/>
            <RatingCards className={styles.card} rate={rate}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ratings;
