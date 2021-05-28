$(function(){
            $('#input').bind('keypress',function(event){
            　if(event.keyCode==13){
                var keyword = $("#input").val();
                window.location.href='/api/kn?entity_name='+keyword
            　return false;
            　}
            });

            function search_entity_and_add_html (data, entity) {
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

            function ajax_request(){
                    $(".show").find("div").remove();
                    var entity = $("#input").val();

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
                                     search_entity_and_add_html(data, entity)
                                 },
                                 error:function(data){
                                     console.log("error")
                                 }
                             });
                     }

            };


            function not_data_radius_not_change(){
                    var obj =  document.getElementById("line_id") || document.getElementById("line_bottom_id")
                    if (obj){
                            document.getElementById("bbox").setAttribute("style", "border:1px solid #4E62D9;border-bottom-left-radius: 0px;");
                    }else{
                            document.getElementById("bbox").setAttribute("style", "border:1px solid #4E62D9");

                    };

            };


            $('#input').on({
                    focus : function(e){
                        ajax_request();
                    },

                    keyup : function(e){
                            not_data_radius_not_change();

                    },

                    input : function(e){
                        ajax_request();

                    },
            })




})
