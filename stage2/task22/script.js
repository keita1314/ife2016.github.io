// Code goes here
function Node(data) {
  this.data = data;
  this.parent = null;
  this.children = [];
}

function BinaryTree(data) {
  var node = new Node(data);
  this.root = node;
  return this.root;
}

function buildTree(level) {
  var rootElement = document.querySelector(".root");
  var root = BinaryTree(rootElement);
  var queue = [];
  queue.push(root);
  for (var i = 1; i < level; i++) {
    var p = queue.shift();
    var n = Math.pow(2, i);
    while (n > 0) {
      if (p.children.length === 2) {
        p = queue.shift();
      }
      var newElement = document.createElement("div");
      var height = "height:" + (p.data.clientHeight - 50) + 'px;';
      var width = "width:" + (p.data.clientWidth - 50) / 2 + 'px;';
      var padding = "margin: 10px;";
      var style = height + width + padding + "border-style:solid;border-width:1px;display:flex;align-items:center;"
      newElement.style = style;
      var newNode = new Node(newElement);
      queue.push(newNode);
      p.children.push(newNode);
      p.data.appendChild(newElement);
      newNode.parent = p;
      n--;
    }
  }
  return root;
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function visit(node) {
  node.data.style.backgroundColor = 'red';
  if (node.parent !== null) {
    sleep(1000);
    node.parent.data.style.backgroundColor = '';
  }
  if (node.children.length === 0) {
    sleep(1000);
    node.data.style.backgroundColor = '';
  }
}

function preOrder(node) {
  console.log(node);
  if (node !== undefined) {
    visit(node);
    if (node.children.length === 2) {
      preOrder(node.children[0]);
      preOrder(node.children[1]);
    };
  }
}

var level = 4;
buildTree(level);