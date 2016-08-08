var Ajax_type = ""; var Ajax_value1 = ""; var Ajax_value2 = ""; var Ajax_value3 = "";
var Ajax_page = "ajax.aspx"; var Return_value = "";
function ajax() {
    try {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                Return_value = xmlhttp.responseText; var jieduan = Return_value.lastIndexOf("#");
                Return_value = Return_value.substring(0, jieduan);
                
                Ajax_return();
                //  $("#h300").slideUp(5);
                //                         alert(Return_value);

            }
        }
        xmlhttp.open("GET", Ajax_page+"?type=" + Ajax_type + "&value_1=" + Ajax_value1 + "&value_2=" + Ajax_value2 + "&value_3=" + Ajax_value3 + "&t=" + Math.random(), true);
        xmlhttp.send();
    } catch (e) { alert("There are some error in this page."); }
}


var fla1 = 0;var cac = "";
function title_freeze_show(obj,fla) {
    //obj = obj + " tr";
    
//    var hc = "";
//    for (i = 0; i < $(obj + " tr").length; i++) {
//      if ($(obj + " tr").eq(i).html().indexOf('th>') > -1) {
//   hc+='<tr>' + $(obj + " tr").eq(i).html() + "</tr>";
//}
    //}
    if ($('.tit_free').length > 0) {$('.tit_free').show();return; }
    if (fla == '2') {
        $('body').append("<table class=tit_free><tr>" + $(obj + " tr").eq(0).html() + "</tr><tr>" + $(obj + " tr").eq(1).html() + "</tr></table>"); //<tr>" + $(obj + " tr").eq(0).html() + "</tr>
    } else {
        $('body').append("<table class=tit_free><tr>" + $(obj + " tr").eq(0).html() + "</tr></table>"); //<tr>" + $(obj + " tr").eq(0).html() + "</tr>
 
    }
    $('.tit_free').css({
        'left': $(obj).offset.left,
        'top': '0px',
        'position': 'absolute',
        'width': $(obj).css('width')
       // ,        'height': '60px'

    });

    $('.tit_free tr:first').children().each(function (i, val) {
        $(val).width($(obj + " tr:first").children().eq(i).width());


    })
    if (fla == '2') {
        $('.tit_free tr').eq(1).children().each(function (i, val) {
            $(val).width($(obj + " tr").eq(1).children().eq(i).css('width'));


        })
    }

} function title_freeze_hide() {
    $('.tit_free').hide();
}