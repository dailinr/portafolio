<?php

// Permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Origin: *");
// Permitir métodos HTTP específicos
header("Access-Control-Allow-Methods: POST, OPTIONS");
// Permitir encabezados específicos
header("Access-Control-Allow-Headers: Content-Type");

// Manejar la solicitud de preflight (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Verifica si la solicitud es de tipo POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Obtiene el contenido JSON enviado por la solicitud
    $data = json_decode(file_get_contents("php://input"), true);

    // Asigna los datos del formulario a variables
    $nombre = $data['nombre'];
    $apellido = $data['apellido'];
    $email = $data['email'];
    $mensaje = $data['mensaje'];

    // Configura los detalles del correo
    $to = 'dailinromero123@gmail.com';
    $subject = 'Nuevo mensaje de contacto';
    $body = "Nombre: $nombre\nApellido: $apellido\nEmail: $email\nMensaje:\n$mensaje";
    $headers = "From: $email";

    // Intenta enviar el correo y responde con el estado correspondiente
    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo json_encode(['message' => 'Correo enviado con éxito']);
    } else {
        http_response_code(500);
        echo json_encode(['message' => 'Error al enviar el correo']);
    }
} else {
    // Responde con un error 405 si el método no es POST
    http_response_code(405);
    echo json_encode(['message' => 'Método no permitido']);
}
?>
