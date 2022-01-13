function handleError(msg, data) {
    $.post(
        "/frontlog.php",
        {
            message: msg || '(no message)',
            data: data
        }
    );
}
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

$(document).ready(function () {
    $(document).on("click",".click",function(e){
    //$('.click').click(function () {
        if(isEmail($('#email').val())){
            e.preventDefault();
            $.get(
                '/click.php?email='+window.btoa($('#email').val()),
                function (data, textStatus) {
                    var obj;
                    try {
                        obj = $.parseJSON(data);
                    } catch (err) {
                        //handleError('Error parsing click response (ajax: ' + textStatus + ')', data);
                        return;
                    }

                    if (undefined === obj.url) {
                        
                        //handleError('No url in click response (ajax: ' + textStatus + ')', obj);
                        return;
                    }

                    try {
                        window.location.href = obj.url;
                    } catch (err) {
                        //handleError(err.message);
                    }
                }
            );
        }
    });
});