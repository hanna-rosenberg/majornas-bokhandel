export default {
  name: "findUs",
  title: "Hitta oss",
  type: "document",
  fields: [
    {
      name: "findUs",
      description: "Ex. Hitta hit",
      title: "Rubrik",
      type: "string",
    },
    { name: "address", title: "Adress", type: "string" },
    { name: "zipcode", title: "Postnummer", type: "string" },
    {
      name: "openingHoursHeading",
      description: "Ex. Öppettider",
      title: "Rubrik",
      type: "string",
    },
    { name: "openingHours", title: "Öppettider", type: "string" },
    { name: "openingHoursWeekend", title: "Öppettider helg", type: "string" },
    {
      name: "contact",
      description: "Ex. Kontakt",
      title: "Rubrik",
      type: "string",
    },
    { name: "email", title: "E-mail", type: "email" },
    { name: "phoneNumber", title: "Telefon", type: "string" },
  ],
};
