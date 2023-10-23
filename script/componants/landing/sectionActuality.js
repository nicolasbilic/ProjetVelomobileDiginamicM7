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
          "width: 90%; margin-bottom: 60px; position: relative; overflow: hidden;",
      },
    ]);
    const h1Actuality = this.createMarkup("h1", "Actualités", section, []);
    //Create the main card container
    const container = this.createMarkup("div", "", section, [
      {
        style: `width:auto; display: grid; grid-template-columns: repeat(${this.data.nb_articles}, 35.6%);`,
      },
    ]);
    //Create the arrows container
    const arrowContainer = this.createMarkup("div", "", container, [
      {
        style:
          "width:100%; height:auto; top: 50%; position: absolute; z-index: 2; display: flex; justify-content: space-between; align-items: center;",
      },
    ]);
    //Create arrow left
    const arrowLeft = this.createMarkup("img", "", arrowContainer, [
      {
        style:
          "width: auto; height: auto; transform: scaleX(-1); position:absolute; left: 0; opacity: 0;",
        src: `./../../assets/imgs/arrowside.png`,
        alt: `arrowLeft`,
      },
    ]);
    //Create arrow right
    const arrowRight = this.createMarkup("img", "", arrowContainer, [
      {
        style:
          "width: auto; height: auto; cursor: pointer;  position:absolute; right: 0; overflow: visible",
        src: `./../../assets/imgs/arrowside.png`,
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
    //Loop again to add style : ignore the first item
    for (let i = 1; i < this.data.nb_articles + 1; i++) {
      this.articles[i].style.position = "relative";
      this.articles[i].setAttribute("class", "transform");
      this.articles[i].style.justifySelf = "left";
    }
    return { arrowRight, arrowLeft, section };
  }
  //Method that catch event
  handleEvent() {
    // Obtenez les éléments une seule fois en dehors du gestionnaire de clic
    const firstChild = this.articles[1];
    const secondChild = this.articles[2];
    //Get parent and children width to calculate the distance to travel with the animations
    const parentWidth = firstChild.parentElement.offsetWidth;
    const secondChildWidth = secondChild.offsetWidth;
    const halfParentWidth = (parentWidth - secondChildWidth) / 2;
    const transform = document.querySelectorAll(".transform");
    let nb_clicLeft = 1;
    let nb_clicRight = 1;
    this.dom_element.arrowLeft.addEventListener("click", () => {
      // Check if there are 3 more articles to show
      if (nb_clicLeft <= 0) {
        //Add the movement to eache element with class transform
        transform.forEach((element) => {
          element.style.transition = "transform 1s ease";
          element.style.transform = `translateX(${
            nb_clicLeft * halfParentWidth
          }px)`;
        });
        nb_clicLeft++;
        nb_clicRight--;
        //Show and hide left arrow
        if (nb_clicRight === 1) {
          this.dom_element.arrowLeft.style.opacity = "0";
          this.dom_element.arrowLeft.style.cursor = "default";
        } else if (nb_clicRight < this.data.nb_articles - 2) {
          this.dom_element.arrowRight.style.opacity = "1";
        }
      }
    });
    this.dom_element.arrowRight.addEventListener("click", () => {
      //Show and hide left arrow
      this.dom_element.arrowLeft.style.opacity = "1";
      this.dom_element.arrowLeft.style.cursor = "pointer";
      if (nb_clicRight < this.data.nb_articles - 2) {
        transform.forEach((element) => {
          element.style.transition = "transform 1s ease";
          element.style.transform = `translateX(-${
            nb_clicRight * halfParentWidth
          }px)`;
        });
        nb_clicRight++;
        nb_clicLeft--;
        if (nb_clicRight == this.data.nb_articles - 2) {
          this.dom_element.arrowRight.style.opacity = 0;
          this.dom_element.arrowRight.style.cursor = "default";
        }
      }
    });
  }
}
