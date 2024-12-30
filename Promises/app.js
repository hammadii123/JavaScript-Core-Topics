// const promise=new Promise((resolve, reject)=>{
//     let success=true;
//     if (success){
//         resolve("promise resolve hogaya kiunke condition true he")
//     }
//     else{
//         reject("promise reject hogaya kiunke condition false he")
//     }
// });

// promise.then((result)=>{
//         console.log(result);   //agar promise resolve hogyaa to ye output aayega
//     })
//     .catch((error)=>{
//         console.log(error);             //agar promise reject hua to ye output aayega
//     });







    // 2)) Simulate an async operation where you check if a number is even or odd using a promise

    // let num=(numbers)=>{
    //     return new Promise((resolve,reject)=>{
            
    //         if(typeof numbers!=="number"){
                
    //             reject("Not a number")
    //         }
    //         else if(numbers%2===0){
    //             resolve("It is and even number")
    //         }
    //         else{
    //             resolve("It is an odd number")
    //         }
    //     })
    // }

   

    // num(11).then((message)=>{
    //     console.log(message)
    // })
    // .catch((error)=>{
    //     console.log(error)
    // })






    // 3))Activity
//     Assignment
// Write a program that:

// Simulates downloading a file using a promise.
// The promise should:
// Resolve if the "file size" is less than 100 MB.
// Reject if the "file size" is 100 MB or more.
// Log appropriate messages for resolved and rejected states.
// Hint:

// Use a random number to simulate file size.

let fileSize=new Promise((resolve,reject)=>{
    let size=Math.round(Math.random() *500);
    if(size>=100){
        console.log(size +" Mb")
        reject("It is a big file please use small files to upload")
    }
    else{
        console.log(size+ " Mb")
        resolve("File uploaded")
    }
})

fileSize.then((msg)=>{
    console.log(msg)
})
.catch((error)=>{
    console.log(error)
})