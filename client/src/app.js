var Frank = require('./domain/models/dude')
import './styles/style.css'; 

window.onload = function () {
  var frank = new Frank();
  var element = document.getElementById('name');
  element.innerText = frank.name;
}