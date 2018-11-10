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
  const increase = document.getElementByClassName('ranked-list').querySelectorAll('ul.ranked-list li li li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + n).toString()
  }
}