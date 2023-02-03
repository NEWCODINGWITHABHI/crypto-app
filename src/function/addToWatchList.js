import { toast } from "react-toastify";


function addToWatchList(id){
 let arr=JSON.parse(localStorage.getItem("watchlist"));
 console.log(arr,"add",id);
 if(arr){
   arr.push(id);
   localStorage.setItem("watchlist",JSON.stringify(arr));
 }
 else{
   arr=[];
   arr.push(id);
   console.log("arrr",arr)
   localStorage.setItem("watchlist",JSON.stringify(arr));
 }
 toast.success(
    `${id.slice(0,1).toUpperCase()+id.slice(1)} - Added to the Watchlist`
 )

}
export default addToWatchList;