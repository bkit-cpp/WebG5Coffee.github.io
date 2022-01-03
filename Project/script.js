(function () {
    "use strict";
  
    var carousels = function () {
      $(".owl-carousel1").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          680: {
            items: 2,
            nav: false,
            loop: false
          },
          1000: {
            items: 3,
            nav: true
          }
        }
      });
    };
  
    (function () {
      carousels();
    })(jQuery);
  })();
  
  function Test()
  {
   var na=document.getElementById("na").value;
   var pa=document.getElementById("pa").value;  
   if(na=="")
   {
     alert("You must fill the name");
     window.location.replace('dangnhap.html');
 }


 else if(pa==""||pa.length==6){
     alert("You must fill password");
     window.location.replace('dangnhap.html');
    
    }
    else {
   alert("Congratulation!");
   window.location.assign('index.html');
    }
 
  }
  function Test2(){
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;
    var c=document.getElementById("c").value;
    if(a==null||b==null||c==null||a==""||b==""||c=="")
    {
       alert("You must fill this form");
       window.location.replace('dangky.html');
    }
    else if(b.length!=c.length)
    {
      alert("Your repass is wrong");
    }
    else{
      alert("Congratulation!");
      window.location.assign('dangnhap.html');
    }
  }
  
  
  