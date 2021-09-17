let arr = [3,4,5,6,7]
let time = new Date();
function getDate(time){
    let time1 = new Date();
    console.log('用时：',time1-time);
}
console.log('for循环');
for (let i in arr){
    console.log(arr[i]);
}
getDate(time);
console.log('foreach');
arr.forEach((item,index)=>{
    console.log(index, item);
})
getDate(time);
console.log('map');
mapres = arr.map((item,index)=>{
    console.log(index, item);
    item += 1
    return item;
})
getDate(time);
console.log('map结果：', mapres);
console.log('reduce');
reduceres = arr.reduce((pre,cur,index,arr)=>{
    console.log(pre,cur,index,arr);
    return pre+cur;
})
console.log('reduce结果:', reduceres);
console.log('filter');
filterres = arr.filter((item,index)=>{
    console.log(index, item);
    if(item>=4){
        return true;
    }
})
console.log('filter结果：', filterres);