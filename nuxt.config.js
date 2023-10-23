export default {
  target: "static",
  modules: ["@nuxt/content"],
  components: true,
  css: ["bootstrap/dist/css/bootstrap.min.css", "@fortawesome/fontawesome-free/css/all.min.css"],
  head: {
    titleTemplate: "Games",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Meta description" },
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
        type: "text/javascript",
      },
    ],
    link: [
      { rel: "stylesheet", href: "css/main.css" },
      { rel: "icon", type: "image/png", href: "images/favicon.png" },
    ],
  },
};
