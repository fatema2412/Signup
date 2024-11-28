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

// console.log(signup("fatema"));
// console.log(signup("John"));
// console.log(signup("fatema"))

function login(userName,password){
    let found_userName=0;
    let found_password=0;
    let arr=["aaditi","John","alice","grecce","zaveri","bohn","kon"];
for (let i=0;i<arr.length;i++){
    if(userName==arr[i] && password=="Emp@123"){
        found_userName++
        found_password++
    }
    else if (userName==arr[i] && password !="Emp@123"){
        found_userName++
    }
}
if(found_userName>0 && found_password>0 ){
    return "Login Sucessfull"

}
else if(found_userName>0){
    return "Wrong Password...."
}
else {
    return "User Not Found, Please Signup"
}
}

console.log(login("John","Emp@123"))
console.log(login("fatema","Emp@123"))
console.log(login("zaveri",1234));

















