import Image from "next/image";
import styles from "./BlogCard.module.css";
import Button from "../Button/Button";
import { urlFor } from "@/lib/sanity";
import { simpleBlogCard } from "@/lib/interface";

interface Props {
  data: simpleBlogCard;
}

const BlogCard = ({ data }: Props) => {
  return (
    <article className={styles.card}>
      <div className={styles.imgContainer}>
        <Image
          src={urlFor(data.titleImage).url()}
          alt='image'
          fill
          className={styles.img}
        />
      </div>
      <h3 className={styles.blogTitle}>{data?.title}</h3>
      <p className={styles.desc}>
        {new Date(data?.publishedAt).toDateString()}
      </p>
      <p className={styles.desc}>{data?.smallDescription}</p>
      <div className={styles.btnContainer}>
        <Button
          text='Read Article'
          href={`/blog/${data?.currentSlug}`}
          btnType='primaryii'
          arrow
        />
      </div>
    </article>
  );
};
export default BlogCard;
