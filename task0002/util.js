function isArray(arr){
    return arr instanceof Array;
};

function isFunction(fn){
    return fn instanceof Function;
};

function cloneObject(src){
    if (typeof(src) in ["Number","String","Boolean","Null","Undefined","Symblo"]){
        var cp = src;
        return cp;
    }
    else{
        function deepCopy(src){
            var result = {}
            for (var key in src){
                result[key] = typeof src[key] === "object" ? deepCopy(src[key]) : src[key];
            }
            return result
        }
        return cp
    }
}

function uniqArray(arr){
    function contains(arr,obj){
        var k = arr.length
        for(var i=0;i<k;i++){
            if (arr[i] === obj){
                return true
            }
        }
        return false
    }
    var uniqArr = []
    for (var i = 0; i<arr.length; i++){
        if (!contains(uniqArr,arr[i])){
            uniqArr.push(arr[i])
            }
    }
    return uniqArr
}

function trim(str){
    var newstr = str.replace(/\s*(\S.+\S)\s*/,"$1",str)
    return newstr
}

function each(arr,fn){
    for (var i=0; i<arr.length; i++){
        fn(i,arr[i])
    }
}
