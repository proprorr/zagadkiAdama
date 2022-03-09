let sah = document.querySelector('.sah'),
   sah2 = document.querySelector('.sah2'),
   sah3 = document.querySelector('.sah3'),
   sah4 = document.querySelector('.sah4'),
   error = document.querySelector('.error'),
   error2 = document.querySelector('.error2'),
   error3 = document.querySelector('.error3'),
   error4 = document.querySelector('.error4'),
   input = document.getElementsByTagName('input'),
   button = document.getElementById('button'),
   footerText = document.querySelector('.footer__text');


let userAnswer1 = "в земле",
   userAnswer2 = "1 яйцо",
   userAnswer3 = "сухих",
   userAnswer4 = "оля";

let sum = 0; 
let result = 4;

button.addEventListener('click', function(){
         if(input[0].value == userAnswer1 || input[0].value == 'В земле'){
            sah.style.display = "block";
            error.style.display = "none";
            sum++;
         }
         else{
            error.style.display = "block";
            sah.style.display = "none";
         }
         if(input[1].value == userAnswer2 || input[1].value == "1 Яйцо" || input[1].value == "Одно яйцо"){
            sah2.style.display = "block";
            error2.style.display = "none";
            sum++;
         }
         else{
            error2.style.display = "block";
            sah2.style.display = "none";
         }
         if(input[2].value == userAnswer3 || input[2].value == "Сухих" || input[2].value == "Сухие"){
            sah3.style.display = "block";
            error3.style.display = "none"; 
            sum ++;
         }
         else{
            error3.style.display = "block";
            sah3.style.display = "none";
         }
         if(input[3].value == userAnswer4 || input[3].value == "Оля"){
            sah4.style.display = "block";
            error4.style.display = "none"; 
            sum++;
         }
         else{
            error4.style.display = "block";
            sah4.style.display = "none";
         }

         emmor();
});

function emmor(){
   if(input == true){
      footerText.innerHTML = "Все правильно поздравляем!!!";
      button.style.display = "none";
   }
   else{
      result--;
      footerText.innerHTML = "Не правильно" + " У вас осталось " + result + " попытки";
   }
   if(result == 0){
      button.style.display = "none";
      footerText.innerHTML = "К сожалению вы проиграли :(" + "<br>" + "Правельные ответы являются: " + "<br>" + userAnswer1 + "<br>" + userAnswer2 + "<br>" + userAnswer3 + "<br>" + userAnswer4;
   }
}




