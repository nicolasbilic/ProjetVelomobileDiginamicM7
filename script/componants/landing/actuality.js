//Importation of the needed files
import ManageDom from "./../ManageDom.js";

export default class Actuality extends ManageDom {
  constructor(data, container, indexActu) {
    super();
    this.data = data;
    this.container = container;
    this.indexActu = indexActu;
    this.dom_element = this.render();
    this.handleEvent();
  }
  render() {
    //Create the card container
    const card = this.createMarkup("div", "", this.container, [
      {
        style:
          "width: 80%;  min-width: 200px; border: 2px solid #007DCC; display:flex; flex-direction: column; align-items: center; position: absolute; ",
      },
      {
        class: "actuality_card",
      },
    ]);
    //Create the card picture
    const cardPicture = this.createMarkup("img", "", card, [
      {
        style: "width: 100%;  margin: 0;  object-fit: cover;",
        src: `./../../assets/imgs/${this.data.picture}.png`,
        alt: `${this.data.picture}`,
      },
    ]);
    //Create the h2 card
    const h2Card = this.createMarkup("h2", this.data.title, card, [
      {
        style: "width:90%;",
      },
    ]);
    const imgEco = this.createMarkup("img", "", h2Card, [
      {
        style: "width:35px; margin: 0; position: absolute;",
        src: `./../../assets/imgs/feuille.png`,
        alt: `logo eco`,
      },
    ]);
    //Create the p card
    const pCard = this.createMarkup("p", this.data.text, card, [
      {
        style:
          "width:90%; display: flex; justify-content: center; align-items: center;",
      },
    ]);
    //Create the button card
    const buttonCard = this.createMarkup("button", "En découvrir plus", card, [
      {
        style:
          "color: white; width: 90%; height: 50px; margin-bottom :20px; background-color: #007DCC; border: none; color: white; cursor: pointer;",
      },
    ]);
    return { card, buttonCard };
  }
  handleEvent() {
    const buttonCard = this.dom_element.buttonCard;
    buttonCard.addEventListener("mouseenter", () => {
      buttonCard.style.transform = "scale(1.1) ";
    });
    buttonCard.addEventListener("mouseleave", () => {
      buttonCard.style.transform = "scale(1) ";
    });
  }
}
