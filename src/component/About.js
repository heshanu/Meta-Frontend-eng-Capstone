import styles from "./About.module.css";

import chef_1 from "../images/restaurant chef B.jpg";
import chef_2 from "../images/Mario and Adrian A.jpg";

const About = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.divide_flex}>
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p className={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className={styles.img_flex}>
            <img
              className={styles.img_1}
              src={chef_1}
              alt="chef preping food"
            />
            <img
              className={styles.img_2}
              src={chef_2}
              alt="chef preping food"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
