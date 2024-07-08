let menu = document.getElementById('myItens');

menu.style.maxHeight = '0px';


document.querySelector('.menu').addEventListener('click', () => {

   if(menu.style.maxHeight == '150px') {
        menu.style.maxHeight = '0px';
   }else {
        menu.style.maxHeight = '150px';
   }

});

