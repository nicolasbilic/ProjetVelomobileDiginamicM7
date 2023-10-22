import ManageDom from "./ManageDom.js";
import PresentationSection from "./ourEntreprise/PresentationSection.js";
import Cards from "./ourEntreprise/cards.js";

export default class OurEntreprise extends ManageDom {
  constructor() {
    super();
    this.init();
  }
  //Defer the rend after initialiation
  async init() {
    const data_loaded = await this.fetchData();
    this.datas = data_loaded;
    if (this.datas) {
      //call the render method
      this.render();
    }
  }
  // Method that create the render
  render() {
    const main = this.createMarkup("main", "", document.body, [
      {
        style:
          "width: 100%; display: flex; flex-direction: column; align-items: center;",
      },
    ]);
    const header = document.querySelector("header");
    document.body.insertBefore(main, header.nextSibling);
    //Call the instance of presentationSection
    console.log(this.datas);
    new PresentationSection(this.datas);
    //Take a delay for the end of the presentation Render
    setTimeout(() => {
      //Create the banner area
      this.createBanner();
      //Create the section for cards
      const sectionCard = this.createMarkup("section", "", main, [
        {
          style:
            "width: 100%; height: auto; ; margin-bottom: 40px; display: flex; flex-direction: column; align-items: center",
        },
      ]);
      new Cards(sectionCard, this.datas.cards.projects, "reverse");
      new Cards(sectionCard, this.datas.cards.values, "normal");
      new Cards(sectionCard, this.datas.cards.why, "reverse");
    }, 100);
    //Create the cards sections
  }
  //Method to create the banner area
  createBanner() {
    //Waith a resolve
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

  async fetchData() {
    //importation des données du json
    const response = await fetch("./../script/datas/ourEntreprise.json");
    const profilDatas = await response.json();
    return profilDatas;
  }
}

new OurEntreprise();
