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

    for (let is = 0; is < child.length; is++) {
      child[is].innerHTML = parseInt(child[is].innerHTML) + n
    }
  }
}
