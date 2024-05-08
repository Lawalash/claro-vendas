document.addEventListener('DOMContentLoaded', function () {
    // Selecionando o link "MÓVEL"
    var movelLink = document.querySelector('a[href="tabelamovel.html"]');

    // Selecionando o main pelo id
    var tabelaMovel = document.getElementById('tabelaMovel');

    // Adicionando um evento de clique ao link "MÓVEL"
    movelLink.addEventListener('click', function () {
        // Verificando se o main está oculto
        if (tabelaMovel.style.display === 'none') {
            // Mostrando o main
            tabelaMovel.style.display = 'block';
        } else {
            // Ocultando o main
            tabelaMovel.style.display = 'none';
        }
    });


});
