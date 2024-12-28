// function wait3Seconds() {
//   return new Promise((resolve, reject) => {
//     // setTimeout(resolve, 3000)
//     setTimeout(reject, 3000)
//   })
// }

// wait3Seconds()
//   .then(() => console.log("3 seconds passed"))
//   .catch((err) => console.log("error", err))

// console.log("still waiting")


// const h1 = document.querySelector("h1")
// setTimeout(function () {
//   h1.style.color = "red"
//   h1.style.backgroundColor = "blue"
//   setTimeout(() => {
//     h1.style.color = "white"
//     h1.style.backgroundColor = "Green"

//     setTimeout(() => {
//       h1.style.color = "white"
//       h1.style.backgroundColor = "Blue"
//       setTimeout(() => {
//         h1.style.color = "white"
//         h1.style.backgroundColor = "Red"
//         setTimeout(() => {
//           h1.style.color = "white"
//           h1.style.backgroundColor = "Yellow"
//         }, 1000)
//       }, 1000)
//     }, 1000)
//   }, 2000)
// }, 1000)


// const h1 = document.querySelector("h1")
// function changeColor(el, color, highlight) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       el.style.color = color;
//       el.style.backgroundColor = highlight;
//       resolve() // resolve the promise
//     }, 1000)
//   })
// }

// changeColor(h1, "teal", " Yellow")
//   .then(() => changeColor(h1, "green", "blue"))
//   .then(() => changeColor(h1, "red", "yellow"))
//   .then(() => changeColor(h1, "black", "green"))
//   .then(() => changeColor(h1, "magenta", "red"))
//   .then(() => changeColor(h1, "blue", "white"))



function mockAjaxRequest() {
  return new Promise(function (resolve, reject) {
    let probSuccess = 0.5;
    let requestTime = 1000;

    //We mock a network request using a setTimeout.
    //The request takes requestTime mileseconds.
    //Afterwords, the promsise is either resolve with data.
    //or rejected with a timeout message,
    //based on whether randomNum is less than probSuccess.

    setTimeout(function () {
      let randomNum = Math.random();
      if (randomNum < probSuccess) {
        let data = "Here's your data!";
        resolve(data);
      } else {
        reject("Sorry, your request failed.");
      }
    }, requestTime);
  })
}
mockAjaxRequest()
  .then(data => {
    console.log(data);
    return mockAjaxRequest()
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => console.log(err));
