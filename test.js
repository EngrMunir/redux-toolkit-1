
const employee ={ 
    name: "Mir",
    address:{ country: "Bangladesh", city:"Dhaka"}
};

const employee2 = {
    ...employee, 
    name:"munir",
    address:{...employee.address, city:"Chittagong"}
};


console.log(employee);
console.log(employee2);