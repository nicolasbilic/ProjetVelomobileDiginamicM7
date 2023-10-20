//Importation of the needed files
import ManageDom from "./ManageDom.js";
import SectionDiscoverUs from "./landing/sectionDiscoverUs.js";
import SectionFactoryProducts from "./landing/sectionFactoryProducts.js";
import SectionActuality from "./landing/sectionActuality.js";

const data = {
  title: "Découvez le vélomobile français",
  lightbox: [],
  lightboxText: {
    title: ["Lorem ipsum dolor", "Lorem ipsum indolor"],

    text: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque ante vitae ipsum mollis tristique in quis lacus. Vestibulum ut facilisis magna, sit amet mollis ipsum. Duis ornare tempus lorem eu maximus. Suspendisse purus augue, condimentum vel mattis vitae, ullamcorper eget leo. Fusce ut pharetra tellus. Nam egestas nibh metus,",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque ante vitae ipsum mollis tristique in quis lacus. Vestibulum ut facilisis magna, sit amet mollis ipsum. Duis ornare tempus lorem eu maximus. Suspendisse purus augue, condimentum vel mattis vitae, ullamcorper eget leo. Fusce ut pharetra tellus. Nam egestas nibh metus,",
    ],
  },
};
export default class Landing extends ManageDom {
  constructor() {
    super();
    this.render();
  }
  render() {
    const main = this.createMarkup("main", "", document.body, [
      {
        style:
          "width:100%; margin-bottom: 150px; display:flex; justify-content: space-between; display:flex; justify-content:center;",
      },
    ]);
    const header = document.querySelector("header");
    document.body.insertBefore(main, header.nextSibling);
    new SectionDiscoverUs(data);
  }
}

new Landing();
