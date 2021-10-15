// Write your solution in this file!

const employee = {
    name: "rose",
    streetdress: "4 Does not exist Ave"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let copy = {...employee}
    copy[key] = value
    //copy[“name”] = “Sam”   (hard coding)
    return copy
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee 
}

function deleteFromEmployeeByKey(employee, key) {
    let copy = {...employee} 
    delete copy[key]
    return copy
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}