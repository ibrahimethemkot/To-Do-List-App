let ToDobtnAdd = document.getElementById('btnAdd');
let myList = document.getElementById('myList');
let inputText = document.getElementById('inputText');
let btnClearAll = document.getElementById('btnClearAll');


ToDobtnAdd.addEventListener('click', function(){
    let list = document.createElement('li');
    myList.appendChild(list);
    list.innerHTML = inputText.value;
    inputText.value = '';

   list.addEventListener('click', function(){
       list.style.textDecoration = 'line-through'
   });
});

/* Silme işlemleri */ 

btnClearAll.addEventListener('click', function(){
    myList.remove();
});

