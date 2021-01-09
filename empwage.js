console.log("\n----------------------------------------------------------\n"+
            "--Welcome to Employee Wage Computation Problem--\n"+
            "----------------------------------------------------------\n");

const fullDayHour = 8;                                              
const wagePerHour = 20;
var fullWage = fullDayHour * wagePerHour;                      //Calculate daily employee wage  (full-wage)

console.log("Full Employee Wage is : " + fullWage);

var attendance = Math.floor(Math.random() * 2) + 1;                  //Attendance check

if (attendance == 1) {
  console.log("Employee is Absent");
} else {
  console.log("Employee is Present");
}
                                                