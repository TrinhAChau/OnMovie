import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

export default function Watch() {
  return (
    <>
      <NavBar></NavBar>
      <main className="transition-move">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qEVUtrk8_B4?si=ZoGXiBNtc5FGHkg2"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}
