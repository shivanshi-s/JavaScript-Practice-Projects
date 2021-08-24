function countChar(string,ch) {
    var count=0 ;
    for (let i = 0; i<string.length; i++)
    {
      if (string[i] == ch)
      {count++}
      
   
    }
    return count;
  }
    
  function countBs(string){
    var count = 0;
    for (let i = 0; i<string.length; i++)
    {
      if (string[i] == "B")
      {
        count++
      }
    }
    
      return count;
  }
      
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4