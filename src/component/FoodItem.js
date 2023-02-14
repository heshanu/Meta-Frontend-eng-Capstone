import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";

import greeksalad from "../images/greek salad.jpg";

import Card from "./UI/Card";
import styles from "./FoodItem.module.css";

const FoodItem = ({ menu }) => {
  return (
    <Card>
      {menu.map((m) => {
        const { name, price, description } = m;
        return (
          <>
            <img className={styles.img} src={greeksalad} alt="greek salad" />
            <div className={styles.details}>
              <div className={styles.flex}>
                <h3 className={styles.foodtitle}>{name}</h3>
                <h3 className={styles.price}>{price}</h3>
              </div>
              <p>
                <li></li>
              </p>
              <button className={styles.order_btn}>
                Order a delivery &nbsp;&nbsp;&nbsp;
                <span>
                  <FontAwesomeIcon icon={faMotorcycle} />
                </span>
              </button>
            </div>
          </>
        );
      })}
    </Card>
  );
};

export default FoodItem;
