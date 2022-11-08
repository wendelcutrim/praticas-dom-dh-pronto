console.log("Start JS");

//Seletores

//Exdercício 1
const titular = document.querySelector("#titular");
console.log(titular);

titular.style.display = "none";

//Exercício 2
const imagemCoruja = document.querySelector("#lechuza");
imagemCoruja.style.filter = "grayscale(100%)";

//Exercício 3
const formInputs = document.querySelectorAll(".formulario input");
console.log(formInputs);

formInputs.forEach(input => input.style.backgroundColor = "red");

//Dom atributos

//Exercício 1
const copyright = document.querySelector("#copyright");
console.log("Atributos do copyright: \n", copyright.attributes);

//Exercício 2
const twitterButton = document.querySelector(".fa-twitter");
console.log(twitterButton);
console.log("Url do botão do Twitter: \n" + twitterButton.getAttribute("href"));
/* console.log("Url do botão do Twitter: \n" + twitterButton.href); */

//Exercício 3
const facebookButton = document.querySelector(".fa-facebook");
console.log(facebookButton);
console.log("Url do botão do Facebook: \n" + facebookButton.getAttribute("href"));

const youtubeButton = document.querySelector(".fa-youtube");
console.log(youtubeButton);

//Exercício 4
youtubeButton.setAttribute("href", "https://www.youtube.com/c/DigitalHouseBrasil");
youtubeButton.setAttribute("target", "_blank");

//Exercício 5
const form = document.querySelector(".formulario");
console.log(form);

//Exercício 6;
form.setAttribute("action", "http://www.digitalhouse.com");
form.removeAttribute("url");

//Exercício 7
const h2 = document.querySelectorAll("h2");
h2.forEach(el => el.style.color = "red");

//Exercício 8
const icons = document.querySelectorAll(".icon");
icons.forEach(icon => icon.style.backgroundColor = "#680094");