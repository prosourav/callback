
const f1 = (cb) =>{
  console.log('hi');
  cb()
};
const f2 = (cb) =>{
  setTimeout(()=>{
    console.log('hello');
    cb()
  },1000);
};

const f3 = () => console.log('there');

f1(()=>{
  f2(()=>{
    f3();
  })
});



const GiveAns = (a, b) => {
  let value;
  add(a, b, (result) => {
    // console.log(result); or  i ve to declare a global variable and  return it
    value = result;
  });
  return value;
};
// GiveAns(20, 30);
console.log(GiveAns(20, 30));

function add(a, b, callback) {
  const result = a + b;
  callback(result);
};