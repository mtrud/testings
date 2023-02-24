let index = 0;
let totalScenes = 1

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('scene' + index).style.display = 'block';
    document.getElementById('scene' + index).setCurrentTime(0);
});