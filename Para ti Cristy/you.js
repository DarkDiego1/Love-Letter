$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var letterContent = $("#letter-content");

  // Lista de mensajes aleatorios
  var mensajes = [
    { line2: "Eres tan hermosa", line3: "que cada vez que te veo", line4: "mi mundo se detiene" },
    { line2: "Ver tu sonrisa", line3: "es el mejor momento", line4: "de todos mis días" },
    { line2: "Tu precenisa", line3: "siempre logra", line4: "alegrar mi dia" },
    { line2: "No necesito al sol", line3: "poruqe tu eres", line4: "la que ilumina mi dia" },
    { line2: "No me importa donde este", line3: "mientras sea contigo", line4: "no me importa" } 
  ];

  var ultimoIndice = 0;

  function cambiarMensaje() {
    var nuevoIndice;
    // Evita que salga el mismo mensaje dos veces seguidas
    do {
      nuevoIndice = Math.floor(Math.random() * mensajes.length);
    } while (nuevoIndice === ultimoIndice);
    
    ultimoIndice = nuevoIndice;
    var msg = mensajes[nuevoIndice];

    // Actualizamos el HTML interno de la carta
    letterContent.html(`
      <div class="words line1">Para: Cristy</div>
      <div class="words line2">${msg.line2}</div>
      <div class="words line3">${msg.line3}</div>
      <div class="words line4">${msg.line4}</div>
    `);
  }

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    if (envelope.hasClass("close")) {
      cambiarMensaje(); // Cambia el texto justo antes de mostrarlo
    }
    envelope.addClass("open").removeClass("close");
  }

  function close() {
    envelope.addClass("close").removeClass("open");
  }
});