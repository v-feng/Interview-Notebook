/* 防抖 

函数防抖： 在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。
*/


function debounce(fn, wait) {
    var timer = null;
    return function () {
        var context = this,
            args = arguments
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            fn.apply(content, args)
        }, wait)
    }
}



/* // 函数节流的实现; */
function throttle(fn, delay) {
    var preTime = Date.now()
    return function () {
        var context = this,
            args = arguments,
            nowTime = Date.now()
        if (nowTime - preTime > delay) {
            preTime = Date.now()
            return fn.apply(context, args)
        }
    }
}





function debounce(fn,wait){
    let timer = null;
    return function (){
        let content = this
        let args = arguments
        if(timer){
            clearTimeout(timer)
            timer =null
        }
        timer = setTimeout(() =>{
            fn.apply(content,args)
        },wait)
    }
}



function throttle (){
    var preTime =  Date.now()
    return function (){
        var context = this,
        args = arguments,
        nowTime = Date.now()
        if(nowTime - preTime>delay){
            preTime = Date.now()
            return fn.apply(context, args)
        }

    }
}