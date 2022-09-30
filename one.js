const doWork =()=>{
  awake((res)=>{
    console.log(res);
    console.log('i started work!');
    // if you set state state or console.log() then do it from here
  });
// if you return then always return from here
};


const awake = (cb)=>{
  setTimeout(()=>{cb('i got up');},3000);
};

doWork();