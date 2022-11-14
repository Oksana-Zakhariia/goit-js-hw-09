import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form')
form.addEventListener('submit', onFormSubmit)
function onFormSubmit(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget;
  let delayValue = Number(delay.value);
  let stepValue = Number(step.value);
  let amountValue = Number(amount.value);
  for (let i = 1; i <= amountValue; i += 1) {    

    createPromise(i, delayValue);
  }
  
  function createPromise(position, delayValue){
    const shouldResolve = Math.random() > 0.3;
    const object = {position, delayValue}
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (shouldResolve) {
            Notify.success(`✅ Fulfilled promise ${position} in ${delayValue}ms`);
            resolve(object)
          } else {
            Notify.failure(`❌ Rejected promise ${position} in ${delayValue}ms`);
            reject(object)
          }
          delayValue += stepValue
        }, delayValue)
      })
    }
  }
