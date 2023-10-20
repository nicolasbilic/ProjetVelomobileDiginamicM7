//Importation of the needed files
import ManageDom from "./../ManageDom.js";

export default class Landing extends ManageDom {
  constructor() {
    super();
    this.render();
  }
  render() {
    const section = this.createSection();
  }

  //Create basic dom Element
  createSection() {
    //get the main container
    const main = document.querySelector("main");
    //create the <section>
    const section = this.createMarkup("section", "", main, [
      {
        style: "width:90%; margin-bottom:60px;",
      },
    ]);
    return section;
  }
}
