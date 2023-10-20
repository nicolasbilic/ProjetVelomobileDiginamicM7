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
          "width:100%; height: 700px; margin-bottom: 150px; display:flex; flex-direction: column; align-items: center;  background-image: url('./../../assets/background.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; margin-top: 0px;",
      },
    ]);

    const filter = this.createMarkup("div", "", header, [
      {
        style:
          "width:100%; height:700px; position: absolute; display:flex; flex-direction: column; align-items: center; margin-top: 0px; background-color: black; opacity:0.65; z-index: 0;",
      },
    ]);


    const headLogo = this.createMarkup("img", "", header, [
      { src: "../../assets/logo_client.png" },{ width: "300"}, {height: "auto"},{style: "z-index: 0;"}
    ]);

    const divGif = this.createMarkup("div", "", header, [
      {style: "width: 100%; display: flex; align-items: flex-start; justify-content: flex-start;"}
    ]); 

    const gif = this.createMarkup("img", "", divGif, [
      { src: "../../assets/logo_client_v2.gif" },{ width: "150"}, {height: "auto"}, 
      { style: "position: relative; left:10% ; bottom: 0; animation: velomobile 8s infinite ease-in-out;"},
    ]);
    const hr = this.createMarkup("hr", "", header, [
      { style: "width:80%; color: white; z-index: 0;"}
    ]);
    const nav = this.createMarkup("nav", "", header, [
      { style: "width:100%; height: 150px; display: flex; flex-direction: row; justify-content: center; z-index: 0;"}
    ]);
    const accueil = this.createMarkup("a", "Accueil", nav, [
      { href: ""}, {style: "font-size: 40px; margin: 0 20px; text-decoration: none; color: white; z-index: 0;"}
    ]);
    const company = this.createMarkup("a", "Notre entreprise", nav, [
      { href: ""}, {style: "font-size: 40px;margin: 0 30px; text-decoration: none; color: white; z-index: 0;"}
    ]);
    const factory = this.createMarkup("a", "Notre usine", nav, [
      { href: ""}, {style: "font-size: 40px;margin: 0 30px; text-decoration: none; color: white; z-index: 0;"}
    ]);
    const velomobiles = this.createMarkup("a", "Découvrir nos vélomobiles", nav, [
      { href: ""}, {style: "font-size: 40px;margin: 0 30px; text-decoration: none; color: white; z-index: 0;"}
    ]);
    const contact = this.createMarkup("a", "Contact", nav, [
      { href: ""}, {style: "font-size: 40px;margin: 0 30px; text-decoration: none; color: white; z-index: 0;"}
    ]);
    const title = this.createMarkup("span", "Vélomobiles français", header, [
      {style: "font-size: 50px; color: white; z-index: 0;"}
    ]);
    const flag = this.createMarkup("div", "", header, [
      {style: "display: flex; flex-direction: row; justify-content: center; width: 100%; z-index: 0;"}
    ]);
    const blue = this.createMarkup("div", "", flag, [
      {style: "width: 200px; height: 20px; background-color : #007dcc" }
    ]);
    const white = this.createMarkup("div", "", flag, [
      {style: "width: 200px; height: 20px; background-color : white" }
    ]);
    const red = this.createMarkup("div", "", flag, [
      {style: "width: 200px; height: 20px; background-color : #cc0000" }
    ]);

    const bottomDiv = this.createMarkup("div", "", header, [
      {style: "width: 100%; display: flex; align-items: flex-start; justify-content: flex-start;"}
    ]); 
    
    const contactButton = this.createMarkup("a", "Nous contacter", bottomDiv, [
      {style: "position: relative; bottom: -110px; width: 450px; height: 80px; font-size: 34px; color: white; background-color: #cc0000; border: none; text-decoration: none; text-align: center; items-align: center; line-height: 80px; left:5%;"},
      { href : "./index.html"}
    ]);
    const border = this.createMarkup("div", "", header, [
      {style: "position: relative; bottom: -110px; width: 100%; height: 20px; background-color: #007dcc;" }
    ]);


  }
}
