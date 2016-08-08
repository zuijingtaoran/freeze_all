<%@ Page Language="C#" AutoEventWireup="true" CodeFile="rej_info.aspx.cs" Inherits="rej_info" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
   <meta http-equiv="X-UA-Compatible" content="IE=8,IE=11" />
  
    <script src="doc/JS/jquery-1.11.3.js" type="text/javascript"></script>
    <script src="doc/JS/Ajax_YJG.js" type="text/javascript"></script>
    <link href="doc/CSS/common.css" rel="stylesheet" type="text/css" />
    <script src="doc/JS/highcharts.js" type="text/javascript"></script>
    <script src="doc/JS/exporting.js" type="text/javascript"></script>
    <script src="doc/JS/export_chart.js" type="text/javascript"></script>
    <script src="doc/JS/export_chart_2Y_jam.js" type="text/javascript"></script>
    <script src="doc/JS/ddScript.js" type="text/javascript"></script>  <script src="doc/JS/DCoolWeb.Calendar%20v3.2.en.js" type="text/javascript"></script>
    <style type="text/css">
    .inp{ width:20px; width:100px; margin-right:7px; margin-left:3px; 
         
         }
          .main_table tr:hover{ cursor:pointer; background-color:#eb7324; color:#fff;
             
             }
           
               .rej_ch_div{ height:350px;}
               .ztl{ display:none;}
              
              .head{ display:none;}
              .lnk{ display:none;}
    </style>

    <script type="text/javascript">
        var tablst = ['.main_table', '.rej_info', '.assy_dc'];
        $(document).ready(function () {
            $('.but_sub').click(function () {
                search();
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


        })


      
        var getval = "";
        function search() {
//            if ($('.time').eq(0).val() == '' || $('.time').eq(1).val() == '') {
//                alert('Need time.'); return;
//            }
//            getval = "";
//            $('.inp').each(function () {
//                getval += $(this).val() + "|";
//            })
//            Ajax_type = "get_main_table";
//            Ajax_value1 = getval;
//            ajax();
//            $('.main_table').html("<div align=center><img src='doc/img/jiazai.gif' /></div>");
//        
        }
        function Ajax_return() {
//            if (Ajax_type == "get_main_table") {
//                $('.main_table').html(Return_value);
//                // var oTable = $($("#divListGrid").find("table:eq(0)"));

//           multGridHead($('.assy_table'));
//                $('#op_pan').show(300);
//                Ajax_type = "get_rej_info";
//                Ajax_value1 = getval;
//                 ajax();//get rej mes report
//                return;
//            }
            if (Ajax_type == "get_rej_info") {
                $('.rej_info').html(Return_value); ch_col();
                Ajax_type = "get_rej_chart";
               
               // ajax(); //get rej mes chart
                return;

            }
            if (Ajax_type == "get_rej_chart") {




                var ss = new EC(); ss.Chart_Box = "chart_rej"; ss.columnWidth = 35;
          
                if (Return_value.length < 5) { alert("No data"); return; }
                var sz = Return_value.split('[');
        

                ss.Source_Data = sz[0];
                ss.Series_type = sz[1];
                ss.Series_name = sz[2];
                ss.Title = sz[3];
                ss.Y_name = sz[4];
                ss.Spline_Val = true;
                ss.Show_Chart();
               

                //get assy dc chart 1
                Ajax_type = "get_assy_dc_chart";
                
                ajax();
                return;

            }
            if (Ajax_type == "get_assy_dc_chart") {

                var ss = new EC_2Y(); ss.Chart_Box = "chart_dc"; ss.columnWidth = 30;
             //   alert(Return_value);
                if (Return_value.length < 5) { alert("No data"); return; }
                var sz = Return_value.split('[');

                ss.Title = "Assy yield";
                ss.Source_Data = sz[0];
                ss.Series_type = sz[1];
                ss.Series_name = sz[2];
                ss.Title = sz[3];
                ss.Y_name = sz[4];
                ss.Spline_Val = true;
                ss.Show_Chart_TwoY();
                Ajax_type = "get_assy_dc_chart_1";

                ajax();
                return;
            }
            if (Ajax_type == "get_assy_dc_chart_1") {

                var ss = new EC_2Y(); ss.Chart_Box = "chart_dc_1"; ss.columnWidth = 30;
                //   alert(Return_value);
                if (Return_value.length < 5) { alert("No data"); return; }
                var sz = Return_value.split('[');

                ss.Title = "DC yield";
                ss.Source_Data = sz[0];
                ss.Series_type = sz[1];
                ss.Series_name = sz[2];
                ss.Title = sz[3];
                ss.Y_name = sz[4];
                ss.Spline_Val = true;
                ss.Show_Chart_TwoY();
              
                return;
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
        function rejinf() {
          
           
           
         }
         function assydc() { }
         function init() {
             wait_1s();
             $('.rej_info').html("<div align=center><img src='doc/img/jiazai.gif' /></div>");
         }
         function wait_1s() {
             Ajax_type = "get_rej_info";
             Ajax_value1 = $('.lnk1').html();
             Ajax_value2 = $('.lnk2').html();
             ajax();
         }
    </script>
</head>
<body style=" padding-right:10px;"  onload='init()'>
     <iframe  class='iframe_head' src="http://cvpmdsip02/phasereview/webHead.aspx?system=LVM&item=Reject information&user=" frameborder="0"></iframe>
     <div class='head'>
     PN<input class='inp' value='' /> BD<input class='inp' /> From Time<input onclick="calendar(this)" class='inp time' /> To Time<input onclick="calendar(this)"  class='inp time'/> Lot Type<input class='inp' />
     <button  class='but_sub'>Search</button>
     </div>
     <div id='op_pan' style='margin-left:2%; display:none;'>
     <button class='but_sub ztl' >Main Table</button>
     <button class='but_sub ztl' >Reject Info</button>
     <button class='but_sub ztl'>Assy$Dc yield</button></div>
    <%-- <div class='main_table box'  style='margin-left:0%; margin-right:10px;'> </div>
     <div class='rej_info box' style='margin-left:0%;margin-right:10px;'></div>
     <div class='assy_dc box' style='margin-left:0%;margin-right:10px;'></div>--%>
     <div class='rej_info box' style='margin-left:0%;margin-right:10px;'></div>
    <%-- <div id='chart_rej' class='rej_ch_div'></div>
     <div id='chart_dc' class='rej_ch_div'></div>--%>
       <div id='chart_dc_1' class='rej_ch_div'></div>
    <i class='lnk lnk1'><%=l1 %></i>
    <i class='lnk lnk2'><%=l2 %></i>
       <script src="doc/JS/change_color.js" type="text/javascript"></script>
</body>
</html>
