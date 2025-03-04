const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

//method to calculate daily wage
function calculateDailyWage(employeeHour){
    return totalEmployeeHour * WAGE_PER_HOUR;
}
//method to calculate working hour
function getWorkingHour(employeeCheck){
    switch(employeeCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
//number of working day
const NUMBER_OF_DAYS = 20;
const MAX_HOUR_IN_MONTH = 160;
let totalEmployeeHour = 0;
let totalWorkingDay = 0;

//array to store daily wage
let dailyWageArray = new Array();

while(totalEmployeeHour <= MAX_HOUR_IN_MONTH && totalWorkingDay < NUMBER_OF_DAYS){
    totalWorkingDay++;
    let employeeCheck = Math.floor(Math.random()*10%3);
    let employeeHour = getWorkingHour(employeeCheck);
    totalEmployeeHour += employeeHour;
    dailyWageArray.push(calculateDailyWage(employeeHour));
}

let employeeWage = calculateDailyWage(totalEmployeeHour)

//print result
console.log(dailyWageArray);
console.log("total days ",totalWorkingDay," total hours ", totalEmployeeHour, " employee wage ", employeeWage)