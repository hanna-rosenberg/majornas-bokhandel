import Navbar from "../../components/Navbar/Navbar";
import EventsWelcome from "../../components/EventsPageComponents/EventsWelcome/EventsWelcome";
import EventsUpcomingEvents from "../../components/EventsPageComponents/EventsUpcomingEvents/EventsUpcomingEvents";
import EventsEarlierEvents from "../../components/EventsPageComponents/EventsEarlierEvents/EventsEarlierEvents";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <EventsWelcome />
      <EventsUpcomingEvents />
      <EventsEarlierEvents />
      <Footer color="#eecd45" />
    </>
  );
}
