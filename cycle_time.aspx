<%@ Page Language="C#" AutoEventWireup="true" CodeFile="cycle_time.aspx.cs" Inherits="cycle_time" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
   
     <script src="doc/JS/DATE_OPERATION.js" type="text/javascript"></script>
    <script src="doc/JS/jquery-1.11.3.js" type="text/javascript"></script>
    <script src="doc/JS/Ajax_YJG.js" type="text/javascript"></script>
    <link href="doc/CSS/common.css" rel="stylesheet" type="text/css" />
    <script src="doc/JS/ddScript.js" type="text/javascript"></script>  <script src="doc/JS/DCoolWeb.Calendar%20v3.2.en.js" type="text/javascript"></script>
    <style type="text/css">
    .inp{ width:20px; width:100px; margin-right:7px; margin-left:3px; 
         
         } .main_table tr:hover{ cursor:pointer; background-color:#eb7324; color:#fff;
             
             }
             .sjts{ margin-left:3%; color:#eb7324;} .tit_free{ width:6000px;}
              table{  width:6000px;}
              .fenye{ position:fixed; padding-top:3px;  text-align:center; height:30px; width:100%; bottom:0px; left:0px; background-color:#aaa; }
              .fenye button{ border:none; height:23px; color:#fff;margin-left:4px;}
              .fenye button:hover{ cursor:pointer; }
              .more_fy{width:70px; background-color:#eb7324;   }
              .all_fy{ width:37px; background-color:#888;}
              .fenye i{ margin-left:5px;  }
              .fenye i b{  font-weight:bold; color:#eb1c24;  }
              .fenye img{ width:27px; height:auto;}
              .yc{ display:none;}
    </style>
    <script type="text/javascript">
        $(document).ready(function () {
            $('.but_sub').click(function () {
                $('.dd1').prop('title', '');
                search();
            })
            $('inp').click(function () {
              
                $('.fenye').remove();
            })
            $('.gettable').delegate('table tr', 'click', function () {
                $('table tr').css('color', '#000');
                $(this).css('color', 'blue');
            })
            //            $(window).scroll(function () {

            //                var offsetTop = $(window).scrollTop();
            //                if (offsetTop >= 97) {//
            //                    if (fla1 == 0) {
            //                        fla1 = 1;
            //                        title_freeze_show('.main_table', '2');


            //                    } else {
            //                        $(".tit_free").css({ top: offsetTop + "px" })
            //                    }
            //                }
            //                else {
            //                    fla1 = 0;
            //                    title_freeze_hide();
            //                }

            //            })

        })


      
        var getval = "";
        function search() {
            if ($('.time').eq(0).val() == '' || $('.time').eq(1).val() == '') {
                alert('Need time.'); return;
            }
            get_tab();
        
        }
        function Ajax_return() {
            if (Ajax_type == "get_ct_table") {
                $('.gettable').html(excel + Return_value);             
    multGridHead($('.main_table'));
                ch_col();
            }
            if (Ajax_type == "get_ct_table_more" || Ajax_type == "get_ct_table_all") {
                $('.fenye').remove();
                var sss = Return_value.split(']');
                $('.main_table').append(sss[0]);
                $('.gettable').append(sss[1]);
                ch_col();
            }

        } function get_tab() {
            getval = "";
            $('.inp').each(function () {
                getval += $(this).val() + $(this).prop('title') + "|";
            })
            Ajax_type = "get_ct_table";
            Ajax_value1 = getval;
            ajax();
            $('.gettable').html("<div align=center><img src='doc/img/jiazai.gif' /></div>");
        }
        function fymore(str) {
           
           
            Ajax_type = "get_ct_table_more";
            Ajax_value1 = getval;
            Ajax_value2 = str;
            ajax();
            $('.fenye').html("<div align=center><img src='doc/img/jiazai.gif' /></div>");
        }
        function fyall(str) {
            if (confirm("提示：\r\n若查看总数据，建议点击上面的'Excel'导出后查看，在页面上查看会等待较长时间，影响工作效率。\r\n是否继续？")) {
               
               
                Ajax_type = "get_ct_table_all";
                Ajax_value1 = getval;
                Ajax_value2 = str;
                ajax();
                $('.fenye').html("<div align=center><img src='doc/img/jiazai.gif' /></div>");
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
           
        }
    </script>
</head>
<body onload=init()>
    <script src="doc/JS/DATE_OPERATION.js" type="text/javascript"></script>
     <iframe  class='iframe_head' src="http://cvpmdsip02/phasereview/webHead.aspx?system=LVM&item=Cycle Time&user=" frameborder="0"></iframe>
     <div class='head'><%--54-62-15139-128GG--%>
       PN<input class='inp' value='' /> Lot<input class='inp lot' /> BD<input class='inp' /> From Time<input onclick="calendar(this)" class='inp time dd1' /> To Time<input onclick="calendar(this)"  class='inp time dd2'/> <button  class='but_sub'>Search</button>
   
    
    
     </div>
     <div class='gettable'>
     
     </div>
       <script src="doc/JS/change_color.js" type="text/javascript"></script>
</body>
</html>
