function initVue() {
  new Vue({
    el: "#app",
    data: {
      // HEADER INFO
      opening: "Mon - Sat - 9:00-18:00",
      phoneNumber: "+1 (305) 1234-5678",
      email: "hello@example.com",
      address: "Main Avenue, 987",
      //  JUMBO NAV
      menuJumbotron: [
        {
          name: "HOME",
          url: "#",
        },
        {
          name: "ABOUT",
          url: "#section-about",
        },
        {
          name: "SERVICES",
          url: "#section-services",
        },
        {
          name: "PROCESS",
          url: "#section-process",
        },
        {
          name: "TESTIMONIALS",
          url: "#section-feedback",
        },
      ],
      // data per form
      errorsForm: [],
      nameForm: null,
      emailForm: null,
      moreInfoForm: "",
      // DATA FOOTER
      footerLink: [
        {
          label: "About",
          downMenu: [
            {
              name: "The Company",
              url: "#",
            },
            {
              name: "Institutional",
              url: "#",
            },
            {
              name: "Social & Events",
              url: "#",
            },
            {
              name: "Innovation",
              url: "#",
            },
            {
              name: "Environment",
              url: "#",
            },
            {
              name: "Technology",
              url: "#",
            },
          ],
        },
        {
          label: "Transport",
          downMenu: [
            {
              name: "Industrialized",
              url: "#",
            },
            {
              name: "Chemicals",
              url: "#",
            },
            {
              name: "Packaged & Liquids",
              url: "#",
            },
            {
              name: "Construction",
              url: "#",
            },
            {
              name: "Laminated Wood",
              url: "#",
            },
            {
              name: "And others",
              url: "#",
            },
          ],
        },
        {
          label: "Support",
          downMenu: [
            {
              name: "Responsibility",
              url: "#",
            },
            {
              name: "Terms of Use",
              url: "#",
            },
            {
              name: "About Cookies",
              url: "#",
            },
            {
              name: "Privacy Policy",
              url: "#",
            },
            {
              name: "Accessibility",
              url: "#",
            },
            {
              name: "Information",
              url: "#",
            },
          ],
        },
      ],
      // INFO FOOTER
      lowerFooter: {
        alertPiracy:
          "Enjoy the low price. We are tracking any intention of piracy",
        copyright: "NEXGEN is Proudly Powered By ",
        copyrightLink: {
          name: "Codings",
          url: "#",
        },
      },
    },
    methods: {
      // VALIDATION FORM
      checkForm: function (e) {
        this.errorsForm = [];

        if (!this.nameForm) {
          this.errorsForm.push("Name required.");
        }
        if (!this.emailForm) {
          this.errorsForm.push("Email required.");
        } else if (!this.validEmail(this.emailForm)) {
          this.errorsForm.push("Valid email required.");
        }

        if (!this.errorsForm.length) {
          return true;
        }

        e.preventDefault();
      },
      validEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
    },
  });
}
function init() {
  initVue();
}

document.addEventListener("DOMContentLoaded", init);
