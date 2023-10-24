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
          "margin-bottom: 50px; width:100%; height: 330px; display:flex; flex-direction: column; align-items: center;  background-image: url('./../../assets/imgs/background.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; margin-top: 0px;",
      },
    ]);
    document.body.insertBefore(header, document.body.firstChild);

    const filter = this.createMarkup("div", "", header, [
      {
        style:
          " width:100%; height:330px; position: absolute; display:flex; flex-direction: column; align-items: center; margin-top: 0px; background-color: black; opacity:0.65; z-index: 0;",
      },
      {class: "filter"}
    ]);

    const headLogo = this.createMarkup("img", "", header, [
      { src: "../../assets/imgs/logo_client.png" },
      { width: "150" },
      { height: "auto" },
      { style: "z-index: 0;" },
      { class: "headLogo"}
    ]);

    const divGif = this.createMarkup("div", "", header, [
      {
        style:
          "width: 100%; display: flex; align-items: flex-start; justify-content: flex-start;",
      },
    ]);

    const gif = this.createMarkup("img", "", divGif, [
      { src: "../../assets/imgs/logo_client_v2.gif" },
      { width: "80" },
      { height: "auto" },
      {
        style:
          "position: relative; left:10% ; bottom: -10px; animation: velomobile 8s infinite ease-in-out;",
      },
      {class: "gif"}
    ]);

    const hr = this.createMarkup("hr", "", header, [
      { style: "width:80%; color: white; z-index: 0;" },
    ]);

    const nav = this.createMarkup("nav", "", header, [
      {
        style:
          "margin-bottom:50px ;width:80%; display: flex; flex-direction: row; justify-content: space-around; z-index: 0; font-family: epilogue; font-size: 20px;",
      },
      {class : "nav"}
    ]);

    const accueil = this.createMarkup("a", "Accueil", nav, [
      { href: "../../index.html" },
      { style: "text-decoration: none; color: white; z-index: 0;" },{class: "accueil"}
    ]);

    const company = this.createMarkup("a", "Notre entreprise", nav, [
      { href: "../../html/ourEntreprise.html" },
      { style: "text-decoration: none; color: white; z-index: 0;" },
    ]);

    const factory = this.createMarkup("a", "Notre usine", nav, [
      { href: "../../html/usine.html" },
      { style: "text-decoration: none; color: white; z-index: 0;" },
    ]);

    const velomobiles = this.createMarkup(
      "a",
      "Découvrir nos vélomobiles",
      nav,
      [
        { href: "../../html/velomobiles.html" },
        { style: "text-decoration: none; color: white; z-index: 0;" },
      ]
    );

    const contact = this.createMarkup("a", "Contact", nav, [
      { href: "../../html/contact.html" },
      { style: "text-decoration: none; color: white; z-index: 0;" },
    ]);

    const title = this.createMarkup("span", "Vélomobiles français", header, [
      {
        style:
          "font-size: 22px; color: white; z-index: 0; font-family: epilogue;",
      },
      {class: "head-title"}
      
    ]);

    const flag = this.createMarkup("div", "", header, [
      {
        style:
          "display: flex; flex-direction: row; justify-content: center; width: 100%; z-index: 0; margin-bottom: 10px;",
      },
    ]);

    const blue = this.createMarkup("div", "", flag, [
      { style: "width: 100px; height: 10px; background-color : #007dcc" }, { class: "flag-color"}
    ]);

    const white = this.createMarkup("div", "", flag, [
      { style: "width: 100px; height: 10px; background-color : white" },{ class: "flag-color"}
    ]);

    const red = this.createMarkup("div", "", flag, [
      { style: "width: 100px; height: 10px; background-color : #cc0000" },{ class: "flag-color"}
    ]);

    const bottomDiv = this.createMarkup("div", "", header, [
      {
        style:
          "width: 100%; display: flex; align-items: flex-start; justify-content: flex-start;",
      },
      
    ]);

    const contactButton = this.createMarkup("a", "Nous contacter", bottomDiv, [
      {
        style:
          "position: relative; bottom: -25px; width: 230px ; height: 40px; font-size: 20px; color: white; background-color: #cc0000; border: none; text-decoration: none; text-align: center; items-align: center; line-height: 40px; left:5%; font-family: epilogue",
      },
      { href: "../../html/contact.html" },
      { class: "contactButton"}

    ]);

    const border = this.createMarkup("div", "", header, [
      {
        style:
          "position: relative; bottom: -25px; width: 100%; height: 20px; background-color: #007dcc;",
      },
      { class: "border"}
    ]);
  }
}
