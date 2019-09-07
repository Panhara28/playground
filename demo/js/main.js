$(document).ready(function(){
   $.ajax({
    url: "https://panhara28.github.io/dota2jsonplaceholder/data.json",
    success: function(data){
      data.forEach(function(user){
        var div = $("#app");
        div.append(`
          <div class="col-md-4 col-sm-6 col-xs-12">
            <article class="${user.backgroundColor.split(" ")[0]}-${user.id} ${user.backgroundColor}">
              <h2>
                <span>Christopher Walken</span>
                <strong>
                  <i class="fa fa-fw fa-star"></i>
                  The Deer Hunter
                </strong>
              </h2>
              <div class="mc-content">
                <div class="img-container">
                  <img class="img-responsive" src="http://u.lorenzoferrara.net/marlenesco/material-card/thumb-christopher-walken.jpg">
                </div>
                <div class="mc-description">
                  He has appeared in more than 100 films and television shows, including The Deer Hunter, Annie Hall, The Prophecy trilogy, The Dogs of War ...
                </div>
              </div>
              <a class="mc-btn-action">
                <i class="fa fa-bars"></i>
              </a>
              <div class="mc-footer">
                <h4>
                  Social
                </h4>
                <a class="fa fa-fw fa-facebook"></a>
                <a class="fa fa-fw fa-twitter"></a>
                <a class="fa fa-fw fa-linkedin"></a>
                <a class="fa fa-fw fa-google-plus"></a>
              </div>
            </article>
          </div>
          <script>
          $('.material-card-${user.id} > .mc-btn-action').click(function() {
            var card = $(this).parent('.material-card-${user.id}');
            var icon = $(this).children('i');
            icon.addClass('fa-spin-fast');

            if (card.hasClass('mc-active')) {
              card.removeClass('mc-active');

              window.setTimeout(function() {
                icon
                  .removeClass('fa-arrow-left')
                  .removeClass('fa-spin-fast')
                  .addClass('fa-bars');

              }, 800);
            } else {
              card.addClass('mc-active');

              window.setTimeout(function() {
                icon
                  .removeClass('fa-bars')
                  .removeClass('fa-spin-fast')
                  .addClass('fa-arrow-left');

              }, 800);
            }
          });
          </script>
        `);
      });
      console.log(data[0]);
    },
    error: function(data){
      console.log("error");
    }
  });

});
