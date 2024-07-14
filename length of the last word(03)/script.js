let n = 'hello world'
let t = n.split(' ').filter((value)=>value!= '')
let k = n.split(' ').filter((value)=>value!= '').length.toString()
let r =t.at(k-1).split('').length
// for (let i = k; i >=0; i--) {
//   let p =   n.split(' ').at(k)
//   console.log(p)
// //    var p=  n[i].split(' ')
// //    console.log(p)
// }
console.log(r)