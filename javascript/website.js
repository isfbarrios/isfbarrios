$( document ).ready(function() {

    document.querySelector(".menu-btn").addEventListener("click", () => {
      document.querySelector(".nav-menu").classList.toggle("show");
      document.querySelector(".menu-btn").classList.toggle("open");
      document.querySelector("#body").classList.toggle("no-scroll");
    });
    
    ScrollReveal().reveal('.showcase');
    ScrollReveal().reveal('.news-cards', { delay: 500 });
    ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
    ScrollReveal().reveal('.cards-banner-two', { delay: 500 });
    ScrollReveal().reveal('.about-section', { delay: 500 });
    ScrollReveal().reveal('.work-section', { delay: 500 });
    ScrollReveal().reveal('.contact-section', { delay: 500 });

    $('.header-title').fadeOut(0).delay(400).fadeIn(800);
  
    //Efecto del titulo
    const typed = new Typed('.typed', {
        strings: [
            '<b class="changing-word">Developer</b>', 
            //'<b class="changing-word">Freelancer</b>',
            '<b class="changing-word">Designer</b>'
        ],
        typeSpeed: 65, // Velocidad en mlisegundos para poner una letra,
        startDelay: 200, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
        backSpeed: 65, // Velocidad en milisegundos para borrrar una letra,
        smartBackspace: false, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
        shuffle: false, // Alterar el orden en el que escribe las palabras.
        backDelay: 200, // Tiempo de espera despues de que termina de escribir una palabra.
        loop: true, // Repetir el array de strings
        loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
        showCursor: false, // Mostrar cursor palpitanto
        cursorChar: '|', // Caracter para el cursor
        contentType: 'html', // 'html' o 'null' para texto sin formato
    });
    /*
    const typedproject = new Typed('.project-typed', {
        strings: [
            '<b class="changing-word">Mis Proyectos</b>', 
            '<b class="changing-word">My Projects</b>'
        ],
        typeSpeed: 65, // Velocidad en mlisegundos para poner una letra,
        startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
        backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
        smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
        shuffle: false, // Alterar el orden en el que escribe las palabras.
        backDelay: 200, // Tiempo de espera despues de que termina de escribir una palabra.
        loop: true, // Repetir el array de strings
        loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
        showCursor: false, // Mostrar cursor palpitanto
        cursorChar: '|', // Caracter para el cursor
        contentType: 'html', // 'html' o 'null' para texto sin formato
    });
    const typedabout = new Typed('.about-typed', {
      strings: [
        '<b class="changing-word"Sobre mi</b>', 
        '<b class="changing-word">About me</b>'
      ],
      typeSpeed: 65, // Velocidad en mlisegundos para poner una letra,
      startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
      backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
      smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
      shuffle: false, // Alterar el orden en el que escribe las palabras.
      backDelay: 200, // Tiempo de espera despues de que termina de escribir una palabra.
      loop: true, // Repetir el array de strings
      loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
      showCursor: false, // Mostrar cursor palpitanto
      cursorChar: '|', // Caracter para el cursor
      contentType: 'html', // 'html' o 'null' para texto sin formato
  });
  const typedcontact = new Typed('.contact-typed', {
    strings: [
      '<b class="changing-word">Contactame</b>', 
      '<b class="changing-word">Contact me</b>'
    ],
    typeSpeed: 65, // Velocidad en mlisegundos para poner una letra,
    startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
    smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 200, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: false, // Mostrar cursor palpitanto
    cursorChar: '|', // Caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato
  });
  const typedwork = new Typed('.work-typed', {
    strings: [
      '<b class="changing-word">Mi Trabajo</b>', 
      '<b class="changing-word">My Work</b>'
    ],
    typeSpeed: 65, // Velocidad en mlisegundos para poner una letra,
    startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
    smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 200, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: false, // Mostrar cursor palpitanto
    cursorChar: '|', // Caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato
  });
  */
  $(".project-image").hover(
    function() {
        $(this).children('.overlay').addClass("overlay-hover");
        $(this).children('.proj-img').addClass("img-hover");
    }, function() {
        $(this).children('.overlay').removeClass("overlay-hover");
        $(this).children('.proj-img').removeClass("img-hover");
    }
  );
    
    /************** EFECTO BLAST INI **************/
    //blasting headinga
    $("h1").blast({
      delimiter: "character",
      tag: "span"
    });

    setTimeout(function() {
      $('.header-title').find(".blast").removeClass('animated');
      $('.header-title').find(".blast").css('opacity',1);
      $('.header-title').find(".blast").mouseenter(function () {
          $(this).addClass('animated rubberBand');
          $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated rubberBand');
          });
      });
    }, 1000);
    
    /************** EFECTO BLAST END **************/
});