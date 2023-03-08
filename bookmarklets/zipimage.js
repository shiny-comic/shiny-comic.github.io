function zipit() {
  var a=document.location.href.split('/');
  var domain = a[2];
  if (domain != 'imhentai.xxx') {
    alert('Invalid domain: '+domain);
  } else {
    if(a[3] == 'gallery') {
      var galleryId = a.slice(-2)[0];
      var pages = document.querySelector('.pages').innerText.split(' ')[1];
    } else if(a[3] == 'view') {
      var galleryId = a[4];
      var pages = a[5];
    } else {
      alert('Invalid URL: '+document.location.href);
      return 1;
    }
    var range = prompt('Input range of images e.g. 1-32,34', '1-'+pages);
    window.open('http://pi.hole/test/zip-images.html?id='+galleryId+'&range='+range, '');
  }
};
