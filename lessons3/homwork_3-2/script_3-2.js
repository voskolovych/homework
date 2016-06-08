var howPuppies = prompt("Друг! Сколько ты принёс щенков?");

var reaction = ["Чего так мало?", "Более чем достаточно!", "Почему их так много?", "Ого, 101 далматинец!"];

var respond;

function howManyAnimals(number) {
	
   if (number <= 10) {	   
       respond = reaction[0];	   
   }   
   else if (number <= 50) {	   
       respond = reaction[1];	   
   }
      else if (number <= 100) {	   
       respond = reaction[2];
   }
   else if (number == 101) {
       respond = reaction[2] + " " + reaction[3];
   }

    return respond;
}
 alert (howManyAnimals(howPuppies));