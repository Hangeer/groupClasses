/* 第一题 */
function sortToStr (arr) {
    return arr.sort(function (a, b) {
        return b - a;
    }).join("");
}
/* 这样看起来可能不直观，我们分解一下 */
function sortToStr (arr) {
    arr = arr.sort(function (a, b) {
        return b - a;
    });
    /*
     *  这是一个 sort 函数，是自带的方法
     *  使用：传匿名函数，指定排序方法
     *  函数为我们封装好了简单的增/减排序，以上方法是降序（不仅是数字，字符串也可以这样排序）
     *  没记错的话会有隐式类型转换，在这里元素全变成 number
    */
    arr = arr.join("");
    /* 
    *   连接数组中的元素成字符串，"," "." "\" 中间代表每个元素之间你想用什么间隔开
    *   当然在这里我们又进行了隐式类型转换 arr 变成了 string
     */
    return arr;
}
/* 然后，第一种方法看不懂？欢迎了解 链式调用 */


/* 第二题 */

function arrChange (method, num, arr) {
    switch (method) {
        case "plus":
            arr = arr.map(function (item) {
                return item += num;
            });
         break;
         case "minus":
            arr = arr.map(function (item) {
                return item -= num;
            });
         break; 
         case "multiply":
            arr = arr.map(function (item) {
                return item *= num;
            });
         break; 
         case "divide":
            arr = arr.map(function (item) {
                return item /= num;
            });
         break;  
         default: break; 
    }
    return arr;
}
/*
*   其实就是希望熟悉一下数组方法，虽然这样写着我也觉得不太优雅来着
*/

/* 第三题 */
function translate () {
    var res = "No numbers!";
    if (arguments.length > 0) {
        res = Array.prototype.map.call(arguments, function (item) {
            if (item[item.length-1] === "y") {
                return item.slice(0, -1).concat("ily");
            } else {
                return item.concat("ly");
            }  
        });
    }
    return res;
}

