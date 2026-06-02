var number=function(array){
  //your awesome code here
  return array.map((line, index) => {
    return `${index +1}: ${line}`;
  });
};