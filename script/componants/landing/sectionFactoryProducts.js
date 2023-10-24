//Importation of the needed files
import ManageDom from "./../ManageDom.js";

export default class Landing extends ManageDom {
  constructor() {
    super();
    this.dom_element = this.render();
    this.handleEvent();
  }
  render() {
    //get the main container
    const main = document.querySelector("main");
    //create the <section>
    const section = this.createMarkup("section", "", main, [
      {
        style:
          "width: 90%; max-height: 925px; margin-bottom: 60px; overflow: hidden; position: relative; display:flex",
      },
    ]);
    //Create the banner picture
    const bannerPicture = this.createMarkup("img", "", section, [
      {
        style:
          "width: 100%; height:100%  margin: 0; max-height: 925px; object-fit: cover;",
        src: "./../../assets/imgs/orange_velomobile_bg.png",
        alt: "Velomobile orange",
      },
    ]);
    const bannerPictureHide = this.createMarkup("img", "", section, [
      {
        style:
          "width: 100%;  margin: 0; max-height: 925px; object-fit: cover; position: absolute; left: 0; opacity: 0",
        src: "./../../assets/imgs/factory.png",
        alt: "Velomobile orange",
      },
    ]);
    //Create buttons container
    const bannerButtonArea = this.createMarkup("div", "", section, [
      {
        style:
          "width: 40%; height: 70px; bottom: 0; margin: 0; position: absolute; display: flex;",
      },
    ]);
    //Create the factory's button
    const buttonFactory = this.createMarkup("div", "", bannerButtonArea, [
      {
        style:
          "width: 50%; height: 100%; background-color: none; bottom: 0; margin: 0; border: 2px solid #CC0000; color: white; font-size: 22px; font-weight: bold;",
      },
    ]);
    const h2Factory = this.createMarkup(
      "h2",
      "Découvrez notre usine",
      buttonFactory,
      [
        {
          style:
            "width: 100%; height:100%; display: flex; justify-content: center; align-items: center; margin: 0; position: relative",
        },
      ]
    );

    //Create the products's button
    const buttonProducts = this.createMarkup("div", "", bannerButtonArea, [
      {
        style:
          "width: 50%; height: 100%; background-color: #CC0000; bottom: 0; margin: 0; border: 2px solid #CC0000; color: white; font-size: 22px; font-weight: bold;",
      },
    ]);
    //Create the h1  button
    const h2Products = this.createMarkup(
      "h2",
      "Découvrez nos produits",
      buttonProducts,
      [
        {
          style:
            "width: 100%; height:100%; display: flex; justify-content: center; align-items: center; margin: 0; position: relative",
        },
      ]
    );

    return { bannerPicture, bannerPictureHide, buttonFactory, buttonProducts };
  }
  //Method that catch event
  handleEvent() {
    const buttonFactory = this.dom_element.buttonFactory;
    const buttonProducts = this.dom_element.buttonProducts;
    const bannerPicture = this.dom_element.bannerPicture;
    const bannerPictureHide = this.dom_element.bannerPictureHide;
    bannerPicture.style.transition = "opacity 1s ";
    bannerPictureHide.style.transition = "opacity 1s ";
    buttonFactory.addEventListener("mouseenter", () => {
      buttonFactory.style.backgroundColor = "#CC0000";
      buttonFactory.style.cursor = "pointer";
      buttonProducts.style.backgroundColor = "transparent";
      bannerPicture.style.opacity = 0;
      bannerPictureHide.style.opacity = 1;
    });
    buttonProducts.addEventListener("mouseenter", () => {
      buttonFactory.style.backgroundColor = "transparent";
      buttonProducts.style.backgroundColor = "#CC0000";
      buttonProducts.style.cursor = "pointer";
      bannerPicture.style.opacity = 1;
      bannerPictureHide.style.opacity = 0;
    });
  }
}
