let header_text = "precision: "
let num = 0
fun_for_scale()
function fun_for_scale() {
  document.getElementById("precision header").textContent =
    header_text + document.getElementById("my_range").value
}

function on_click_plus() {
  num = Number(document.getElementById("my_range").value)
  let answer = String(
    parseFloat(document.getElementById("num1").value) +
      parseFloat(document.getElementById("num2").value)
  )
  document.getElementById("answer").innerText =
    "answer=" + answer.slice(0, answer.indexOf(".") + num + 1)
}
function on_click_minus() {
  num = Number(document.getElementById("my_range").value)
  let answer = String(
    parseFloat(document.getElementById("num1").value) -
      parseFloat(document.getElementById("num2").value)
  )
  document.getElementById("answer").innerText =
    "answer=" + answer.slice(0, answer.indexOf(".") + num + 1)
}
function on_click_mul() {
  num = Number(document.getElementById("my_range").value)
  let answer = String(
    parseFloat(document.getElementById("num1").value) *
      parseFloat(document.getElementById("num2").value)
  )
  document.getElementById("answer").innerText =
    "answer=" + answer.slice(0, answer.indexOf(".") + num + 1)
}
function on_click_div() {
  num = Number(document.getElementById("my_range").value)
  let answer = String(
    parseFloat(document.getElementById("num1").value) /
      parseFloat(document.getElementById("num2").value)
  )
  document.getElementById("answer").innerText =
    "answer=" + answer.slice(0, answer.indexOf(".") + num + 1)
}

