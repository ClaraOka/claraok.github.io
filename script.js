(function($,win){

  $(window).on('load',function(){
    $('#projects figure').each(function(index){
      var $projet = $(this);
      var $liste = $projet.find('.liste-images');
      var nombreImages = $liste.find('li').length;
      var compteur = $projet.find('.compteur');
      compteur.text(1+'/'+nombreImages);
      $(this).find('.liste-images').on('click',function(e){
        var $activeLi = $liste.find('.active');
        var nb = $liste.find('li').index($activeLi);
        var target = 0;
        if(nb === nombreImages -1) {
          target = 0;
        } else {
          target = nb+1;
        }
        $activeLi.removeClass('active');
        compteur.text((target+1)+'/'+nombreImages);
        var $nextLi = $liste.find('li:eq('+target+')');
        $nextLi.addClass('active');
        $liste.css({width:$nextLi.find('img').width()});
      });

    });
  });

})(jQuery,this);
