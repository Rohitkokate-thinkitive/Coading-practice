const num1=10;
// num1=20;
console.log(num1);


let emp={
    first_name:"Rohit",
    last_name:"Kokate",
    age:20,
    address:{
        dis:"Nashik",
        tal:"Sinner",
        post:"Somthane"
    },
    company:"Thinkitive"
}
console.log(emp.address.dis)
let arr1=new Array(10,20,30);
console.log(arr1);

arr1=Array(4);
console.log(arr1.length);

let Arr=[10,20,"ROhit",23.3];
console.log(Arr);
Arr[2]="Kokate";
console.log(Arr);

var numbers = [1,2,3,4,5];
var newNumbers = numbers.slice(1,4);
console.log(numbers);

console.log(newNumbers);

let odds = [1, 3, 5];
let evens = [2, 4, 6];

let results = [...odds, ...evens];

console.log({ results });

let arr = ['hello', 'ROhit', 'Kokate', 'This', 'is'];
arr.forEach(function (arrn, index) {
    console.log(`Name at index ${index} : ${arrn} `);

});
outerloop: for (let index = 0; index < 6; index++) {
    innerloop: for (let i = 0; i < 7; i++) {
        if(index>5){
            continue outerloop;
        }
        console.log(i);


    }

}


var a = 20;
function name() {
    let str ="ROhit";

    console.log(str,a,m);  
}
name();
if(a>=10){
        var m=20;
        console.log(str,a,m);  
        console.log(m);


}
console.log(m);  

function put(toy, toyBox = []) {
    toyBox.push(toy);
    return toyBox;
}

put('toy');
// console.log(put('Toy Car'));
// -> ['Toy Car']
console.log(put('Teddy Bear'));

function getScores() {
  return [70, 80, 90, 100];
}

let [x, y, ...args] = getScores();

console.log({ x, y, args });

let arr=(element) => {
    return element%2==0;
}
let result=[2,3,6,8].every(arr);
console.log(result);
let result1=[2,4,6,8].every((e) => ( e%2 === 0 ));
console.log(result1);



let p=new Promise((resolve,reject) =>{
    let a=1+1;
    if(a==2){
        resolve("SUCESS");
    }
    else{
        reject("Failed");
    }
})

p.then((messae)=>{
    console.log("This is From "+messae);
}).catch((messae) => {
    console.log("This is From "+messae);
})

function makeReq(location){
    return new Promise((resolve,reject) => {
        console.log(`Making the response Location ${location}`);
        if (location=="Google") {
            resolve("Google say hi");
        }
        else{
            reject("We Cannot talk to google");
        }
    })
}

function procReq(response) {
    return new Promise((resolve,reject) => {
        console.log("Promises Resolve");
        resolve("Extra information",response)
    })
}
async function Process() {
    //try{
        const req=await makeReq("Google");
        console.log("Response recived");
        const procResp=await procReq(req);
        // console.log(Respo);
    // }catch (err){
    //     console.log(err);
    // }
}

Process();


let userRole=new Map();
let john = {name: 'John Doe'},lily = {name: 'Lily Bush'},peter = {name: 'Peter Drucker'};
userRole.set(john,"admin");
console.log(userRole instanceof Map);
userRole.set(lily,"editor");
userRole.set(peter,"Subsciber");
console.log(userRole.get(john));

console.log("------------------------------------------------------\ ");

for(const use of userRole.keys()){
    console.log(use.name);
}
console.log("-------------------------------------------------------\ ");

for(const use of userRole.values()){
    console.log(use);
}

userRole.forEach((role,user)=>{
    console.log(`${user.name} -------> ${role}`);
});

console.log("----------------------------");

let val1=[...userRole.keys()];
let val=[...userRole.values()];
console.log(val);
console.log(val1);

userRole.delete(undefined);
console.log(userRole);

userRole.clear();
console.log(userRole);

function Task(message) {
    let num1=100;
    while(num1!=0){
        num1--;
    }
    console.log("Download the file");
}

console.log("Start the function");
setTimeout(()=>{
    Task("Download the file");
},1000);
console.log("Done");

const btn = document.querySelector("button");

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
    const rndCol = `rgb(${random(102)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
});