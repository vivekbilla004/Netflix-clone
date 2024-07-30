export const checkValidData = (email,password)=>{
//  const isNameValid = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name)   
 const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
 const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
 
//  if(!isNameValid) return "your name is not valid"
 if(!isEmailValid) return "your email is not valid"
 if(!isPasswordValid) return "your password is not valid"

 return(null);
}