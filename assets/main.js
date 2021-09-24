const about = document.querySelector("#aboutMeLink");
const contact = document.querySelector("#contactMeLink");
const aboutMeBox = document.querySelector(".aboutMeBox");
const contactMeBox = document.querySelector(".contactMeBox");
about.addEventListener("click", () => {
  new WinBox({
    title: "About Me",
    width: "400px",
    height: "400px",
    top: "40px",
    right: "40px",
    bottom: "40px",
    left: "40px",
    mount: aboutMeBox,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
contact.addEventListener("click", () => {
  new WinBox({
    title: "Contact Me",
    width: "400px",
    height: "400px",
    top: "50px",
    right: "50px",
    bottom: "50px",
    left: "50px",
    mount: contactMeBox,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
