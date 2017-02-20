let rank = (key:number,arr:number[],start=0,end=arr.length)=>{
    let mid = Math.floor((start+end)/2)
    console.log(mid)
    console.log(start+'                      '+end)
    if(key<arr[mid-1]){
        return rank (key,arr,start,mid)
    }
    else if(key>arr[mid-1]){
        return rank(key,arr,mid,end)
    }else{
        return mid-1
    }
}

function sort(arr:number[]){    
    return arr.sort((a:number,b:number)=>{return a-b})
}
