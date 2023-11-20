const scripty = document.createElement("script");
const alerty = document.createTextNode("alert()");
scripty.appendChild(alerty);
const element = document.getElementById("log");
element.appendChild(scripty);
