import ManageDom from "./ManageDom.js";
import PresentationSection from "./ourEntreprise/PresentationSection.js";

export default class OurEntreprise extends ManageDom {
  constructor() {
    super();
    this.init();
  }
  //Method that be use to defer the render
  async init() {
    await this.render();
    this.createBanner();
  }
  // Method that create the render
  async render() {
    const main = this.createMarkup("main", "", document.body, [
      {
        style:
          "width: 100%; display: flex; flex-direction: column; align-items: center;",
      },
    ]);
    const header = document.querySelector("header");
    document.body.insertBefore(main, header.nextSibling);
    try {
      await new PresentationSection();
    } catch (error) {
      console.error(error);
    }
  }
  //Method to create the banner area
  async createBanner() {
    //Waith a resolve
    await this.waitForPresentationSection();
    const main = document.querySelector("main");
    //Create the blue border
    const blueBorderTop = this.createMarkup("div", "", main, [
      {
        style: "width: 100%; height: 10px; background-color: #007DCC",
      },
    ]);
    //Create the banner
    const bannerPicture = this.createMarkup("img", "", main, [
      {
        style: " width: 100%; height:auto;margin: 0; ",
        src: `./../../assets/LVFQ.jpg`,
        alt: "Banner",
      },
    ]);
    //Create the blue border
    const blueBorderBottom = this.createMarkup("div", "", main, [
      {
        style:
          "width: 100%; height: 10px; background-color: #007DCC; margin-bottom: 40px;",
      },
    ]);
  }
  //Method to get a promise resolve
  waitForPresentationSection() {
    return new Promise((resolve) => {
      const checkInterval = setInterval(() => {
        clearInterval(checkInterval);
        resolve();
      }, 100);
    });
  }
}

new OurEntreprise();
