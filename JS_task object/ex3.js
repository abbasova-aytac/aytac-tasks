// #task3. 
// existsAndTruthy adinda funksiya yaradin. Argument kimi obyekt(obj) ve string (propertyName)  alsin.
// Eger hemin obyektden o adda property varsa ve truthy-dirse, true qaytarsin eks halda false qaytarsin. Mes,

// existsAndTruthy({a:1,b:2,c:3},'b') // true
// existsAndTruthy({x:'a',y:null,z:'c'},'y')  // false (obyektde 'y' var amma falsy-di ona gore false)
// existsAndTruthy({x:'a',b:'b',z:undefined},'z')  // false  (obyektde 'z' yoxdu ona gore false)

const existsAndTruthy= (Object={},propertyName) => !!Object[propertyName]

// function existsAndTruthy (obj,propertyName) {
//     if(obj[propertyName]){
//         return true}
//         else {
//             return false
//         }
//     }
    console.log (existsAndTruthy({a:1,b:2,c:3},'b'))
    console.log (existsAndTruthy({x:'a',y:null,z:'c'},'y')) 
    console.log (existsAndTruthy({x:'a',b:'b',z:undefined},'z')) 