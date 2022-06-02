$( document ).ready(function() {

    let myCarousel = document.querySelector('#carouselSlidesSkills');
    let carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000,
        wrap: true
    });
    /*
    let slidesProjects = document.querySelector('#carouselSlidesProjects');
    let carouselSlidesProjects = new bootstrap.Carousel(slidesProjects, {
        interval: 2000,
        wrap: true
    });
    */
    
    if (!$('.project-section').hasClass('hidden')) {
        //Obtengo los datos del JSON para cargar los proyectos realizados
        $.getJSON('/data/data-projects.json', (data) => {
            let html = "";
            for (let i = 0; i < data.length; i++) {
                html += getProjPreview(i, data[i].name, data[i].path, data[i].tools, data[i].description, data[i].url);
            }
            $(`#carouselSlidesProjects`).append(html);
            var owl = $('#carouselSlidesProjects.owl-carousel');
            owl.owlCarousel({
                items:2,
                loop:true,
                margin:0,
                autoplay:true,
                autoplayTimeout:2000,
                dots: false,
                autoplayHoverPause:true
            });
        });
    }

    function getProjPreview(dataid, name, path, tools, description, url) {
        let html = `<div class="item item-id${dataid}" data-dataid="${dataid}">`
            + `<div class="project id${dataid}" data-dataid="${dataid}">`
            + `<div class="projectBox">`
            + `<div class="projectImage clearfix">`
            + `<img src="${path}" alt="${name}-image">`
            + `<div class="projectMasking">`
            + `<span><i class="fab fa-dev"></i> ${tools}</span>`
            + `</div>`
            + `</div>`
            + `<div class="projectCaption clearfix">`                
            + `<a href="${url}">`
            + `<h5>${name}</h5>`
            + `</a>`
            + `<div class="description">`
            + `<p>${description}</p>`
            + `</div>`
            + `</div>`
            + `</div>`
            + `</div></div>`;
            return html;
    }
});