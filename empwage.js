console.log("\n----------------------------------------------------------\n"+
            "--Welcome to Employee Wage Computation Problem--\n"+
            "----------------------------------------------------------\n");

const fullDayHour = 8;     
const partTimeHour = 4;                                            
const wagePerHour = 20;
var fullWage = fullDayHour * wagePerHour;                      //Calculate daily employee wage  (full-wage)
var partTimeWage = partTimeHour * wagePerHour;                 //Calculate parttime wage added  (partime-wage)


console.log("Full Employee Wage is : " + fullWage);
console.log("PartTime Employee Wage is : " + partTimeWage);

var attendance = Math.floor(Math.random() * 3) + 1;                  //Attendance check

if (attendance == 1) {
    console.log("Employee is Absent");
  } else if (attendance == 2) {
    console.log("Employee is Parttime");                            //Parttime employee added
  } else {
    console.log("Employee is Present");
  }
                