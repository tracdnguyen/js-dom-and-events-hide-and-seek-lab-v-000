function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  const deepest = document.getElementById('grand-node').querySelector('div div div div div');
  return deepest;
}

function increaseRankBy(n) {
  const increase = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < increase.length; i++) {
    let child = increase[i].children;

    for (let is = 0; i < child.length; is++) {
      child[is].innerHTML = parseInt(child[is].innerHTML) + n
    }
  }
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}
