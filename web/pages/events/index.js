import Navbar from "../../components/Navbar/Navbar";
import EventsWelcome from "../../components/EventsPageComponents/EventsWelcome/EventsWelcome";
import EventsUpcomingEvents from "../../components/EventsPageComponents/EventsUpcomingEvents/EventsUpcomingEvents";
import EventsEarlierEvents from "../../components/EventsPageComponents/EventsEarlierEvents/EventsEarlierEvents";
import Footer from "../../components/Footer/Footer";
import { client } from "../../../studio/lib/client";

export default function Home({ infoData }) {
  return (
    <>
      <Navbar />
      <EventsWelcome />
      <EventsUpcomingEvents />
      <EventsEarlierEvents />
      <Footer color="#eecd45" info={infoData[0]} />
    </>
  );
}
export const getServerSideProps = async () => {
  const infoQuery = '*[_type == "findUs"]';
  const infoData = await client.fetch(infoQuery);

  return {
    props: {
      infoData,
    },
  };
};
