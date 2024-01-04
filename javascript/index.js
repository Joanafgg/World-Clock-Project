/** @format */
function updateTime() {
  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = `${tokyoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  // New York
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");
  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = `${newYorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  // Berlin
  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = berlinElement.querySelector(".date");
  let berlinTimeElement = berlinElement.querySelector(".time");
  let berlinTime = moment().tz("Europe/Berlin");
  berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
  berlinTimeElement.innerHTML = `${berlinTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  // Nairobi
  let nairobiElement = document.querySelector("#nairobi");
  let nairobiDateElement = nairobiElement.querySelector(".date");
  let nairobiTimeElement = nairobiElement.querySelector(".time");
  let nairobiTime = moment().tz("Africa/Nairobi");
  nairobiDateElement.innerHTML = nairobiTime.format("MMMM Do YYYY");
  nairobiTimeElement.innerHTML = `${nairobiTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}
updateTime();

setInterval(updateTime, 1000);
