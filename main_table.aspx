<%@ Page Language="C#" AutoEventWireup="true" CodeFile="main_table.aspx.cs" Inherits="main_table" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
   

  <meta http-equiv="X-UA-Compatible" content="IE=8,IE=11" />

    <script src="doc/Fixed-Header-Table-master/demo/js/jquery-1.11.3.js" type="text/javascript"></script>
    <script src="http://cdn.hcharts.cn/highcharts/highcharts.js" type="text/javascript"></script>
   


    <script src="doc/JS/Ajax_YJG.js" type="text/javascript"></script>
    <link href="doc/CSS/common.css" rel="stylesheet" type="text/css" />

    <script src="doc/JS/export_chart.js" type="text/javascript"></script>
    <script src="doc/JS/export_chart_2Y_jam.js" type="text/javascript"></script>
     <script src="doc/JS/DCoolWeb.Calendar%20v3.2.en.js" type="text/javascript"></script>
     <script src="doc/JS/change_color.js" type="text/javascript"></script>
    <script src="doc/JS/ddScript0.js" type="text/javascript"></script>
    <style type="text/css">
    .inp{ width:20px; width:100px; margin-right:7px; margin-left:3px; 
         
         }
          .main_table tr:hover{ cursor:pointer; background-color:#eb7324; color:#fff;
             
             }
         .main_table td{word-break:break-all; word-wrap:break-word;}
        .main_table tr{ height:32px;}
        .frzlft{ position:absolute; left:0px; width:165px; z-index:30;  background-color:#f0f0f0; display:none;  }
        .frzlft tr{ height:32px; text-align:right; padding-right:10px; }
        .frzlft tr td{ padding-right:10px; }
        .frzlft tr:first-child{ height:64px; background:#c3d8f1; }
               .rej_ch_div{ height:500px;}
               #chart_rej{ width:60%; float:left; position:relative;}
               #table_rej{ width:38%; float:left; overflow:auto;height:500px; position:relative;}
               .ztl{ display:none;}
              .link{ color:Blue; cursor:pointer; text-decoration:underline; }
              #fuxuan{ width:100px; height:130px; border:1px solid #000; background-color:#fff; position:absolute; padding:3px; }
              .ceb{ margin-right:4px;}
              ul li{ list-style:none;}
            
             
              .rejtab{ width:95%;}
              .rej_box{  position:relative; margin-top:7px; margin-bottom:7px; padding:4px; height:510px; border-bottom:2px solid #00b88c; border-top:2px solid #00b88c;}
   .tit_free{ display:none;z-index:31;}
   .bd_red{ background:red;}
   .md_red{ background:red;}
   .pop:hover{ font-weight:bold; text-decoration:underline; cursor:pointer;}
   .fd_box{ width:100%; position:absolute; bottom:0px; border-top:2px solid #ccc; height:230px; background:#f0f0f0; overflow:auto;}
   .fd_cls{ color:blue; margin:3px; text-decoration:underline; cursor:pointer;}
   .fd_tab{ width:98%; margin:1%;}
   .fd_tab th{}
   .attach{ color:#00b88c; text-decoration:underline; cursor:pointer;}
   .fd{ width:65px;}
    </style>
  
   
    <script type="text/javascript">
        //http://cdn.hcharts.cn/jquery/jquery-1.8.3.min.js
        var tablst = ['.main_table', '.rej_info', '.assy_dc'];
        $(document).ready(function () {

            $('.but_sub').click(function () {
                $('.tit_free').remove();
                search();
            })
            $('.dtd').click(function () {
                $('.dd1').prop('title', '_');
                fill_date('.dd1', '.dd2');
                $('.tit_free').remove();
                get_tab();
            })
            $('.ztl').click(function () {
                $('.ztl').css({
                    'background-color': '#4394d6'

                });
                $(this).css({
                    'background-color': '#eb7324'

                });
                $('.box').hide(500, function () {
                    // alert(tablst[$(val).index()]);
                })
                $(tablst[$(this).index()]).show(300);

            })
            $('.ceb').click(function () {
                //                var cs = $(this).val() + ";";
                //                if ($('.lottype').val().indexOf(cs) > -1) {
                //                    $('.lottype').val($('.lottype').val().replace(cs, ''));
                //                } else {
                //                    $('.lottype').val($('.lottype').val() + cs);

                //                }
                $(".lottype").focus();
                fla = 1;
                var ss = ""; //  $('.lottype').val("");
                $('input[name="ra"]:checked').each(function () {//遍历每一个名字为ra的复选框，其中选中的执行函数    
                    ss += $(this).val() + ",";

                });
                $('.lottype').val(ss);



            })




            $(window).scroll(function () {
                // console.log($(window).scrollLeft());
                var offsetTop = $(window).scrollTop();
                $(".fd_box").css({ top: offsetTop + $(window).height() - 230 + "px",
                    left: $(window).scrollLeft()
                })
                if ($(window).scrollLeft() > 500) {
                    $('.frzlft').show();
                    $('.frzlft').css('left', $(window).scrollLeft()-30+'px');
                } else { $('.frzlft').hide(); }
                if (offsetTop >= 200) {//
                    if (fla1 == 0) {
                        fla1 = 1;

                        $('.tit_free').show();

                    } else {
                        $(".tit_free").css({ top: offsetTop + "px" })

                    }
                }
                else {
                    fla1 = 0;
                    title_freeze_hide();
                }

            })
            ///////////////////////////0804
            $('.main_table').delegate('.pop', 'click', function () {
                var val = $(this).html(); //if (val === "") { return; }
                var lotno = $(this).parent().children().eq(6).text();
                var ind = $(this).index();
                var def = $('.main_table tr').eq(1).children().eq(ind).html();
                console.log(lotno);
                console.log(val);
                console.log(def);
                $('.fd_box').slideDown(200);
                $.post('post.aspx', {
                    type: 'edt0804',
                    v1: lotno,
                    v2: ind,
                    v3: def,
                    len: $('.fd_tab tr').length
                }, function (data) {
                    $('.fd_tab').append(data);
                    //                    if ($('.fd_tab tr').length === 2) {
                    //                        multGridHead($('.fd_tab'));
                    //                    }
                })


            })
            $('.fd_cls').click(function () {
                $('.fd_box').slideUp(600); $('.fd_tab').html('');
            })
            $('.fd_tab').delegate('.attach', 'click', function () {
                var did = $(this).siblings().attr('id');
                console.log(did);
                window.open("attach_les.aspx?id=" + did, "newwindow", "height=250, width=400,toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");

            })
            $('.fd_box').delegate('.opcl', 'click', function () {
                ($(this).val() == "Open") ? $(this).val('Close') : $(this).val('Open');
            })
            $('.fd_tab').delegate('.fd', 'click', function () {
                var did = $(this).attr('id');
                console.log(did);
                var vals = ""; var obj = $(this);
                $(this).parents('tr').find('.edt').each(function (i, val) {
                    vals += $(val).val() + "|";
                })
                $.post('post.aspx', {
                    type: 'up_tr',
                    val: vals,
                    sid: did


                }, function (data) {
                    obj.parent().html('Success!');
                })
            })
            //////////////////////////

            $('.main_table').delegate('table tr', 'click', function () {
                $('table tr').css('color', '#000');
                $(this).css('color', 'blue');

            })
            //            $("div").delegate("button", "click", function () {
            //                $("p").slideToggle();
            //            });
        })



var getval = "";
function title_freeze_show_0720(obj, fla) {
    //obj = obj + " tr";

    //    var hc = "";
    //    for (i = 0; i < $(obj + " tr").length; i++) {
    //      if ($(obj + " tr").eq(i).html().indexOf('th>') > -1) {
    //   hc+='<tr>' + $(obj + " tr").eq(i).html() + "</tr>";
    //}
    //}
   
    if (fla == '2') {
        $('body').append("<table class=tit_free ><tr>" + $(obj + " tr").eq(0).html() + "</tr><tr>" + $(obj + " tr").eq(1).html() + "</tr></table>"); //<tr>" + $(obj + " tr").eq(0).html() + "</tr>
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

}
        function search() {
            if ($('.time').eq(0).val() == '' || $('.time').eq(1).val() == '') {
                alert('Need time.'); return;
            }
            if ($('.pn').val() == '' && $('.bd').val() == '') {
                alert('Need PN or BD.'); return;
            }
            get_tab();

        }
        function get_tab() {
            getval = "";
            $('.inp').each(function () {
                getval += $(this).val() + $(this).prop('title') + "|";
            })
            Ajax_type = "get_main_table";
            Ajax_value1 = getval;
         ajax();
         $('.main_table').html("<div align=center><img src='doc/img/jiazai.gif' /></div>");
         $('.dd1').prop('title', '');
        
        }
        function Ajax_return() {
            if (Ajax_type == "get_main_table") {
                $('.main_table').html(excel+Return_value);
                // var oTable = $($("#divListGrid").find("table:eq(0)"));

                //
                $('.frzlft').html("");
               $('.assy_table tr').each(function (i,val) {
                   $(val).children().last().remove();
                   $('.frzlft').append("<tr><td>" + $(val).children().eq(6).html() + "</td></tr>")

               })
              $('.frzlft').css('top', $('.assy_table').offset().top);
               console.log($('.main_table').offset().top);
                //


               multGridHead($('.assy_table'));
           $('#op_pan').show(300);
           ch_col();
           ///
           title_freeze_show_0720('.assy_table', '2');
           ///
           Ajax_type = "get_rej_chart";

           ajax(); //get rej mes chart
           return;
                Ajax_type = "get_rej_info";
                Ajax_value1 = getval;
                 ajax();//get rej mes report

             }
             if (Ajax_type == "get_rej_chart") {



                 jg_danwei = "ppm";
                 var ss = new EC(); ss.Chart_Box = "chart_rej"; ss.columnWidth = 35;

                 if (Return_value.length < 5) {
                     $('#chart_rej').html('');
                  } else {
                     var sz = Return_value.split('[');


                     ss.Source_Data = sz[0];
                     ss.Series_type = sz[1];
                     ss.Series_name = sz[2];
                     ss.Title = sz[3];
                     ss.Y_name = sz[4];
                     ss.Spline_Val = true;
                     ss.Show_Chart();
                 }

                 //get assy dc chart 1

                 Ajax_type = "get_rej_table";

                 ajax();
                 return;
             }
             if (Ajax_type == "get_rej_table") {
                 $('#table_rej').html(Return_value);
                 Ajax_type = "get_assy_dc_chart";

                 ajax();
                 return;
             
             }
             if (Ajax_type == "get_assy_dc_chart") {

                 var ss = new EC_2Y(); ss.Chart_Box = "chart_dc"; ss.columnWidth = 17;
                 //   alert(Return_value);
                 if (Return_value.length < 5) { $('#chart_dc').html(''); } else {
                     var sz = Return_value.split('[');

                     ss.Title = "Assy yield";
                     ss.Source_Data = sz[0];
                     ss.Series_type = sz[1];
                     ss.Series_name = sz[2];
                     ss.Title = sz[3];
                     ss.Y_name = sz[4];
                     ss.Spline_Val = true;
                     ss.Show_Chart_TwoY();
                 }
                 Ajax_type = "get_assy_dc_chart_1";

                 ajax();
                 return;
             }
             if (Ajax_type == "get_assy_dc_chart_1") {

                 var ss = new EC_2Y(); ss.Chart_Box = "chart_dc_1"; ss.columnWidth = 17;
                 //   alert(Return_value);
                 if (Return_value.length < 5) { $('#chart_dc_1').html(''); return; }
                 var sz = Return_value.split('[');

                 ss.Title = "DC yield";
                 ss.Y_Para = "=Assy Qty|=DC yield|=DC Goal";
                 ss.Source_Data = sz[0];
                 ss.Series_type = sz[1];
                 ss.Series_name = sz[2];
                 ss.Title = sz[3];
                 ss.Y_name = sz[4];
                 ss.Spline_Val = true;
                 ss.Show_Chart_TwoY();
                 Ajax_type = "get_main_table";
                 return;
             }
//            if (Ajax_type == "get_rej_info") {
//                $('.rej_info').html(Return_value);
//                Ajax_type = "get_rej_chart";
//                Ajax_value1 = getval;
//                ajax(); //get rej mes chart
//                return;

//            }
//            if (Ajax_type == "get_rej_chart") {


//                var ss = new EC(); ss.Chart_Box = "chart_rej"; ss.columnWidth = 35;
//              //  alert(Return_value);
//                if (Return_value.length < 5) { alert("No data"); return; }
//                var sz = Return_value.split('[');


//                ss.Source_Data = sz[0];
//                ss.Series_type = sz[1];
//                ss.Series_name = sz[2];
//                ss.Title = sz[3];
//                ss.Y_name = sz[4];
//                ss.Spline_Val = true;
//                ss.Show_Chart();
//               

//                //get assy dc chart 1
//                Ajax_type = "get_assy_dc_chart";
//                Ajax_value1 = getval;
//                ajax();
//                return;

//            }
//            if (Ajax_type == "get_assy_dc_chart") {

//                var ss = new EC_2Y(); ss.Chart_Box = "chart_dc"; ss.columnWidth = 30;
//             //   alert(Return_value);
//                if (Return_value.length < 5) { alert("No data"); return; }
//                var sz = Return_value.split('[');


//                ss.Source_Data = sz[0];
//                ss.Series_type = sz[1];
//                ss.Series_name = sz[2];
//                ss.Title = sz[3];
//                ss.Y_name = sz[4];
//                ss.Spline_Val = true;
//                ss.Show_Chart_TwoY();
//                return;
             //            }
           
            
        }
        function tc(obj) {
            var ind=1;
//            $('.main_table tr:first th').each(function (i, val) {
//                if ($(val).html() == "PN") {
//                    ind = i; return false;
//                }
//            })

          //  var pn = $(obj).parent().children().eq(ind).html();//var s = "";s=s.toUpperCase;
          //  window.open('dtl.aspx?pn=' + pn, '_blank');
        }
        function rejinf() {
          
           
           
         }
         function assydc() { }
         function get_rej(obj) {
             window.open('rej_info.aspx?v1='+Ajax_value1+"&v2="+obj, '_blank');

         }
         function drop(obj) {
             fla = 1;
             jQuery("#fuxuan").css("left", jQuery(obj).offset().left);
             jQuery("#fuxuan").css("top", jQuery(obj).offset().top + 15);
             jQuery("#fuxuan").css("width", jQuery(obj).width()-6);
             jQuery("#fuxuan").slideDown(100);
            
         }
         var fla = 0;
         function ini() {
             $('#fuxuan').slideUp(20);

            $('.fd_box').slideUp(200);
//             $('.dd1').prop('title', '_');
//             fill_date('.dd1', '.dd2');
//             get_tab();
             $('.dd1').prop('title', '');

           
          
         }
         function up() {
         fla = 0;  setTimeout('wait100()', 1100); }
         function wait100() {
             if (fla==0) { $("#fuxuan").slideUp(200); }

         }
    </script>
</head>
<body onload='ini()' style=" padding-right:10px;">
     <iframe  class='iframe_head' src="http://cvpmdsip02/phasereview/webHead.aspx?system=LVM&item=Main table&user=" frameborder="0"></iframe>
    <div align="right"><a href='ACTION_TRACKING_search.aspx' target=_blank>Action Tracking Search</a></div>
     <div class='head'>
     PN<input class='inp pn' value='' /> BD<input class='inp bd' /> From Time<input onclick="calendar(this)" class='inp time dd1' /> To Time<input onclick="calendar(this)"  class='inp time dd2'/> 
     Lot Type<input class='inp lottype' value='Q,F,' onfocus='drop(this)' onblur='up()' readonly="readonly" />
     Status<select class='inp'  ><option ></option><option value='0'>Processing</option><option value='1'>Complete</option></select>
     Tech<input class='inp' />
     <button  class='but_sub'>Search</button> <button  class='dtd'>DTD</button>
     </div>
     <div id='op_pan' style='margin-left:2%; display:none;'>
     <button class='but_sub ztl' >Main Table</button>
     <button class='but_sub ztl' >Reject Info</button>
     <button class='but_sub ztl'>Assy$Dc yield</button></div>
   <%--	<div class="container_12">
    		
    		<div class="grid_88">
    			<table class="fancyTable" id="myTable01" cellpadding="0" cellspacing="0">
    				</table>
    		</div>
    		<div class="clear"></div>
    	</div>--%>
     <div class='main_table box'  style='margin-left:0%; margin-right:10px;'> </div>
     <div class='rej_info box' style='margin-left:0%;margin-right:10px;'></div>
     <div class='assy_dc box' style='margin-left:0%;margin-right:10px;'></div>
    <div class='rej_box'> <div id='chart_rej' class='rej_ch_div'></div>
    
     <div id='table_rej' ></div>
    </div>
     
     <div id='chart_dc' class='rej_ch_div'></div>
        <div id='chart_dc_1' class='rej_ch_div'></div>

    <div id='fuxuan'>
    <ul>
    <li> <input type='checkbox' value='Q' name='ra' class='ceb' /><span class='xuanxiang'>Q</span></li>
    <li> <input type='checkbox' value='F' name='ra' class='ceb' /><span class='xuanxiang'>F</span></li>
    <li><input type='checkbox' value='M' name='ra' class='ceb' /><span class='xuanxiang'>M</span></li>
    <li><input type='checkbox' value='E' name='ra' class='ceb' /><span class='xuanxiang'>E</span></li>
    <li>   <input type='checkbox' value='P' name='ra' class='ceb' /><span class='xuanxiang'>P</span></li>
    </ul>
     
        
          
         
    </div>
    <div class='fd_box'>
    <div align=right><a class='fd_cls'>Close</a></div>
    <table class='fd_tab'></table>

    </div>
   <table class=frzlft></table>
     <script src="doc/JS/DATE_OPERATION.js" type="text/javascript"></script>
</body>
</html>
