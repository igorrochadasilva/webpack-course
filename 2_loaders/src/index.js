import Title from "./components/title.js";
import Image from "./components/image.js";
import Button from "./components/button.js";
import warning from './templates/warning.html'
import './style/warning.css'
import fraseTxt from './files/frase.txt'
import descricao from './files/descricao.json'

const title = new Title();
const image = new Image();
const button = new Button();


title.create('Primeira página')
image.insertImage()
button.create()

//babel spread

const obj = {a: 1, b: 2, c: 3, d: 4};

let {a, b, ...teste} = obj;

console.log(a);
console.log(b);
console.log(teste);

const body = document.querySelector('body');
body.innerHTML += warning;

const frase = fraseTxt;

console.log(frase.toUpperCase())

const pessoa = descricao
console.log(pessoa)