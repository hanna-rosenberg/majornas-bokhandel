import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import FindUs from "../components/FindUs/FindUs";
import Welcome from "../components/Welcome/Welcome";
import NextEvent from "../components/NextEvent/NextEvent";
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents";
import AboutEvents from "../components/AboutEvents/AboutEvents";
import Footer from "../components/Footer/Footer";
import Instagram from "../components/Instagram/Instagram";
import ReadingTips from "../components/ReadingTips/ReadingTips";
import NewsAndOffers from "../components/NewsAndOffers/NewsAndOffers";
import AuthorOfTheMonth from "../components/AuthorOfTheMonth/AuthorOfTheMonth";
import { client } from "../../studio/lib/client";

export default function Home({ newsData, offerData }) {
  return (
    <>
      <Navbar />
      <Welcome />
      <NewsAndOffers news={newsData[0].news} offer={offerData[0].offer}></NewsAndOffers>

      <AboutEvents />
      <NextEvent />
      <UpcomingEvents />
      <FindUs />
      <AuthorOfTheMonth />
      <ReadingTips />
      <Instagram />
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "news"]';
  const newsData = await client.fetch(query);
  const offerQuery = '*[_type == "offer"]';
  const offerData = await client.fetch(offerQuery);

  return {
    props: { newsData, offerData },
  };
};
