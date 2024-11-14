const allLetters = 'The quick brown fox jumps over the lazy dog';

//const title = document.querySelector('h1');
//title.textContent = allLetters;

document.querySelector('h1').textContent = allLetters;

const lists = document.querySelectorAll('ul li');

//change list item to uppercase
lists[0].textContent = allLetters.toUpperCase();

//change list item to lowercase
lists[1].textContent = allLetters.toLowerCase();

//length method
lists[2].innerHTML = '<strong>length of string: </strong>' + allLetters.length;

//charAt method
lists[4].innerHTML = '<strong>character at 10: </strong>'.concat('letter ',allLetters.charAt(10));

//replace method
lists[3].innerHTML = allLetters.replace('dog', 'cat')

//replace all method
lists[5].innerHTML = allLetters.toLowerCase().replaceAll('the', 'that')

document.getElementById('week1').innerText =
`Society grows when
    men plant trees
            whose shed they will never seat under`;


document.getElementById('week2').innerText =
`Society grows when\nmen plant trees \nwhose shed they will\nnever seat under`;

document.getElementById('week3').textContent = `Fox is at index ${allLetters.indexOf('fox')}`

document.getElementById('week4').textContent = "Foox is at index " + allLetters.indexOf('foox')

document.getElementsByClassName('front')[0].textContent = 'Does the string contain "lazy": ' + allLetters.includes('lazy')

document.getElementsByClassName('front')[1].textContent = 'Does the string contain "hardworking": ' + allLetters.includes('hardworking')

document.querySelectorAll('.front')[2].innerHTML = 'Does the string start with "The": ' + allLetters.startsWith('The')

//split method
document.querySelectorAll('.front')[3].innerHTML = allLetters.split(' ').length

//slice method
document.getElementsByTagName('li')[10].textContent = allLetters.slice(0, allLetters.indexOf("x")+1)