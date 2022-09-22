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

// Här är funktionen som gör att vi kan använda det vi väljer att hämta
// i de olika komponenterna.

export default function Home({
  newsData,
  offerData,
  nextEventData,
  authorRecommendationData,
  bookRecommendationData,
  infoData,
}) {
  return (
    <>
      <Navbar />
      <Welcome />
      <NewsAndOffers
        news={newsData[0].news}
        offer={offerData[0].offer}
      ></NewsAndOffers>
      <AboutEvents />
      <NextEvent events={nextEventData[0]} />
      <UpcomingEvents upcoming={nextEventData} />
      <FindUs info={infoData[0]} />
      <AuthorOfTheMonth authorRecommendation={authorRecommendationData[0]} />
      <ReadingTips bookRecommendation={bookRecommendationData} />

      <Instagram />
      <Footer />
    </>
  );
}

// Här hämtar vi först allt från sanity (i Query-variabeln), sedan fetchar vi det
// och lägger det i Data-variabeln. newsData kommer alltså innehålla *allt* från news i Sanity.

export const getServerSideProps = async () => {
  const newsQuery = '*[_type == "news"]';
  const newsData = await client.fetch(newsQuery);
  const offerQuery = '*[_type == "offer"]';
  const offerData = await client.fetch(offerQuery);
  const nextEventQuery = '*[_type == "events"] | order(date)';
  const nextEventData = await client.fetch(nextEventQuery);

  const authorRecommendationQuery =
    '*[_type == "authorRecommendation"] | order(date)';
  const authorRecommendationData = await client.fetch(
    authorRecommendationQuery
  );
  const bookRecommendationQuery =
    '*[_type == "BookRecommendation"] | order(createdAt desc)';
  const bookRecommendationData = await client.fetch(bookRecommendationQuery);

  const infoQuery = '*[_type == "findUs"]';
  const infoData = await client.fetch(infoQuery);

  return {
    props: {
      newsData,
      offerData,
      nextEventData,
      authorRecommendationData,
      bookRecommendationData,

      infoData,
    },
  };
};
