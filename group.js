function group(arr) {
    let result = []
    let data = []
    for (let i = 0; i < arr.length; i++) {
         
        if (arr[i] == arr[i + 1]) {
            data.push(arr[i])
             
        } else {
            data.push(arr[i])
             
            result.push(data)
             
            data = []
        }
    }
    return result

}
const arr = ["a", "a", "a", "b", "c", "c", "b", "b", "b", "d", "d", "e", "e", "e"]
console.log(group(arr))
