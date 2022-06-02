$( document ).ready(function() {

    //***************EFECTOS INI***************

    $('.nav-list').click(function() {
        $(this)
            .animate({transform:'translateX(5px)'})
            .animate({transform:'translateX(-5px)'})
            .animate({transform:'translateX(3px)'})
            .animate({transform:'translateX(-3px)'})
            .animate({transform:'translateX(2px)'})
            .animate({transform:'translateX(0)'});
    });
    if ($(window).width() > 1024) {
        $('.main-menu').animate({left:'-155px'}).animate({left:'0'});
        $('.home-section-header').removeClass('text-center');
    }
    if ($(window).width() < 1024) {
        $('.main-menu-nav-btn').animate({right:'-65px'}).animate({right:'25px'});
        $('.home-section-header').addClass('text-center');
    }

    $('.main-menu-nav-btn').click(function(e) {
        e.preventDefault();
        if ($('.nav-fa-toggle').hasClass('fa-bars')) {
            $('.main-menu').animate({left:'-155px'}).animate({left:'0'}, {duration: 500});
        }
        else if ($('.nav-fa-toggle').hasClass('fa-xmark')) {
            $('.main-menu').animate({left:'0'}).animate({left:'-155px'}, {duration: 500});
        }
        $('.main-menu-nav-btn').toggleClass('nav-bars nav-xmark');
        $('.nav-fa-toggle').toggleClass('fa-bars fa-xmark');
        $('.content-area').toggleClass('scroll not-scroll');
    })

    //Header aparece tras algunos segundos
    $('.header-content').fadeOut(0).delay(400).fadeIn(800);
    $('.floating-scroll-content').fadeOut(0).delay(400).fadeIn(800);

    //Efecto del titulo
    const typed = new Typed('.typed', {
        strings: [
            '<b class="changing-word">Developer</b>', 
            '<b class="changing-word">Freelancer</b>',
            '<b class="changing-word">Designer</b>'
        ],
        typeSpeed: 65, // Velocidad en mlisegundos para poner una letra,
        startDelay: 200, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
        backSpeed: 65, // Velocidad en milisegundos para borrrar una letra,
        smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
        shuffle: false, // Alterar el orden en el que escribe las palabras.
        backDelay: 200, // Tiempo de espera despues de que termina de escribir una palabra.
        loop: true, // Repetir el array de strings
        loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
        showCursor: false, // Mostrar cursor palpitanto
        cursorChar: '|', // Caracter para el cursor
        contentType: 'html', // 'html' o 'null' para texto sin formato

    });

    $( ".project-image" ).hover(
        function() {
            $(this).children('.overlay').addClass("overlay-hover");
            $(this).children('.proj-img').addClass("img-hover");
        }, function() {
            $(this).children('.overlay').removeClass("overlay-hover");
            $(this).children('.proj-img').removeClass("img-hover");
        }
    );

    //***************EFECTOS END***************
});