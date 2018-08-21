window.addEventListener('DOMContentLoaded',function(){

    let headerDiv = document.createElement('div');
    headerDiv.setAttribute('class', 'header-container');
    document.body.appendChild(headerDiv);
    
    let h1 = document.createElement('h1');
    headerDiv.appendChild(h1);  
    let h1Text = document.createTextNode('This is an h1');
    h1.appendChild(h1Text);
    h1.setAttribute('class', 'h1');
    document.body.appendChild(h1);
    
    let h2 = document.createElement('h2');
    headerDiv.appendChild(h2);
    let h2Text = document.createTextNode('This is an h2');
    h2.appendChild(h2Text);
    h2.setAttribute('class', 'h2');
    document.body.appendChild(h2);
    
    let h3 = document.createElement('h3');
    headerDiv.appendChild(h3);
    let h3Text = document.createTextNode('This is an h3');
    h3.appendChild(h3Text);
    h3.setAttribute('class', 'h3');
    document.body.appendChild(h3);
    
    let h4 = document.createElement('h4');
    headerDiv.appendChild(h4);
    let h4Text = document.createTextNode('This is an h4');
    h4.appendChild(h4Text);
    h4.setAttribute('class', 'h4');
    document.body.appendChild(h4);
    
    let h5 = document.createElement('h5');
    headerDiv.appendChild(h5);
    let h5Text = document.createTextNode('This is an h5');
    h5.appendChild(h5Text);
    h5.setAttribute('class', 'h5');
    document.body.appendChild(h5);
    
    let h6 = document.createElement('h6');
    headerDiv.appendChild(h6);
    let h6Text = document.createTextNode('This is an h6');
    h6.appendChild(h6Text);
    h6.setAttribute('class', 'h6');
    document.body.appendChild(h6);
});