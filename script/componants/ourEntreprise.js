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
    new PresentationSection(this.datas);
    //Create the banner area
    this.createBanner();
    //Create the section for cards
    const sectionCard = this.createMarkup("section", "", main, [
      {
        style:
          "width: 100%; height: auto; ; margin-bottom: 40px; display: flex; flex-direction: column; align-items: center",
      },
    ]);
    //Create the cards instance
    new Cards(sectionCard, this.datas.cards.projects, "reverse");
    new Cards(sectionCard, this.datas.cards.values, "normal");
    new Cards(sectionCard, this.datas.cards.why, "reverse");
    this.createSectionFactoryProducts(main);
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
  //Method that create the factory and products section
  createSectionFactoryProducts(main) {
    //Create the cards sections
    const sectionFactoryProducts = this.createMarkup("section", "", main, [
      {
        style:
          "width: 60%; margin-bottom: 40px; display: flex; flex-direction: column; align-items: center",
      },
    ]);
    const pictureTop = this.createMarkup("img", "", sectionFactoryProducts, [
      {
        style: " width: 35%; height:auto;margin: 0; border-radius: 0 0 50% 50%",
        src: `./../../assets/entreprise/factory.png`,
        alt: "Banner",
      },
    ]);
    const pictureBotContainer = this.createMarkup(
      "div",
      "",
      sectionFactoryProducts,
      [
        {
          style:
            "width: 100%; display: flex; justify-content: space-between; margin-top: -150px",
        },
      ]
    );
    const pictureLeft = this.createMarkup("img", "", pictureBotContainer, [
      {
        style: " width: 35%; height:auto;margin: 0; border-radius: 0 50% 50% 0",
        src: `./../../assets/entreprise/velomobile1.png`,
        alt: "Banner",
      },
    ]);
    const pictureRight = this.createMarkup("img", "", pictureBotContainer, [
      {
        style: " width: 35%; height:auto;margin: 0; border-radius: 50% 0 0 50%",
        src: `./../../assets/entreprise/velomobile2.png`,
        alt: "Banner",
      },
    ]);
    const buttonContainer = this.createMarkup(
      "div",
      "",
      sectionFactoryProducts,
      [
        {
          style:
            "width: 100%;  height: 50px; display: flex; justify-content: space-between; ",
        },
      ]
    );
    const buttonFactory = this.createMarkup(
      "div",
      "Découvrez notre usine",
      buttonContainer,
      [
        {
          style:
            "width: 50%;  height: 100%; cursor: pointer; display: flex; justify-content: center; align-items: center; border: 2px solid #007DCC; font-weight: bold; font-size: 26px;",
        },
      ]
    );
    const buttonProducts = this.createMarkup(
      "div",
      "Découvrez notre produits",
      buttonContainer,
      [
        {
          style:
            "width: 50%;  height: 100%; cursor: pointer; display: flex; justify-content: center; align-items: center; background-color:#007DCC;  border: 2px solid #007DCC; color: white; font-weight: bold; font-size: 26px;",
        },
      ]
    );
  }
  async fetchData() {
    //importation des données du json
    const response = await fetch("./../script/datas/ourEntreprise.json");
    const profilDatas = await response.json();
    return profilDatas;
  }
}

new OurEntreprise();
