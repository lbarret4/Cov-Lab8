window.addEventListener('DOMContentLoaded',function(){

let headerDiv = document.createElement('div');
headerDiv.setAttribute('class','header-container');
document.body.appendChild(headerDiv);

let h1 = document.createElement('h1');
headerDiv.appendChild(h1);  
let h1Text = document.createTextNode('This is an h1');
h1.appendChild(h1Text);
document.body.appendChild(h1);

let h2 = document.createElement('h2');
headerDiv.appendChild(h2);
let h2Text = document.createTextNode('This is an h2');
h2.appendChild(h2Text);
document.body.appendChild(h2);
});