import styles from "./Reservation.module.css";
import foodimg from "../images/restauranfood.jpg";
import { Link } from "react-router-dom";

const Reservation = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.flex}>
          <div className={styles.left}>
            <h1 className={styles.title}>Little Lemon</h1>
            <h2 className={styles.subtitle}>Sri Lanka</h2>
            <p className={styles.desc}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <br />
            <Link to="/bookingpage">
              <button aria-label="Go to booking page" className={styles.button}>
                <h3>Reserve a Table</h3>
              </button>
            </Link>
          </div>
          <div className={styles.right}>
            <img className={styles.img} src={foodimg} alt="foodImage"></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reservation;
