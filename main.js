document.addEventListener('DOMContentLoaded', function() {

    var ripple_wrap = document.querySelector('.ripple-wrap'),
        rippler = document.querySelector('.ripple'),
        finish = false,
        storedcontent,
        monitor = function(el) {
          var computed = window.getComputedStyle(el, null),
              borderwidth = parseInt(computed.getPropertyValue('border-left-width'));
          console.log(borderwidth)
          if (!finish && borderwidth >= 1500) {
            el.style.WebkitAnimationPlayState = "paused";
            el.style.animationPlayState = "paused";
            swapContent();
          }
          if (finish) {
            el.style.WebkitAnimationPlayState = "running";
            el.style.animationPlayState = "running";
            return;
          } else {
            window.requestAnimationFrame(function() {monitor(el)});
          }
        };
    
    storedcontent = document.getElementById('content-2');
    
    function handleAnimationEnd() {
      ripple_wrap.classList.remove('goripple');
    }
  
    rippler.addEventListener("webkitAnimationEnd", handleAnimationEnd);
    rippler.addEventListener("oAnimationEnd", handleAnimationEnd);
    rippler.addEventListener("msAnimationEnd", handleAnimationEnd);
    rippler.addEventListener("mozAnimationEnd", handleAnimationEnd);
    rippler.addEventListener("animationend", handleAnimationEnd);
  
    document.body.addEventListener('click', function(e) {
      if (e.target.tagName.toLowerCase() === 'a') {
        rippler.style.left = e.clientX + 'px';
        rippler.style.top = e.clientY + 'px';
        e.preventDefault();
        finish = false;
        ripple_wrap.classList.add('goripple');
        window.requestAnimationFrame(function() {monitor(rippler)});
      }
    });
    

    function swapContent() {
      if (storedcontent.style.display == "none") {
        storedcontent.style.display = "flex";
      } else {
        storedcontent.style.display = "none";
      }
      
      setTimeout(function() {
        finish = true;
      }, 10);
    }
    
  });
