import PageIntro from "@/components/PageIntro/PageIntro";

export default function NotFoudPage() {
  return (
    <main>
      <PageIntro
        h1Color='green'
        h1OutlineColor='greenOutline'
        text='404'
        span='Not Found'
        copy="The page your're looking for has been moved or no longer exists. Please try again"
        copyColor='green'
        orientation='center'
        notFound='true'
      />
    </main>
  );
}
