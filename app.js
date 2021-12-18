var inputAmount = document.querySelector("#amount");
var inputBill = document.querySelector("#bill");
var change = document.querySelector("#change");
var submit = document.querySelector("#submit");

function calculate() {
    if((inputAmount.value==""||inputBill.value=="")||inputAmount.value<inputBill.value){
        alert("Something's wrong, I can feel it.");
        return;
    }
    var difference=inputAmount.value-inputBill.value;
    var money = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    cashTochange(difference, money);
    change.innerHTML = "<th>Number</th>";
    money.forEach(x => { change.innerHTML += "<td>" + x + "</td>" })
}

submit.addEventListener("click", calculate);

function cashTochange(num, money) {
    while (num > 0) {
        if (num >= 2000) {
            num -= 2000;
            money[0]++;
        }
        else if (num >= 500) {
            num -= 500;
            money[1]++;
        }
        else if (num >= 200) {
            num -= 200;
            money[2]++;
        }
        else if (num >= 100) {
            num -= 100;
            money[3]++;
        }
        else if (num >= 50) {
            num -= 50;
            money[4]++;
        }
        else if (num >= 20) {
            num -= 20;
            money[5]++;
        }
        else if (num >= 10) {
            num -= 10;
            money[6]++;
        }
        else if (num >= 5) {
            num -= 5;
            money[7]++;
        }
        else if (num >= 2) {
            num -= 2;
            money[8]++;
        }
        else if (num >= 1) {
            num -= 1;
            money[9]++;
        }
    }
}
