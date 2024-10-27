var toggleBt = document.getElementById('toggle-skill');
var skilSec = document.getElementById('skills');
toggleBt.addEventListener('click', function () {
    if (skilSec.style.display === 'none') {
        skilSec.style.display = 'block';
    }
    else {
        skilSec.style.display = 'none';
    }
});
