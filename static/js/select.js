    function search_entity(){
        var keyword = $("#input").val();
        window.location.href='/api/kn?entity_name='+keyword
    };

    function select_entity(){
        var keyword = $("#select").val();
        window.location.href='/api/kn?entity_name='+keyword
    };