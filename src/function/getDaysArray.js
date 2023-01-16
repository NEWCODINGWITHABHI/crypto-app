// export const getDaysArray=function(starting,ending){
//     for(
//         var a=[],d=new Date(starting);d<=new Date(ending);d.setDate(d.getDate()+1)
//     ){
//         a.push(new Date(d).getDate()+"/"+(new Date(d).getUTCMonth()+1));
//     }
// }
export const getDate = (date) => {
    const day = new Date(date);
    const string = day.getDate() + "/" + (day.getMonth() + 1);
    return string;
  };