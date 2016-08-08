<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ACTION_TRACKING_search.aspx.cs" Inherits="ACTION_TRACKING_search" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title> <meta http-equiv="X-UA-Compatible" content="IE=8,IE=11" />
    <link href="doc/CSS/common.css" rel="stylesheet" type="text/css" />
    <script src="doc/JS/jquery-1.11.3.js" type="text/javascript"></script>
    <style type="text/css">
        .inp{ width:90px; margin-left:3px;}
     .fd_tab{ width:98%; margin:1%;}
   .fd_tab th{}
   .attach{ color:#00b88c; text-decoration:underline; cursor:pointer;}
   .fd{ width:65px;}
   .opcl{ width:50px; border:1px solid #9cf; color:#9cf; cursor:pointer; background:#fff; border-radius:3px; margin:3px;}
   .dlt{ margin-left:3px; cursor:pointer; color:Red;}
   .scx{ text-decoration:line-through; color:#999;}
    </style>
</head>
<body>
    <iframe  class='iframe_head' src="http://cvpmdsip02/phasereview/webHead.aspx?system=LVM&item=ACTION_TRACKING_search&user=" frameborder="0"></iframe>
    <div>
    <%--<para name="v_lotno">F1544M3640.02</para>
                        <para name="v_owner"></para>
                        <para name="v_status"></para>
                        <para name="v_packagetype"></para>
                        <para name="v_begin_date"></para>
                        <para name="v_end_date"></para>
                        <para name="v_pn"></para>
                        <para name="v_bd"></para>
--%>
    LotNo<input class='inp sear' />
    Owner<input class='inp sear' />
    Status<select class='inp sear' ><option></option><option value='Open'>Open</option><option value='Close'>Close</option></select>
    PackageType<input class='inp sear' />
    BeginDate<input class='inp sear' onclick='calendar()' />
    EndDate<input class='inp sear' onclick='calendar()' />
    PN<input class='inp sear' />
    BD<input class='inp sear' />
    <button class='but_sub srh'>Search</button>
    <script type="text/javascript">
        $(document).ready(function () {
            $('.tab_box').delegate('.attach', 'click', function () {
                var did = $(this).siblings().attr('id');
                console.log(did);
                window.open("attach_les.aspx?id=" + did, "newwindow", "height=250, width=400,toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");

            })
            $('.tab_box').delegate('.opcl', 'click', function () {
                ($(this).val() == "Open") ? $(this).val('Close') : $(this).val('Open');
            })
            $('.tab_box').delegate('.fd', 'click', function () {
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
            $('.tab_box').delegate('.dlt', 'click', function () {
            var obj=$(this);
                if (confirm('Delete [' + $(this).siblings().html() + ']?')) {
                    $.post('post.aspx', {
                        type: 'del_fl',
                        fn: $(this).siblings().attr('href').replace("http://cvpmdsip02/lvm/doc/att/", "")
                    },
                    function(data){
                    obj.parent().html('<span class="scx">'+obj.siblings().html()+'</span>');
                    }
                    
                    )


                }
            })
            $('.srh').click(function () {
                var vals = '';
                $('.sear').each(function () {
                    vals += $(this).val() + "|";
                })
                $.post('post.aspx', {
                    type: 'at_sear',
                    val: vals
                }, function (data) {
                    $('.tab_box').html(data);
                    $('.attachment').each(function () {
                        $(this).attr('href', 'http://cvpmdsip02/lvm/doc/att/' + $(this).attr('href'));
                        var nm = $(this).html().split('_');
                        $(this).html(nm[nm.length - 1]);

                        $(this).attr('target', '_blank');

                    })
                })

            })

        })
    </script>
    </div>
    <div class='tab_box'>
    
    </div>
</body>
<script src="doc/JS/DCoolWeb.Calendar%20v3.2.en.js" type="text/javascript"></script>
</html>
