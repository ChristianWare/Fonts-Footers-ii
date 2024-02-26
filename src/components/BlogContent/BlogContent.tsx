import { fullBlog, simpleBlogCard } from "@/lib/interface";
import BlogIntro from "../BlogIntro/BlogIntro";
import styles from "./BlogContent.module.css";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "@/lib/image";
import LayoutWrapper from "../LayoutWrapper";
import BlogCard from "../BlogCard/BlogCard";

interface BlogContentProps {
  data: fullBlog;
  dataii: simpleBlogCard[];
}

const BlogContent: React.FC<BlogContentProps> = ({ data, dataii }) => {
  return (
    <section>
      <LayoutWrapper>
        <div className={styles.top}>
          <BlogIntro
            text={data.title}
            desc={data.smallDescription}
            src={data.titleImage}
            date={new Date(data?.publishedAt).toDateString()}
          />
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <PortableText
              value={data.content}
              components={myPortableTextComponents}
            />
          </div>
          <div className={styles.right}>
            {dataii?.length > 0 &&
              dataii?.map((data: simpleBlogCard) => (
                <BlogCard data={data} key={data.title} />
              ))}
            <div>See All Blog Posts</div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default BlogContent;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className={styles.imgContainer}>
        <Image
          src={urlForImage(value).url()}
          alt='post'
          fill
          className={styles.img}
        />
      </div>
    ),
  },
};
