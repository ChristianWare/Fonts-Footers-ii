import Image from "next/image";
import Link from "next/link";
import styles from "./BlogCard.module.css";
import { urlFor } from "@/lib/sanity";
import { simpleBlogCard } from "@/lib/interface";

interface Props {
  data: simpleBlogCard;
}

const BlogCard = ({ data }: Props) => {
  return (
    <article className={styles.card}>
      <div className={styles.miscContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={urlFor(data.titleImage).url()}
            alt=''
            layout='fill'
            objectFit='cover'
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.details}>
        <Link href={`/blog/${data?.currentSlug}`} className={styles.link}>
          <h3 className={styles.blogTitle}>{data?.title}</h3>
        </Link>
        <p className={styles.desc}>
          {new Date(data?.publishedAt).toDateString()}
        </p>
        <p className={styles.desc}>{data?.smallDescription}</p>
      </div>
    </article>
  );
};
export default BlogCard;
