import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form')
form.addEventListener('submit', onFormSubmit)
function onFormSubmit(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget;
  let delayValue = Number(delay.value);
  let stepValue = Number(step.value);
  let amountValue = Number(amount.value);
  for (let i = 1; i <= amountValue; i += 1){

    createPromise(i, delayValue)
  .then(({ position, delayValue }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delayValue}ms`);
  })
  .catch(({ position, delayValue }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delayValue}ms`);
  });
    delayValue += stepValue;
  }
  }
  
function createPromise(position, delay) {
  const object = { position, delay };

  const shouldResolve = Math.random() > 0.3; 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) { 
    resolve(object)
  } else {
    reject(object)
  }
    }, delay)
  }) 
}



