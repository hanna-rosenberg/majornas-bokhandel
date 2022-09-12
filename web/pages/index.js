import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { client } from "../../studio/lib/client";
import Event from "../components/Events/Events";

export default function Home({ eventsData }) {
  return (
    <div className={styles.test}>
      <p>Eveeeeent</p>
      <Event event={eventsData[1]} />
      {console.log(eventsData)}
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "events"]';
  const eventsData = await client.fetch(query);

  return {
    props: { eventsData },
  };
};
