var heads = prompt("На ферме Вы насчитали всего голов");
var legs = prompt("На ферме Вы насчитали всего ног");


if (heads != 72 || legs != 200){	
alert ("Неверно! Посчитайте еще раз!");	
}

else if (heads == 72 && legs == 200){	
alert('Поздравляем! Вы насчитали на ферме ' + heads + ' головы и ' + legs + ' ног у живтных.');
}
	

function animals (heads, legs){	
	var chickens=(heads*4-legs)/2;	
	var cows=(heads-chickens);	
	  return [chickens, cows];
}


alert('По Вашим рассчетам на ферме ' + animals ( heads, legs ) +  ' куриц и коров соответственно.');