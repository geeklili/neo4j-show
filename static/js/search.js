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
                                var obj =  document.getElementById("line_id")
                                if (obj){
                                        document.getElementById("bbox").setAttribute("style", "border:1px solid #4E62D9;border-bottom-left-radius: 0px;");
                                }else{
                                        document.getElementById("bbox").setAttribute("style", "border:1px solid #4E62D9");

                                };
                        },
                        input : function(e){
                            //console.log($(this).val()+'keyup')
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
                                     document.getElementById("bbox").setAttribute("style", "border:1px solid #4E62D9");
                                     var listShow = eval(data)
                                     // var listShow = ['a','b','c'];
                                     for (var index = 0; index < listShow.length; index++) {
                                         var backword = listShow[index];

                                         if (listShow.length != index+1){
                                             $everyLine = '<a href="/api/kn?entity_name=' + backword + '" style="text-decoration:none;color:black"><div class="line" id="line_id">' + backword + '</div></a>';
                                             $(".show").append($everyLine);
                                         }else{
                                             $everyLine = '<a href="/api/kn?entity_name=' + backword + '" style="text-decoration:none;color:black"><div class="line_bottom" id="line_bottom_id">' + backword + '</div></a>';
                                             $(".show").append($everyLine);
                                             };
                                     };

                                     if (listShow.length > 0){
                                         document.getElementById("bbox").setAttribute("style", "border:1px solid #4E62D9;border-bottom-left-radius:0px");
                                     }else{
                                         document.getElementById("bbox").setAttribute("style", "border:1px solid #4E62D9;border-bottom-left-radius:9px");
                                     };

                             };

                        },
                })

    })
