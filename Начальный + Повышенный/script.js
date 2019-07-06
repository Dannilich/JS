// Задание №1
console.warn("Задание №1");

var sumOfNums = 0;
for(let i = 10; i<=20; i++)console.log(
	"Квадрат",i," =",
	-(sumOfNums - (sumOfNums += i))*i);

console.info("Сумма чисел =",sumOfNums)

// Задание №2
var resultBoard = document.getElementById('result');

function button_action() {
		var x1 = parseInt(document.getElementById('x1').value);
		var x2 = parseInt(document.getElementById('x2').value);
	
	if (Number.isNaN(x1) || Number.isNaN(x2)) {
		alert("В полях должны быть введены числа!");
	

	}else{
		
		var option = document.getElementsByName('mod');
		
		if (option[0].checked) {//сумма

			var result = 0;
			for (var i = x1; i < x2; i++) {
				result += i;
			}
		}

		if (option[1].checked) {//переумножение

			var result = 1;
			for (var i = x1; i < x2; i++) {
				result *= i;
			}
		}

		if (option[2].checked) {//простые числа
			
			var result = [];
			for (var i = x1; i < x2; i++) {
				console.log(i)
				if (is_natural_num(i,i-1))result.push(i);
			}

			

		}
		
		resultBoard.innerHTML = "Итог: "+result;

		//строка отпла из-за ненужности по заданиям
		//resultBoard.innerHTML = "Х1 + Х2 = "+(x1 + x2);
	}
	
}

function clear_all() {
	document.getElementById('x1').     value = "";
	document.getElementById('x2').     value = "";
	document.getElementById('result'). innerHTML = '';

}

function is_natural_num(x,i){
	if (i == 1) return true;
	if ((x % i) == 0) return false;

	return (is_natural_num(x,i-1));
}