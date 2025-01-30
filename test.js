// mutation handle
// const employee ={ 
//     name: "Mir",
//     address:{ country: "Bangladesh", city:"Dhaka"}
// };

// const employee2 = {
//     ...employee, 
//     name:"munir",
//     address:{...employee.address, city:"Chittagong"}
// };

// console.log(employee);
// console.log(employee2);

// function currying

// normal function
// const add = (a,b) => a+b;

const add =(a)=>(b)=>a+b;

// console.log(add(5)(5));

function add2(a){
    return function (b){
        return a+b;
    }
}

console.log(add2(2)(3))

const totalPrice =(discount) =>(amount) => amount-amount*discount;

const withDiscount = totalPrice(0.3);

console.log(withDiscount(100));
console.log(withDiscount(300));
console.log(withDiscount(400));
console.log(withDiscount(500));