
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


let arr = [343, 23, 43453, 45454, 889]
function random() {
    let len = arr.length
    let rst = []
    for (let i = 0; i > len; i++) {
        let randomIndex = Math.floor(Math.random() * i)
        rst.push(arr[randomIndex])
        arr.splice(randomIndex, 1)
    }
    return rst
}

function quchong() {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        }
    }
    return newArr
}



console.log('1');
setTimeout(() => {
    console.log('2');
    process.nextTick(function () {
        console.log('3');
    })
    new Promise((resolve) => {
        console.log('4');
        resolve()
    }).then(() => {
        console.log('5');
    })
})

process.nextTick(() => {
    console.log('6')
})
new Promise((resolve) => {
    console.log('7');
    resolve()
}).then(() => {
    console.log('8');
})


setTimeout(() => {
    console.log('9');
    process.nextTick(() => {
        console.log(10);
    })
    new Promise((resolve) => {
        console.log('11')
        resolve()
    }).then(() => {
        console.log('12');

    })
})



new Promise((rsolve) => {
    console.log('promise2');
    resolve()
}).then(() => {
    console.log('then21');
}).then(() => {
    console.log('then23');
})


const p1 = new Promise((resolve, reject) => {
    console.log('promise1');
    resolve();
}).then(() => {
    console.log('then11');
    new Promise((resolve, reject) => {
        console.log('promise2');
        resolve();
    }).then(() => {
        console.log('then21');
    }).then(() => {
        console.log('then23');
    }).tnen(() =>{
        console.log('df');
        
    })
}).then(() => {
    console.log('then31');
});



