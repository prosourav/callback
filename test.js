const handle=(a,b)=>{
  let result;
  add(a,b,(r)=>{
    result = r;
  });
    return result;
};

const add=(x,y,cb)=>{
const res = x+y;
cb(res);
};

console.log(handle(10,12));
