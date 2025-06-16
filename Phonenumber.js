// function setDefaultPhoneNumber(executionContext) {
//     var formContext = executionContext.getFormContext();

//     // Only run on create form
//     if (formContext.ui.getFormType() === 1) { // 1 = Create
//         var phoneField = formContext.getAttribute("telephone1");

//         // Check if phone is empty before setting
//         if (phoneField && !phoneField.getValue()) {
//             phoneField.setValue("123-456-7890"); // Default phone number
//         }
//     }
// }

// num= Number("89")
// console.log(typeof(num))

// console.log(num)


// //class
// class hi {
//     a=10
//     b=20

//     add(a, b) {
//         //    console.log( a=10)
//         //    console.log( b=20)
//         // a = 10
//         // b = 20
//         console.log(this.a)
//         console.log(this.b)
//         console.log(this.a + this.b)

//     }
// }
// const hlo = new hi()
// hlo.add()


//Constructor

// class hi {

//     constructor(a,b) {
      
//         a = 10
//         b = 20
//         //console.log(a=10)
//         //console.log(b=20)
//         console.log(a + b)
//     }
// }
// const hlo = new hi()
// hlo.constructor()   --no need to call this method command 


// class hi {

//     add(a,b) {
      
//         a = 10
//         b = 20
//         //console.log(a=10)
//         //console.log(b=20)
//         console.log(a + b)
//     }
// }
// const hlo = new hi()
// hlo.add()   --if u declare like a class need to call the method 
