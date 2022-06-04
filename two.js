const makeProduct=()=>{
    getCollegePassOut(()=>{
        learnCode(()=>{
          console.log('i make it!');
    });
  });
};

const getCollegePassOut=(cb)=>{
  setTimeout(()=>{
      console.log('passed college!');
      cb();
  },5000)
}

const learnCode=(cb)=>{
  console.log('i learned code!');
  cb();
};

// need to passOut,lear then job
makeProduct();