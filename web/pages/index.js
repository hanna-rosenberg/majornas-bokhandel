import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import FindUs from "../components/FindUs/FindUs";
import Welcome from "../components/Welcome/Welcome";
import Events from "../components/Events/Events";
import AboutEvents from "../components/AboutEvents/AboutEvents";
import Footer from "../components/Footer/Footer";
import Instagram from "../components/Instagram/Instagram";
import ReadingTips from "../components/ReadingTips/ReadingTips";
import NewsAndOffers from "../components/NewsAndOffers/NewsAndOffers";
import AuthorOfTheMonth from "../components/AuthorOfTheMonth/AuthorOfTheMonth";

export default function Home() {
  return (
    <>
      <Navbar />
      <Welcome />
      <NewsAndOffers />
      <AboutEvents />
      <Events />
      <FindUs />
      <AuthorOfTheMonth />
      <ReadingTips />
      <Instagram />
      <Footer />
    </>
  );
}
