<?php
define('HOST', 'localhost');
define('USER', 'root');
define('PASS', '');
define('BASE', 'sislogin');

// Estabelecer conexão com o banco de dados
$conn = new mysqli(HOST, USER, PASS, BASE);

// Verificar se ocorreu algum erro na conexão
if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}

// Definir o charset para UTF-8 (opcional)
$conn->set_charset("utf8");