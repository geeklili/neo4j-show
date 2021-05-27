    var a = 0;

    function search_entity(){
        var keyword = $("#input").val();
        window.location.href='/api/kn?entity_name='+keyword;
    };

    function select_entity(){
        var keyword = $("#select").val();
        window.location.href='/api/kn?entity_name='+keyword;

    };

    function input_click(){
        a = 1;
        var obj =  document.getElementById("line_id")
        if (obj){
                document.getElementById("bbox").setAttribute("style", "border:1px solid #4E62D9;border-bottom-left-radius: 0px;");
        }else{
                document.getElementById("bbox").setAttribute("style", "border:1px solid #4E62D9");

        };
    };

    function loss_focus(){
        var obj =  document.getElementById("line_id")
        if(!obj){
                console.log('没有line，失去焦点')
                document.getElementById("bbox").setAttribute("style", "border:1px solid #C7C4CE");
                a = 0;
        };

    };

    function get_mouse(){
        var obj =  document.getElementById("line_id")
        if (obj){
                document.getElementById("bbox").setAttribute("style", "border:1px solid #4E62D9;border-bottom-left-radius: 0px;");
        }else{
                document.getElementById("bbox").setAttribute("style", "border:1px solid #4E62D9");

        };
        console.log('进去')
    };

    function loss_mouse(){
        if (a==0){
            document.getElementById("bbox").setAttribute("style", "border:1px solid #C7C4CE");
        }else{
            console.log('else')
        };

    };