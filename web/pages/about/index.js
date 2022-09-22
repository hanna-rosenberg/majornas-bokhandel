import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { client } from "../../../studio/lib/client";

export default function Home({ infoData }) {
  return (
    <>
      <Navbar />
      <Footer color="#edba88" info={infoData[0]} />
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
