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
          "width:100%; height: 250px; display:flex; flex-direction: row; align-items: center; background-color: #3D3D3D; justify-content: space-around; font-family: epilogue;",
      },
      { class : "footer"}
    ]);
    const logo = this.createMarkup("img", "", footer, [
      { src: "../../assets/imgs/logo_client.png" },{ width: "200"}, {height: "auto"},{class: "logo"}
    ]);

    const pagesDiv = this.createMarkup("div", "", footer, [
      {style: "display: flex; align-items: flex-start; flex-direction: column; justify-content: center;"},{class: "footer-pages"}
    ]); 

    const accueil = this.createMarkup("a", "Accueil", pagesDiv, [
      { href: "../../index.html"}, {style: "text-decoration: none; color: white;"}
    ]);

    const company = this.createMarkup("a", "Notre entreprise", pagesDiv, [
      { href: "../../html/ourEntreprise.html"}, {style: "text-decoration: none; color: white;"}
    ]);

    const factory = this.createMarkup("a", "Notre usine", pagesDiv, [
      { href: "../../html/usine.html"}, {style: "text-decoration: none; color: white;"}
    ]);

    const velomobiles = this.createMarkup("a", "Découvrir nos vélomobiles", pagesDiv, [
      { href: "../../html/velomobiles.html"}, {style: "text-decoration: none; color: white;"}
    ]);

    const contact = this.createMarkup("a", "Contact", pagesDiv, [
      { href: "../../html/contact.html"}, {style: "text-decoration: none; color: white;"}
    ]);

    const salesAndSocialDiv = this.createMarkup("div", "", footer, [
      {style: "display: flex; align-items: flex-start; flex-direction: column; justify-content: center; padding: 0;"}, {class: "salesAndSocialDiv"}
    ]); 

    const salesDiv = this.createMarkup("div", "", salesAndSocialDiv, [
      {style: "display: flex; align-items: flex-start; flex-direction: column; justify-content: center;"}, 
    ]); 

    const salePointsTitle = this.createMarkup("ul", "Nos points de vente", salesDiv, [
      {style: "font-size: 18px; font-weight: bold; color: white; text-decofation: none; list-style: none; padding: 0; margin: 0; margin-top: 20px; "}, {class: "title salePointsTitle"},
    ]);

    const agdeSalePoint = this.createMarkup("li", "Agde (34300)", salesDiv, [
      {style: "font-size: 12px; color: white; list-style: none;"}
    ]);
    const salonSalePoint = this.createMarkup("li", "Salon-de-Provence (13300)", salesDiv, [
      {style: "font-size: 12px; color: white; list-style: none;"}
    ]);
    const saintSalePoint = this.createMarkup("li", "Saint-Nazaire(44600)", salesDiv, [
      {style: "font-size: 12px; color: white; list-style: none;"}
    ]);
    const cassisSalePoint = this.createMarkup("li", "Cassis(13022)", salesDiv, [
      {style: "font-size: 12px; color: white; list-style: none;"}
    ]);

    const followUs = this.createMarkup("p", "Nous suivre", salesDiv, [
      {style: "font-size: 18px; font-weight: bold; color: white; list-style: none; margin: 0; margin-top: 20px;"}, {class: "title follow-us"}
    ]);

    const socialDiv = this.createMarkup("div", "", salesAndSocialDiv, [
      {style: "display: flex; flex-direction: row; justify-content: center;"}
    ]); 

    const linkedinLink = this.createMarkup("a", "", socialDiv, [
      {href : ""}
    ]);
    const linkedinImg = this.createMarkup("img", "", linkedinLink, [
      { src: "../../assets/imgs/linkedin.png" },{ width: "40"}, {height: "auto"}, , {class: "img"}
    ]);

    const fbLink = this.createMarkup("a", "", socialDiv, [
      {href : ""}
    ]);

    const fbImg = this.createMarkup("img", "", fbLink, [
      { src: "../../assets/imgs/fb.png" },{ width: "40"}, {height: "auto"}, {class: "img"}
    ]);

    const instagramLink = this.createMarkup("a", "", socialDiv, [
      {href : ""}
    ]);

    const instagramImg = this.createMarkup("img", "", instagramLink, [
      { src: "../../assets/imgs/instagram.png" },{ width: "40"}, {height: "auto"},, {class: "img"}
    ]);

    const contactDiv = this.createMarkup("div", "", footer, [
      {style: "display: flex; flex-direction: column; align-items: flex-start; justify-content: center;"}, {class: "contactDiv"}
    ]); 


    const contactForm = this.createMarkup("form", "Nous contacter", contactDiv, [
      {style: "display: flex; flex-direction: column; font-size: 18px; font-weight: bold; color: white; list-style: none; margin: 0; margin-top: 20px;"},{class: "contactForm"},  {class: "title"}

    ]);

    const nameDiv = this.createMarkup("div", "", contactForm, [
      {style: "display: flex; flex-direction: row; margin-bottom: 10px; margin-top: 20px;"}, {class :"nameDiv"}
    ]);

    const firstName = this.createMarkup("input", "", nameDiv, [
      {type : "text"},{id : "fname"},{name : "fname"},{placeholder : "Votre prénom"}, {required: "required"},{style: "font-weight: bold;border-radius: 5px; margin-right: 10px; width: 50%;"}, {class: "input-footer firstName"},
    ]);

    const lastName = this.createMarkup("input", "", nameDiv, [
      {type : "text"},{id : "lname"},{name : "lname"},{placeholder : "Votre nom"}, {required: "required"},{style: "border-radius: 5px; font-weight: bold; width: 50%;"}, {class: "input-footer lastName"}, 
    ]);

    const select = this.createMarkup("select", "Selectionnez", contactForm, [
      {name : "contactType"},{id : "contactType"},{style: "font-weight: bold;border-radius: 5px; margin-bottom: 10px; color: grey"}, {class: "input-footer"}
    ]);

    const selectInstruction = this.createMarkup("option", "Selectionnez", select, [
      {value : "" }, {style: "font-weight: bold;"}, {disabled : true},
    ]);
    
    const select1 = this.createMarkup("option", "Investisseur", select, [
      {value : "Investisseur"}, {style: "font-weight: bold;"}
    ]);

    const select2 = this.createMarkup("option", "Ambassadeur", select, [
      {value : "Ambassadeur"}, {style: "font-weight: bold;"}
    ]);

    const select3 = this.createMarkup("option", "Technique", select, [
      {value : "Technique"}, {style: "font-weight: bold;"}
    ]);

    const email = this.createMarkup("input", "", contactForm, [
      {type : "mail"},{id : "email"},{name : "email"},{placeholder : "Votre mail"},{required: "required"},{style: "font-weight: bold;border-radius: 5px; margin-bottom: 10px;"}, {class: "input-footer"}
    ]);

    const send = this.createMarkup("input", "Envoyer", contactForm, [
      {type : "submit"},
      {style: "cursor: pointer; font-weight: bold; border: none; border-radius: 5px; height: 25px; font-size: 12px; color: white; background-color: #cc0000; text-align: center; items-align: center;"}, {class: "input-footer"}
    ]);

    document.body.appendChild(footer);
  }
}
