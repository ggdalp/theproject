$(document).ready(function (){
    
$('#menu2').qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: '<h2>My common piece of text here</h2>',
         title: "<h3>Categorias</h3>"
    },
        show: {
        event: 'click'
    },
     hide: {
        event: 'unfocus'
    },
    position:{
      my:'left top',
      at: 'top right',
      target: $('#menu2')
    },
        style: {
        classes: 'qtip-blue qtip-shadow'
    }
});
$('#menu1').qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: '<h2>My common piece of text here</h2>',
         title: "<h3>Titulo</h3>"
    },
        show: {
        event: 'click'
    },
     hide: {
        event: 'unfocus'
    },
    position:{
      my:'left top',
      at: 'top right',
      target: $('#menu1')
    },
    style: {
        classes: 'qtip-blue qtip-shadow'
    }
});
});

