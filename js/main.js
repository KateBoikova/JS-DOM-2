'use strict';

// 1.Сделать два инпута: в один вводить параметр(число), во втором показывать объем шара при заданном параметре. Навесить валидацию на 1-й инпут.

const [ body ] = document.getElementsByTagName('body');
const input = document.createElement('input');
body.append(input);
const output = document.createElement('input');
body.append(output);
input.setAttribute('pattern', '\\d+');
output.setAttribute('readonly', true);
input.setAttribute('id', 'number');
const label = document.createElement('label');
body.prepend(label);
label.setAttribute('for', 'number');
label.innerText = 'Enter a radius of a sphere:';

function sphereVolume (e) {
  if (input.checkValidity()) {
    output.value =  (4/3) * Math.PI * Math.pow(Number(input.value), 3);
  } else {
    output.value = 'Enter a number, please';
  }
}

input.onchange = sphereVolume;

// 2.Дан элемент #elem. Реализуйте 4 функции:
// - Добавьте ему класс www.
// - Удалите у него класс www.
// - Проверьте наличие у него класса www.
// - Добавьте ему класс www, если его нет и удалите - если есть.
// (https://developer.mozilla.org/ru/docs/Web/API/Element/classList)

const p = document.createElement('p');
body.append(p);
p.setAttribute('id', 'elem');
p.classList.add('www');
p.classList.remove('www');
p.classList.contains('www');
p.classList.toggle('www');

// 3. Вставьте элементы массива объектов (id, title, description) в конец ul так, чтобы каждый на каждый объект был свой li.
// Сделайте так, чтобы по нажатию на li - он подсвечивался другим цветом.
// Сделайте так, чтобы по нажатию на кнопку внутри li эта li удалялась из разметки.

const arr = [
  { 
    id: 1,
    title: 'Book1',
    description: 'Interesting ',
  },
  { 
    id: 2,
    title: 'Book2',
    description: 'Boring ',
  },
  { 
    id: 3, 
    title: 'Book3',
    description: 'Epic ',
   },
];

const ul = document.createElement('ul');
body.append(ul);
for (const obj of arr) {
  const li = document.createElement('li');
  body.append(li);
  const {title, description} = obj;
  li.innerText = title + ' - ' + description;
  const btn = document.createElement('button');
  li.append(btn);
  btn.innerText = 'remove';
  btn.onclick = e => {
    e.target.parentElement.remove();
  }
  li.onclick = e => {
    for (const child of e.target.parentElement.children) {
      child.style.color = 'black';
    }
    e.target.style.color = 'pink';
  };
}

