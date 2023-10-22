import ManageDom from "./../ManageDom.js";

//Class to create a landing page
export default class PresentationSection extends ManageDom {
  constructor() {
    super();
    this.init();
  }
  //Defer the rend after initialiation
  async init() {
    const data_loaded = await this.fetchData();
    this.profilDatas = data_loaded;
    if (this.profilDatas) {
      //call the render method
      this.render();
    }
  }
  //Render Method
  render() {
    // //Call the createSection
    const section = this.createSection();
    //get the main container
    const main = document.querySelector("main");
    //Get the header
    const header = document.querySelector("header");
    //Put the body after the header
    document.body.insertBefore(main, header.nextSibling);
    this.createPorfil(section, "valentin", "normal");
    this.createPorfil(section, "tchoupi", "reverse");
  }
  //Create basic dom Element
  createSection() {
    //get the main container
    const main = document.querySelector("main");
    //create the <section>
    const section = this.createMarkup("section", "", main, [
      {
        style:
          "width: 90%; margin-bottom: 60px; display: flex; flex-direction: column; align-items: center;",
      },
    ]);
    console.log("pdzad");
    return section;
  }

  createPorfil(section, profil, order) {
    //filter the good profil in data
    const profilDataFiltered = Object.keys(this.profilDatas).reduce(
      (result, key) => {
        if (key === profil) {
          result = this.profilDatas[key];
        }
        return result;
      },
      null
    );
    //Create the profil container
    const containerProfil = this.createMarkup("div", "", section, [
      {
        style:
          "width:80%; display:flex;  display:flex; align-items:center; position:relative",
      },
    ]);
    //Create the profil picture
    const profilPicture = this.createMarkup("img", "", containerProfil, [
      {
        style:
          " width: 25%; height:auto;margin: 0; border-radius: 50%; background-color:black; object-fit: conain; z-index:2",
        src: `./../../assets/profil/${profil}.png`,
        alt: `${profil}`,
      },
    ]);
    //Create the profil container
    const detailsContainer = this.createMarkup("div", "", containerProfil, [
      {
        style:
          "width:100%; box-sizing: border-box;  height: auto; max-height: 220px; background-color: #EFEFEF; border-radius: 10px; overflow: hidden; position: absolute",
      },
    ]);

    const profilName = this.createMarkup(
      "h2",
      profilDataFiltered.name,
      detailsContainer,
      [
        {
          style:
            "width:70%; height:auto; background-color: #EFEFEF; border-radius: 10px; margin-left: 3%;",
        },
      ]
    );
    const profilStatus = this.createMarkup(
      "h2",
      profilDataFiltered.status,
      detailsContainer,
      [
        {
          style:
            "width:70%; height:auto; background-color: #EFEFEF; border-radius: 10px;  margin-left: 3%; font-size: 20px;",
        },
      ]
    );
    const profilText = this.createMarkup(
      "p",
      profilDataFiltered.details,
      detailsContainer,
      [
        {
          style:
            "width:90%; height:auto; background-color: #EFEFEF; border-radius: 10px;  margin-left: 3%;",
        },
      ]
    );

    detailsContainer.style.paddingLeft = "25%";
    //Reverse if order = reverse
    if (order === "reverse") {
      containerProfil.style.flexDirection = "row-reverse";
      detailsContainer.style.paddingLeft = "0%";
      detailsContainer.style.paddingRight = "25%";
    }
  }

  async fetchData() {
    //importation des données du json
    const response = await fetch("./../script/datas/ourEntreprise.json");
    const profilDatas = await response.json();
    return profilDatas;
  }
}
