        $(function(){
                $('#input').bind('keypress',function(event){
                　if(event.keyCode==13){
                    var keyword = $("#input").val();
                    window.location.href='/api/kn?entity_name='+keyword
                　return false;
                　}
                });

                $('input').on({
                        keyup : function(e){
                            // console.log($(this).val()+'keyup')
                            $(".show").find("div").remove();
                            var entity = $(this).val();

                             if (entity){
                                  $.ajax({
                                         url: "/api/around_data",
                                         type: "GET",
                                         jsonpCallback: "entity_search",
                                         data: {'word': entity},
                                         async: true,
                                         success: function (data) {
                                             $(".show").find("div").remove();
                                             console.log('success entity: '+entity);
                                             entity_search(data, entity)
                                         },
                                         error:function(data){
                                             console.log("error")
                                         }
                                     });
                             }


                             entity_search = function (data, entity) {
                                     var listShow = eval(data)
                                     // var listShow = ['a','b','c'];
                                     for (var index = 0; index < listShow.length; index++) {
                                         var backword = listShow[index];

                                         if (listShow.length != index+1){
                                             $everyLine = '<a href="/api/kn?entity_name=' + backword + '" style="text-decoration:none;color:black"><div class="line">' + backword + '</div></a>';
                                             $(".show").append($everyLine);
                                         }else{
                                             $everyLine = '<a href="/api/kn?entity_name=' + backword + '" style="text-decoration:none;color:black"><div class="line_bottom">' + backword + '</div></a>';
                                             $(".show").append($everyLine);
                                             };
                                     };

                                     if (listShow.length > 0){
                                         var obj = document.getElementById("bbox");
                                         obj.setAttribute("style", "border-bottom-left-radius:0px !important");
                                     }else{
                                         var obj = document.getElementById("bbox");
                                         obj.setAttribute("style", "border-bottom-left-radius:9px !important");
                                     };

                             };

                        },
                })

    })
