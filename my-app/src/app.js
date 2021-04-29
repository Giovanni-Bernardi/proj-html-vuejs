function initVue() {
  new Vue({
    el: "#app",
    data: {
      // HEADER INFO
      opening: "Mon - Sat - 9:00-18:00",
      phoneNumber: "+1 (305) 1234-5678",
      email: "hello@example.com",
      //  JUMBO NAV  
      menuJumbotron: [
        {
          name: "Demos",
          url: "#",
        },
        {
          name: "Pages",
          url: "#section_about",
        },
        {
          name: "Portfolio",
          url: "#section_services",
        },
        {
          name: "Blog",
          url: "#section_process",
        },
        {
          name: "Shop",
          url: "#section_feedback",
        },
      ],
    },
  });
}
function init() {
  initVue();
}

document.addEventListener("DOMContentLoaded", init);
