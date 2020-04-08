<script>
   $(document).ready(function() {
       $(window).scroll(function(event) {
           let scroll = $(this).scrollTop();
           let opacity = 1 - (scroll / 1000);
           if (opacity >= 0) {
               $('.scroller').css('opacity', opacity);
           }
       });
   });
   </script>
