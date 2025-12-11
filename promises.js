//one method
// const promiseOne=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task 1');
//         resolve()
//     },1000)
// })
// promiseOne.then(function(){
//     console.log('Async2 resolved');
    
// })

//method 2
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('hello puja');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('how are you');
    
// })
/////
// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let success=false
//         if(success){
//             resolve('data successfully fetched')
//         }else{
//             reject("error while  fetching data")
//         }
//     },1000)
// }).then((data)=>{
//     console.log('success:' ,data);
    
// }).catch((error)=>{
//     console.log('error:' ,error);
    
// })
/////

// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve({username:'puja', city:'punarwas'})
//     },1000)
// }).then(function(user){
//     console.log('detail:' ,user);
    
// })
////
// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         const success=true
//         if(success){ 
//             resolve({username:'puja', city:'punarwas'})
//         }else{
//             reject('something went wrong')
//         }
       
//     },1000)
// }).then(function(user){
//     console.log('detail:' ,user);
//     return user.username
// }).then((name)=>{
//     console.log(name);
    
// }).catch((error)=>{
//     console.log(error);
    
// }).finally(()=>{
//     console.log('the promise is either resolved or  rejected');
    
// })

///async
const promiseFive=new Promise(function(resolve,reject){
     setTimeout(()=>{
        let success=true
        if(success){
            resolve('data successfully fetched')
        }else{
            reject("error while  fetching data")
        }
    },1000)
})
// async function comsumePromiseFive(){
//   try {
//      const response= await promiseFive
//    console.log(response);
//   } catch (error) {
//     console.log(error);
    
//   }
   
// }
// comsumePromiseFive()

///
async function getallusers(){
try {
   const response=  await fetch('')
 const data= await response.json()
 console.log(data);
 
} catch (error) {
  console.log(error);
  
}
   
}
getallusers()