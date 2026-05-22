/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    s = s.split("")
    t = t.split("")
    if(s.length !== t.length) return false
    let s_map = new Map()
    let t_map = new Map()
    s.forEach((value, ind)=>{
        if(s_map.has(value)){
            s_map.set(value, s_map.get(value)+1)
        }
        else{
            s_map.set(value, 1)
        }
    })
    t.forEach((value, ind)=>{
        if(t_map.has(value)){
            t_map.set(value, t_map.get(value)+1)
        }
        else{
            t_map.set(value, 1)
        }
    })
    for(let [key,val] of s_map){
        
        if(!t_map.has(key)){
            return false
        }
        else if(t_map.get(key) !== s_map.get(key)){
            return false
        }
         
    }
    return true
};