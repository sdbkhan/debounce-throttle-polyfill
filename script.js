//   const elementt = document.getElementById('myElement');
//   elementt.addEventListener('myEvent', event => {
//      console.log('Custom event triggered!', event.detail);
//    });

const btn = document.querySelector(".btn-Increse");
const pressCount = document.querySelector(".press-count");
const trigCount = document.querySelector(".trig-count");
let pressCunctV = 0;
let trigcounts = 0;

// throttle polyfill 
const throtlePolyfill = (cb, delay) => {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();

    if (now - last < delay) return;
    last = now;
    return cb(...args);
  };
};
const throttleFun = throtlePolyfill(() => {
  trigcounts += 1;
  trigCount.innerHTML = trigcounts;
}, 1000);
btn.addEventListener("click", () => {
  pressCount.innerHTML = ++pressCunctV;
  throttleFun();
});
// debounce polyfill
const debouncePolyfill = (cb, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};
const debounceCount = debouncePolyfill(() => {
  trigcounts += 1;
  trigCount.innerHTML = trigcounts;
}, 800);
btn.addEventListener("click", () => {
  pressCount.innerHTML = ++pressCunctV;
  debounceCount();
});
