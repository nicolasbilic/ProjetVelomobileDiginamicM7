//Importation of the needed files
import ManageDom from "./ManageDom.js";

export default class Footer extends ManageDom {
  constructor() {
    super();
    this.render();
  }
  render() {
    const footer = this.createMarkup("footer", "", document.body, [
      {
        style:
          "width:100%; height: 300px; display:flex; align-items:center; justify-content: space-between; background-color:grey;",
      },
    ]);
    document.body.appendChild(footer);
  }
}
