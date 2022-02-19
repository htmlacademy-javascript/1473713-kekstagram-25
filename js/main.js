function getRandomInt(min, max) {
  if (min < max && min >= 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // alert("Uncorrect input numbers");
}

getRandomInt();

function checkCommentLength(string, length) {
  return string.length <= length;
}

const comment = document.querySelector('.social__footer-text');

checkCommentLength(comment, 140);
