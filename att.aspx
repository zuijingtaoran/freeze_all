<%@ Page Language="C#" AutoEventWireup="true" CodeFile="att.aspx.cs" Inherits="att" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="doc/CSS/common.css" rel="stylesheet" type="text/css" />
    <style type="text/css">
       *{ padding:0px; margin:0px;}
    .head{ height:40px; padding:10px; color:#fff; margin-bottom:10px; background:#4394d6;}
    .inp{ margin:15px;}
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <div class='head'>Upload files</div>
        <asp:FileUpload ID="FileUpload1" runat="server" CssClass='inp' /><asp:Button ID="Button1" runat="server" CssClass='but_sub'
            Text="Upload" />
    </div>
    </form>
</body>
</html>
