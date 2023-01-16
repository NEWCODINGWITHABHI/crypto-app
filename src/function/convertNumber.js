
 const convertNumber=(Num)=> {

   if(Num){
    if(Num>=1000 && Num<1000000){
      return   (Num.toString()).slice(0,-3)+"."+(Num.toString()).slice(-3,-1)+"K"
    }
    else if(Num>=1000000 && Num<1000000000){
       return  (Num.toString()).slice(0,-6)+"."+(Num.toString()).slice(-6,-4)+"M"
    }
    else if(Num>=1000000000){
      return (Num.toString()).slice(0,-9)+"."+(Num.toString()).slice(-9,-7)+"B"
    }
   }
}

export default convertNumber;

