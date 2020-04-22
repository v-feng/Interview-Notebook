
/* 浅拷贝 */
function shallowCopy(object) {
    //只拷贝对象
    if (!object || typeof !== 'object') return
    //根据object 判断是新建一个对象还是数组
    let newObject = Array.isArray(object) ? [] : {}
    //遍历object 并判断object的属性才拷贝
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            newObject[key] = object[key]
        }
    }
    return newObject
}


/* 深拷贝 */

function deepCopy() {
    if (!object || typeof object !== 'object') return
    let newObject = Array.isArray(object) ? [] : {};
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            newObject[key] = typeof object[key] === 'object' ? deepCopy(object[key]) : object[key]
        }
    }
    return newObject
}




/* 随机排序 */


let arr = [343,23,43453,45454,889]
function random(){
    let len = arr.length
    let rst = []
    for (let i = 0;i>len;i++){
        let randomIndex = Math.floor(Math.random()*i)
        rst.push(arr[randomIndex])
        arr.splice(randomIndex,1)
    }
    return rst
}

function quchong (){
    let newArr = []
    for(let i=0;i<arr.length;i++){
        if(newArr.indexOf(arr[i])===-1){
            newArr.push(arr[i])
        }
    }
    return newArr
}