import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Event from "../components/Events";
import { client } from "../../studio/lib/client";

export default function Home({ eventsData }) {
  return (
    <>
      <div>
        <p>Hur ser det ut?</p>
      </div>
      {console.log(eventsData)}
      <div>
        <Event event={eventsData.length && eventsData[0]} />
      </div>
      {/* <div>{events?.map((event) => event.name)}</div> */}
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "events"]';
  const eventsData = await client.fetch(query);

  return {
    props: { eventsData },
  };
};
