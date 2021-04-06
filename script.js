let header_text = "precision: "
let num = 0
let full_answer = "."
let answer = "."
fun_for_scale()
function fun_for_scale() {
  num = Number(document.getElementById("my_range").value)
  document.getElementById("precision header").textContent =
    header_text + document.getElementById("my_range").value

  final_answer = full_answer.slice(0, full_answer.indexOf(".") + num + 1)
  if (!isFinite(final_answer)) {
    document.getElementById("answer").innerText = "please fill the input"
  }
  if (full_answer.indexOf(".") === -1) {
    document.getElementById("answer").innerText = "answer=" + full_answer
    return
  }
    document.getElementById("answer").innerText = "answer=" +  full_answer.slice(0, full_answer.indexOf(".") + num + 1)

  console.log(final_answer)
  console.log(isFinite(final_answer))
}

function on_click_plus() {
  num = Number(document.getElementById("my_range").value)
  answer = String(
    parseFloat(document.getElementById("num1").value) +
      parseFloat(document.getElementById("num2").value)
  )
  full_answer = answer
  if (!isFinite(answer)) {
    document.getElementById("answer").innerText = "please fill the input"
    return
  }
  if (answer.indexOf(".") === -1) {
    document.getElementById("answer").innerText = "answer=" + answer
    return
  }
  document.getElementById("answer").innerText = "answer=" +  answer.slice(0, answer.indexOf(".") + num + 1)
}

function on_click_minus() {
  num = Number(document.getElementById("my_range").value)
  answer = String(
    parseFloat(document.getElementById("num1").value) -
      parseFloat(document.getElementById("num2").value)
  )
  full_answer = answer
  if (!isFinite(answer)) {
    document.getElementById("answer").innerText = "please fill the input"
    return
  }
  if (answer.indexOf(".") === -1) {
    document.getElementById("answer").innerText = "answer=" + answer
    return
  }
  document.getElementById("answer").innerText = "answer=" +  answer.slice(0, answer.indexOf(".") + num + 1)
}
function on_click_mul() {
  num = Number(document.getElementById("my_range").value)
  answer = String(
    parseFloat(document.getElementById("num1").value) *
      parseFloat(document.getElementById("num2").value)
  )
  full_answer = answer
  if (!isFinite(answer)) {
    document.getElementById("answer").innerText = "please fill the input"
    return
  }
  if (answer.indexOf(".") === -1) {
    document.getElementById("answer").innerText = "answer=" + answer
    return
  }
  document.getElementById("answer").innerText = "answer=" +  answer.slice(0, answer.indexOf(".") + num + 1)
}
function on_click_div() {
  num = Number(document.getElementById("my_range").value)
  answer = String(
    parseFloat(document.getElementById("num1").value) /
      parseFloat(document.getElementById("num2").value)
  )
  full_answer = answer
  if (!isFinite(answer)) {
    document.getElementById("answer").innerText = "please fill the input"
    return
  }
  if (answer.indexOf(".") === -1) {
    document.getElementById("answer").innerText = "answer=" + answer
    return
  }
  document.getElementById("answer").innerText = "answer=" +  answer.slice(0, answer.indexOf(".") + num + 1)
}
