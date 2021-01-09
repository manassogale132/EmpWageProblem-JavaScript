console.log("\n----------------------------------------------------------\n"+
            "--Welcome to Employee Wage Computation Problem--\n"+
            "----------------------------------------------------------\n");

const fullDayHour = 8;     
const partTimeHour = 4;                                            
const wagePerHour = 20;    
const workingHoursPerMonth = 100;     
const workingDaysPerMonth = 20;        

var fullWage = fullDayHour * wagePerHour;                      //Calculate daily employee wage  (fullWage)
var partTimeWage = partTimeHour * wagePerHour;                 //Calculate parttime wage added  (partTimeWage)

var sum = 0;
var workHour = 0;
var workDay = 1;

while(workHour <= workingHoursPerMonth && workDay <= workingDaysPerMonth) {   //Two Condition To be Checked  

  var attendance = Math.floor(Math.random() * 3) + 1;       //Attendance check

  switch (attendance) {                                                       //Solved using switch case statement 
    
    case 1 :
      console.log("Day no : " + workDay + "\n" +
                  "Employee is Absent.\n"+
                  ".....");
      break;

    case 2 :
      sum = sum + partTimeWage;
      workHour = workHour + partTimeHour;
      console.log("Day no : " + workDay + "\n" +
                  "Hour no : " + workHour + "\n" +
                  "Employee is Parttime." + "\n" +
                  "PartTime Employee Wage is : " + partTimeWage + "\n" +
                  "Total Wage is : " + sum + "\n" +
                  ".....");
      break;

    case 3 :
      sum = sum + fullWage;
      workHour = workHour + fullDayHour;
      console.log("Day no : " + workDay + "\n" +
                  "Hour no : " + workHour + "\n" +
                  "Employee is Present." + "\n" +
                  "Full Employee Wage is : " + fullWage + "\n" +
                  "Total Wage is : " + sum + "\n" +
                  ".....")
      break;

    default:
      console.log("No such Case");
      break;
  }
  workDay++;
}
