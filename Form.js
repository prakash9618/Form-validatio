function myFun() {
    var user = document.getElementById('user').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (user == ''|| email == ''|| password == '') {
        alert("Empty spaces are not allowed")
        return false;
    } else {
        confirm('Are you ok to Submit')
        return true;
    }
}
 var num = prompt("Enter a number");
 if(num%2==0){
    console.log("The number is Even");
 }else{
    console.log("The number is odd");
 }

 