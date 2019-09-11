function countSameElement(arr) {
    let result = []
    let data = []
    for (let i = 0; i < arr.length; i++) {
         
        if (arr[i] == arr[i + 1]) {
            data.push(arr[i])
             
        } else {
            let obj  = {}
            data.push(arr[i])
             
            if(!obj[data.length]){
                obj[data.length] = arr[i]
            }
             
            result.push(obj)
             
            data = []
        }
    }
    return result

}
const arr = ["a", "a", "a", "b", "c", "c", "b", "b", "b", "d", "d", "e", "e", "e"]
console.log(countSameElement(arr))
