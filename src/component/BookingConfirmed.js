import { useLocation } from "react-router-dom";
import styles from "./BookingConfirmed.module.css";

const BookingConfirmed = () => {
  const location = useLocation();
  const formData = location.state.formData;
  return (
    <>
      <div className={styles.section}>
        <h2 className={styles.heading}>Booking Confirmed!</h2>
        <div className={styles.details}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            <span> Your reservation details are as follows:</span>
          </p>
          <div className={styles.details_data}>
            <h3>
              Date:{" "}
              <span className={styles.booking_detail}>{formData.date}</span>
            </h3>
            <h3>
              Time:{" "}
              <span className={styles.booking_detail}>{formData.time}</span>
            </h3>
            <h3>
              {" "}
              Number of Guests:{" "}
              <span className={styles.booking_detail}>{formData.guests}</span>
            </h3>
            <h3>
              Occasion:{" "}
              <span className={styles.booking_detail}>{formData.occasion}</span>
            </h3>
          </div>
          <p>
            We are looking forward to welcoming you to our restaurant and
            ensuring that you have an unforgettable dining experience. If there
            are any changes to your reservation or if you need to make any
            special requests, please feel free to contact us.
          </p>
        </div>
      </div>
    </>
  );
};

export default BookingConfirmed;
