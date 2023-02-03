
function coinAdded(id){
    console.log("localstorage")
    let arr=localStorage.getItem("watchlist");
    console.log(typeof(arr),"arr");
    if(undefined){
        console.log("hhh");
    }
    else{
       
    }
    if(arr){
         console.log("nnnn");
        arr=JSON.parse(arr);
        if(arr.includes(id)){
            return true;
        }
        else{
            return false;
        }
    }
    return false;
}
export default coinAdded;