
const inviteFriendForLunch=(x,y)=>{
  let dish;
  getTheItemFromMarket(200,(item)=>{
    cookTheItem(item,(cookedItem)=>{
      dish = `Hey ${x} & ${y} i prepared ${cookedItem}`;
       // if you set state state or console.log() then do it from here
    });
  });
  // if you return then always return from here
  return dish;
};

const cookTheItem=(item,cb)=>{
  cb(`${item}, and is well cooked to have`);
}

const getTheItemFromMarket=(money,cb)=>{
  if(money > 200){
    cb('fish');
  }else{
    cb('panner');
  }
};

// inviteFriendForLunch('sewag','sachin');
console.log(inviteFriendForLunch('sewag','sachin'));
