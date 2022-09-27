import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { client } from "../../../studio/lib/client";
import AboutUsAbout from "../../components/AboutPageComponents/AboutUsAbout/AboutUsAbout";
import TheStoreAbout from "../../components/AboutPageComponents/TheStoreAbout/TheStoreAbout";

export default function Home({ infoData }) {
  return (
    <>
      <Navbar />
      <AboutUsAbout />
      <TheStoreAbout />
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
