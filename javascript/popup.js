document.addEventListener('DOMContentLoaded', function () {
    var openPopupBtn1 = document.getElementById('openPopupBtn1');
    var openPopupBtn2 = document.getElementById('openPopupBtn2');
    var openPopupBtn3 = document.getElementById('openPopupBtn3');
    var openPopupBtn4 = document.getElementById('openPopupBtn4'); 
    var openPopupBtn5 = document.getElementById('openPopupBtn5'); 
    var closePopupBtn1 = document.getElementById('closePopupBtn1');
    var closePopupBtn2 = document.getElementById('closePopupBtn2');
    var closePopupBtn3 = document.getElementById('closePopupBtn3');
    var closePopupBtn4 = document.getElementById('closePopupBtn4'); 
    var closePopupBtn5 = document.getElementById('closePopupBtn5'); 
    var popup1 = document.getElementById('popup1');
    var popup2 = document.getElementById('popup2');
    var popup3 = document.getElementById('popup3');
    var popup4 = document.getElementById('popup4');
    var popup5 = document.getElementById('popup5');

    // Open the first popup
    openPopupBtn1.addEventListener('click', function () {
        popup1.style.display = 'block';
    });

    // Open the second popup
    openPopupBtn2.addEventListener('click', function () {
        popup2.style.display = 'block';
    });

    // Open the third popup
    openPopupBtn3.addEventListener('click', function () {
        popup3.style.display = 'block';
    });

    openPopupBtn4.addEventListener('click', function () {
        popup4.style.display = 'block';
    });

    openPopupBtn5.addEventListener('click', function () {
        popup5.style.display = 'block';
    });
    
    // Close the first popup
    closePopupBtn1.addEventListener('click', function () {
        popup1.style.display = 'none';
    });

    // Close the second popup
    closePopupBtn2.addEventListener('click', function () {
        popup2.style.display = 'none';
    });

    // Close the third popup
    closePopupBtn3.addEventListener('click', function () {
        popup3.style.display = 'none';
    });

    closePopupBtn4.addEventListener('click', function () {
        popup4.style.display = 'none';
    });

    closePopupBtn5.addEventListener('click', function () {
        popup5.style.display = 'none';
    });
});
