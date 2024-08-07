import styles from "./Testimonials.module.css";
import LayoutWrapper from "../LayoutWrapper";
import { reviews } from "@/lib/data";
import StarCluster from "../StarCluster/StarCluster";
import Person from "../../../public/icons/person.svg";
import { Reviewsii } from "../Reviewsii/Reviewsii";

const Testimonials = () => {
  return (
    <section className={styles.container}>
      <div className={styles.mobile}>
        <LayoutWrapper color='tan'>
          <div className={styles.content}>
            <div className={styles.bottom}>
              <div className={styles.top}>
                <h2 className={styles.heading}>Reviews</h2>
                <p className={styles.copy}>
                  Read What Our Clients Have to Say About Their Journey with Us.
                  We use the latest technologies and tools to ensure that our
                  solutions are scalable, efficient, and secure. Our team
                  follows agile methodologies to deliver projects on time and on
                  budget.
                </p>
                <StarCluster color='tan' />
              </div>
              <div className={styles.cardContainer1}>
                {reviews.map((x) => (
                  <div key={x.id} className={styles.card}>
                    <p className={styles.review}>&rdquo;{x.review}&rdquo;</p>
                    <div className={styles.personBox}>
                      <Person
                        width={50}
                        height={50}
                        className={styles.personImage}
                      />
                      <p className={styles.reviewer}>
                        {x.reviewer}
                        <span className={styles.company}>{x.company}</span>
                        <StarCluster />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </LayoutWrapper>
      </div>
      <div className={styles.reviewsii}>
        <Reviewsii />
      </div>
    </section>
  );
};

export default Testimonials;
