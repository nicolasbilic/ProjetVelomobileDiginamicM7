import ManageDom from "./ManageDom.js";
import PresentationSection from "./ourEntreprise/PresentationSection.js";
import Cards from "./ourEntreprise/cards.js";

//Class to creat OurEntreprise page
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
      this.dom_element = this.render();
      this.handleEvent();
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
    const factoryDom_element = this.createSectionFactoryProducts(main);
    return factoryDom_element;
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
        src: `./../../assets/imgs/LVFQ.jpg`,
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
    //Create the factory product sections
    const sectionFactoryProducts = this.createMarkup("section", "", main, [
      {
        style:
          "width: 60%; margin-bottom: 40px; display: flex; flex-direction: column; align-items: center",
      },
    ]);
    //Create the first picture
    const pictureTop = this.createMarkup("img", "", sectionFactoryProducts, [
      {
        style: " width: 35%; height:auto;margin: 0; border-radius: 0 0 50% 50%",
        src: `./../../assets/imgs/entreprise/factory.png`,
        alt: "Banner",
      },
    ]);
    //Create the container for two bottoms pic
    const pictureBotContainer = this.createMarkup(
      "div",
      "",
      sectionFactoryProducts,
      [
        {
          style:
            "width: 100%; display: flex; justify-content: space-between; margin-top: -150px; position: relative;",
        },
      ]
    );
    //Create first picture left
    const pictureLeft = this.createMarkup("img", "", pictureBotContainer, [
      {
        style:
          " width: 35%; max-height:100%; margin: 0; border-radius: 0 50% 50% 0; position: absolute; left: 0; bottom: 0;",
        src: `./../../assets/imgs/entreprise/velomobile1.png`,
        alt: "Image bas gauche",
      },
    ]);
    //Create first picture right
    const pictureRight = this.createMarkup("img", "", pictureBotContainer, [
      {
        style:
          " width: 35%; height:auto; margin: 0; border-radius: 50% 0 0 50%; position: absolute; right: 0;",
        src: `./../../assets/imgs/entreprise/velomobile2.png`,
        alt: "Image bas droite",
      },
    ]);
    //Create second picture left (hidding)
    const pictureLeftHide = this.createMarkup("img", "", pictureBotContainer, [
      {
        style:
          " width: 35%; height:auto; margin: 0; border-radius: 0 50% 50% 0; opacity: 0;",
        src: `./../../assets/imgs/entreprise/projet.png`,
        alt: "Image bas gauche",
      },
    ]);
    //Create second picture right (hidding)
    const pictureRightHide = this.createMarkup("img", "", pictureBotContainer, [
      {
        style:
          " width: 35%; height:auto;margin: 0; border-radius: 50% 0 0 50%;  opacity: 0;",
        src: `./../../assets/imgs/entreprise/factory.png`,
        alt: "Image bas droite",
      },
    ]);
    //Create the buttonn container
    const buttonContainer = this.createMarkup(
      "div",
      "",
      sectionFactoryProducts,
      [
        {
          style:
            "width: 100%;  height: 50px; display: flex; justify-content: space-between; margin-bottom: 60px;",
        },
      ]
    );
    //Create first button
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
    //Create the second buttonn
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
    //Return buttons + pictures
    return {
      pictures: [pictureRight, pictureRightHide, pictureLeft, pictureLeftHide],
      buttonFactory,
      buttonProducts,
    };
  }
  //Method that call the fetch
  async fetchData() {
    //importation des données du json
    const response = await fetch("./../script/datas/ourEntreprise.json");
    const profilDatas = await response.json();
    return profilDatas;
  }
  //Method that catch event
  handleEvent() {
    const buttonFactory = this.dom_element.buttonFactory;
    const buttonProducts = this.dom_element.buttonProducts;
    const pictureRight = this.dom_element.pictures[0];
    const pictureRightHide = this.dom_element.pictures[1];
    const pictureLeft = this.dom_element.pictures[2];
    const pictureLeftHide = this.dom_element.pictures[3];
    //Loop to add style transition to each picture
    for (let i = 0; i < this.dom_element.pictures.length; i++) {
      this.dom_element.pictures[i].style.transition = "opacity 1s ";
    }
    //Button left listener
    buttonFactory.addEventListener("mouseenter", () => {
      buttonFactory.style.backgroundColor = "#007DCC";
      buttonFactory.style.color = "white";
      buttonProducts.style.backgroundColor = "transparent";
      buttonProducts.style.color = "black";
      pictureRight.style.opacity = 1;
      pictureRightHide.style.opacity = 0;
      pictureLeft.style.opacity = 1;
      pictureLeftHide.style.opacity = 0;
    });
    //Button right listener
    buttonProducts.addEventListener("mouseenter", () => {
      buttonProducts.style.backgroundColor = "#007DCC";
      buttonProducts.style.color = "white";
      buttonFactory.style.backgroundColor = "transparent";
      buttonFactory.style.color = "black";
      pictureRight.style.opacity = 0;
      pictureRightHide.style.opacity = 1;
      pictureLeft.style.opacity = 0;
      pictureLeftHide.style.opacity = 1;
    });
  }
}

new OurEntreprise();
