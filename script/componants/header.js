//Importation of the needed files
import ManageDom from "./ManageDom.js";

export default class Header extends ManageDom {
  constructor() {
    super();
    this.render();
  }
  render() {
    const header = this.createMarkup("header", "", document.body, [
      {
        style:
          "width:100%; height: 611px; margin-bottom: 150px;display:flex; align-items:center; justify-content: space-between;  background-image: url('./../../assets/background.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; ",
      },
    ]);
  }
}
