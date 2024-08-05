import Classify from "../components/product/classify/Classify";
import ListMovie from "../components/product/listmovie/ListMovie";
import Suggestion from "../components/suggestion/Suggestion";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import { useEffect } from "react";
export default function Category() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <NavBar></NavBar>
      <main className="transition-move">
        <Classify></Classify>
        <ListMovie title="Thể loại"></ListMovie>
        <Suggestion hide={true}></Suggestion>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}
