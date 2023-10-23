import ManageDom from "./../ManageDom.js";

export default class Cards extends ManageDom {
  constructor(sectionCard, datas, orientation) {
    super();
    this.sectionCard = sectionCard;
    this.datas = datas;
    this.orientation = orientation;
    this.render();
  }
  //Method that create the render
  render() {
    //Create the body of the card
    const cardBody = this.createMarkup("div", "", this.sectionCard, [
      {
        style:
          "width: 60%; height: auto; background-color: #EFEFEF; margin-bottom: 40px; display: flex; position: relative; ",
      },
    ]);
    //Create the picture
    const cardPicture = this.createMarkup("img", "", cardBody, [
      {
        style: "width: 50%; height:auto; margin: 0; ",
        src: `./../../assets/imgs/entreprise/${this.datas.picture}`,
        alt: "Banner",
      },
    ]);
    //Create the span for the title
    const cardSpan = this.createMarkup("span", "", cardBody, [
      {
        style: `position: absolute; top: 0; right: 0; width: 20%; height: 12%; background-color: ${this.datas.color};`, // Ajout de flex-shrink: 0
      },
    ]);
    //Create the title
    const h2Span = this.createMarkup("h2", this.datas.title, cardSpan, [
      {
        style:
          "width: 100%; height: 100%; color: white; margin: 0; display: flex; align-items: center; justify-content: center",
      },
    ]);
    //Create the div for the text
    const textBody = this.createMarkup("div", "", cardBody, [
      {
        style:
          "height: auto%; width: 47%; display: flex; flex-direction: column; justify-content: flex-end; margin-left: 20px; overflow: hidden; ",
      },
    ]);
    //Create the text for each P in json
    this.datas.texts.forEach((text) => {
      const pCard = this.createMarkup("p", text, textBody, [
        {
          style: "max-height: 131px; overflow: hidden",
        },
      ]);
    });
    //If a card had the tag reverse
    if (this.orientation === "reverse") {
      cardBody.style.flexDirection = "row-reverse";
      cardSpan.style.right = "";
      cardSpan.style.left = "0";
    }
  }
}
