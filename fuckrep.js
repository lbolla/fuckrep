var period = 1000,
  nretries = 6;

function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

function fill(content, n) {
  try {
    var a = document
      .querySelector("news-app")
      .shadowRoot.querySelector("news-article")
      .shadowRoot.querySelector(".amp-doc-host")
      .shadowRoot.querySelector(".detail-article_body > .paywall");

    var b = document
      .querySelector("news-app")
      .shadowRoot.querySelector("news-article")
      .shadowRoot.querySelector(".amp-doc-host")
      .shadowRoot.querySelector(
        '.detail-article_body > div[subscriptions-section="content-not-granted"]'
      );

    a.style.setProperty("display", "block", "important");
    b.style.setProperty("display", "none");
    a.innerHTML = content;
  } catch (e) {
    if (n < nretries) {
      setTimeout(function() {
        fill(content, n + 1);
      }, period);
    } else {
      document.body.innerHTML = content;
    }
  }
}

function fuckrep() {
  var pathname = window.location.pathname;
  var url =
    "https://rep.repubblica.it/ws/detail/" +
    pathname.substring(5) +
    "content.json";
  var data = JSON.parse(httpGet(url));
  var content = data[0].content + "<h2>FuckRep!</h2>";
  fill(content, 0);
}

fuckrep();
