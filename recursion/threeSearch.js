class Node{
    constructor(value, left = null,right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
// בניית העץ
const root = new Node(1,
    new Node(2 ,
        new Node(4),
        new Node(5)
    ),
    new Node(3,
        new Node(6),
        new Node(7,
            new Node(8)
        )
    )
);
function search(node,num){
    if(!node) return;
    if(node.value === num) return node;
    return search(node.left,num) || search(node.right,num);
}
console.log(search(root, 3));