document.addEventListener('DOMContentLoaded', function () {
    var claroTvBoxTab = document.querySelector('.list-itens li:nth-child(2) a');
    var claroTvBoxTable = document.getElementById('claroTvBoxTable');

    claroTvBoxTab.addEventListener('click', function () {
        claroTvBoxTable.style.display = (claroTvBoxTable.style.display === 'none' || claroTvBoxTable.style.display === '') ? 'block' : 'none';
    });
});

function abrirImagem() {
    var modal = document.getElementById('imagemModal');
    var imagem = document.getElementById('imagemModalSrc');
    imagem.src = 'imagens/combo.jpg';
    modal.style.display = 'block';
}

function fecharImagem() {
    var modal = document.getElementById('imagemModal');
    modal.style.display = 'none';
}