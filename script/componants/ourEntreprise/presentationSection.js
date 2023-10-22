import ManageDom from "./../ManageDom.js";

//Class to create a landing page
export default class PresentationSection extends ManageDom {
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
          "width:100%; display:flex; flex-direction: column;  display:flex; align-items:center;",
      },
    ]);
    //Get the header
    const header = document.querySelector("header");
    //Put the body after the header
    document.body.insertBefore(main, header.nextSibling);
  }
}
