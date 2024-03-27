var pages = document.getElements ByClassName("page"); var currentPage = 0;

function showPage (pageNum) {

if (pageNum >= 0 && pageNum < pages.length) {

pages [currentPage].style.display = "none";

pages [pageNum].style.display = "block"; currentPage pageNum;

=

{

{

document.addEventListener(

"keydown", function (event) {

if (event.key === "ArrowRight") {

1); showPage (currentPage + } else if (event.key === "ArrowLeft") { showPage (currentPage

1);

{

; ({

showPage(currentPage);
