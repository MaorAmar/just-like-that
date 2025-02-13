class Node{
    constructor(value,left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
const sortedRoot = new Node(6,
    new Node(4,
        new Node(2),
        new Node(5)
    ),
    new Node(9,
        new Node(7),
        new Node(11,
            new Node(10)
        )
    )
);
function binaryThreeSearch(node, value){
    if(!node) return;
    if(node.value === value) return node;
    if(node.value > value) return sortedSearch(node.left, value);
    else return sortedSearch(node.right, value);
}

console.log(binaryThreeSearch(sortedRoot,11));