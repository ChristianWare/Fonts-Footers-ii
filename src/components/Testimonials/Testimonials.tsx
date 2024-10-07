"use client";

import styles from "./Testimonials.module.css";
import { reviews } from "@/lib/data";
import StarCluster from "../StarCluster/StarCluster";
import Person from "../../../public/icons/person.svg";
import Cart from "../../../public/icons/cart.svg";
import Calendar from "../../../public/icons/booking.svg";
import animationData from "../../../public/lottie/reviews.json";
import Lottie from "lottie-react";

const Testimonials = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.bottom}>
          <div className={styles.top}>
            <div className={styles.lottieBox}>
              <Lottie animationData={animationData} className={styles.lottie} />
            </div>
            <h2 className={styles.heading}>What our clients say</h2>
            <p className={styles.copy}>
              Discover What Our Clients Have to Say About Their Dining
              Experience with Us. We use the freshest ingredients and latest
              culinary techniques to ensure that every event is memorable,
              delicious, and seamless. Our team is committed to delivering
              exceptional service, on time and within budget.
            </p>
            <StarCluster />
          </div>
        </div>
      </div>
      <div className={styles.cardContainer1}>
        {reviews.map((x) => (
          <div key={x.id} className={styles.card}>
            <p className={styles.review}>&rdquo;{x.review}&rdquo;</p>
            <div className={styles.personBox}>
              <Person width={50} height={50} className={styles.personImage} />
              <p className={styles.reviewer}>
                {x.reviewer}
                <span className={styles.company}>{x.company}</span>
                <StarCluster />
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
