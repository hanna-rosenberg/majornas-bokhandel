import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import styles from "./GoogleMaps.module.css";

export default function GoogleMaps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading map...</div>;
  return (
    <GoogleMap
      zoom={19}
      center={{ lat: 57.697, lng: 11.93039 }}
      mapContainerClassName={styles.mapContainer}
    />
  );
}

/*useJsApiLoader,*/
