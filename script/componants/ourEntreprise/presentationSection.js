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
    //Create the main container
    const main = this.createMarkup("main", "", document.body, [
      {
        style:
          "width:100%; display:flex; flex-direction: column;  display:flex; align-items:center;",
      },
    ]);
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

    console.log("p", profilDataFiltered);

    //Create the profil container
    const containerProfil = this.createMarkup("div", "", section, [
      {
        style:
          "width:80%; display:flex;  display:flex; align-items:center; justify-content: center;",
      },
    ]);
    //Create the profil picture
    const profilPicture = this.createMarkup("img", "", containerProfil, [
      {
        style:
          " width:30%; height:auto;margin: 0; border-radius: 50%; background-color:black; object-fit: conain;",
        src: `./../../assets/profil/${profil}.png`,
        alt: `${profil}`,
      },
    ]);
    //Reverse if order = reverse
    if (order === "reverse") {
      containerProfil.style.flexDirection = "row-reverse";
    }
    //Create the profil container
    const detailsContainer = this.createMarkup("div", "", containerProfil, [
      {
        style:
          "width:70%; height:auto; background-color: #EFEFEF; border-radius: 10px;",
      },
    ]);
    console.log(this.profilDatas);

    const profilName = this.createMarkup(
      "h2",
      profilDataFiltered.name,
      detailsContainer,
      [
        {
          style:
            "width:70%; height:auto; background-color: #EFEFEF; border-radius: 10px;",
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
            "width:70%; height:auto; background-color: #EFEFEF; border-radius: 10px;",
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
            "width:70%; height:auto; background-color: #EFEFEF; border-radius: 10px;",
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
