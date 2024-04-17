$(document).ready(function() {
    console.log('Here llegamos')
    // Al hacer clic en el botón "Submit"
    $("#submitBtn").click(function() {
        // Obtener el valor del nombre ingresado por el usuario
        var name = $("#nombres").val();
        
        // Verificar si el campo de nombre no está vacío
        if (name !== "") {
            // Construir el mensaje de bienvenida
            var message = "Hello, " + name + "! Bienvenido a tu app.";
            
            // Mostrar el mensaje en el elemento con id "output"
            alert(message);
        
        } else {
            // Si el campo de nombre está vacío, mostrar un mensaje de error
            alert("Por favor ingrese sus datos.");
        }
    });
});