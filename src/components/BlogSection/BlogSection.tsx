import LayoutWrapper from "../LayoutWrapper";
import styles from "./BlogSection.module.css";
import BlogCard from "../BlogCard/BlogCard";
import { simpleBlogCard } from "@/lib/interface";
import Button from "../Button/Button";

interface BlogSectionProps {
  data: simpleBlogCard[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ data }) => {
  return (
    <section>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.header}>Insights from Fonts & Footers</h2>
          </div>
          <div className={styles.bottom}>
            {data?.length > 0 &&
              data?.map((data: simpleBlogCard) => (
                <BlogCard data={data} key={data.title} />
              ))}
          </div>
          <div className={styles.btnContainer}>
            <Button
              text='see all Articles'
              href='/blog'
              btnType='primaryii'
              arrow
            />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default BlogSection;
