
let btnShareAction = document.getElementById('btn-share-action');
let shareToast = document.getElementById('share-toast');

btnShareAction.addEventListener('click', (e) => {
    shareToast.classList.toggle('visible');
    btnShareAction.classList.toggle('share-dark');
});