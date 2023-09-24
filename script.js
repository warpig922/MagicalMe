function seananswer(){
  var password = document.getElementById("seansquestion");
  var passwordText = password.value;
  if(passwordText=="Pelagic Thresher Shark"){
    return true;
  }
  alert("WRONG")
  return false;
}