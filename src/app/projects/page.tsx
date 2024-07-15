import PageIntro from "@/components/PageIntro/PageIntro";
import Projects from "@/components/Projects/Projects";

export default function page() {
  return (
    <main>
      <PageIntro
        text='Projects'
        h1Color='black'
        copy="Here are some commonly asked questions and their answers below. If you don't see your questions here, call us any time."
        copyColor='black'
        orientation='center'
        bgColor='tan'
      />
      <Projects />
    </main>
  );
}
