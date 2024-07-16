/*
document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.querySelector('.side-navbar');
    function showtoggle() {
        if (sidebar) {
            sidebar.style.display = 'block';
        } else {
            console.error('Sidebar element not found.');
        }
    }
});

    */


var sidebar = document.querySelector(".side-navbar");



function showdata(){
    sidebar.style.left="0%"
}
function closedata(){
      sidebar.style.left="-25%"

}