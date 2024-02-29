<?php
define('DB_HOST', 'claro-vendas.mysql.database.azure.com'); // Endereço do servidor de banco de dados no Azure
define('DB_USER', 'lawalash'); // Nome de usuário do banco de dados no Azure
define('DB_PASS', '@Twilight122'); // Senha do banco de dados no Azure
define('DB_NAME', 'sislogin'); // Nome do banco de dados no Azure

// Conexão com o banco de dados
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

// Verifica se houve erro na conexão
if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}
?>
