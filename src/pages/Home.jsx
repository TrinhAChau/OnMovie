import Banner from "../components/home/banner/Banner";
import Features from "../components/home/features/Features";
import Suggestion from "../components/suggestion/Suggestion";
import Trailer from "../components/trailer/Trailer";
import News from "../components/home/news/News";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import Chatbox from "../components/chat/ChatBox";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <NavBar></NavBar>
      <Chatbox></Chatbox>
      <main className="transition-move">
        <Banner></Banner>
        <Features></Features>
        <Suggestion title="Phim đề xuất"></Suggestion>
        <Trailer></Trailer>
        <News></News>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}
