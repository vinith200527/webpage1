/*var sidebar = document.querySelector(".side-navbar");


function showtogglebar(){
    sidebar.style.display="block"
}
    */
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
