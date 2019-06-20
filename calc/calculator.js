let fa1;
let fa2;
let term1;
let term2;
let result;
let answer, button;

function setup() {

    fa1 = select('#fa1');
    fa2 = select('#fa2');
    term1 = select('#term1');
    term2 = select('#term2');
    answer = select('#answer');
    button = select('#submit');
    button.mousePressed(_ => {
        httpGet(`calculator.php?fa1=${fa1.value()}&fa2=${fa2.value()}&term1=${term1.value()}&term2=${term2.value()}`, res => answer.value(res))

    })
}

function draw() {}