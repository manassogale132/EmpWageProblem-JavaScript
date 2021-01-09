console.log("\n----------------------------------------------------------\n"+
            "--Welcome to Employee Wage Computation Problem--\n"+
            "----------------------------------------------------------\n");

const fullDayHour = 8;     
const partTimeHour = 4;                                            
const wagePerHour = 20;
var fullWage = fullDayHour * wagePerHour;                      //Calculate daily employee wage  (full-wage)
var partTimeWage = partTimeHour * wagePerHour;                 //Calculate parttime wage added  (partime-wage)


var attendance = Math.floor(Math.random() * 3) + 1;                  //Attendance check


switch(attendance) {                                                  //Solved using switch case statement

    case 1:
        console.log("Employee is Absent\n");
        break;

    case 2:
        console.log("Employee is Parttime");
        console.log("PartTime Employee Wage is : " + partTimeWage + "\n");
        break;
    
    case 3:
        console.log("Employee is Present");
        console.log("Full Employee Wage is : " + fullWage + "\n");
        break;

    default:
        console.log("No such Case");
        break;
}