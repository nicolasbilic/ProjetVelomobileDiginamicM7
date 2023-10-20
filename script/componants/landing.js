//Importation of the needed files
import ManageDom from "./ManageDom.js";
import SectionDiscoverUs from "./landing/sectionDiscoverUs.js";
import SectionFactoryProducts from "./landing/sectionFactoryProducts.js";
import SectionActuality from "./landing/sectionActuality.js";

//data used to create the instance
const lightBoxData = {
  title: "Découvez le vélomobile français",
  lightbox: [
    "red_yellow_bike",
    "red_bike",
    "purple_bike",
    "orange_velomobile",
    "orange_velo",
    "orange_bike",
    "green_bike",
  ],
  lightboxText: {
    number: 2,
    title: ["Lorem ipsum dolor", "Lorem ipsum indolor"],

    text: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque ante vitae ipsum mollis tristique in quis lacus. Vestibulum ut facilisis magna, sit amet mollis ipsum. Duis ornare tempus lorem eu maximus. Suspendisse purus augue, condimentum vel mattis vitae, ullamcorper eget leo. Fusce ut pharetra tellus. Nam egestas nibh metus,",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque ante vitae ipsum mollis tristique in quis lacus. Vestibulum ut facilisis magna, sit amet mollis ipsum. Duis ornare tempus lorem eu maximus. Suspendisse purus augue, condimentum vel mattis vitae, ullamcorper eget leo. Fusce ut pharetra tellus. Nam egestas nibh metus,",
    ],
  },
};
//Class to create a landing page
export default class Landing extends ManageDom {
  constructor() {
    super();
    this.render();
  }
  //Render Method
  render() {
    //Create the main container
    const main = this.createMarkup("main", "", document.body, [
      {
        style:
          "width:100%; margin-bottom: 150px; display:flex; justify-content: space-between; display:flex; justify-content:center;",
      },
    ]);
    //Get the header
    const header = document.querySelector("header");
    //Put the body after the header
    document.body.insertBefore(main, header.nextSibling);
    //Create a new instance of SectionDiscoverUs
    new SectionDiscoverUs(lightBoxData);
    new SectionFactoryProducts();
  }
}
//Create a new instance of Landing
new Landing();
