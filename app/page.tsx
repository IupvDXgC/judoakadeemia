import About from "./about";
import Contact from "./contact";
import Header from "./header";
import Home from "./home";
import JoinUs from "./join-us-section";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Contact />
        <JoinUs />
      </main>
    </>
  );
}
