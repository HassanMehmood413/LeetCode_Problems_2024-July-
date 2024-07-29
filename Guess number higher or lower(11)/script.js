var guessNumber = function(n) {
    let left = 1
    let right = n
    while(true){
        mid = Math.floor(left + right )/ 2
        res = guess(mid)
        if(res>0){
            left = mid+1
        }
        else if(res<0){
            right = mid - 1
        }
        else{
            return mid
        }

    }
};
