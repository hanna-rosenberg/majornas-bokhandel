export default {
  name: "events",
  title: "Kommande evenemang",
  type: "document",
  fields: [
    { name: "type", title: "Typ av evenemang", type: "string" },
    { name: "image", title: "Bild", type: "image" },
    { name: "name", title: "Författarens namn", type: "string" },
    { name: "booktitle", title: "Boktitel", type: "string" },
    { name: "date", title: "Datum", type: "date" },
    { name: "description", title: "Beskrivning", type: "string" },
  ],
};
