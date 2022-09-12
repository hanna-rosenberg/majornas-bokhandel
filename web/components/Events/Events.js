import React from "react";
import { urlFor } from "../../../studio/lib/client";

export default function Event({ event }) {
  return (
    <div>
      <p>{event.name}</p>
    </div>
  );
}
