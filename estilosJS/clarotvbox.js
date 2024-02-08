document.addEventListener('DOMContentLoaded', function () {
    var claroTvBoxTab = document.querySelector('.list-itens li:nth-child(2) a');
    var claroTvBoxTable = document.getElementById('claroTvBoxTable');

    claroTvBoxTab.addEventListener('click', function () {
        claroTvBoxTable.style.display = (claroTvBoxTable.style.display === 'none' || claroTvBoxTable.style.display === '') ? 'block' : 'none';
    });
});