import React from "react";
import { urlFor } from "../../studio/lib/client";

export default function Event({ event }) {
  return (
    <div>
      <h1>Kommande event</h1>
      <h3>{event.type}</h3>
      <p>Författare: {event.name}</p>
      <img src={urlFor(event.image)} alt="event" />
      <p>Datum: {event.date}</p>
    </div>
  );
}
