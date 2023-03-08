function replacetag(){
  var tags = document.querySelectorAll('a.tag');
  var prefix = 'https://imhentai.xxx/advsearch/?lt=0&apply=Search&pp=0&w=0&i=0&en=0&es=0&fr=0&kr=0&de=0&ru=0&dl=0&tr=0&key=%2B';
  for (let tag of tags) {
    var href = tag.href.split('/').slice(-3, -1);
    if (tag.querySelector('.split_tag')) {
      var sub = tag.querySelector('.split_tag').innerText.replace(/ +/g, '+');
    } else {
      sub = '';
    }
    var tagname = (href[1] + sub).replaceAll('-', '+');
    tag.href = prefix+href[0]+'%3A%22'+tagname+'%22';
  }
  alert('タグ置き換え完了!');
}
