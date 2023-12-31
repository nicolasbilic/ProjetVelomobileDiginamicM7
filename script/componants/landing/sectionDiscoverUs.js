//Importation of the needed files
import ManageDom from "./../ManageDom.js";

export default class SectionDiscoverUs extends ManageDom {
  constructor(data) {
    super();
    this.data = data;
    this.images = [];
    this.dom_element = this.render();
    this.animateLightbox();
  }
  //Render method
  render() {
    //Call the createSection
    const section = this.createSection();
    //add title
    const h1 = this.createMarkup("h1", this.data.title, section, [
      { style: "margin-bottom:40px; margin-top: 0;" },
    ]);
    //Create the lightbox and text area
    const lightBoxAndText = this.createMarkup("div", "", section, [
      {
        style:
          "width: 100%; height:465px; display:flex; justify-content:space-between;",
      },
      {
        class: "container_lightbox_and_text",
      },
    ]);
    //Call the lightbox methods
    this.createLightBox(lightBoxAndText);
    //Create the lightbox'details container
    const containerDetails = this.createMarkup("div", "", lightBoxAndText, [
      {
        style:
          "width: 55%; display: flex; flex-direction: column; justify-content:space-around",
      },
      {
        class: "container_details",
      },
    ]);
    //call the lightbox details method
    this.createLightBoxDetails(containerDetails, this.data.lightboxText.number);
  }

  //Create basic dom Element
  createSection() {
    //get the main container
    const main = document.querySelector("main");
    //create the <section>
    const section = this.createMarkup("section", "", main, [
      {
        style: "width: 90%; margin-bottom: 60px;",
      },
    ]);
    return section;
  }

  //Method that create the lightBox
  createLightBox(lightBoxAndText) {
    //Create the lightbox container
    const containerLightBox = this.createMarkup("div", "", lightBoxAndText, [
      {
        style: "width: 35%; position: relative; display: flex; ",
      },
      {
        class: "container_lightbox",
      },
    ]);
    //create the lightbox's pictures from the array
    this.data.lightbox.forEach((element, i = 0) => {
      const imgLightbox = this.createMarkup("img", "", containerLightBox, [
        {
          style:
            "width: 100%; max-width: 455px; max-height: 455px; margin: 0; position: absolute; object-fit: contain; top:50%; transform: translateY(-50%);",
          src: `./../../assets/imgs/${element}.png`,
          alt: `${element}`,
        },
      ]);
      imgLightbox.style.border = "4px solid #007DCC";
      if (i !== 0) {
        imgLightbox.style.opacity = 0;
      }
      //Hide all picture except the first one
      this.images.push(imgLightbox);
      i++;
    });
  }

  //Method that create the lightbox's details
  createLightBoxDetails(containerDetails, number) {
    //Create number details
    for (let i = 0; i < number; i++) {
      const details = this.createMarkup("div", "", containerDetails, [
        {
          style: "width:100%;",
        },
      ]);
      //Create the title
      const title = this.createMarkup(
        "h2",
        this.data.lightboxText.title[i],
        details,
        [{ style: "width: 90%;height: 40px; " }]
      );
      //Creathe the eco logo
      const imgEco = this.createMarkup("img", "", title, [
        {
          style: "width:35px; margin: 0; position: absolute;",
          src: `./../../assets/imgs/feuille.png`,
          alt: `logo eco`,
        },
      ]);
      //Create the text
      const text = this.createMarkup(
        "p",
        this.data.lightboxText.text[i],
        details,
        [
          {
            style:
              "width: 90%; margin-bottom: 20px; max-height: 90px; overflow: hidden;  white-space: pre-wrap; text-overflow: ellipsis; ",
          },
        ]
      );
      //Create the button
      const button = this.createMarkup("button", "En découvrir plus", details, [
        {
          style:
            "width: 20%; min-width: 125px;height: 20%; margin-bottom: 30px; background-color: #007DCC; border-radius: 10px; border: none; color: white; cursor: pointer;",
        },
        {
          class: "details_button",
        },
      ]);
      button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.1) ";
      });
      button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1) ";
      });
    }
  }
  //Method that animate the lightbox
  animateLightbox() {
    let i = 0;
    let scroll = true;
    let interval;
    const speed = 2000;
    //Declaration of the start interval function
    const startInterval = () => {
      //Use a Timer method to switch picture
      interval = setInterval(() => {
        //Déclar the current and next picture
        let currentPicture = this.images[i];
        let nextPicture = this.images[i + 1];
        //If image isn't the last one
        if (i < this.data.lightbox.length - 1) {
          //swap picture with an imation
          currentPicture.style.transition = "opacity 1s";
          currentPicture.style.opacity = 0; //Hide current Picture
          nextPicture.style.transition = "opacity 1s";
          nextPicture.style.opacity = 1; //Show next Picture
          setTimeout(() => {}, speed);
          i++;
        } else {
          //swap picture
          nextPicture = this.images[0];
          currentPicture.style.transition = "opacity 1s";
          currentPicture.style.opacity = 0;
          nextPicture.style.transition = "opacity 1s";
          nextPicture.style.opacity = 1;
          setTimeout(() => {}, speed);
          i = 0;
        }
      }, speed);
    };
    //call the function
    startInterval();
    //Loop each image to add the stop
    this.images.forEach((image, i) => {
      //Add an  event listener
      image.addEventListener("click", () => {
        //if scroll true, stop interval, else start interval
        if (scroll === true) {
          clearInterval(interval);
        } else {
          startInterval();
        }
        scroll = !scroll;
      });
    });
  }
}
