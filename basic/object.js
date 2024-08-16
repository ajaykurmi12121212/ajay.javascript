// // singleton

// //object literals
// const Jsuser={
//     name:"ajay",
//     age : 14,
//     location: "pilibhit"
// }
// console.log(Jsuser.age);
// console.log(Jsuser["age"]);

// Jsuser.greeting = function(){
//     console.log("hello sir");
    
// }
// console.log(Jsuser.greeting());

// Jsuser.greeting2 = function(){
//     console.log('hello sir,${this.name}');
    
// } 
// console.log(Jsuser.greeting2());

 
const tinderUser={}
tinderUser.id="23qf"
tinderUser.name="ajay"
tinderUser.age=19
console.log(tinderUser);
const regularUser={
    email:"ajay12@gmail.com",
    userName : {
        fullname:{
            name:"ajay kumar"

        }

    }
}
// console.log(regularUser.userName.fullname);

// obj1={1:"a",2:"b"}
// obj2={3:"c",4:"d"}

// // const obj3=Object.assign({},obj1,obj2)
// // console.log(obj3);
// const obj3={...obj1,...obj2}
// console.log(obj3)


const course={
    cursename:"js",
    price:1000,

}
const {coursename: ravi}=course
console.log(ravi);
