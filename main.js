function solve(s) {
    return s.replace(/R\.+L/g, str => {
        let len = str.length;
        let halfLen = parseInt(len / 2);
        let mid = len % 2 === 0 ? '' : '#';
        return 'R'.repeat(halfLen) + mid + 'L'.repeat(halfLen);
    }).replace(/R\.+/g, str => { return 'R'.repeat(str.length) })
        .replace(/\.+L/g, str => { return 'L'.repeat(str.length) })
        .replace(/\#/g, '.')
}

function permute(nums) {
    // write code here
    var arrList = [];
    var mark = '0'.repeat(nums.length).split('');
    function rank(arr, index, nums) {
        if (index === nums.length) {
            arrList.push(arr.map((x) => { return x }));
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (mark[i] == 0) {
                mark[i] = 1;
                arr.push(nums[i]);
                rank(arr, index + 1, nums);
                arr.pop(nums[i]);
                mark[i] = 0;
            }
        }
    }
    rank([], 0, nums)
    return arrList;
}
var order1 = 'GDAFEMHZ';
var order2 = 'ADEFGHMZ'
function Node(val){
    this.val = val;
    this.left = null;
    this.right = null;
}
function getRoot(preOrder, midOrder){
    var len = preOrder.length;
    
    if(len === 0){
        return null;
    }
    var node = new Node(preOrder[0]);
    var pos = midOrder.indexOf(preOrder[0]);
    var leftLen = pos;
    var preLeft = preOrder.slice(1,1+leftLen);
    var midLeft = midOrder.slice(0,leftLen)
    var preRight = preOrder.slice(pos+1, len);
    var midRight = midOrder.slice(pos+1, len);
    node.left = getRoot(preLeft, midLeft);
    node.right = getRoot(preRight, midRight );
    return node;
}
function postOrder(node){
    if(node === null){
        return;
    }
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.val);
}
function preOrder(node){
    if(node === null){
        return;
    }
    preOrder(node.left);
    console.log(node.val);
    preOrder(node.right);
    
}
var node1 = new Node('1');
var node2 = new Node('2');
node1.next = node2;
// console.log(node1.val,node1.next.val)
node1 = getRoot(order1, order2)
// postOrder(node1)
preOrder(node1)

