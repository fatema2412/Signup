function signup(userName){
    let count=0
    // console.log(userName)
 let arr=["aaditi","John","alice","grecce","zaveri","bohn","kon"];
 for(let i=0;i<arr.length;i++){
   if(arr[i]==userName){
   count++;
   break;
   }
}
// console.log(arr);
if(count>0){
    return "User Already Regsistered, Please Login "
}
else{
    arr.push(userName);
    // console.log(arr);
   return "Signup Sucessfull, Please Login"
}
}

console.log(signup("fatema"));
console.log(signup("John"));
console.log(signup("fatema"))

