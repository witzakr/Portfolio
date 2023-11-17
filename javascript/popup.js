document.addEventListener('DOMContentLoaded', function () {
    var openPopupBtn1 = document.getElementById('openPopupBtn1');
    var closePopupBtn1 = document.getElementById('closePopupBtn1');
    var popup1 = document.getElementById('popup1');

    // Open the first popup
    openPopupBtn1.addEventListener('click', function () {
        popup1.style.display = 'block';
    });

    // Close the first popup
    closePopupBtn1.addEventListener('click', function () {
        popup1.style.display = 'none';
    });
});