import { toast } from "react-toastify";


function removeFromWatchList(id){
   if(window.confirm("Do you want to remove this coin")){
     let arr=JSON.parse(localStorage.getItem("watchlist"));
     let filterArr=arr.filter((ele)=>ele!=id);
     arr=filterArr;
     localStorage.setItem("watchlist",JSON.stringify(arr));
     toast.success(`${id.slice(0,1).toUpperCase()+id.slice(1)} - removed from watchlist`)
   }
   else{
      toast.error("Could not remove the coin from watchlist");
   }
}
export default removeFromWatchList;