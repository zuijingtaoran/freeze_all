<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title><meta http-equiv="X-UA-Compatible" content="IE=8,IE=11" />
    <link href="doc/CSS/common.css" rel="stylesheet" type="text/css" />
    <script src="doc/JS/jquery-1.11.3.js" type="text/javascript"></script>
    <style type="text/css">

    .lk{ position:absolute;  }
    .yj{border-radius:50%; z-index:4;
         border:none;  color:#333; font-size:22px; 
    /*     box-shadow:3px 1px 4px #555;
         text-shadow: rgba(0,0,0,0.9) 0px 1px 2px;*/
         /*  box-shadow: rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(0,0,0,0.25) 0px 0px 0px, inset rgba(255,255,255,0.03) 0px 20px 0px, inset rgba(0,0,0,0.15) 0px -20px 20px, inset rgba(255,255,255,0.05) 0px 20px 20px;
    让变化的属性在100毫秒内匀速过渡
    transition: all 0.1s linear; 
    lk ay yj yay
    650, 330, 130, 360, 400
    */box-shadow:3px 1px 4px #555;  
       
          }
    .ay{ left:590px; top:130px; width:650px; height:650px; 

      
    }
     .dc{ left:320px; top:240px;  width:330px; height:330px;}
     .dd{ left:530px; top:330px; width:90px; height:90px; }
     .dy{ left:800px; top:270px;  width:360px; height:360px;}
     .my{ left:720px; top:490px;  width:400px; height:400px;}
     .ct{ left:490px; top:530px;  width:360px; height:360px;}
     .yj:hover{  font-weight:bold; cursor:pointer;
                
      /*     box-shadow: rgba(0,0,0,0.5) 0px 2px 5px, inset rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(0,0,0,0.25) 0px 0px 0px, inset rgba(255,255,255,0.03) 0px 20px 0px, inset rgba(0,0,0,0.15) 0px -20px 20px, inset rgba(255,255,255,0.05) 0px 20px 20px;

        */       box-shadow: rgba(0,0,0,0.5) 0px 2px 5px, inset rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(0,0,0,0.25) 0px 0px 0px, inset rgba(255,255,255,0.03) 0px 20px 0px, inset rgba(0,0,0,0.15) 0px -20px 20px, inset rgba(255,255,255,0.05) 0px 20px 20px;

                 }
     .yay{ background-color:#f66;
          background: linear-gradient(#ffa3a3, #f66);
        }
      .ydc{ background-color:#9c3;
           
            background: linear-gradient(#c4f75e, #9c3);
            }
       .ydd{ background-color:#f99;
            
           background: linear-gradient(#ffc9c9, #f99);
             }
        .ydy{ background-color:#f9c;
           
              background: linear-gradient(#ffcfff, #f9c);
              }
         .ymy{ background-color:#6cc;
            
               background: linear-gradient(#b9ffff, #6cc);
                }
                 .yct{ background-color:#669;
           
            background: linear-gradient(#9cf, #669);
            }
            .dibulan{ height:32px; width:100%; position:fixed; left:0px; bottom:0px; background-image:url(doc/img/dcbj-.jpg); z-index:3px; }
    </style>
    <script type="text/javascript">
        function init() {
            $('a').prop('target', '_blank');
            var h1 = [650, 330, 90, 360, 400,400];
            var h2 = [190, 160, 175, 180, 167,159];
           // $('.yj').each(function (i, val) {
               // $(val).css({ "width": h1[i] + "px", "height": h1[i] + "px" });
            // })
            //   $('body').animate({ opacity: 0 },2510);
            $('body').css('background-color', '#fff');
            $('.yj').each(function (i, val) {
                $(val).animate({
                    width: h2[i] + "px",
                    height: h2[i] + "px"

                }, 2510, function () {
                    
                    dhua();
                })


            })



}
$(document).ready(function () {

    var ss = ['', 'main_table.aspx', 'datacolleCtion.aspx', 'detaildata.aspx', 'DP_YIELD.aspx', 'MT_YIELD.aspx','cycle_time.aspx'];
    $('.lk').click(function () {
//     alert($(this).index());
//     alert($(this).html());
      window.open(ss[$(this).index()], '_blank');

    })
})
var sj;
function dhua() {
    $('.yj').each(function (i,val) {
        $(val).animate({ width: $(val).width() +7, height: $(val).height() + 7 }, 500, function () {
         
           // suoxiao();
        })
    })
        
    
   // sj = setTimeout('dhua()', 500);
}
function suoxiao() {
    $('.yj').each(function (i,val) {
        $(val).animate({ width: $(val).width() - 10, height: $(val).height() - 10 }, 400)
    })
}
    </script>
</head>
<body onload='init()' style=" background-position: 50% 50%; background-color:#9fc; background-image: url('doc/IMG/BJ.jpg'); background-repeat: no-repeat; background-attachment: fixed;">
  <div style=' width:100%; height:80px; background-color:#4394d6; color:#fff; font-size:26px; padding-top:40px; padding-left:5px; font-family:Verdana'>
  AI LVM Live Tracking Dashboard
  </div>
   
  <button class='lk ay yj yay'>Assy yield</button>
    <button class='lk dc yj ydc'>Data collection</button>
       <button class='lk dd yj ydd'>Detail data</button>
        <button class='lk dy yj ydy'>DP yield</button>           
          <button class='lk my yj ymy'>MT yield</button>
           <button class='lk ct yj yct'>Cycle time</button>
          
</body>
</html>
