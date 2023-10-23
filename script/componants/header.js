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
          "width:100%; height: 611px; margin-bottom: 150px; display:flex; flex-direction: column; align-items: center;  background-image: url('./../../assets/background.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; margin-top: 0px; ",
      },
    ]);
    const headLogo = this.createMarkup("img", "", header, [
      { src: "../../assets/logo_client.png" },
      { width: "300" },
      { height: "auto" },
    ]);
    const gif = this.createMarkup("img", "", header, [
      { src: "../../assets/logo_client_v2.gif" },
      { width: "150" },
      { height: "auto" },
      {
        style:
          "position: relative; justify-content: initial; align-items: initial;",
      },
    ]);
    const hr = this.createMarkup("hr", "", header, [
      { style: "width:80%; color: white;" },
    ]);
    const nav = this.createMarkup("nav", "", header, [
      {
        style:
          "width:100%; height: 150px; display: flex; flex-direction: row; justify-content: center",
      },
    ]);
    const accueil = this.createMarkup("a", "Accueil", nav, [
      { href: "" },
      {
        style:
          "font-size: 30px; margin: 0 20px; text-decoration: none; color: white;",
      },
    ]);
    const company = this.createMarkup("a", "Notre entreprise", nav, [
      { href: "" },
      {
        style:
          "font-size: 30px;margin: 0 20px; text-decoration: none; color: white;",
      },
    ]);
    const factory = this.createMarkup("a", "Notre usine", nav, [
      { href: "" },
      {
        style:
          "font-size: 30px;margin: 0 20px; text-decoration: none; color: white;",
      },
    ]);
    const velomobiles = this.createMarkup(
      "a",
      "Découvrir nos vélomobiles",
      nav,
      [
        { href: "" },
        {
          style:
            "font-size: 30px;margin: 0 20px; text-decoration: none; color: white;",
        },
      ]
    );
    const contact = this.createMarkup("a", "Contact", nav, [
      { href: "" },
      {
        style:
          "font-size: 30px;margin: 0 20px; text-decoration: none; color: white;",
      },
    ]);
  }
}
