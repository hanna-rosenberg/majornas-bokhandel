import Navbar from "../../components/Navbar/Navbar";
import EventsWelcome from "../../components/EventsPageComponents/EventsWelcome/EventsWelcome";
import EventsUpcomingEvents from "../../components/EventsPageComponents/EventsUpcomingEvents/EventsUpcomingEvents";
import EventsEarlierEvents from "../../components/EventsPageComponents/EventsEarlierEvents/EventsEarlierEvents";
import Footer from "../../components/Footer/Footer";
import { client } from "../../../studio/lib/client";

export default function Home({ infoData, nextEventData, previousEventData }) {
  return (
    <>
      <Navbar />
      <EventsWelcome />
      <EventsUpcomingEvents upcoming={nextEventData} />
      <EventsEarlierEvents previous={previousEventData} />
      <Footer color="#eecd45" info={infoData[0]} />
    </>
  );
}
{
}
export const getServerSideProps = async () => {
  const infoQuery = '*[_type == "findUs"]';
  const nextEventQuery = '*[_type == "events" && date >= now()] | order(date)';
  const previousEventQuery =
    '*[_type == "events" && date < now()] | order(date)';

  const data = await client.fetch(`{
    "nextEventData": ${nextEventQuery},
    "previousEventData": ${previousEventQuery},
    "infoData": ${infoQuery},
  }`);

  return {
    props: {
      ...data,
    },
  };
};
