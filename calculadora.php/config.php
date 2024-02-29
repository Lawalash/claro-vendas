<?php
define('HOST', 'claro-vendas.mysql.database.azure.com'); // Altere para o nome do host fornecido pelo Azure
define('USER', 'lawalash'); // Altere para o nome de usuário fornecido pelo Azure
define('PASS', '@Twilight122'); // Altere para a senha do usuário fornecida pelo Azure
define('BASE', 'sislogin');

// Criação da conexão
$conn = new MySQLi(HOST, USER, PASS, BASE);

// Verifica a conexão
if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}
