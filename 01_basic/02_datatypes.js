/*
                     datatypes
primitive DT                             Non_Primitive Datatypes
1.Number                                 1.Object
2.String
3.Boolean
4.BigInt
5.Undefined
6.Null

*/

let name = 'zain'
let age = '23'
let cityName = 'Khanpur'
let qualification = 'bscs'
let isLogin = false
let value;
let nullV = null

console.table([name,age,cityName,qualification,isLogin,value,nullV])
age = parseInt(age)

console.table([typeof name, typeof age, typeof cityName, typeof qualification , typeof isLogin, typeof value , typeof nullV])