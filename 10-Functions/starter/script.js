'use strict';

const runOnce = function() {
  console.log('This will never run again');
}

//IIFE - Immediately invoked function expression
(function() {
  console.log('This will never run again');
})()

(() => console.log('This will ALSO never run again'))

{
  const isPrivate = 23;
  var notPrivate = 46;
}

const secureBooking = function () {
  let passengerCount = 0;
+`  `
  return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`)
  }
}

const booker = secureBooking()

(function (){
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function(){
    header.style.color = 'blue'
  })
})();

