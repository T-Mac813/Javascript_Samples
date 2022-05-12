function getCount(str) {
    var vowelsCount = 0;
    const vowels = ('AEIOUaeiou');
    for (let i = 0; i < str.length; i++){
          if (vowels.indexOf(str[i]) !== -1){
              vowelsCount++;
          } 
    }
    return vowelsCount;
  }
  
  console.log(getCount('Applees'));
 