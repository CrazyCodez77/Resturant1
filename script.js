function toggleDropdown() {
    var dropdownMenu = document.querySelector('.dropdown-menu'); // Use parentheses instead of braces
    dropdownMenu.classList.toggle('show'); // Corrected 'classlist' to 'classList'
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    if (!event.target.matches('.dropbtn') && dropdownMenu.classList.contains('show')) {
        dropdownMenu.classList.remove('show'); // Remove the 'show' class
    }
}
