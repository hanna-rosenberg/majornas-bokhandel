export default {
  name: "BookRecommendation",
  title: "Senaste boktips ",
  type: "document",
  fields: [
    { name: "image", title: "Bild", type: "image" },
    { name: "booktitle", title: "Boktitel", type: "string" },
    { name: "name", title: "Författarens namn", type: "string" },
  ],
};
