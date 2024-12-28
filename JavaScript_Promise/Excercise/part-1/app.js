let baseURL = "http://numbersapi.com";
let favNumber = [3];

// 1. 좋아하는 숫자에 대한 정보를 요청하고, JSON 형식으로 응답을 받습니다.
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
  console.log(data);
})

// 2. 여러 개의 좋아하는 숫자에 대한 정보를 요청하고, JSON 형식으로 응답을 받습니다.
let favNumbers = [7, 11, 22];

$.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
  console.log(data);
});

// 3. 좋아하는 숫자에 대한 정보를 4번 요청하고, 각 응답 데이터를 페이지에 추가합니다.
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseURL}/${favNumber}?json`); // 좋아하는 숫자에 대한 정보를 요청합니다.
  })
).then(facts => {
  facts.forEach(data => $("body").append(`<h3>${data.text}</h3>`)); // 각 응답 데이터를 HTML <h3> 태그로 감싸서 페이지의 본문에 추가합니다.
})