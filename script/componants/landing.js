//Importation of the needed files
import ManageDom from "./ManageDom.js";
import SectionDiscoverUs from "./landing/sectionDiscoverUs.js";
import SectionFactoryProducts from "./landing/sectionFactoryProducts.js";
import SectionActuality from "./landing/sectionActuality.js";

//Class to create a landing page
export default class Landing extends ManageDom {
  constructor() {
    super();
    this.init();
  }
  //Defer the rend after initialiation
  async init() {
    const data_loaded = await this.fetchData();
    this.landingDatas = data_loaded;
    if (this.landingDatas) {
      //call the render method
      this.render();
    }
  }
  //Render Method
  render() {
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
    //Create a new instance of each section
    new SectionDiscoverUs(this.landingDatas.lightboxData);
    new SectionFactoryProducts();
    new SectionActuality(this.landingDatas.actualityData);
  }

  async fetchData() {
    //importation des données du json
    const response = await fetch("./../script/datas/landingData.json");
    const landingDatas = await response.json();
    return landingDatas;
  }
}
//Create a new instance of Landing
new Landing();
