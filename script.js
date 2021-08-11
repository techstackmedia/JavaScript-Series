console.log('Hello World!');
document.write('<h1>Hello World!</h1>');
// alert('Hello World!');

const elem = document.querySelector('#para');
elem.innerHTML = '<h1>Inner HTML</h1>';
// elem.innerText = '<h1>Inner Text</h1>';
elem.textContent = '<h1>Text Content</h1>';