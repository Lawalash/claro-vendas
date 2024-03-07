<?php
$host = 'lawalash-1965.g8x.gcp-southamerica-east1.cockroachlabs.cloud';
$port = '26257';
$dbname = 'defaultdb';
$user = 'lawalash';
$pass = 'bJVTNygZbtUknf7MB5V9rA';

// Conectando ao banco de dados
$conn = new mysqli($host, $user, $pass, $dbname, $port);

// Verificando a conexão
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}
?>