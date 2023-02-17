// Q1.. update this object with 4 more properties
const myObj={
    fname:"joe",
    lname:"shmoe",
    age:"12",
    gender:"female",
    country:"nigeria",
    state:"Kaduna",
};   
for (const property in myObj){
    console.log('$ {property}: $ {myObj[property]}');
}
// Q2
let object1= {fname: "joe", lname: "shmoe"};
let object2= {gender: "male", age: "12"};
let object3={country: "Nigeria", state: "kaduna"};

let array = [object1, object2, object3];