﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="detailData.aspx.cs" Inherits="detailData" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
   
  
    <script src="doc/JS/jquery-1.11.3.js" type="text/javascript"></script>
    <script src="doc/JS/Ajax_YJG.js" type="text/javascript"></script>
    <link href="doc/CSS/common.css" rel="stylesheet" type="text/css" />
    <script src="doc/JS/ddScript.js" type="text/javascript"></script>  <script src="doc/JS/DCoolWeb.Calendar%20v3.2.en.js" type="text/javascript"></script>
    <style type="text/css">
    .inp{ width:20px; width:100px; margin-right:7px; margin-left:3px; 
         
         } .main_table tr:hover{ cursor:pointer; background-color:#eb7324; color:#fff;
             
             }.para{ display:none;}
             .yc{ display:none;}
           
    </style>
    <script type="text/javascript">
        $(document).ready(function () {
            $('.but_sub').click(function () {
                if ($('.inp').eq(0).val == "" && $('.inp').eq(1).val == "" && $('.inp').eq(2).val == "") {

                    alert("Please input PN or Lot or BD."); return;
                }
                search($(this).html());
            })

            $(window).scroll(function () {

                var offsetTop = $(window).scrollTop();
                if (offsetTop >= 97) {//
                    if (fla1 == 0) {
                        fla1 = 1;
                        title_freeze_show('.main_table', '1');


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
        function search(str) {
            //
            if (str == "Search") {
               
                $('.bs').html("0");
            
             } else {
                $('.but_sub').html("Search");
                $('.bs').html("1");
            }
        //
            if ($('.time').eq(0).val() == '' || $('.time').eq(1).val() == '') {
                alert('Need time.'); return;
            }
            getval = "";
            $('.inp').each(function () {
                getval += $(this).val() + "|";
            })
            Ajax_type = "get_dd_table";
            Ajax_value1 = getval+$('.bs').html();
           
            ajax();
            $('.gettable').html("<div align=center><img src='doc/img/jiazai.gif' /></div>");
        
        }
        function Ajax_return() {
            if (Ajax_type == "get_dd_table") {
                $('.gettable').html(excel+Return_value);
               // var oTable = $($("#divListGrid").find("table:eq(0)"));
                multGridHead($('.main_table'));
                ch_col();
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

            //  if ($('.para').html() != "") {

            if ($('.dd1').val() == "") {
                var datee = new Date();

                var t1 = new Date(datee.getTime() - 1 * 24 * 3600 * 1000);
                $('.dd1').val(t1.getFullYear() + "-" + p((t1.getMonth() + 1)) + "-" + p(t1.getDate()));
                t1 = datee;
                $('.dd2').val(t1.getFullYear() + "-" + p((t1.getMonth() + 1)) + "-" + p(t1.getDate()));
                return;
            }

                var sz = $('.para').html().split('|');
                $('.lot').val(sz[0]);
                $('.test').val(sz[1]);
                search();

            
           // }
            }
            function p(s) {
                return s < 10 ? '0' + s : s;
            }
    </script>
</head>
<body  onload='init()' >
     <iframe  class='iframe_head' src="http://cvpmdsip02/phasereview/webHead.aspx?system=LVM&item=Detail data&user=" frameborder="0"></iframe>
     <div class='head'>
     PN<input class='inp' value='' /> Lot<input class='inp lot' /> BD<input class='inp' />Test<input class='inp test' />
      From Time<input onclick="calendar(this)" class='inp time dd1' value='<%=from %>' />
       To Time<input onclick="calendar(this)"  class='inp time dd2' value='<%=to %>'/> <button  class='but_sub'>Search</button>
     </div>
     <div class='gettable'>
     
     </div>
     <i class='para'><%=para %></i>
     <i class='bs yc'>0</i>
       <script src="doc/JS/change_color.js" type="text/javascript"></script>
</body>
</html>
