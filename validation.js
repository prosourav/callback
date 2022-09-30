const Validate = (data) =>{
  let finalResult;
  authenticated(data,(result)=>{
    finalResult = result;
  });
  return finalResult;
};

const authenticated = (value,cb)=>{
  if(value > 5){ cb(true)}
  else{ cb(false)}
}
  

const isValidated = Validate(2);

console.log({isValidated});