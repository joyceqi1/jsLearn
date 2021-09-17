function ObserverList(){
    this.observerList = [];
}
ObserverList.prototype.add = function(obj){
    return this.observerList.push(obj);
}
ObserverList.prototype.count = ()=>{
    return this.observerList.length;
}
ObserverList.prototype.get = (index)=>{
    if(index>-1&&index<this.observerList.length){
        return this.observerList[index];
    }
}
ObserverList.prototype.indexOf = (index)=>{
    return this.observerList[index];
}