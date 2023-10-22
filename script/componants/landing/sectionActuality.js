//Importation of the needed files
import ManageDom from "./../ManageDom.js";
import Actuality from "./actuality.js";

export default class SectionActuality extends ManageDom {
  constructor(data) {
    super();
    this.data = data;
    this.articles = [];
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
          "width: 90%; margin-bottom: 60px; position: relative; overflow: hidden; ",
      },
    ]);
    const h1Actuality = this.createMarkup("h1", "Actualités", section, []);
    //Create the main card container
    const container = this.createMarkup("div", "", section, [
      {
        style:
          "width:auto; display: grid; grid-template-columns: repeat(5, 33.33%) ;",
      },
    ]);
    const arrowContainer = this.createMarkup("div", "", container, [
      {
        style:
          "width:100%; height:auto; position: absolute; z-index: 2; display: flex; justify-content: space-between",
      },
    ]);
    const arrowLeft = this.createMarkup("img", "", arrowContainer, [
      {
        style:
          "width: auto; height: auto; transform: scaleX(-1) translateX(50%); cursor: pointer;",
        src: `./../../assets/arrowside.png`,
        alt: `arrowLeft`,
      },
    ]);
    const arrowRight = this.createMarkup("img", "", arrowContainer, [
      {
        style:
          "width: auto; height: auto; cursor: pointer; transform: translateX(50%)",
        src: `./../../assets/arrowside.png`,
        alt: `arrowRight`,
      },
    ]);
    //loop nb_articles times to create each article
    for (let i = 0; i < this.data.nb_articles; i++) {
      //Data needed to create article
      const dataToSend = {
        picture: this.data.pictures[i],
        title: this.data.title[i],
        text: this.data.text[i],
      };
      //Call the instance
      const article = new Actuality(dataToSend, container, i);
      this.articles = article.container.children;
      this.articles = Array.from(this.articles);
    }
    for (let i = 1; i < this.data.nb_articles + 1; i++) {
      this.articles[i].style.position = "relative";
      this.articles[i].setAttribute("class", "transform");
      if (i === 2) {
        this.articles[i].style.justifySelf = "center"; // Centrez horizontalement
      }
      if (i >= 3) {
        this.articles[i].style.justifySelf = "right"; // Centrez horizontalement
      }
    }
    return { arrowRight, arrowLeft, section };
  }
  //Method that catch event
  handleEvent() {
    // Obtenez les éléments une seule fois en dehors du gestionnaire de clic
    const firstChild = this.articles[1];
    const secondChild = this.articles[2];
    const thirdChild = this.articles[3];
    const transform = document.querySelectorAll(".transform");
    let nb_clicLeft = 1;
    let nb_clicRight = 1;
    this.dom_element.arrowLeft.addEventListener("click", () => {
      // Calculez la largeur du parent à chaque clic
      if (nb_clicLeft < this.data.nb_articles - 2) {
        const parentWidth = firstChild.parentElement.offsetWidth;
        const secondChildWidth = secondChild.offsetWidth;
        const halfParentWidth = (parentWidth - secondChildWidth) / 2;
        console.log("parent", halfParentWidth);
        transform.forEach((element) => {
          element.style.transition = "transform 1s ease";
          element.style.transform = `translateX(-${
            nb_clicLeft * halfParentWidth
          }px)`;
        });
        nb_clicLeft++;
        nb_clicRight--;
      }
    });
    this.dom_element.arrowRight.addEventListener("click", () => {
      // Calculez la largeur du parent à chaque clic
      if (nb_clicLeft > 1) {
        const parentWidth = firstChild.parentElement.offsetWidth;
        const secondChildWidth = secondChild.offsetWidth;
        const halfParentWidth = (parentWidth - secondChildWidth) / 2;
        console.log("parent2", halfParentWidth);
        transform.forEach((element) => {
          element.style.transition = "transform 1s ease";
          element.style.transform = `translateX(${
            nb_clicRight * halfParentWidth
          }px)`;
        });
        nb_clicRight++;
        nb_clicLeft--;
      }
    });
  }
}
