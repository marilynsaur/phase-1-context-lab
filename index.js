/* Your Code Here */
function createEmployeeRecord(array) {
    let testEmployee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    //console.log(this)
    return testEmployee;
}

function createEmployeeRecords(employeeData) {
    let newArray = employeeData.map(row =>createEmployeeRecord(row));
    return newArray;
}

function createTimeInEvent(employeeRecord) {
    //console.log(employeeRecord)
    //console.log(this)
    const [date,hour] = employeeRecord.split(' ');
    //console.log(employeeRecord[0])
    this.timeInEvents.push({
     type: "TimeIn",
     date:  date,
     hour: parseInt(hour)
    })
    
    return this;
    };

    
      

function createTimeOutEvent(employeeRecord) {
    const [date,hour] = employeeRecord.split(' ');
  
   this.timeOutEvents.push({
        type: "TimeOut",
        date:  date,
        hour: parseInt(hour)
       })
     
       return this;

}

function hoursWorkedOnDate(date) {
   
   //console.log(employeeRecord)
     const clockIn = this.timeInEvents.find(event => event.date === date );
    // console.log(clockIn.hour)
     const clockOut = this.timeOutEvents.find(event => event.date === date );
    // console.log(clockOut.hour)
    let hrEarn = (clockOut.hour - clockIn.hour)/100;
    
    //console.log(hrEarn)
    return hrEarn;

} 

function wagesEarnedOnDate(date) {

  let earnedWages =  hoursWorkedOnDate.call(this,date);
  const payRate   = this.payPerHour ;
     let check = payRate *  earnedWages;
     return check;
    }

function findEmployeeByFirstName(collection, firstNameString) {
  //console.log("collection",collection)
  //console.log("firstNameString",firstNameString)
  const found = collection.find(name => name.firstName === firstNameString);

   return  found;
  }
  
  

//findEmployeeByFirstName.call(collcection,firstNameString)
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function calculatePayroll(employeeRecords) {
    console.log("toastycheese",this)
    let payroll =  employeeRecords.reduce(function (memo, rec) {
        return memo + allWagesFor.call(rec)
    }.bind(this), 0)

    //let payRoll = employeeRecords.reduce((memo,rec) =>{
     //   return memo + allWagesFor(rec)  
    //},0);
    return payroll;
   


}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


