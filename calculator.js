let header_text = "precision: "
let num = 0
let full_answer = "."
let answer = "."

fun_for_scale()
function fun_for_scale() {
  num = Number(document.getElementById("my_range").value)
  document.getElementById("precision header").textContent =
    header_text + document.getElementById("my_range").value
  let final_answer = full_answer.slice(0, full_answer.indexOf(".") + num + 1)
  console.log(final_answer)
  if (!isFinite(final_answer) && final_answer !== "-") {
    document.getElementById("answer").innerText = "please fill the input"
    return
  }
  if (full_answer.indexOf(".") === -1) {
    document.getElementById("answer").innerText = "answer=" + full_answer
    return
  }

  document.getElementById("answer").innerText =
    "answer=" + full_answer.slice(0, full_answer.indexOf(".") + num + 1)
}

function main_function(operand) {
  num = Number(document.getElementById("my_range").value)
  if (operand === "/") {
    answer = String(
      parseFloat(document.getElementById("num1").value) /
        parseFloat(document.getElementById("num2").value)
    )
  } else if (operand === "+") {
    answer = String(
      parseFloat(document.getElementById("num1").value) +
        parseFloat(document.getElementById("num2").value)
    )
  } else if (operand === "*") {
    answer = String(
      parseFloat(document.getElementById("num1").value) *
        parseFloat(document.getElementById("num2").value)
    )
  } else if (operand === "-") {
    answer = String(
      parseFloat(document.getElementById("num1").value) -
        parseFloat(document.getElementById("num2").value)
    )
  }
  full_answer = answer
  if (!isFinite(answer)) {
    document.getElementById("answer").innerText = "please fill the input"
    return
  }
  if (answer.indexOf(".") === -1) {
    document.getElementById("answer").innerText = "answer=" + answer
    return
  }
  document.getElementById("answer").innerText =
    "answer=" + answer.slice(0, answer.indexOf(".") + num + 1)
}
function on_range_change_3d(direction) {
  if (direction==="upper_left"){
    document.querySelector("#sign_element").style.transform = `rotate3d(1, 1, 0, ${document.querySelector("#upper_left").value * 10}deg)`
  }
    if (direction==="upper_right"){
    document.querySelector("#sign_element").style.transform = `rotate3d(-1, 1, 0, ${document.querySelector("#upper_right").value * 10}deg)`
  }
    if (direction==="bottom_right"){
    document.querySelector("#sign_element").style.transform = `rotate3d(-1, -1, 0, ${document.querySelector("#bottom_right").value * 10}deg)`
  }
        if (direction==="bottom_left"){
    document.querySelector("#sign_element").style.transform = `rotate3d(1, -1, 0, ${document.querySelector("#bottom_left").value * 10}deg)`
  }
}
