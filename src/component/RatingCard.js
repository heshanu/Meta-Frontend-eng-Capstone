import styles from "./Ratings.module.css";
import Card from "./UI/Card";
import img from "../images/Mario and Adrian A.jpg";

const RatingCards = ({ rate }) => {
  return (
    <Card className={styles.card_size}>
      {rate.map((r,index) => {
        const { name, headline, overview, additionalInformation } = r;
        return (
          <div key={index}>
            <div className={styles.card_margin}>
              <h4 className={styles.title}>{additionalInformation}</h4>
              <div className={styles.name_flex}>
                <img className={styles.image} src={img} alt="img" />
                &nbsp;&nbsp;&nbsp;
                <h4 className={styles.name}>{name}</h4>
              </div>
              <h4 className={styles.review}>{additionalInformation}</h4>
            </div>
          </div>
        );
      })}
    </Card>
  );
};

export default RatingCards;
