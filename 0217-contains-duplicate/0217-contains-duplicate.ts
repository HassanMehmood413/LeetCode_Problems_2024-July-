function containsDuplicate(nums: number[]): boolean {
    let dup_map = new Map<number, number>();

    for(let value of nums){
        if(dup_map.has(value)){
            return true
        }
        dup_map.set(value, 1)
    }
    return false

};