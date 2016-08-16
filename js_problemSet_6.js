function getMaxOfArray(numArray) {
  var max = Math.max.apply(null, numArray),
      min = Math.min.apply(null, numArray),
      newArray =[];

      for (var i = 0; i < numArray.length; i++){
          if(numArray[i] != max && numArray[i] != min){
            newArray.push(numArray[i])
          }
      }
       var output = [Math.min.apply(null, newArray),Math.max.apply(null, newArray)].join(' ');
      console.log(output)
}

getMaxOfArray([7,7,12,98,106])

function timeConvert(num){
    if(num > 60){
        var min =num%60,
            hr =Math.floor(num/60);
    
    }else{
        min = num;
        hr  = 00;
    }

    console.log(hr+':'+min)
}
timeConvert(67)