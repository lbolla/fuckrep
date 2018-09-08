var period = 1000;

function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
  xmlHttp.send( null );
  return xmlHttp.responseText;
}

function fill(content) {
  var a = document.getElementsByClassName('detail-article_body');
  if (a.length > 0) {
    a[0].innerHTML = content;
  } else {
    setTimeout(function() { fill(content) }, period);
  }
}

function fuckrep() {
  var pathname = window.location.pathname;
  var url = 'https://rep.repubblica.it/ws/detail/' + pathname.substring(5) + 'content.json';
  var data = JSON.parse(httpGet(url));
  var content = data[0].content + '<h2>FuckRep!</h2>';
  fill(content);
}

fuckrep();
