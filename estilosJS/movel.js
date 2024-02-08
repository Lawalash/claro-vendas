document.addEventListener('DOMContentLoaded', function () {
    var claroMovelTab = document.querySelector('.list-itens li:nth-child(3) a');
    var claroMovelTable = document.getElementById('claroMovelTab');

    claroMovelTab.addEventListener('click', function () {
        claroMovelTable.style.display = (claroMovelTable.style.display === 'none' || claroMovelTable.style.display === '') ? 'block' : 'none';
    });
});