import { fullBlog } from "@/lib/interface";
import BlogIntro from "../BlogIntro/BlogIntro";
import styles from "./BlogContent.module.css";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "@/lib/image";
import LayoutWrapper from "../LayoutWrapper";

interface BlogContentProps {
  data: fullBlog;
}

const BlogContent: React.FC<BlogContentProps> = ({ data }) => {
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
