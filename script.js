var wrap = document.getElementById('js-wrap')

document.getElementById('js-btn').addEventListener('click', function(){
  wrap.classList.add('active')
  var max = 25
  for (var i=0; i<max; i++) {
    var x = 500 * i
    setTimeout(() => {
      addhtml()
    }, x)
    // ぜんぶballonだしたらfinish関数たたく
    if (i == max - 1) {
      setTimeout(() => {
        finish()
      }, x)
    }
  }  
})

// ぱくってきた関数
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function addhtml() {
  var rand = getRandomInt(0,14)
  var arr = ['こんにちぬ', '元気？', 'うふふ', 'ばかなの', '！！？', 'やぁ', 'おはよう', 'いぇーーい', 'ぽよぉ', 'にゃあ', 'ぶどう', 'ばぶばぶ', '無限', 'くあせふじこjp']
  wrap.insertAdjacentHTML('beforeend', `<div class="ballon">${arr[rand]}</div>`)
  var elm = document.documentElement;
  //scrollHeight ページの高さ clientHeight ブラウザの高さ
  var bottom = elm.scrollHeight - elm.clientHeight;
  //垂直方向へ移動
  window.scroll(0, bottom);
}

function finish() {
  document.getElementById("js-finish").classList.add('active')
  document.getElementById("js-reload").classList.add('active')
  document.getElementById("se").play()
  document.getElementById('js-reload').addEventListener('click', function(){
    location.reload()
    console.log('reload click')
  })
}
