export default {
  name: "events",
  title: "Kommande evenemang",
  type: "document",
  fields: [
    { name: "type", title: "Typ av evenemang", type: "string" },
    { name: "image", title: "Bild", type: "image" },
    { name: "name", title: "Namn", type: "string" },
    { name: "booktitle", title: "Boktitel", type: "string" },
    {
      name: "date",
      title: "Datum",
      type: "date",
      options: { calenderTodayLabel: "Today" },
    },
    { name: "description", title: "Beskrivning", type: "string" },
  ],
};
