
function calculate() {
    let d = document.getElementById("devops").value;
    let c = document.getElementById("docker").value;
    let marks = 0;

    if (d.trim().length > 10) marks += 50;
    if (c.trim().length > 10) marks += 50;

    let result = document.getElementById("result");

    if (marks === 100) {
        result.innerHTML = "You scored 100 marks!";
    } else if (marks === 50) {
        result.innerHTML = "You scored 50 marks!";
    } else {
        result.innerHTML = "Fail! You scored 0 marks.";
    }
}
