function ch_col() {
    $('.main_table table').width($('.main_table table tr').eq(3).find('td').length * 43 + 'px');
  //  $('.main_table table th').eq(5).width('65px');
    $('.bg_red').each(function () {
        $(this).parent().css({
            'background-color': 'Red',
            'color': '#000'
        })

    });
    $('.bg_yellow').each(function () {
       
        $(this).parent().css({
            'background-color': 'Yellow',
            'color': '#000'
        })

    });
    var ind = 0;len = 0,md=-1;
    $('.main_table table tr').eq(0).find('th').each(function (i, val) {
        if ($(val).html() == 'Defect') {
            ind = i; len = parseInt($(val).prop('colspan')); return false;

        }
    })
    $('.main_table table tr').eq(1).find('th').each(function (i, val) {
        if ($(val).html() == 'MD12') {
            md = i;  return false;

        }
    })
    
    var oo;
    $('.main_table table tr').each(function (i, val) {
        if (i > 1) {
            $(val).find('td').each(function (a, obj) {
                if (a >= ind && a < ind + len) {
                    oo = $(obj);
                    if (oo.html() != "") { oo.addClass('pop'); if (parseInt($(oo).html()) >= 3) { oo.addClass('bd_red') } }
                }
                if (a === md) {
                    oo = $(obj);
                    if (oo.html() != "") { oo.addClass('md_red') }
                }
            })
        }

    })
    console.log(ind);
    console.log(len);
    console.log(md);

}
var excel = "<div class='div_head'><button class='but_sub exp' onclick='export_excel()'>Excel</button></div>"
function export_excel() {
    if (Ajax_type == "get_assy_dc_chart") {Ajax_type = "get_main_table"; }
    window.open("export_excel.aspx?type=" + Ajax_type + "&value_1=" + Ajax_value1 + "&value_2=" + Ajax_value2 + "&value_3=" + Ajax_value3, '_blank');
}