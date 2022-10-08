$('.btn').click(function(){
                    $(this).toggleClass("click");
                    $('.Barre').toggleClass("show");
                });
                $('.feat-btn').click(function(){
                    $('nav ul .feat-show').toggleClass("show");
                    $('nav ul .first').toggleClass("rotate");
                });
                $('nav ul li').click(function(){
                    $(this).addClass("active").siblings().removeClass("active");
                });