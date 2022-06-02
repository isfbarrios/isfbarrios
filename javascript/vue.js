$( document ).ready(function() {
    
    const skillsPngs = new Vue({
      el: ".content-image",
      data: {
        srcs: [
          {src: 'html-png.png'},
          {src: 'css3-png.png'},
          {src: 'javascript-png.png'},
          {src: 'java-png.png'},
          {src: 'mysql-png.png'}
        ]
      }
    })
});