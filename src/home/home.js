document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".carousel-slide");
    let currentSlide = 0;

    function showSlide(slideIndex) {
        slides.forEach(function(slide) {
            slide.classList.remove("active");
        });
        slides[slideIndex].classList.add("active");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    const prevButton = document.querySelector(".prev-slide");
    const nextButton = document.querySelector(".next-slide");

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    // Cambiar automáticamente cada 5 segundos (5000 milisegundos)
    setInterval(nextSlide, 5000);
});


document.addEventListener("DOMContentLoaded", function() {
    const professionalLinks = document.querySelectorAll(".professional-link");
    const additionalInfo = document.getElementById("additional-info");

    professionalLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Evita que el enlace cambie de página
            
            // Oculta los otros barberos
            document.querySelectorAll(".image-with-text").forEach(function(barbero) {
                if (barbero.id !== link.parentNode.id) {
                    barbero.style.display = "none";
                }
            });
            
            // Muestra la información adicional
            additionalInfo.style.display = "block";
        });
    });
});
var nombreBarbero = ""; // Variable global para almacenar el nombre del barbero seleccionado
$(".professional-link").click(function() {
    nombreBarbero = $(this).find("img").data("barbero");
});


$(document).ready(function(){
    $(".agregar-servicio").click(function(){
        var nombreServicio = $(this).data('nombre');
        var valorServicio = $(this).data('valor');
        
        $("#nombreBarbero").text("Profesional: " + nombreBarbero);
        $("#nombreServicio").text("Servicio: " + nombreServicio);
        $("#valorServicio").text("Valor: " + valorServicio);

        $("#servicioModal").modal('show');
    });
});






    // Espera a que el DOM esté completamente cargado
// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Variable global para almacenar el nombre del barbero seleccionado
    var nombreBarbero = "";

    // Captura el nombre del barbero seleccionado cuando se hace clic en un enlace de barbero.
    $(".professional-link").click(function() {
        nombreBarbero = $(this).find("img").data("barbero");
        localStorage.setItem("selectedBarber", nombreBarbero); // Guarda el nombre del barbero en el almacenamiento local
    });

    // Al hacer clic en el botón de confirmar y agendar, redirige a la siguiente página
    $("#confirmar-agendar").click(function() {
        window.location.href = "../home/fechayhora.html";
    });
});



var nombreBarbero = localStorage.getItem("selectedBarber");
        if (nombreBarbero) {
            // Muestra el nombre del barbero
            document.getElementById("nombre-barbero").textContent = nombreBarbero;
            // Puedes cambiar la ruta de la imagen según el nombre del barbero seleccionado
            document.getElementById("barbero-seleccionado").querySelector("img").src = "../assets/" + "barber" + nombreBarbero + ".jpg";
        }


        document.addEventListener("DOMContentLoaded", function() {
            var calendarEl = document.getElementById('calendario');
            var calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth', // Vista inicial del calendario
                locale: 'es', // Establece el idioma en español
                selectable: true, // Habilita la selección de fechas
                select: function(info) {
                    // Esta función se llama cuando se selecciona una fecha y hora
                    var startDate = info.startStr; // Obtiene la fecha y hora de inicio seleccionada
                    var endDate = info.endStr; // Obtiene la fecha y hora de finalización seleccionada (si corresponde)
                    console.log("Fecha de inicio seleccionada:", startDate);
                    console.log("Fecha de finalización seleccionada:", endDate);

                    // Esta función se llama cuando se selecciona una fecha y hora
            var selectedDate = info.start; // Obtiene la fecha seleccionada
            console.log("Fecha seleccionada:", selectedDate);
                    // Cambia a la vista de día y resalta el día seleccionado
            calendar.changeView('dayGridDay', selectedDate);
                },
                events: [
                    // Aquí puedes agregar los eventos con las horas disponibles
                    {
                        title: 'disponible',
                        start: '2024-05-20T10:00:00', // Ejemplo de hora disponible
                        end: '2024-05-20T11:00:00',   // Ejemplo de hora disponible
                        // Otros datos del evento, como color, descripción, etc.
                    },
                    {
                        title: 'disponible',
                        start: '2024-05-20T11:00:00', // Ejemplo de hora disponible
                        end: '2024-05-20T12:00:00',   // Ejemplo de hora disponible
                        // Otros datos del evento, como color, descripción, etc.
                    },
                    {
                        title: 'disponible',
                        start: '2024-05-20T13:00:00', // Ejemplo de hora disponible
                        end: '2024-05-20T14:00:00',   // Ejemplo de hora disponible
                        // Otros datos del evento, como color, descripción, etc.
                    },
                    // Puedes agregar más eventos para otras horas disponibles
                ]
            });
            calendar.render(); // Renderiza el calendario
        });
        
     
            
  







