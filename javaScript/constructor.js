function Foo(name, age) {
    this.name = name;
    this.age = age;
    this.class = 'class_1'
}
let f = new Foo('maweifeng', 34)





function Elme(id) {
    this.elme = document.getElementById(id)
}

Elme.prototype.html = function (val) {
    var elme = this.elme;
    if (val)}{
    elme.innerHTML = val;
    return this //链式调用
}else {
    return elme.innerHTML;
}
}
Elme.prototype.on = function (type, fn) {
    var elme = this.elme;
    elme.addEventListener(type, fn)
}


var div1 = new Elme('div1')



for (var i = 0; i < 9; i++) {
    (function (i) {
        var a = document.createElement('button')
        a.innerHTML = i + '<br>'
        a.addEventListener('click', function () {
            alert(i)
        })
    })(i)
}
