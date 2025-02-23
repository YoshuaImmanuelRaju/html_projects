function unlockNode(currentNodeId, nextNodeId) {
  const currentNode = document.getElementById(currentNodeId);
  const nextNode = document.getElementById(nextNodeId);
  if (nextNode.classList.contains('locked')) {
    nextNode.classList.remove('locked');
    drawPath(currentNode, nextNode);
  }
}

function unlockBase(currentNode, tree1, tree2, tree3, tree4,tree5) {
  const current = document.getElementById(currentNode)
  const branch1 = document.getElementById(tree1);
  const branch2 = document.getElementById(tree2);
  const branch3 = document.getElementById(tree3);
  const branch4 = document.getElementById(tree4);
  const branch5 = document.getElementById(tree5);
  if (branch1.classList.contains('locked')) {
    branch1.classList.remove('locked');
    drawPath(current, branch1);
  }
  if (branch2.classList.contains('locked')) {
    branch2.classList.remove('locked');
    drawPath(current, branch2);
  }
  if (branch3.classList.contains('locked')) {
    branch3.classList.remove('locked');
    drawPath(current, branch3);
  }
  if (branch4.classList.contains('locked')) {
    branch4.classList.remove('locked');
    drawPath(current, branch4);
  }
  if (branch5.classList.contains('locked')) {
    branch5.classList.remove('locked');
    drawPath(current, branch5);
  }
}

function drawPath(node1, node2) {
  const svg = document.querySelector('.connections');
  const containerRect = document.querySelector('.skill-tree').getBoundingClientRect();
  const rect1 = node1.getBoundingClientRect();
  const rect2 = node2.getBoundingClientRect();

  const x1 = rect1.left + rect1.width / 2 - containerRect.left;
  const y1 = rect1.top + rect1.height / 2 - containerRect.top;
  const x2 = rect2.left + rect2.width / 2 - containerRect.left;
  const y2 = rect2.top + rect2.height / 2 - containerRect.top;

  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', x1);
  line.setAttribute('y1', y1);
  line.setAttribute('x2', x2);
  line.setAttribute('y2', y2);
  line.setAttribute('stroke', '#fff');
  line.setAttribute('stroke-width', '2');
  svg.appendChild(line);
}
