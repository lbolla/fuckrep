var period = 3000;
function fuckrep() {
    setTimeout(fuckrep, period);
    var a = document.getElementsByClassName('detail-article_body')[0];
    a.children[0].style.display = 'none';
    a.children[1].style.display = 'block';
}
fuckrep();
