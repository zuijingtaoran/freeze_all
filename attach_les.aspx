<%@ Page Language="C#" AutoEventWireup="true" CodeFile="attach_les.aspx.cs" Inherits="attach_les" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title><meta http-equiv="X-UA-Compatible" content="IE=8,IE=11" />    <link href="phase_DOC/CSS/newstyle_css3.css" rel="stylesheet" type="text/css" />
    <style type="text/css">
          *{ margin:0px; padding:0px; font: 12px/1.3 "Arial", "Microsoft YaHei";}
    input{ background-color:#ccc; color:#fff; border:1 solid #ccc;   margin:4px; } 
 .But{ background-color:#226abb;border:0 solid #ccc; width:80px; height:20px; }.But:hover{background-color:#cc3366;}
    </style>
    <script src="doc/js/jquery-1.11.3.js" type="text/javascript"></script>
    <script type="text/javascript">
 function chufathree() { $("#Button5").click(); }
        $(document).ready(function () {
            $("#Label1").hide(5); $("#Label2").hide(5);
             $("#Button5").hide(5);
        })
     
    </script>
</head>
<body  >
    <form id="form1" runat="server">
    <div>Maximum 3 attachments, only xls,doc,pdf,txt,rar,zip,jpg,png,bmp,msg file(<10M), ppt.(<50M) was allowed.
        <asp:Label ID="Label1" runat="server" Font-Size="10px"></asp:Label>
        <asp:Label ID="Label2"    runat="server" Font-Size="10px"></asp:Label></div><div>
     <asp:FileUpload ID="FileUpload2" Width="97%"  runat="server" onchange="chufathree()" />
         <asp:Button ID="Button5"
             runat="server" Text="Upload" CssClass="But" onclick='Button5_Click'/>
         <br />
    <asp:Label ID="Label3" runat="server" Font-Size="13px" ForeColor="#ED1C24"></asp:Label>
 <%--   Maximum 3 attachments, format allowed: Only xls,doc,ppt,pdf,txt,rar,zip,jpg,png,bmp,msg<br />--%>
 
&nbsp;<asp:HyperLink ID="H1" runat="server" Target="_blank"></asp:HyperLink>
         <asp:LinkButton ID="L1" runat="server" onclick="L1_Click"></asp:LinkButton>
         &nbsp;
         <asp:HyperLink ID="H2" runat="server" Target="_blank"></asp:HyperLink>
         <asp:LinkButton ID="L2" runat="server" onclick="L2_Click"></asp:LinkButton>
         &nbsp;
         <asp:HyperLink ID="H3" runat="server" Target="_blank"></asp:HyperLink>
         <asp:LinkButton ID="L3" runat="server" onclick="L3_Click"></asp:LinkButton>
    </div>
    </form>
</body>
</html>
