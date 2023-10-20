//Importation of the needed files
import ManageDom from "./../ManageDom.js";

export default class SectionDiscoverUs extends ManageDom {
  constructor(data) {
    super();
    this.data = data;
    this.render();
  }
  //Render method
  render() {
    //Call the createSection
    const section = this.createSection();
    //add title
    const h1 = this.createMarkup("h1", this.data.title, section, [
      { style: "margin-bottom:40px;" },
    ]);
    //Create the lightbox and text area
    const lightBoxAndText = this.createMarkup("div", "", section, [
      {
        style: "width: 100%; display:flex; justify-content:space-between;",
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
    ]);
    //call the lightbox details method
    this.createLightBoxDetails(containerDetails, "2");
  }

  //Create basic dom Element
  createSection() {
    //get the main container
    const main = document.querySelector("main");
    //create the <section>
    const section = this.createMarkup("section", "", main, [
      {
        style: "width:90%;",
      },
    ]);
    return section;
  }

  //Method that create the lightBox
  createLightBox(lightBoxAndText) {
    //Create the lightbox container
    const containerLightBox = this.createMarkup("div", "", lightBoxAndText, [
      {
        style: "width: 35%; border:4px solid #007DCC;",
      },
    ]);
    //create the lightbox's pictures
    const img = this.createMarkup("img", "", containerLightBox, [
      {
        style: "width: 100%; height:100%; margin:0",
        src: "./../../assets/purple_bike.png",
      },
    ]);
  }

  //Method that create the lightbox's details
  createLightBoxDetails(containerDetails, number) {
    //Create number details
    for (let i = 0; i < number; i++) {
      const details = this.createMarkup("div", "", containerDetails, [
        { style: "width:100%;" },
      ]);
      //Create the title
      const title = this.createMarkup(
        "h2",
        this.data.lightboxText.title[i],
        details,
        [{ style: "width:90%;height:40px; margin:0;" }]
      );
      //Create the text
      const text = this.createMarkup(
        "p",
        this.data.lightboxText.text[i],
        details,
        [{ style: "width:90%; margin-bottom : 40px;" }]
      );
      //Create the button
      const button = this.createMarkup("button", "En découvrir plus", details, [
        {
          style:
            "width:210px;height:50px; background-color:#007DCC; border-radius:10px; border:none; color: white;",
        },
      ]);
    }
  }
}
