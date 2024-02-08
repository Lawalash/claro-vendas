document.addEventListener('DOMContentLoaded', function () {
    var internetTab = document.querySelector('.list-itens li:nth-child(1) a'); // Selecione o link da aba "INTERNET"
    var internetTable = document.getElementById('internetTable'); // Selecione a div da tabela

    internetTab.addEventListener('click', function () {
        // Alterna a visibilidade da tabela ao clicar na aba "INTERNET"
        internetTable.style.display = (internetTable.style.display === 'none' || internetTable.style.display === '') ? 'block' : 'none';
    });
});