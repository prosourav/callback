const getUp = (name, cb) => {
    console.log(name,'Got up!!');
    cb();
  };
  
  const brash = (name,cb) => {
    console.log(name,'Doing Brash..');
    setTimeout(() => cb('Hey Dont hurry!'), 3000);
  };
  
  const startDay = (name) => {
    getUp(name,() => {
      brash(name, (msg) => {
        console.log(msg, name, 'No we need to be get ready fast.');
      }); 
    });
  };
  
  startDay('Sourav');