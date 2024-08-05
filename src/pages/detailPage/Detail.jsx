import DetailSection from "../../components/detail/detailsection/DetailSection";
import DetailComment from "../../components/detail/detailcomment/DetailComment";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import "./detail.css";
import { useEffect } from "react";

export default function Detail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <NavBar></NavBar>
      <main className="transition-move">
        <DetailSection></DetailSection>
        <DetailComment></DetailComment>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}
