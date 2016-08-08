


function EC_2Y() {
    this.Chart_Box = "Chart";
    this.Title = "DC yield";
    this.SubTitle = "";
    this.X_step = 1;
    this.Y_name = ""
    this.Export_button = false;
   this.Source_Data = "Q201501,Q201502,Q201503|3,4,28.01=6,,28.09=9,6,=9,4,75.51";
   // this.Source_Data = "1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月|123,245,,486,512,679,902,1002,753,,458,267=-13.4,-10.9,14.5,112.3,24.5,27.9,30.0,27.4,20.5,15.6,19.4,12.3=-13.4,-10.9,14.5,112.3,24.5,27.9,30.0,27.4,20.5,15.6,19.4,12.3=87,87,87,87,87,87,87,87,87,87,87,87";
       
    this.Series_name = "xiaoming,xiaozhang,XX";
    this.Series_type = "column,spline,spline";//0915
    this.Line_Val = false;
    this.Spline_Val = false;
    this.Column_Val = false;
    this.Area_Val = false;
    this.Y_Max = null;
    this.Y_Min = null;
    this.Goal_Val = 0;
    this.Goal_Width = 0;
    this.Column_Total = true;
    this.Y_Para = "=Assy Qty|=Assy yield|=Assy Goal"; //0915Output,WIP,UTL,Goal
    this.Pie_3D = false;
    this.Pie_innerSize = 0;
    this.Pie_depth = 35;
    this.columnWidth = 7;
    this.pointcount = 0;
   
this.Pie_val="300,300,300,300,300,300,300,300,300,300,300,300"; //"403,474,496,402,355,229,295,263,251,399,448,354,444,420,407,408,415,259,290,223,277,346,361,259";
this.Pie_item = "1点,2点,3点,4点,5点,6点,7点,8点,9点,10点,11点,12点";



this.Show_Chart_TwoY = function () {
    var y_para = this.Y_Para.split('|'); var y_1 = y_para[0].split('='); var y_2 = y_para[1].split('='); var y_3 = y_para[2].split('='); yAxis_name = y_1[1] + "," + y_2[1] + "," + y_3[1];
    col_co = "#4f81bd,#00b050,#f00";

    var sz = this.Source_Data.split('|');
    var col = col_co.split(',');
    var options = {
        chart: {
            renderTo: this.Chart_Box //zoomType: 'xy',
        },
        title: {
            text: this.Title///////////
        },
        credits: { enabled: false },
        xAxis: {
            categories: []//'a','b','c','d','e','f','g'
        }, plotOptions: {
            line: { dataLabels: { enabled: this.Line_Val} }, spline: { dataLabels: { enabled: this.Spline_Val} },
            column: { pointWidth: this.columnWidth, dataLabels: { enabled: this.Column_Val} },
            /*Whether to stack the values of each series on top of each other. 
            Possible values are null to disable, "normal" to stack by value or "percent".*/
            area: { dataLabels: { enabled: this.Area_Val} },
            series: {
                cursor: 'pointer',
                events: {
                    click: function (e) {
                        //alert('X轴的值：' + e.point.category + ' \r\n类别的名称:' + this.name);
                        // document.getElementById("tit").innerHTML += this.name + ":" + e.point.category + "=" + e.point.y + "<br/>";
                        try {

                            EC_Click_Event(this.name, e.point.category, e.point.y);
                        }
                        catch (e) {
                            // alert("若需web相应此点击事件，请添加 \r\nfunction click_event(Series_Type,X_name,Y_value)\r\n{\r\n--自定义点击事件，此处可缺省--\r\n}"); 
                        }
                    }
                }
            }
        },



        yAxis: [{ // Primary yAxis
            labels: {
                formatter: function () {
                    return this.value + y_1[0];
                }
            },
            title: {
                text: ''//  y_1[1]
            }

  , opposite: true
        }, { // Secondary yAxis

            gridLineWidth: 0,
            title: {
                text: ''//  y_2[1]
            },
            labels: {
                formatter: function () {
                    return this.value + y_2[0];
                }
            }
           

        }
        , { // Secondary yAxis

            gridLineWidth: 0,
            title: {
              text:''// y_3[1]
            },
            labels: {
                formatter: function () {
                    return this.value + y_3[0];
                }
            }
           , opposite: true
//
        }
],
        tooltip: {
            shared: true
        },
        legend: {
            //                layout: 'vertical',
            //                align: 'left',
            //                x: 120,
            //                verticalAlign: 'top',
            //                y: 80,
            //                floating: true,
            //                backgroundColor: '#FFFFFF'
        },
        exporting: { enabled: this.Export_button }, series: []
    };
    var aa = sz[1].split('='); //切割表格



    var lines = "";
    var s_li = yAxis_name; var s_it = s_li.split(',');
    var s_ty = this.Series_type; var s_tyi = s_ty.split(',');
    for (i = 0; i < aa.length; i++) {
        lines = aa[i].split(',');
        var series = { type: [], name: [], data: []
        , yAxis: []
        };

        series.name = s_it[i];
        series.type = s_tyi[i];

        if (i == 0) {//0915
            series.yAxis = 1; //0915
        } 
        
//        else if (i == 1) {
//            series.yAxis = 2; //1021
//        }
         else { delete series.yAxis; }

        $.each(lines, function (lineNo, line) {
            if (line == "null") { series.data.push(null); } else {
                series.data.push(parseFloat(line));
            }
        })
        options.series.push(series);
    }


    var items = sz[0].split(',');
    $.each(items, function (itemNo, item) { options.xAxis.categories.push(item); });

    var chart = new Highcharts.Chart(options);
}


}
