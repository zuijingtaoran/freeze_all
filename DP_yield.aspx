<%@ Page Language="C#" AutoEventWireup="true" CodeFile="DP_yield.aspx.cs" Inherits="DP_yield" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
   <meta http-equiv="X-UA-Compatible" content="IE=8,IE=11" />
  
    <script src="doc/JS/jquery-1.11.3.js" type="text/javascript"></script>
    <script src="doc/JS/Ajax_YJG.js" type="text/javascript"></script>
    <link href="doc/CSS/common.css" rel="stylesheet" type="text/css" />
    <script src="doc/JS/ddScript.js" type="text/javascript"></script>  <script src="doc/JS/DCoolWeb.Calendar%20v3.2.en.js" type="text/javascript"></script>
    <style type="text/css">
    .inp{ width:20px; width:100px; margin-right:7px; margin-left:3px;}
     .main_table tr:hover{ cursor:pointer; background-color:#eb7324; color:#fff; }
       .dp_red{ color:#ed1c24;}
       .chart{ height:400px; width:78%;}
       .lee{ float:left; margin-top:20px;}
       .tabs{ width:20%;}
       .tabs table{ width:98%;}
       
    </style>
    <script type="text/javascript">
        $(document).ready(function () {
            $('.but_sub').click(function () {
                search();
            })
            $(window).scroll(function () {
                return;
                var offsetTop = $(window).scrollTop();
                if (offsetTop >= 97) {//
                    if (fla1 == 0) {
                        fla1 = 1;
                        title_freeze_show('.main_table', '2');


                    } else {
                        $(".tit_free").css({ top: offsetTop + "px" })
                    }
                }
                else {
                    fla1 = 0;
                    title_freeze_hide();
                }

            })


        })


      
        var getval = "";
        function search() {
            if ($('.time').eq(0).val() == '' || $('.time').eq(1).val() == '') {
                alert('Need time.');return;
            }

            get_tab();
        }
        function get_tab() {
            getval = "";
            $('.inp').each(function () {
                getval += $(this).val() + $(this).prop('title') + "|";
            })
            Ajax_type = "get_dp_table";
            Ajax_value1 = getval;
            ajax();
            $('.gettable').html("<div align=center><img src='doc/img/jiazai.gif' /></div>");
        }
        function Ajax_return() {
            if (Ajax_type == "get_tabs_dp") {
                $('.tabs').html(Return_value);
            }
            if (Ajax_type == "get_chart_dp") {
                var ss = new EC(); ss.Chart_Box = "chart"; ss.columnWidth = 35;

                if (Return_value.length < 5) {
                    $('#chart').html('');
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
                Ajax_type = "get_tabs_dp";
                ajax();
            }
            if (Ajax_type == "get_dp_table") {
                $('.gettable').html(excel + Return_value);
               // var oTable = $($("#divListGrid").find("table:eq(0)"));
                multGridHead($('.main_table'));
                ch_col();
                Ajax_type = "get_chart_dp";
                ajax();
            }
           

        

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

        function init() {

            $('.dd1').prop('title', '_');
            fill_date('.dd1', '.dd2');
            get_tab();
            $('.dd1').prop('title', '');
        }
    </script>
    <script src="doc/JS/highcharts.js" type="text/javascript"></script>
    <script src="doc/JS/export_chart.js" type="text/javascript"></script>
</head>
<body onload=init()>
     <iframe  class='iframe_head' src="http://cvpmdsip02/phasereview/webHead.aspx?system=LVM&item=DP yield&user=" frameborder="0"></iframe>
     <div class='head'>
       PN<input class='inp' value='' /> Assy lot<input class='inp lot' /> 
         Assy assign<input class='inp' />DP lot<input class='inp' /> From Time<input onclick="calendar(this)" class='inp time dd1' /> To Time<input onclick="calendar(this)"  class='inp  time dd2'/> <button  class='but_sub'>Search</button>
   
    
    
     </div>
     <div class='gettable'>
     
     </div>
     <div>
     <div id='chart' class='lee chart'></div>
     <div class='lee tabs'></div></div>
       <script src="doc/JS/change_color.js" type="text/javascript"></script>   <script src="doc/JS/DATE_OPERATION.js" type="text/javascript"></script>
</body>
</html>
