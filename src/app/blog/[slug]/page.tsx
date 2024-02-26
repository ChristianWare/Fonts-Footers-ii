import LayoutWrapper from "@/components/LayoutWrapper";
import { fullBlog } from "@/lib/interface";
import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import styles from "./Design.module.css";
import Image from "next/image";
import { urlForImage } from "@/lib/image";

async function getData(slug: string) {
  const query = `
        *[_type == "blog" && slug.current == '${slug}'] {
            "currentSlug": slug.current,
            title,
            content,
            titleImage
        }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);
  return (
    <LayoutWrapper>
      <div className={styles.container}>
        <h1>{data.title}</h1>
        <PortableText
          value={data.content}
          components={myPortableTextComponents}
        />
      </div>
    </LayoutWrapper>
  );
}

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
