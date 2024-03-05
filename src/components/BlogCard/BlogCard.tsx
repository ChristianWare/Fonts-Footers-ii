import Image from "next/image";
import Link from "next/link";
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
        <Link href={`/blog/${data?.currentSlug}`}>
          <Image
            src={urlFor(data.titleImage).url()}
            alt='image'
            fill
            className={styles.img}
          />
        </Link>
      </div>
      <Link href={`/blog/${data?.currentSlug}`} className={styles.link}>
        <h3 className={styles.blogTitle}>{data?.title}</h3>
      </Link>
      <p className={styles.desc}>
        {new Date(data?.publishedAt).toDateString()}
      </p>
      <p className={styles.desc}>{data?.smallDescription}</p>
      <div className={styles.btnContainer}>
        <Button
          text='Read Article'
          href={`/blog/${data?.currentSlug}`}
          btnType='secondary'
          arrow
        />
      </div>
    </article>
  );
};
export default BlogCard;
