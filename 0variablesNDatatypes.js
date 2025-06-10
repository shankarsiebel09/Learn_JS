//Variables in JS:
//1.Var     --it is a global and we can reassing the values and we can redeleare the same variable 
//var stname="shankar"
//var stnum=8384
//2.let     --it is a with in the block and we can reassing the values and we can not redeleare the same variable 
//let stuname="kumar"
//let stunum=8385
//3.const   --it is a with in tthe block and we can not reassing the values and we can not redeleare the same variable 
//const studname="aru"
//const studnum=8386


// var greet = "KING"
// {
//     var greet = "Shankar"   //--here we are redeclaring the varible and its value
//     if (5 >= 3) {
//         let greet2 = "ARU"
//         const greet3 = "Uma"
//         console.log(greet)
//         console.log(greet2)
//         console.log(greet3)
//         if (2 < 3) {
//             console.log(greet2)
//             console.log(greet3)
//         }
//         console.log(greet)
//         console.log(greet2)
//         console.log(greet3)
//     }
//     console.log(greet)
//     console.log(typeof(greet))
//     //console.log(greet2)   --this let we can not access outside of the block 
//     //console.log(greet3)   --this const also we can not access outside of the block   
// }
//-----------------------------------------------------------------------------------------
//REDECLEARING THE VALUES
// var greet=1234
// greet=23456     //--here we are redeclaring the value, for var and let it is posible but const its not possible
// console.log(greet)

// let greet2=0987
// greet2=156678   //--here we are redeclaring the value, for var and let it is posible but const its not possible
// console.log(greet2) 

// const greet3=8384
// greet3=1525     //--here we are trying to redeclaring the value for const its not possible
// consolelog(greet3)  

//REASSING THE VARIABLES 
// var greet=1234
// var greet=23456     //--here we are reassig  the value, for var it is posible but let and const its not possible
// console.log(greet)

// let greet2=0987
// let greet2=156678   //--here we are reassing  the value, for let it is not posible
// console.log(greet2) 

// const greet3=8384
// const greet3=1525     //--here we are reassinging the value, for const it is not possible
// consolelog(greet3)
//---------------------------------------------------------------------------------------------------

//DATATYPES         2-TYPES OF DATATYPES WE HAVE 1)PRIMITIVE DATATYPE  2)NON-PRIMITIVE DATATYPE
// //1)PRIMITIVE DATATYPE
// //1.NUMBER
// x=20
// console.log(x)
// console.log(typeof(x))
// y=20.5555
// console.log(y)
// console.log(typeof(y))
// console.log("**************************************************************")

// //2.SRTING
// x="shankar"
// console.log(x)
// console.log(typeof(x))

// y='shankas place is "Bengaluru"'
// console.log(y)
// console.log(typeof(y))
// console.log("**************************************************************")
// //3.BOOLEAN
// a=true
// b=false
// console.log(a)
// console.log(typeof(a))
// console.log(b)
// console.log(typeof(b))
// x=3
// y=5
// if (x<y){
//     console.log(a)
//     console.log(typeof(a))
// }else{
//     console.log(b)
//     console.log(typeof(b))
// }
// console.log("**************************************************************")
// //4.UNDEFINED
// var a;
// console.log(a)
// //console.log(type(a))
// console.log("**************************************************************")
//5.NULL
// var c=null;
// console.log(c)
// console.log(typeof(c))      //--here null type it is showing 'object' it is an Javascript error 
// console.log("**************************************************************")
// console.log("**************************************************************")
//2.NON-PRIMITIVE DATATYPE
// //1.ARRAY
// arr1=[1,2,2,3,4,6,7,9,55]   //--Homogenious here all datatypes are same 
// console.log(arr1[0])        //by using of slicing we can access the elements, index stat with ZERO-(0)
// console.log(arr1[3])
// console.log(arr1[8])
// console.log(arr1)
// console.log(typeof(arr1))
// arr2=['king','shankar','uma']   //--Homogenious here all datatypes are same 
// console.log(arr2)
// console.log(typeof(arr2))
// arr3=[22,"king",true,null,"usha"]//--NON-Homogenious/Hetirogenious here all datatypes are deferent 
// console.log(typeof(arr3[2]))
// console.log(typeof(arr3[3]))
// console.log(arr3)
// console.log(typeof(arr3))
// console.log("**************************************************************")
// //2.OBJECTS--is a collection of key value pairs
// logincreds={
//     username:"KING",
//     password:"King12345",
// }
// console.log(logincreds.username)    //to access elements
// logincreds.age=25           //to add one more key value
// logincreds.button="Submit"  //to add one more key value
// console.log(logincreds)
// logincreds.age=30           //to update one key value
// console.log(logincreds)
// console.log(typeof(logincreds))
// console.log(typeof(logincreds.password))
// console.log(typeof(logincreds.age))
// console.log("**************************************************************")
//3.REGULAR EXPRESSIONS
// let str = "Hello world";
// let pattern = /world/;

// console.log(pattern.test(str));     // true
// console.log(str.match(pattern));    // ['world']
// console.log(str.replace(pattern, "JavaScript"));  // "Hello JavaScript"
