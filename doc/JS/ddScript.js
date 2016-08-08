function guidX() {
    //http: //www.cnblogs.com/snandy/p/3261754.html
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function getColorX(idx) {
    if (idx > 6) {
        idx = (idx % 6);
    }
    //
    switch (idx) {
        case 0:
            return "#4572A7"; //blue
            break;
        case 1:
            return "#AA4643"; //red
            break;
        case 2:
            return "#89A54E"; //green
            break;
        case 3:
            return "#71588F";
            break;
        case 4:
            return "#4198AF";
            break;
        case 5:
            return "#DB843D";
            break;
        case 6:
            return "#FF0000";
            break;
        default:
            break;
    }
}

String.prototype.startWithX = function (compareStr) {
    return this.indexOf(compareStr) == 0; //.toUpperCase()
}

function leftX(str, n) {
    //alert(left("123456789", 3)); //123
    if (n > 0) { return str.substring(0, n) }
    else { return "" }
}

function rightX(str, n) {
    //alert(right("123456789", 3)); //789
    if (str.length - n >= 0 && str.length >= 0 && str.length - n <= str.length) {
        return str.substring(str.length - n, str.length)
    }
    else { return "" }
}

function midX(str, starnum, endnum) {
    //alert(mid("123456789", 3, 2)); //45
    if (str.length >= 0) {
        return str.substr(starnum, endnum)
    } else { return "" }
    //str.length 
}

function containsX(str, substr) {
    //alert(contains("abcd", "bc")); //true
    //alert(contains("abcd", "cb")); //false
    str = str.toLowerCase();
    substr = substr.toLowerCase();

    var startChar = substr.substring(0, 1);
    var strLen = substr.length;

    for (var j = 0; j < str.length - strLen + 1; j++) {
        if (str.charAt(j) == startChar)  //如果匹配起始字符,开始查找
        {
            if (str.substring(j, j + strLen) == substr)  //如果从j开始的字符与str匹配，那ok
            {
                return true;
            }
        }
    }
    return false;
}

//function replaceX(str, str1, str2) {
//    if (typeof str2 == "undefined") {
//        str2 = "";
//    }
//    var reg = new RegExp(str1, "g");
//    return str.replace(reg, str2);
//}

function replaceX(str, str1, str2) {
    //js regexp
    //http://blog.csdn.net/jszatan/article/details/7515275
    //
    if (typeof str2 == "undefined") {
        str2 = "";
    }
    //
    switch (str1) {
        case "|": //特殊符号不能做到通用
            return str.replace(/\|/g, str2);
            break;
        default:
            var reg = new RegExp(str1, "gi"); //g:全文查找出现的所有pattern i:忽略大小写 m:多行查找
            return str.replace(reg, str2);
    }
}

function isNumericX(s) {
    if (s == "") { return false; }
    if (s == " ") { return false; }
    if (isNaN(s)) {
        return false;
    }
    return s.isNumericX();
}

//为数字 或 为空
function isNumericOrEmptyX(s) {
    if (s == null) { return true; }
    if (s == "") { return true; }
    if (isNaN(s)) {
        return false;
    }
    return s.isNumericX();
}

function addZeroX(str, len) {
    var ret = str;
    if (str < 10) {
        ret = "0" + str;
    }
    //alert(str);
    return ret;
}

String.prototype.replaceX = function (str1, str2) {
    return replaceX(this, str1, str2);
}

String.prototype.leftX = function (n) {
    return leftX(this, n);
}

String.prototype.rightX = function (n) {
    return rightX(this, n);
}

String.prototype.midX = function (n1, n2) {
    return midX(this, n1, n2);
}

String.prototype.containsX = function (s) {
    //alert("abcde".containsX("bc")); //true
    //alert("abcde".containsX("cb")); //false
    return containsX(this, s);
}

String.prototype.addZeroX = function (n) {
    return addZeroX(this, n);
}

function getDateX() {
    return new Date();
}

function formatNowX(fmt) {
    return "".formatDateX(fmt);
}

function dateDiffX(interval, date1, date2) {
    //说明：interval 取值： d (day), m(minutes), s(second), t（毫秒），不分区大小写
    //日期格式： yyyy (/-) (m)m (/-) (d)d
    //alert(dateDiff('D', '2007-4-1', '2007/04/19'));
    var objInterval = { 'D': 1000 * 60 * 60 * 24, 'H': 1000 * 60 * 60,
        'M': 1000 * 60, 'S': 1000, 'T': 1
    };
    interval = interval.toUpperCase();
    //var dt1 = Date.parse(date1.replace(/-/g, '/'));
    //var dt2 = Date.parse(date2.replace(/-/g, '/'));
    var dt1 = date1;
    var dt2 = date2;
    try {
        return Math.round((dt1 - dt2) / eval('(objInterval.' + interval + ')'));
    }
    catch (e) {
        return e.message;
    }
}

function toDateX(str) //这个函数用来把字符串转换为日期格式
{
    //str = str.replaceX("-", "/");
    return new Date(Date.parse(str.replace(/-/g, "/")));
}

String.prototype.toDateX = function () {
    return toDateX(this);
}

//parseDate()
//function strToDate(str) {
//    var val = Date.parse(str);
//    var newDate = new Date(val);
//    return newDate;

String.prototype.formatDateX = function (fmt) {
    ////alert("20140102030405".formatDateX("yyyy/MM/dd HH_mm_ss"));
    ////alert("20140102".formatDateX("yyyy-MM-dd"));
    ////alert("".formatDateX("yyyy-MM"));
    ////"yyyy-MM-dd HH:mm:ss"
    var sDt = this;
    var dt = new Date();
    if (sDt != "") {
        //alert("''.toDateX('yyyy-MM-dd')"); 
        if (sDt.length == "20140102120102".length) {
            var sDt2 = sDt.midX(0, 4) + "-" + sDt.midX(4, 2) + "-" + sDt.midX(6, 2)
            + " " + sDt.midX(8, 2) + ":" + sDt.midX(10, 2) + ":" + sDt.midX(12, 2)
            ; //2014-01-02 12:01:02
            alert("[" + sDt2 + "]");
            dt = toDateX(sDt2);
        }
        if (sDt.length == "20140102".length) {
            var sDt2 = sDt.midX(0, 4) + "-" + sDt.midX(4, 2) + "-" + sDt.midX(6, 2); //2014-01-02
            //alert(sDt2);
            dt = toDateX(sDt2);
        }
        if (sDt.length == "2014-01-02".length) {
            dt = toDateX(sDt);
        }
    }
    return dt.formatDateX(fmt)
}

//new Date().formatDateX("yyyy-MM-dd HH:mm:ss")
Date.prototype.formatDateX = function (fmt) { //author: meizz
    //var time1 = new Date().formatDateX("yyyy-MM-dd");
    //var time2 = new Date().formatDateX("yyyy-MM-dd HH:mm:ss");
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "H+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

//获取字符数组 
String.prototype.toCharArrayX = function () {
    return this.split("");
}
//获取N个相同的字符串 
String.prototype.repeatX = function (num) {
    var tmpArr = [];
    for (var i = 0; i < num; i++) tmpArr.push(this);
    return tmpArr.join("");
}
//逆序 
String.prototype.reverseX = function () {
    return this.split("").reverse().join("");
}
//测试是否是数字
String.prototype.isNumericX = function () {
    var obj = this;
    obj = obj.replaceX(" ", "");
    if (obj + "" == "") return false;
    if (isNaN(obj)) return false;
    //if (!obj) return false;
    //var tmpFloat = parseFloat(obj);
    //var tmpLen = obj.length - tmpFloat.toString().length;
    //return tmpFloat + "0".repeat(tmpLen) == obj;
    return true;

    //////    var reg = new RegExp("^(-?\d+)(\.\d+)?$");
    //////    var obj = this;
    //////    //if (isNaN(obj)) return false;
    //////    if (!reg.test(obj.value)) {
    //////        return false;
    //////    }
    //////    //if (!/^[0-9]*$/.test(obj.value)) {
    //////    //    return false;
    //////    //}
    //////    return true;
}
//测试是否是数字
String.prototype.isNumericOrEmptyX = function () {
    var obj = this;
    obj = obj.replaceX(" ", "");
    if (obj + "" == "") return true;
    if (isNaN(obj)) return false;
    return true;
}
//测试是否是整数 
String.prototype.isIntX = function () {
    if (this == "NaN") return false;
    return this == parseInt(this).toString();
}
// 合并多个空白为一个空白 
String.prototype.resetBlankX = function () {
    return this.replace(/s+/g, " ");
}
// 除去左边空白 
String.prototype.lTrimX = function () {
    return this.replace(/^s+/g, "");
}
// 除去右边空白 
String.prototype.rTrimX = function () {
    return this.replace(/s+$/g, "");
}
// 除去两边空白 
String.prototype.trimX = function () {
    return this.replace(/(^s+)|(s+$)/g, "");
}
// 保留数字 
String.prototype.getNumX = function () {
    return this.replace(/[^d]/g, "");
}
// 保留字母 
String.prototype.getEnX = function () {
    return this.replace(/[^A-Za-z]/g, "");
}
// 保留中文 
String.prototype.getCnX = function () {
    return this.replace(/[^u4e00-u9fa5uf900-ufa2d]/g, "");
}
// 得到字节长度 
String.prototype.getRealLengthX = function () {
    return this.replace(/[^x00-xff]/g, "--").length;
}
//// 从左截取指定长度的字串 
//String.prototype.left = function (n) {
//    return this.slice(0, n);
//}
//// 从右截取指定长度的字串 
//String.prototype.right = function (n) {
//    return this.slice(this.length - n);
//}
//// HTML编码 
String.prototype.HTMLEncodeX = function () {
    var re = this;
    var q1 = [/x26/g, /x3C/g, /x3E/g, /x20/g];
    var q2 = ["&", "<", ">", " "];
    for (var i = 0; i < q1.length; i++)
        re = re.replace(q1[i], q2[i]);
    return re;
}
// Unicode转化 
String.prototype.ascWX = function () {
    var strText = "";
    for (var i = 0; i < this.length; i++) strText += "&#" + this.charCodeAt(i) + ";";
    return strText;
}

String.prototype.formatStringX = function () {
    //var str = " str_0 : {0} str_1 : {1} str_2 : {2}";
    //alert(str.formatStringX("aa", "bb", "cc"));
    var ary = [];
    for (i = 0; i < arguments.length; i++) {
        ary.push(arguments[i]);
    }
    return this.replace(/\{(\d+)\}/g, function (m, i) {
        return ary[i];
    });
}

function formatStringX() {
    //var str = " str_0 : {0} str_1 : {1} str_2 : {2}";
    //alert(formatStringX(str, "aa", "bb", "cc"));
    var ary = [];
    for (i = 1; i < arguments.length; i++) {
        ary.push(arguments[i]);
    }
    return arguments[0].replace(/\{(\d+)\}/g, function (m, i) {
        return ary[i];
    });
}

String.prototype.getSplitIndexX = function (sKey) {
    return getSplitIndexX(sKey, this);
}

function getSplitIndexX(key, str) {
    //Usage: var nCell = getSplitIndexX(sFieldName, sGridFields); //"RN;PART_NO;NAME;PART_ID;"
    var v = str.split(";");
    for (var i = 0; i < v.length; i++) {
        if (v[i] == key) {
            return i;
        }
    }
    return -1;
}

String.prototype.Format = function () {
    alert("Use: formatStringX formatDateX");
    return "";
}

function Format() {
    alert("Use: formatStringX formatDateX");
    return "";
}

function jsonToStringX(jsonObj) {
    var sA = [];
    (function (o) {
        var isObj = true;
        if (o instanceof Array)
            isObj = false;
        else if (typeof o != 'object') {
            if (typeof o == 'string')
                sA.push('"' + o + '"');
            else
                sA.push(o);
            return;
        }
        sA.push(isObj ? "{" : "[");
        for (var i in o) {
            if (o.hasOwnProperty(i) && i != 'prototype') {
                if (isObj)
                    sA.push(i + ':');
                arguments.callee(o[i]);
                sA.push(',');
            }
        }
        sA.push(isObj ? "}" : "]");
    })(jsonObj);
    return sA.slice(0).join('').replace(/,\}/g, '}').replace(/,\]/g, ']');
}

function stringToJsonX(s) {
    //var o = eval("(" + s + ")");
    //var o = JSON.parse(s)
    //var o = (new Function("return " + s))();
    try {
        s = s.replaceX("'", "");
        s = s.replaceX("•", "");
        //////s = s.replaceX("	", "");
        ////////s = s.replaceX("\"\"", "");
        //### 加了这些，如"<option></option>"有异常
        //////s = s.replaceX(">", "&gt;");
        //////s = s.replaceX("<", "&lt;");
        //////s = s.replaceX("\r", "");
        //////s = s.replaceX("\n", "");
        var o = $.parseJSON(s); //传入一个畸形的JSON字符串会抛出一个异常: {test: 1} （test 没有包围双引号） {'test': 1} （使用了单引号而不是双引号）
        return o;
    } catch (e) {
        alert(s + "\r\n\r\n" + e);
    }

    //////var jsonstr = '[{"Title":"星期二多云","Content":"是佛时间佛教;"},{"Title":" 第一章","Content":"<strong>多云，微风</strong>"},{"Title":" 第二章","Content":"降落伞"},{"Title":" 第三章","Content":"<em><u></u></em>"}]';
    //////var jsonDataString = '{result:true,message:"这是返回的信息"}';
    ////////javascript 方式
    //////var jsonData = eval("(" + jsonDataString + ")");
    ////////jQuery 方式
    //////var dataset = $.parseJSON(jsonstr);
    //////alert(dataset[0].Title);
    //////alert(jsonData.message);
}

// Changes XML to JSON
function xmlToJsonX(xml) {
    alert("xmlToJsonX()");
    //http: //www.oschina.net/code/snippet_12_3814
    // Create the return object
    var obj = {};

    if (xml.nodeType == 1) { // element
        // do attributes
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType == 3) { // text
        obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof (obj[nodeName]) == "undefined") {
                obj[nodeName] = xmlToJson(item);
            } else {
                if (typeof (obj[nodeName].length) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
}

function splitToJsonX(s) {
    var sp1 = "|";
    var sp2 = "=";
    var v = s.split(sp1);
    var r = "";
    r += "[{";
    for (var i = 0; i < v.length; i++) {
        var s2 = v[i];
        if (s2.replace(sp2, "") != s2) {
            var sKey = s2.split(sp2)[0];
            var sValue = s2.split(sp2)[1];
            r += "'" + sKey + "':'" + sValue + "', ";
        }
    }
    r += "'s':'s'}]";
    r = eval(r);
    //OK var sParams = "|fMkId=" + sMkId + "|fObjId=" + sObjId + "|fBillType=" + sBillType + "|fBillNo=" + "";
    //OK alert(jsonToStringX(r));
    //OK var dt = splitToJson(sParams);
    //OK var row = dt[0];
    //OK alert(jsonToStringX(row));
    //OK alert(row["fMkId"]);
    return r;
}

function getJsonLengthX(json) {
    var len = 0;
    if (Boolean(json)) {
        for (i in json) len++;
    }
    return len;
}

// Base64 start //////////////////////////////////////////////////////////////////
var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

var base64DecodeChars = new Array(
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
    -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
    -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

//客户端Base64编码
function base64Encode(str) {
    var out, i, len;
    var c1, c2, c3;

    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
}

//客户端Base64解码
function base64Decode(str) {
    var c1, c2, c3, c4;
    var i, len, out;

    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        /* c1 */
        do {
            c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        } while (i < len && c1 == -1);
        if (c1 == -1)
            break;

        /* c2 */
        do {
            c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        } while (i < len && c2 == -1);
        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        /* c3 */
        do {
            c3 = str.charCodeAt(i++) & 0xff;
            if (c3 == 61)
                return out;
            c3 = base64DecodeChars[c3];
        } while (i < len && c3 == -1);
        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        /* c4 */
        do {
            c4 = str.charCodeAt(i++) & 0xff;
            if (c4 == 61)
                return out;
            c4 = base64DecodeChars[c4];
        } while (i < len && c4 == -1);
        if (c4 == -1)
            break;
        out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return out;
}
// Base64 end //////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
function createIframeX() {
    /*
    var fra = createIframe();
    //$(fra).css("width", "100px");
    //$(fra).css("height", "100px");
    var sUrl = "KitsGridList.aspx?paramsString=" + sParamsString + "&dt=" + new Date();
    $(fra).attr("src", sUrl);
    //var eFra = document.getElementById($(fra).attr("id"));
    fra.onload = fra.onreadystatechange = function () {
    if (this.readyState && this.readyState != 'complete') { return; }
    else {
    var oGrid = $(fra).contents().find("[id$='gvList']");
    $("[id$='tableInput']").find("tr:eq(0)").html($(oGrid.find("tr:eq(0)").html()));
    //$(divList).html($(oGrid).html());
    //$(divList).html($(oGrid)[0].outerHTML);
    disposeIframe(fra);
    }
    }
    */
    var fra = null;
    var aDiv = null;
    try {
        //ajaxframe = document.createElement('<iframe name="' + ajaxframeid + '" id="' + ajaxframeid + '"></iframe>');
        fra = document.createElement("<iframe frameborder='0'></iframe>"); //scrolling='no'
        ///fra = document.createElement("<div><a href='javascript(void(0));' onclick='$(this).parent().hide();'>X</a><iframe frameborder='0'></iframe></div>"); //scrolling='no'
        //fra = document.createElement("<iframe frameborder='no'></iframe>");
    } catch (e) {
        fra = document.createElement("iframe");
        //aDiv = document.createElement("div");
        //+++$(aDiv).html("<a href='javascript:void(0);' onclick='$(this).parent().hide();'>X</a><br>");
        //aDiv.setAttribute("style", "cursor:hand;");
        ///fra = aDiv.createElement("iframe");
        //fra.name = ajaxframeid;
        //fra.id = ajaxframeid;
    }
    //+++$(fra).css("display", "none");
    //document.body.appendChild(aDiv);
    document.body.appendChild(fra);
    //aDiv.appendChild(fra);
    return fra;
}

function disposeIframeX(fra) {
    try {
        $(fra).contents().empty();
        $(fra).removeAttr('src');
        $(fra).remove();
    } catch (e) {
    }
}

function isIframeCompletedX(o) {
    //fra.onload = fra.onreadystatechange = function () {
    //  if (this.readyState && this.readyState != 'complete') { return; }
    try {
        return !(o.readyState && o.readyState != "complete");
    } catch (e) {
        return false;
    }
}

function isInIFrame(aSelf) {
    //alert(isInIFrame(self));
    return aSelf.frameElement && aSelf.frameElement.tagName == "IFRAME";
}
////////////////////////////////////////////////////////////////////

//Object.fn.jq = function () {
//    alert("aaa");
//    return $(this);
//}

//Object.extend({
//    jq: function () {
//        alert($(this).html());
//        return $(this);
//    }
//});

//Array.prototype.contains = function (item) {
//    //    var arr = [];
//    //    for (var i = 10; i < 15; i++) {
//    //        arr.push(i);
//    //    }
//    //    alert(arr.contains(4)); //false
//    //    alert(arr.contains(14)); //true
//    return RegExp("\\b" + item + "\\b").test(this);
//};

//////var jq_Arrs = [];
//////var jq_Arro = [];
//////var jq_Arrp = [];
//////var jq_root = null;
////////(to jQuery)
//////String.prototype.jq = function (parent) {
//////    //"hdUserId".jq()
//////    //alert(typeof parent);
//////    //return $(this + "");
//////    //[id$ = 'hdUserId']
//////    //
//////    //X var b = arguments[0] ? true : false;
//////    //if (b) {
//////    //    alert("t");
//////    //} else {
//////    //    alert("f");
//////    //}

//////    //check parent
//////    if (jq_root == null) {
//////        jq_root = $(document);
//////    }
//////    if (typeof parent == "undefined") {
//////        //alert("aa");
//////        parent = jq_root;
//////    } else {
//////        //alert("bb");
//////    }
//////    //check in array
//////    var s = "[id$='" + this + "']";
//////    for (var i = 0; i < jq_Arrs.length; i++) {
//////        if ((jq_Arrs[i] == s) && (jq_Arrp[i] == parent)) {
//////            //alert("old");
//////            return jq_Arro[i];
//////        }
//////    }
//////    //default save to array
//////    var jo = $(parent).find(s);
//////    //alert("new");
//////    jq_Arrs.push(s);
//////    jq_Arro.push(jo);
//////    jq_Arrp.push(parent);
//////    return jo;
//////}

////////(to jQuery).val()
//////String.prototype.jqv = function (parent) {
//////    ////alert("hdUserId".jqv());
//////    return (this + "").jq(parent).val();
//////}

////////(to jQuery).text()
//////String.prototype.jqt = function (parent) {
//////    return (this + "").jq(parent).text();
//////}

////////(to jQuery).html()
//////String.prototype.jqh = function (parent) {
//////    return (this + "").jq(parent).html();
//////}

jQuery.extend({
    getAAA: function (s) {
        ////alert($.getAAA("aaa"));
        return s;
    },
    getBBB: function (s) {
        return s;
    },
    jLikeAAA: function (obj, parent) {
        ////$.jq("hdUserId");
        //alert(typeof obj);
        //X if ((typeof obj == "string") && (str.constructor == String)) {
        if (typeof obj == "string") {
            alert("is str");
            var o = $(obj);
            return o;
        }
        if (typeof obj == "object") {
        }
        return $(obj);
    }
});

//jQuery.fn.subContent = function (c, isShowTitle) {
//    return this.each(function () {
//        var s = jQuery.trim(jQuery.text(jQuery(this)));
//        jQuery(this).text(jQuery.subContent(s, c));
//        if (isShowTitle) {
//            jQuery(this).attr("title", s);
//        }
//    });
//};

function isJQueryX(o) {
    //alert("这是一个jQuery对象");
    return o instanceof jQuery;
}

var jq_vp = []; //parent: jquery/element
var jq_vo = []; //jquery/string/element
var jq_vo2 = []; //
function jqX(o, p) {
    if (isJQueryX(o)) {
        return o;
    }

    ////alert(jqX("#hdUserId").val());
    try {
        if (typeof p == "undefined") {
            p = document;
        }
        p = $(p);
        for (var i = 0; i < jq_vo2.length; i++) {
            if (jq_vp[i][0] == p[0] && jq_vo[i] == o) {
                //alert("old");
                return jq_vo2[i];
            }
        }
        var o2 = p.find(o);
        if (typeof o2[0] == "undefined") {
            //alert("o2_udf");
            o2 = p.find("[id$='" + o + "']");
        }
        o2 = $(o2);
        //alert("new");
        jq_vo.push(o);
        jq_vp.push(p);
        jq_vo2.push(o2);
        return o2;
    } catch (e) {
        alert(e);
    }
};

//////////////////////////////////////////////////////////////
jQuery.fn.moveX = function (x, y) {
    var o = $(this);

    //var nScrollTop = $(document).scrollTop();
    //var nScrollLeft = $(document).scrollLeft();
    //var nToX = (-nScrollLeft + x);
    //var nToY = (-nScrollTop + y);
    var nToX = x;
    var nToY = y;
    var sCssLeft = "";
    var sCssTop = "";

    //alert(nToX + ":" + nToY);

    if (($.browser.msie == true) && ($.browser.version == 6.0)) {
        sCssTop = nToY;
        sCssLeft = nToX;
        o.css({ position: "absolute", top: sCssTop, left: sCssLeft });
        //if (nScrollTop > nFixLeft) oFixLeft.css({ position: "absolute", top: nScrollTop - nFixLeft, left: nScrollLeft - nFixLeft });
    } else {
        //sCssLeft = "-" & nScrollLeft + "px";
        //sCssTop = "-" & (nScrollTop - nFixLeft) + "px";
        sCssTop = nToY + "px"; //nFixLeft + "px";
        sCssLeft = nToX + "px";  //(-nScrollLeft) + "px";
        o.css({ position: "fixed", top: sCssTop, left: sCssLeft });
        //if (nScrollTop > nFixLeft) oFixLeft.css({ position: "fixed", nScrollTop: "-" & nScrollTop + "px", left: "-" & nScrollLeft + "px" });
    }

    return o;
}


jQuery.fn.trimX = function () {
    //o.valX().trim()在IE下会出错，应该这样写: $.trim(...)。
    var o = $(this);
    return $.trim(o.valX());
}

jQuery.fn.findX = function (o) {
    var p = $(this);
    return jqX(o, p);
}

//Set object value
function jqvX(o, v) {
    ////alert(jqvX("hdUserId"));
    ////alert(jqvX("hdUserId",document,"aaaa").val());
    var o2 = jqX(o);
    return o2.valX(v);
}

//function tagNameX(o) {
//    return $(o)[0].tagName.toLowerCase();
//}

jQuery.fn.outerHTMLX = function () {
    //$(".test").prop("outerHTML");
    var o = $(this);
    return $(o).prop("outerHTML");
};

jQuery.fn.tagNameX = function () {
    try {
        var o = $(this);
        return $(o)[0].tagName;
    } catch (e) {
        //alert(typeof (o[0]));
        //alert($(o).outerHTMLX());
        return "unknow_tag";
    }
};

jQuery.fn.findThisX = function (sFind) {
    //if (o.findThisX(":text") != null) {
    var o = $(this);
    o.parent().find(sFind).each(function (i, e) {
        var jE = $(e);
        if ($(jE)[0] == o[0]) {
            return o;
        }
    });
    return null;
}

//if ($(oTd).find(":text").length > 0) {
//    sValue = $(oTd).find(":text:eq(0)").val();
//}
////
//if ($(oTd).find("select").length > 0) {
//    sValue = $(oTd).find("select:eq(0)").val();
//}
////
//if ($(oTd).find(":checkbox").length > 0) {
//    sValue = $(oTd).find(":checkbox:eq(0)").attr("checked") == "checked" ? "1" : "0";
//}

jQuery.fn.existsX = function () {
    return $(this)[0] ? true : false;
}

jQuery.fn.notCheckX = function () {
    var o = $(this);
    if (o.attr("checked") == "checked") {
        o.attr("checked", "");
    } else {
        o.attr("checked", "checked");
    }
    return o;
}

jQuery.fn.checkedX = function (bValue) {
    var o = $(this);
    var sTagName = o.tagNameX().toUpperCase();
    //alert(sTagName);
    if (sTagName == "SPAN") {
        o = $(o.find("input:eq(0)")); //:checkbox :radio
    }

    if (typeof bValue == "undefined") {
        //get
        //alert(o.attr("checked"));
        return o.attr("checked") == "checked";
    } else {
        //set
        o.attr("checked", bValue == "checked" ? "checked" : "");
        return o;
    }
};


jQuery.fn.isVisibleX = function () {
    var o = $(this);
    return o.is(':visible');
    //if (answer.is(':visible')) {//如果ANSWER 为可见,:visible是可见的意思,相关用法还有:hidden(隐藏),:first(第一个),:last(最后一个)   
    //    answer.slideUp(); //隐藏   
    //} else {
    //    answer.slideDown(); //显示   
    //}   
}

//is(':visible')
jQuery.fn.isCheckboxX = function (v) {
    var o = $(this);
    //var sTagName = o.tagNameX();
    //alert(sTagName);
    return o.attrX("type") == "checkbox";
}

jQuery.fn.valX = function (v) {
    //this={ :text select :checkbox td :radio checked div }
    var o = $(this);
    //o.parent().find(":text").each(if [0]=o;)
    var sTagName = o.tagNameX();
    if (typeof v == "undefined") {
        //-------without value, for get ------
        var sRet = "";
        if (sTagName == "input") {
            //type: text button ...
        }
        //alert(o.attr("id") + "aaa");
        //checkbox
        //if (o.findThisX(":checkbox") != null) {
        if (o.isCheckboxX()) {
            //return o.attr("checked");
            return o.is(':checked');
        }
        //alert("not checkbox");
        //select
        if (o.findThisX("select") != null) {
            return o.val();
        }
        //text
        if (o.findThisX(":text") != null) {
            return o.val();
        }
        sRet = o.val() + "";
        if (sRet == "undefined") sRet = "";
        if (sRet == "null") sRet = "";
        return sRet;
        //-------without value, for get ------
    } else {
        //-------with value, for set ------
        //alert(v);
        o.val(v);
        //alert(o.val());
        return o;
        //-------with value, for set ------
    }
};

jQuery.fn.htmlX = function (v) {
    var o = $(this);
    if (typeof v == "undefined") {
        //get
        var sRet = "";
        sRet = o.html() + "";
        if (sRet == "undefined") sRet = "";
        if (sRet == "null") sRet = "";
        return sRet;
    } else {
        //set
        o.html(v);
        return o;
    }
};

jQuery.fn.outerHtmlX = function (v) {
    var o = $(this);
    if (typeof v == "undefined") {
        //get
        var sRet = "";
        sRet = o[0].outerHTML + "";
        if (sRet == "undefined") sRet = "";
        if (sRet == "null") sRet = "";
        return sRet;
    } else {
        //set
        o[0].outerHTML = v;
        return o;
    }
};
jQuery.fn.outerHTMLX = function (v) {
    return $(this).outerHtmlX(v);
}

jQuery.fn.attrX = function (att, v) {
    try {
        var o = $(this);
        if (typeof v == "undefined") {
            //get
            var sRet = $(o).attr(att) + "";
            if (sRet == "undefined") sRet = "";
            if (sRet == "null") sRet = "";
            return sRet;
        } else {
            //set
            o.attr(att, v);
            return o;
        }
    } catch (e) {
        alert(e);
    }
};

jQuery.fn.disabledX = function (v) {
    try {
        var o = $(this);
        if (typeof v == "undefined") {
            //get
            var sRet = o.attr("disabled") + "";
            return sRet == "disabled";
        } else {
            //set
            if (v) {
                o.attr("disabled", "disabled");
            } else {
                o.removeAttr("disabled");
            }
            return o;
        }
    } catch (e) {
        alert(e);
    }
};

jQuery.fn.getParentByTagNameX = function (sTagName) {
    //will new: if ($(e.target).closest("table").is(".ddGridTable")) { }
    //if ($(e.target).closest("div").is(".country") || $(e.target).closest("span").is(".united")) { }

    var o = this;
    sTagName = sTagName.toUpperCase();
    if ($(o)[0].tagName.toUpperCase() == sTagName) return o;
    for (i = 1; i < 20; i++) {
        //alert(i);
        o = $(o).parent();
        if ($(o)[0].tagName.toUpperCase() == sTagName) return o;
    }
    return null;
};

//var getTrTdX_oldTr = null;
//var getTrTdX_oldTable = null;
jQuery.fn.getTrTdX = function (sFieldName) {
    ////this=$(oTr); return $(oTd);
    ////<table GridFields="CMD;RN;CODE;DSCR;QTY;REMARK;">
    //$(divListGridCurr).find("table:eq(0)").attr("GridFields", $(hdGridFieldsSrc).val());

    //1. is index
    if (("" + sFieldName).isNumericX()) {
        return this.find("td:eq(" + sFieldName + ")");
    }

    //2. th.attr("field_name")
    //+++

    //3. table.attr("grid_fields")
    var oGrid = this.getParentByTagNameX("table");
    var sGridFields = $(oGrid).attr("grid_fields"); //table.GridFields
    if (sGridFields == "") {
        sGridFields = $(oGrid).attr("GridFields");
    }
    if (sGridFields == "") {
        alert("oGrid.attr('grid_fields') required!");
    }
    //alert(sGridFields);

    var nIndex = sGridFields.getSplitIndexX(sFieldName);
    if (nIndex != -1) {
        return this.find("td:eq(" + nIndex + ")");
    }
    alert("Field not found: " + sFieldName);
    return null;
};
jQuery.fn.trTdX = function (sFieldName) {
    return this.getTrTdX(sFieldName);
}

jQuery.fn.getTrTdValueX = function (sFieldName) {
    ////this=$(oTr); return string;
    ////var s = $(oTr).getTrTdValueX("RECEIVE_DATE"); alert(s);
    var oTd = this.getTrTdX(sFieldName);
    return $(oTd).getTdValueX();

    //    if (s == null) {
    //        sMsg += "<null>"; //V
    //    }
    //    if (s == "") {
    //        sMsg += "<empty>";
    //    }
    //    if (s == "null") {
    //        sMsg += "null";
    //    }
};

jQuery.fn.setTrTdValueX = function (sFieldName, sValue) {
    ////this=$(oTr); return string;
    ////var s = $(oTr).getTrTdValueX("RECEIVE_DATE"); alert(s);
    var oTd = this.getTrTdX(sFieldName);
    return $(oTd).setTdValueX(sValue);
};

jQuery.fn.trTdValueX = function (sFieldName, sValue) {
    ////this=oTr; return oTr;
    ////$(oTr).trTdValueX("CODE", "aaa").trTdValueX("NAME", "bbb");
    var oTd = this.getTrTdX(sFieldName);
    if (typeof sValue == "undefined") {
        //get
        var s = $(oTd).getTdValueX(sValue);
        return s;
    }
    //default set
    $(oTd).setTdValueX(sValue);
    return this;
};

jQuery.fn.getTdValueX = function () {
    ////this=$(oTd); return string;
    var oTd = this;
    var sValue = "";
    //
    sValue = $(oTd).text(); //.html()
    //
    if ($(oTd).find(":text").length > 0) {
        sValue = $(oTd).find(":text:eq(0)").val();
    }
    //
    if ($(oTd).find("select").length > 0) {
        sValue = $(oTd).find("select:eq(0)").val();
    }
    //
    if ($(oTd).find(":checkbox").length > 0) {
        sValue = $(oTd).find(":checkbox:eq(0)").attr("checked") == "checked" ? "1" : "0";
    }
    //
    if (sValue == " ") { sValue = ""; } //表格填充字符
    if (sValue == null) { sValue = ""; } //空
    //
    return sValue;
};

jQuery.fn.setTdValueX = function (sValue) {
    ////this=$(oTd); return string;
    var oTd = this;
    //
    var bHand = false;
    //
    if (!bHand && $(oTd).find(":checkbox").length > 0) {
        //sValue = $(oTd).find(":checkbox:eq(0)").attr("checked") == "checked" ? "1" : "0";
        var bValue = false;
        if (sValue == "checked") { bValue = true; alert("use checkbox=0/1"); }
        if (sValue == "true") { bValue = true; alert("use checkbox=0/1"); }
        if (sValue == "1") { bValue = true; }
        $(oTd).find(":checkbox:eq(0)").attr("checked", bValue ? "checked" : "");
        return this;
    }
    //
    if (!bHand && $(oTd).find("select").length > 0) {
        //sValue = $(oTd).find("select:eq(0)").val();
        $(oTd).find("select:eq(0)").val(sValue);
        return this;
    }
    if (!bHand && $(oTd).find(":text").length > 0) {
        //sValue = $(oTd).find(":text:eq(0)").val();
        $(oTd).find(":text:eq(0)").val(sValue);
        return this;
    }
    if (!bHand) {
        $(oTd).text(sValue); //.html()
        return this;
    }
    ////
    //if (sValue == " ") { sValue = ""; } //表格填充字符
    ////
    //return sValue;

    return this;
};

jQuery.fn.getTdHeaderCellX = function () {
    var oTd = this;
    return oTd.getParentByTagNameX("table").find("thead tr:eq(0) th:eq(" + oTd.index() + ")");
}

jQuery.fn.getTdFieldNameX = function () {
    ////this=$(oTd); return string;
    var oTd = this;
    //var sFieldName = "";
    //alert("111");
    //alert(oTd.index());
    //alert("222");
    return oTd.getParentByTagNameX("table").find("tr:eq(0) th:eq(" + oTd.index() + ")").attrX("FIELD_NAME");
}

//////////////////////////////////////////////////////////////
var showAlertX_tmr = null;
var showAlertX_div = null;
function showAlertX(s, x, y) {
    try {
        //alert(s);
        if (showAlertX_div == null) {
            //alert("111");
            //showAlertX_div = $(jqX("divMessage"));
            showAlertX_div = $("#divMessage");
            if (!(showAlertX_div[0])) {
                //alert("222");
                //alert("divMessage  not found!");
                var vDiv = [];
                //////                vDiv.push(
                //////"<div id='divMessage' onclick='cancelHideAlertX();' ondblclick='$(this).hide();' style='display: none;'>",
                //////"   <div class='ui-state-highlight _ui-state-default ui-corner-all' title='.ui-icon-circle-zoomout' style='margin: 2px; position: fixed; top: 200px; left: 400px; z-index: 99999; padding: 8px 0; cursor: pointer; float: left;'>",
                //////"       <span class='aui-icon aui-icon-alert' style='font-weight: bold; color: #FF00FF; float: left; margin: 0 8px;'></span>",
                //////"   </div>",
                //////"</div>"
                //////            );
                vDiv.push(
"<div id='divMessage' onclick='cancelHideAlertX();' ondblclick='$(this).hide();' style='display: none;'>",
"   <div class='ui-state-highlight _ui-state-default ui-corner-all' title='.ui-icon-circle-zoomout' style='position: absolute; margin: 2px; left:50%; width:400px; margin-left: -200px; height:50px; margin-top:-25px; z-index: 99999; padding: 8px 0; cursor: pointer; float: left;'>",
"       <span class='aui-icon aui-icon-alert' style='font-weight: bold; color: #FF00FF; float: left; margin: 0 8px;'></span>",
"   </div>",
"</div>"
            );
                //document.write(vDiv.join("\r\n"));
                //alert("333");
                //var oDiv = document.createElement("div");
                //oDiv.innerHTML = vDiv.join("\r\n");
                //$(document).find("div:last").append(vDiv.join("\r\n"));
                //$(document).find("div:last").after(vDiv.join("\r\n"));
                $(document).append("<div>&nbsp;</div>");
                $(document).find("div:last").append(vDiv.join("\r\n"));
                showAlertX_div = $("#divMessage");
            }
            else {
                //alert("divMessage");
            }
            //showAlertX_div = $(jqX("divMessage"));
        }
        //alert("444");

        //
        var nScrollTop = $(document).scrollTop();
        var nScrollLeft = $(document).scrollLeft();
        var dlgX = 0;
        var dlgY = 0;
        //$(showAlertX_div).find("div").css("left", 500).css("top", 100).parent().fadeIn("fast", function () {
        $(showAlertX_div).find("div").parent().fadeIn("fast", function () {
            showAlertX_tmr = setTimeout("hideAlertX()", 2000);
        }).find("span").html(s);

        $(showAlertX_div).moveX(200, 200);

        //////        $(showAlertX_div).find("div").css("left", 500).css("top", 100).find("span").text(s);
        //////        //$("#divMessage").text("aaabbbccc");
        //////        $(showAlertX_div).show();
        //////        //$("#divMessage").attr("style", "color:#888;");
        //////        //alert($("#divMessage").text());
        //////        //alert(showAlertX_div.text());
        //////        //alert("555");

    } catch (e) {
        alert(e);
    }
}
function hideAlertX() {
    $(showAlertX_div).fadeOut(2000);
}
function cancelHideAlertX() {
    $(showAlertX_div).stop().fadeIn(100).show();
    //alert("cancel");
    clearTimeout(showAlertX_tmr);
}
//////////////////////////////////////////////////////////////
function initCalendarX(o, options) {
    //<asp:TextBox ID="txtDateFrom" onmouseover="initCalendarX(this);" Width="90px" runat="server"></asp:TextBox>
    o = $(o);
    if (o.attrX("init_calendar") == "") {
        o.attrX("init_calendar", "true");
        if (typeof (options) == "undefined") {
            o.datepicker({ showButtonPanel: true, firstDay: 1, dateFormat: "yy-mm-dd", showMonthAfterYear: true, changeYear: true, changeMonth: true, yearRange: "-20:+10" });
        } else {
            o.datepicker(options);
        }
    } else {
        //no do
    }
}

//////$.fn.initDatepickerX = function (options) {
//////    //$(function () {
//////    //  $("#txtDateTo").initDatepicker(); //click for popup jqueryUiDatePicker
//////    //});
//////    //a_onclick = "calendar(this);"

//////    if (typeof (options) == "undefined") {
//////        return this.datepicker({ showButtonPanel: true, firstDay: 1, dateFormat: "yy-mm-dd", showMonthAfterYear: true, changeYear: true, changeMonth: true, yearRange: "-20:+10" });
//////    } else {
//////        return this.datepicker(options);
//////    }
//////};

//////$("#txtDateFrom").datepicker({ //http://www.jb51.net/article/27184.htm
//////    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
//////    defaultDate: +7, // Date, Number, String : null
//////    firstDay: 1,
//////    minDate: new Date(2007, 1 - 1, 1),
//////    monthNames: ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'],
//////    //monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
//////    //navigationAsDateFormat: true,
//////    prevText: 'Earlier',
//////    nextText: 'Later',
//////    //maxDate: '+1m +1w',
//////    gotoCurrent: true,
//////    dateFormat: "yy-mm-dd",
//////    showButtonPanel: true,
//////    showMonthAfterYear: true,
//////    //showOn: 'both', //focus, button, both
//////    changeYear: true,
//////    changeMonth: true,
//////    //yearRange: "2000:2020",
//////    yearRange: "-20:+10",
//////    numberOfMonths: 1
//////});
//////$("#txtDateTo").datepicker({ firstDay: 1, dateFormat: "yy-mm-dd", showMonthAfterYear: true, changeYear: true, changeMonth: true, yearRange: "-20:+10" });
//////////////////////////////////////////////////////////////

function getGuidX() {
    var sRet = "";
    ////
    //$.ajax({
    //    url: getServiceUrl() + "/GetGuid",
    //    async: false,
    //    type: "POST",
    //    processData: false,
    //    dataType: "json",
    //    contentType: "application/json; charset=utf-8",
    //    //data: params,
    //    success: function (json) {
    //        //alert(json.d);
    //        sRet = json.d;
    //    },
    //    error: function (error) {
    //        var json = stringToJsonX(error.responseText);
    //        alert(json.Message);
    //    }
    //});
    sRet = $(xmlSqlX("select newid() V from dual ", "")).find("Table V:eq(0)").text();
    return sRet;
}

//function getBadgeInfoX(sBADGEID) {
//    // Ajax Start //////////////
//    var vParams = {};
//    vParams.fBADGEID = sBADGEID;
//    vParams.sKey = "";
//    var params = jsonToStringX(vParams); //var params = "{'sql':'" + sql + "', 'key':''}";
//    //alert(params);
//    $.ajax({
//        url: getServiceUrl()+"/BopGetBadgeInfoJson",
//        async: true, data: params, type: "POST", processData: false, contentType: "application/json; charset=utf-8", dataType: "json",
//        success: function (result) {
//            var json = $.parseJSON(result.d);
//            var nLen = json.items.length;
//            if (nLen > 0) {
//                var item = json.items[0];
//                $("[id$='edtCNAME']").val(item.cname);
//                $("[id$='edtENAME']").val(item.ename);
//            } else {
//                alert("Invalid BADGEID!");
//                $("[id$='edtBADGEID']").val("");
//            }
//        },
//        error: function (XMLHttpRequest, textStatus, errorThrown) {
//            alert("textStatus=" + textStatus + ",errorThrown=" + errorThrown);
//        }
//    });
//    // Ajax End //////////////
//}



//////////////////////////////////////////////////////////////
function showPopupX(sHtml) {
    //showPopupX("<iframe></iframe>");
    //alert("aaa");
    //var b = objExistsX("divPopup");
    var b = $("#divPopup")[0] ? true : false;
    //alert(b);
    if (!b) {
        //alert("bbb");
        var vPopup = [];
        vPopup.push(
"<div id='divPopup' style=''>",
"	<div id='divPopupMask' class='popupMask' onclick='hidePopupX()' style='position: absolute; top: 0px;",
"		left: 0px; display: none; width: 100%; height: 2000px; z-index: 3; background-color: #bbb;'>",
"	</div>",
"	<div id='divPopupForm' class='popupForm' style='display: none; position: absolute; background-color: #fff;  border:2px solid #4394d6; border-top-width:25px;",
"		 font-size: 15px; font-family: Arial; overflow: auto;",
"		height: 356px; width: 500px; left: 50%; margin-left: -250px; top: 100px; z-index: 5;'>",
"	</div>",
"</div>"
);
        //alert("ccc");
        var sHtml1 = vPopup.join("");
        $(document.body).append(sHtml1);
    }
    //alert("ddd");

    //var oPopup = jqX("divPopup");
    var oPopup = $("#divPopup");
    oPopup.find(".popupForm").html(sHtml);
    //alert(oPopup.html());
    //var oPopup = checkAppendDivX("divPopup", );
    oPopup.find(".popupMask").animate({ opacity: '0.6' }, 10);
    oPopup.find(".popupMask").slideDown(10, function () {
        oPopup.find(".popupForm").show(1);
    });
}

function hidePopupX() {
    //var oPopup = checkAppendDivX("divPopup", "");
    var oPopup = $("#divPopup");
    oPopup.find(".popupForm").slideUp(300,
            function () {
                oPopup.find(".popupMask").slideUp(200);
            });
    //$("#mianban").slideUp(300, function () { $("#yincang").slideUp(200) });
}

//////////////////////////////////////////////////////////////
function classaaa1() { // 最简单的事件设计模式

}

classaaa1.prototype = {
    show: function () {
        this.onShow();
    },
    onShow: function () { }
}

function aaatest() {
    var obj = new classaaa1();
    obj.onShow = function () {
        alert("test");
    }
    obj.show();
}

//        function clsSecClass(){
//            
//        }

function deleteRow2(o, bIsBatch) {
    //
}


function string2XmlX(xmlString) {
    alert("string2XmlX, will...");
    // for IE
    if (window.ActiveXObject) {
        var xmlobject = new ActiveXObject("Microsoft.XMLDOM");
        xmlobject.async = "false";
        xmlobject.loadXML(xmlString);
        return xmlobject;
    }
    // for other browsers
    else {
        var parser = new DOMParser();
        var xmlobject = parser.parseFromString(xmlString, "text/xml");
        return xmlobject;
    }
}

function xml2StringX(xmlObject) {
    // for IE
    if (window.ActiveXObject) {
        return xmlObject.xml;
    }
    // for other browsers
    else {
        return (new XMLSerializer()).serializeToString(xmlObject);
    }
}
//////////////////////////////////////////////////////////////
////10 个很棒的 jQuery 代码片段
////http: //www.oschina.net/code/snippet_12_7271
////禁用表单的回车键提交
//$("#form").keypress(function(e) {
//  if (e.which == 13) {
//    return false;
//  }
//});
//////////////////////////////////////////////////////////////
function getEventCodeX(e) {
    var code = null;
    if (!e)
        e = window.event;
    if (e.keyCode)
        code = e.keyCode;
    else if (e.which)
        code = e.which;
    //do something here;
    return code;
}

////////////////////////////////////////////////////////////////////
function xmlSqlX(sql, sUserId) {
    //var sss = getServiceUrl() + "/GetGuid";
    //var sss = "GetGuid";
    //alert(sss);
    //
    //sql = sql.replaceX("|", "[ftShuXian]");
    ////alert("sql: " + sql);
    try {
        var sRet = null;
        var vParams = {};
        vParams.sql = sql;
        //vParams.sParams = "|@mode:GetDataTable|sql:" + sql + " ";
        vParams.sUserId = sUserId;
        vParams.sKey = "";
        var params = jsonToStringX(vParams);
        //alert(params);
        $.ajax({
            //url: getServiceUrl() + "/CommonGetDataTableXml",
            //url: getServiceUrl() + "/EiqaGetDataTableXml",
            //url: "wsDb.asmx/EiqaGetDataTableXml",
            url: "/dd-center/wsDb.asmx/CommonGetDataTableXml",
            async: false,
            type: "POST",
            //type: "GET",
            //processData: false,
            dataType: "xml",
            contentType: "application/json; charset=utf-8",
            data: params,
            success: function (data) {
                //alert("111");
                //alert(data);
                sRet = data;
            }
            ,
            error: function (error) {
                sRet = "Operation with error!(xmlSqlX)";
                alert(sRet);
                //alert("" + error);
                //var json = stringToJsonX(error.responseText);
                //alert(json.Message);
                //alert(error);
                //alert(error.toString());
                alert(error.responseText);
            }
        });
    } catch (e) {
        alert(e);
    }
    return sRet;
    /* Usage:
    $(function () {
    var sql = "select a.* from PPAP_CREATION a ";
    //var sql = "select 'aaa' as v from dual ";
    var data = xmlSql(sql, "");
    //alert(Xml2StringX(data));
    //r.find("SUPPLIER_NAME").text(); //find区分大小写, children不区分
    //var nLen = $(data).find("Table").length;
    //var r = $(data).find("Table:eq(0)");
    $(data).find("Table").each(function () {
    //$("table").append("<tr><td>" + $(this).children("name").text() + "</td><td>" + $(this).children("age").text() + "</td><td>" + $(this).children("Gender").text() + "</td></tr>");
    alert("<tr><td>" + $(this).children("AREA").text() + "</td><td>" + $(this).children("CQIIQI").text() + "</td><td>" + $(this).children("ASSIGNEE").text() + "</td></tr>");
    });
    //alert(data);
    });
    */

    /*
    <NewDataSet>
    <Table>
    <AREA>SDSS</AREA>
    <CQIIQI>2)Count variance.</CQIIQI>
    <ASSIGNEE>Min_ ShiMing</ASSIGNEE>
    <CRITICALITY>LOW</CRITICALITY>
    <WORK_DATE>20150226</WORK_DATE>
    <QI_NO>IQI15022601</QI_NO>
    <TASK_FORCE_MEMBERS>Min_ ShiMing;Yu_ Jiangong</TASK_FORCE_MEMBERS>
    <ISSUE_DESCRIPTION>PPAP测试</ISSUE_DESCRIPTION>
    <INITIATOR>Min_ ShiMing</INITIATOR>
    </Table>
    <Table>
    <AREA>SDSM</AREA>
    <CQIIQI>3)Customer claims that they are not able to ship product to their customer due to a reported SanDisk product quality, administrative quality, or product conversion problem etc..</CQIIQI>
    <ASSIGNEE>Wu_ Fanglu</ASSIGNEE>
    <CRITICALITY>HIGH</CRITICALITY>
    <WORK_DATE>20150226</WORK_DATE>
    <QI_NO>CQI15022604</QI_NO>
    <TASK_FORCE_MEMBERS>Min_ ShiMing;Wu_ Fanglu;Min_ ShiMing;Yu_ Jiangong;Wu_ Fanglu;Min_ ShiMing;Min_ ShiMing;Wu_ Fanglu</TASK_FORCE_MEMBERS>
    <ISSUE_DESCRIPTION>sdfaf</ISSUE_DESCRIPTION>
    <INITIATOR>Wu_ Fanglu</INITIATOR>
    </Table>
    <Table1>
    <CODE>0</CODE>
    </Table1>
    </NewDataSet>
    */
}

function runSqlX(sql, sUserId) {
    //string fSql, string fUSER_ID, string sKey
    //
    ////sql = sql.replaceX("|", "[ftShuXian]");
    var sRet = "";
    var vParams = {};
    vParams.sql = sql;
    vParams.sUserId = sUserId;
    vParams.sKey = "";
    var params = jsonToStringX(vParams);
    //alert(params);
    $.ajax({
        //url: "wsDb.asmx/EiqaLogSave",
        //url: getServiceUrl() + "/CommonExecSql",
        url: "/dd-center/wsDb.asmx/CommonExecSql",
        async: false,
        type: "POST",
        processData: false,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: params,
        success: function (json) {
            //alert(json.d);
            //alert("111");
            //var s = json.d;
            //s = s.replaceX("\"", "\"\"");
            //var dt = stringToJsonX(s);
            sRet = "";
        },
        error: function (error) {
            sRet = "Operation with error!(runSqlX)";
            alert(sRet);
            //sRet = error;
            //alert(error);
            //alert(error.responseText);
            try {
                sRet = error.responseText;
                var json = stringToJsonX(error.responseText);
                sRet = json.Message;
                //alert(sRet);
            } catch (e) { }
        }
    });
    //alert(sRet);
    return sRet;
}
//////////////////////////////////////////////////////////////
function multGridHead(oTable) {
    //多行表头
    //Q1|CLOSE|TIME; Q1|FINDING|NC; Q1|FINDING|OFI
    //var oTable = $($("#divListGrid").find("table:eq(0)"));
    //multGridHead(oTable);
    //
    //////oTable = $(oTable);
    //////var oTrHead = $(oTable.find("tr:eq(0)"));
    //////oTrHead.find("th").each(function (i, oTh) {
    //////    oTh = $(oTh);
    //////    var sTxt = oTh.text();
    //////    sTxt = sTxt.replaceX("_", "<hr>");
    //////    oTh.html(sTxt);
    //////});            
    //////return;
    oTable = $(oTable);
    var oTrHead = $(oTable.find("tr:eq(0)"));
    var nTitleCnt = 1;
    var vTitles = [];
    var vStyles = [];
    var vClasss = [];

    oTrHead.find("th").each(function (i, oTh) {
        oTh = $(oTh);
        var sTxt = oTh.text();
        vTitles.push(sTxt.replaceX("_", "|"));
        //vTitles.push(sTxt);
        vStyles.push(oTh.attrX("style"));
        vClasss.push(oTh.attrX("class"));
    });
    //get Title rows count
    for (var i = 0; i < vTitles.length; i++) {
        //alert(vTitle[i]);
        var n = vTitles[i].length - vTitles[i].replaceX("|").length + 1;
        nTitleCnt = n > nTitleCnt ? n : nTitleCnt;
    }
    //alert(nTitleCnt);
    //insert new title rows
    try {
        var oHtml = [];
        for (var i = 0; i < nTitleCnt; i++) {
            oHtml.push("<tr ", " style='", oTrHead.attrX("style"), "' ", " class='", oTrHead.attrX("class"), "' ", ">");
            for (var j = 0; j < vTitles.length; j++) {
                var oTh = oTrHead.find("th:eq(" + j + ")")
                var vTh = vTitles[j].split("|");
                if (vTh.length - 1 == i) {
                    //last row, can find merge
                    var sTitle = vTh[i];
                    var nRowSpan = nTitleCnt - i;
                    //sTitle += "_" + nRowSpan;
                    var sRowSpan = "";
                    if (nRowSpan != 1) {
                        sRowSpan = " temp_rowspan='" + nRowSpan + "' ";
                    }
                    //var sStyle = " style='color:#3f3;";
                    var sStyle = "";
                    oHtml.push("<th ", sStyle, oTh.attrX("style"), "' ", sRowSpan, " class='", oTh.attrX("class"), "' ", ">", sTitle, "</th>");
                } else {
                    //center row, needn't merge
                    var sTitle = vTitles[j];
                    sTitle = vTh[i];
                    var sHide = (typeof (sTitle) == "undefined") ? " temp_row_display='none' " : "";
                    //var sStyle = " style='color:#ff3;";
                    var sStyle = "";
                    oHtml.push("<th ", sHide, sStyle, oTh.attrX("style"), "' ", " class='", oTh.attrX("class"), "' ", ">", sTitle, "</th>");
                }
            }
            oHtml.push("</tr>");
        }
        oTrHead.after(oHtml.join(""));
        //alert(nTitleCnt);

        //merge cols
        oTrHead.parent().find("tr:gt(0)").each(function (iTr, oTr) {
            var s = "";
            var olds = "";
            var oTh0 = null;
            nColSpan = 1;
            oTr = $(oTr);
            $(oTr).find("th").each(function (iTh, oTh) {
                oTh = $(oTh);
                s = oTh.text();
                //if (s == "" || s == olds) {
                if (s != "" & s == olds) {
                    //oTh.attrX("style", oTh.attrX("style") + ";display:none;");
                    oTh.attrX("temp_col_display", "none");
                    nColSpan++;
                    $(oTh0).attrX("temp_colspan", nColSpan);
                    //$(oTh0).text($(oTh0).text() + nColSpan);
                    //$(oTh0).attrX("absdf", "fsadf");

                } else {
                    oTh0 = oTh;
                    nColSpan = 1;
                }
                olds = s;
            });
        });
        //temp_rowspan => rowspan=n
        oTrHead.parent().find("tr [temp_rowspan]").each(function (iTh, oTh) {
            oTh = $(oTh);
            var sRowSpan = oTh.attrX("temp_rowspan");
            oTh.attrX("rowspan", sRowSpan);
            //oTh.text(oTh.text() + "_R" + sRowSpan);
        });
        //temp_colspan => colspan=n
        oTrHead.parent().find("tr [temp_colspan]").each(function (iTh, oTh) {
            oTh = $(oTh);
            var sColSpan = oTh.attrX("temp_colspan");
            oTh.attrX("colspan", oTh.attrX("temp_colspan"));
            //oTh.text(oTh.text() + "_C" + sColSpan);
        });
        //temp_row_dispaly='none' => hide
        oTrHead.parent().find("tr th[temp_row_display='none']").hide();
        oTrHead.parent().find("tr th[temp_col_display='none']").hide();
    } catch (e) {
        alert(e);
    }
    oTrHead.hide();
}
//////////////////////////////////////////////////////////////
//////function clsFixDiv(oDiv) {
//////    //$(function () {
//////    //    var cFix2 = new clsFixDiv($("#divRight"));
//////    //}

//////    //var aThis = this;
//////    //
//////    //this.oDiv = $(oDiv); if (typeof (this.oDiv) != "undefined") { this.oDiv = $($(document).find("[id$='txtPageIndex']")); }

//////    this.doFix = function () {
//////        //function topFix() {
//////        var top = $(document).scrollTop();
//////        var left = $(document).scrollLeft();
//////        //var oFix = $("#divFix");
//////        var oFix = oDiv;
//////        var overTop = 120;
//////        var fixTop = 0;

//////        if (($.browser.msie == true) && ($.browser.version == 6.0)) {
//////            if (top > overTop) {
//////                oFix.css({ position: "absolute", top: top - fixTop });
//////            }
//////            //if (top > fixTop) oFix.css({ position: "absolute", top: top - fixTop, left: left - fixTop });
//////        } else {
//////            if (top > overTop) {
//////                oFix.css({ position: "fixed", top: "-" & top + "px" });
//////            }
//////            //showAlert(left);
//////            //if (top > fixTop) oFix.css({ position: "fixed", top: "-" & top + "px", left: "-" & left + "px" });
//////        }
//////        if (top <= overTop) {
//////            //oFix.css({ position: "fixed", top: fixTop });
//////            oFix.css({ position: "static", top: 0 });
//////        }
//////    }

//////    //
//////    window.onscroll = this.doFix;
//////    window.onresize = this.doFix;
//////}
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
function clsPager(oPanel) {
    //$(function () {
    //  var cPager = new clsPager();
    //  //var cPager = new clsPager($(document).find("[id$='txtPageIndex']"));
    //}
    //OnClientClick="cPager.prev(); return false;"
    var aThis = this;
    //
    //this.txtPageIndex = $(txtPageIndex); if (typeof (this.txtPageIndex) != "undefined") { this.txtPageIndex = $($(document).find("[id$='txtPageIndex']")); }
    //this.btnSearch = $(btnSearch); if (typeof (this.btnSearch) != "undefined") { this.btnSearch = $($(document).find("[id$='btnSearch']")); }

    //----------------------
    //----------------------
    var m_panel = null;
    this.panel = function (panel) {
        //return $(oPanel); //divPager
        if (typeof panel == "undefined") {
            //get
            if (m_panel == null) {
                if ((oPanel == null) || (typeof panel == "undefined")) {
                    m_panel = this.panel(null); //auto
                } else {
                    m_panel = $(oPanel);
                }
            }
            return m_panel;
        } else {
            //set
            if (panel == null) {
                m_panel = $($(document).find("[id$='divPager']"));
            } else {
                m_panel = panel;
            }
            return this;
        }
    }
    //----------------------
    var m_txtPageIndex = null;
    this.txtPageIndex = function (txt) {
        if (typeof txt == "undefined") {
            //get
            if (m_txtPageIndex == null) {
                this.txtPageIndex(null); //get by default
                //alert("txtPageIndex");
                //alert(m_txtPageIndex.val());
            }
            return m_txtPageIndex;
        } else {
            //set
            if (txt == null) {
                //alert("set 111");
                m_txtPageIndex = $($(document).find("[id$='txtPageIndex']"));
                //alert("set 222");
            } else {
                m_txtPageIndex = txt;
            }
            return this;
        }
    }
    //----------------------
    var m_btnSearch = null;
    this.btnSearch = function (btn) {
        if (typeof btn == "undefined") {
            //get
            if (m_btnSearch == null) {
                this.btnSearch(null); //get by default
            }
            //alert(m_btnSearch.text());
            return m_btnSearch;
        } else {
            //set
            if (btn == null) {
                m_btnSearch = $($(document).find("[id$='btnSearch']"));
            } else {
                m_btnSearch = btn;
            }
            return this;
        }
    }
    //----------------------
    var m_btnRefresh = null;
    this.btnRefresh = function (btn) {
        if (typeof btn == "undefined") {
            //get
            if (m_btnRefresh == null) {
                this.m_btnRefresh(null); //get by default
            }
            return m_btnRefresh;
        } else {
            //set
            if (btn == null) {
                m_btnRefresh = $($(document).find("[id$='btnRefresh']"));
            } else {
                m_btnRefresh = btn;
            }
            return this;
        }
    }
    //----------------------
    //----------------------
    //this.txtPageIndex = $($(document).find("[id$='txtPageIndex']"));
    //this.btnSearch = $($(document).find("[id$='btnSearch']"));

    //----------------------
    this.first = function () {
        this.txtPageIndex().val("0");
        this.refresh();
    }

    //----------------------
    this.prev = function () {
        var n = this.txtPageIndex().val();
        if (n == "") { n = 0; }
        n--;
        this.txtPageIndex().val(n);
        this.refresh();
    }

    //----------------------
    this.next = function () {
        var n = this.txtPageIndex().val();
        if (n == "") { n = 0; }
        n++;
        this.txtPageIndex().val(n);
        this.refresh();
    }

    //----------------------
    this.last = function () {
        try {
            //alert("this.last 11");
            this.txtPageIndex().val("999999");
            //alert("this.last 22");
            this.refresh();
        } catch (e) {
            alert(e);
        }
    }

    //----------------------
    this.refresh = function () {
        try {
            this.btnSearch().click();
        } catch (e) {
            alert(e);
        }
    }
    //----------------------
    //this.create = function () 
    {
        $($(document).find("[id$='btnFirst']")).click(function () {
            aThis.first();
            return false;
        });
        $($(document).find("[id$='btnPrev']")).click(function () {
            aThis.prev();
            return false;
        });
        $($(document).find("[id$='btnNext']")).click(function () {
            aThis.next();
            return false;
        });
        $($(document).find("[id$='btnLast']")).click(function () {
            aThis.last();
            return false;
        });
        $($(document).find("[id$='btnRefresh']")).click(function () {
            aThis.refresh();
            return false;
        });
    }
    //----------------------
    //----------------------
    //----------------------
    //----------------------

    //////this.m_btnNext = null;
    //////this.btnNextGet = function () {
    //////    if (aThis.m_btnNext == null) {
    //////        aThis.m_btnNext = $($(document).find("[id$='btnNext']"));
    //////        aThis.m_btnNext.click(function () {
    //////            aThis.next();
    //////        });
    //////    }
    //////    return aThis.m_btnNext;
    //////}
    //////this.btnNext = this.btnNextGet();
    ////////this.btnNext.click(function () {
    ////////    //alert("aaa");
    ////////    this.next();
    ////////});

    //alert(this.btnNext().val());

    //this.btnNext = $($(document).find("[id$='btnNext']"));
    //alert(this.btnNext.val());

    //this.btnNext.click = function () {
    //aThis.next();
    //    alert("next clic");
    //    return false;
    //}

    //this.btnNext.add('click', function () {
    //    alert("next clicked");
    //});


}
//////////////////////////////////////////////////////////////
function clsTdInfo(oTd) {
    var aThis = this;
    this.td = $(oTd);

    //----------------------
    this.trInfo = function () {
        return this.td.parent();
    }
    //----------------------
    //----------------------
    //----------------------
    //----------------------
}
//////////////////////////////////////////////////////////////
function clsGridInfo(oGrid) {
    var aThis = this;
    this.grid = $(oGrid);

    //----------------------
    this.createByTrInfo = function (cTrInfo) {
        aThis.grid = $(cTrInfo.tr.getParentByTagNameX("table"));
        return aThis;
    }
    //----------------------
    this.keyField = function () {
        var s = this.grid.attrX("KEY_FIELD");
        return s;
    }
    //----------------------
    this.tableName = function () {
        var s = this.grid.attrX("TABLE_NAME");
        return s;
    }
    //----------------------
    this.gridFields = function () {
        var sGridFields = this.grid.attrX("grid_fields");
        if (sGridFields == "") {
            sGridFields = this.grid.attrX("GridFields");
        }
        if (sGridFields == "") {
            alert("oGrid.attr('grid_fields') required!");
        }
        return sGridFields;
    }
    //----------------------
    this.headerRow = function () {
        var oTr = $(this.grid.find("tr:eq(0)"));
        return oTr;
    }
    //----------------------
    this.firstRow = function () {
        var oTr = $(this.grid.find("tbody tr:eq(0)"));
        return oTr;
    }
    //----------------------
    this.lastRow = function () {
        var oTr = $(this.grid.find("tbody tr:last"));
        return oTr;
    }
    //----------------------
    this.ths = function () {
        var v = [];
        this.headerRow.find("th").each(function (iTh, oTh) {
            v.push($(oTh));
        });
        return v;
    }
    //----------------------
    this.fields = function () {
        var vThs = this.ths;
        var v = [];
        for (var i = 0; i < vThs.length; i++) {
            v.push(vThs[i].attrX("FIELD_NAME"));
        }
        return v;
    }
    //----------------------
    //----------------------
}
//////////////////////////////////////////////////////////////
function clsTrInfo(oTr) {
    //////try {
    //////    var oGrid = $($("#divListGrid").find("table:eq(0)"));
    //////    var oTr = oGrid.find("tr:last");
    //////    var cTr = new clsTrInfo(oTr);
    //////    //alert(cTr.hasField("SCAR_NO"));
    //////    //alert(cTr.fieldIndex("SCAR_NO"));
    //////    //alert(cTr.td("SCAR_NO").html());
    //////    //if (cTr.hasField("SCAR_No")) {
    //////    //    alert("have");
    //////    //} else {
    //////    //    alert("no");
    //////    //}
    //////    //cTr.tdValue("SCAR_no", "aaa");
    //////    //alert(cTr.tdValue("SCAR_no"));
    //////} catch (e) {
    //////    alert(e);
    //////}
    //////
    var aThis = this;
    this.tr = $(oTr);

    //----------------------
    this.createByChild = function (sender) {
        sender = $(sender); //button text a
        this.tr = $(sender.getParentByTagNameX("tr"));
        return this;
    }
    //----------------------
    //var m_grid = null;
    this.grid = function () {
        //if (m_grid == null) {
        //    m_grid = $(this.tr.getParentByTagNameX("table"));
        //}
        //return m_grid;
        return this.gridInfo().grid;
    }
    //----------------------
    var m_gridInfo = null;
    this.gridInfo = function () {
        if (m_gridInfo == null) {
            m_gridInfo = new clsGridInfo().createByTrInfo(aThis);
        }
        return m_gridInfo;
    }
    //----------------------
    //////this.gridFields = function () {
    //////    var sGridFields = this.grid().attrX("grid_fields");
    //////    if (sGridFields == "") {
    //////        sGridFields = this.grid().attrX("GridFields");
    //////    }
    //////    if (sGridFields == "") {
    //////        alert("oGrid.attr('grid_fields') required!");
    //////    }
    //////    return sGridFields;
    //////}
    ////////----------------------
    //////this.keyField = function () {
    //////    return this.gridInfo().keyField();
    //////}
    ////////----------------------
    //////this.tableName = function () {
    //////    return this.gridInfo().tableName();
    //////}
    //----------------------
    //----------------------
    //----------------------
    this.tdCount = function () {
        var n = this.tr.find("td").length; //@@@
        return n;
    }
    //----------------------
    this.hasField = function (sFieldName) {
        var nIndex = this.fieldIndex(sFieldName);
        return nIndex != -1;
    }
    //----------------------
    this.fieldIndex = function (sFieldName) {
        //1. is index
        if (("" + sFieldName).isNumericX()) {
            return this.tr.find("td:eq(" + sFieldName + ")");
        }

        //2. th.attr("FIELD_NAME")
        //var tr0 = $(this.grid().find("tr:eq(0)"));
        var tr0 = $(this.gridInfo().headerRow());
        var sFind = "th[FIELD_NAME=" + sFieldName.toUpperCase() + "]:first";
        var oTh = $(tr0.find(sFind));
        //*此处用each的话，return有冲突
        if (oTh.length > 0) {
            return oTh.index();
        }

        //3. table.attr("grid_fields")
        var sGridFields = this.gridFields();
        //alert(sGridFields);

        var nIndex = sGridFields.toLowerCase().getSplitIndexX(sFieldName.toLowerCase());
        return nIndex;
    }
    //----------------------
    this.rowState = function (sValue) {
        if (typeof sValue == "undefined") {
            //get
            return this.tr.attrX("ROW_STATE");
        } else {
            //set
            this.tr.attrX("ROW_STATE", sValue);
            return this;
        }
    }
    //----------------------
    this.rowId = function (sValue) {
        if (typeof sValue == "undefined") {
            //get
            return this.tr.attrX("ROW_ID");
        } else {
            //set
            this.tr.attrX("ROW_ID", sValue);
            return this;
        }
    }
    //----------------------
    this.rowNo = function (sValue) {
        if (typeof sValue == "undefined") {
            //get
            return this.tr.attrX("ROW_NO");
        } else {
            //set
            this.tr.attrX("ROW_RN", sValue);
            return this;
        }
    }
    //----------------------
    this.idValue_ = function () {
        alert("Use keyValue()..");
        return this;
    }
    //----------------------
    this.keyValue = function () {
        var s = this.td(this.gridInfo().keyField()).text();
        return s;
    }
    //----------------------
    this.td = function (sFieldName) {
        var nIndex = this.fieldIndex(sFieldName);
        if (nIndex != -1) {
            return $(this.tr.find("td:eq(" + nIndex + ")"));
        }
        alert("Field not found: [" + sFieldName + "]");
        return null;
    }
    //----------------------
    //////var m_tds = [];
    //////this.tds = function (sFieldName) {
    //////    if (typeof sValue == "undefined") {
    //////        //get td by sFieldName
    //////        return this.td(sFieldName);
    //////    }
    //////    else {
    //////        //get collecons
    //////        if (m_tds.length == 0) {
    //////            m_tds.push("aaa");
    //////            m_tds.push("bbb");
    //////        }
    //////        return m_tds;
    //////    }
    //////}
    //----------------------
    this.tdValue = function (sFieldName, sValue) {
        var td = this.td(sFieldName);

        if (typeof sValue == "undefined") {
            //get
            var sRet = "";
            //
            sRet = td.text(); //.html()
            //
            if (td.find(":text").length > 0) {
                sRet = $(oTd).find(":text:eq(0)").val();
            }
            //
            if (td.find("select").length > 0) {
                sRet = $(oTd).find("select:eq(0)").val();
            }
            //
            if (td.find(":checkbox").length > 0) {
                sRet = $(oTd).find(":checkbox:eq(0)").attr("checked") == "checked" ? "1" : "0";
            }
            //
            if (sRet == " ") { sRet = ""; } //表格填充字符
            if (sRet == null) { sRet = ""; } //空
            //
            return sRet;
        } else {
            //set
            //td.setTdValueX(sValue);
            var bHand = false;
            //
            if (!bHand && td.find(":checkbox").length > 0) {
                //sValue = $(oTd).find(":checkbox:eq(0)").attr("checked") == "checked" ? "1" : "0";
                var bValue = false;
                if (sValue == "checked") { bValue = true; alert("use checkbox=0/1"); }
                if (sValue == "true") { bValue = true; alert("use checkbox=0/1"); }
                if (sValue == "1") { bValue = true; }
                td.find(":checkbox:eq(0)").attr("checked", bValue ? "checked" : "");
                return this;
            }
            //
            if (!bHand && td.find("select").length > 0) {
                //sValue = $(oTd).find("select:eq(0)").val();
                td.find("select:eq(0)").val(sValue);
                return this;
            }
            if (!bHand && td.find(":text").length > 0) {
                //sValue = $(oTd).find(":text:eq(0)").val();
                td.find(":text:eq(0)").val(sValue);
                return this;
            }
            if (!bHand) {
                td.text(sValue); //.html()
                return this;
            }
            ////
            //if (sValue == " ") { sValue = ""; } //表格填充字符
            ////
            //return sValue;

            return this;
        }
    }
    //----------------------
    this.tds = function () {
        var v = [];
        this.tr.find("td").each(function (iTd, oTd) {
            v.push($(oTd));
        });
        return v;
    }
    //----------------------
    this.values = function () {
        var v = [];
        var fields = this.gridInfo().fields();
        for (var i = 0; i < fields.length; i++) {
            v.push(this.tdValue(fields[i]));
        }
        return v;
    }
    //----------------------
    this.getDataString = function () {
        var sData = "";
        var v = [];
        vFields = this.gridInfo().fields();
        for (var i = 0; i < vFields.lenght; i++) {
            v.push("|", vFields[i], ":", this.tdValue(vFields[i]));
        }
        return v.join("");
    }
    //----------------------
    //----------------------
    //----------------------
    //----------------------
    //----------------------
    //----------------------
    //----------------------
}
//////////////////////////////////////////////////////////////
var clsTick = function () {
    //var m_tick = 0;
    //var timeTick = new Date().getTime();
    //var nTick = new Date().getTime() - timeTick;
    //nTick = new Date().getTime() - timeTick; if (nTick > 1000) { alert(nTick); }
}
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
////////http://www.cnblogs.com/dolphinX/p/3254017.html
//////this.onDialog = null;
//////this.doSomething = function () {
//////    //before
//////    if (typeof (this.onDialog) == "function") {
//////        this.onDialog();
//////        var cTr = new clsTrInfo();
//////        cTr.onDialog = function () {
//////            //
//////        }
//////    }
//////    //after
//////}
//////////////////////////////////////////////////////////////
////////JavaScript 实现的 URL 编码和解码
////////http://outofmemory.cn/code-snippet/37216/JavaScript-achieve-URL-coding-jiema
//////var Url = {

//////    // public method for url encoding
//////    encode : function (string) {
//////        return escape(this._utf8_encode(string));
//////    },

//////    // public method for url decoding
//////    decode : function (string) {
//////        return this._utf8_decode(unescape(string));
//////    },

//////    // private method for UTF-8 encoding
//////    _utf8_encode : function (string) {
//////        string = string.replace(/
///////g,"\n");
//////        var utftext = "";

//////        for (var n = 0; n < string.length; n++) {

//////            var c = string.charCodeAt(n);

//////            if (c < 128) {
//////                utftext += String.fromCharCode(c);
//////            }
//////            else if((c > 127) && (c < 2048)) {
//////                utftext += String.fromCharCode((c >> 6) | 192);
//////                utftext += String.fromCharCode((c & 63) | 128);
//////            }
//////            else {
//////                utftext += String.fromCharCode((c >> 12) | 224);
//////                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
//////                utftext += String.fromCharCode((c & 63) | 128);
//////            }

//////        }

//////        return utftext;
//////    },

//////    // private method for UTF-8 decoding
//////    _utf8_decode : function (utftext) {
//////        var string = "";
//////        var i = 0;
//////        var c = c1 = c2 = 0;

//////        while ( i < utftext.length ) {

//////            c = utftext.charCodeAt(i);

//////            if (c < 128) {
//////                string += String.fromCharCode(c);
//////                i++;
//////            }
//////            else if((c > 191) && (c < 224)) {
//////                c2 = utftext.charCodeAt(i+1);
//////                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
//////                i += 2;
//////            }
//////            else {
//////                c2 = utftext.charCodeAt(i+1);
//////                c3 = utftext.charCodeAt(i+2);
//////                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
//////                i += 3;
//////            }

//////        }

//////        return string;
//////    }

//////}
//////////////////////////////////////////////////////////////
////////JavaScript实现链表
////////http://ju.outofmemory.cn/entry/169663
////////{
////////var list = new LList();  
////////list.insert("Jay","head");  
////////list.insert("Kvkens","Jay");  
////////list.insert("Node.js","Kvkens");  
////////list.display();  
////////list.remove("Jay");  
////////list.display();  
////////list.insert("NewNode","head");  
////////list.display();
////////}
//////function Node(element){
//////    this.element = element;
//////    this.next = null;
//////}
//////function LList(){
//////    this.head = new Node("head");
//////    this.find = find;
//////    this.insert = insert;
//////    this.remove = remove;
//////    this.findPrevious = findPrevious;
//////    this.display = display;
//////}
//////function find(item) {
//////    var currNode = this.head;
//////    while (currNode.element != item) {
//////        currNode = currNode.next;
//////    }
//////    return currNode;
//////}
//////function insert(newElement, item) {
//////    var newNode = new Node(newElement);
//////    var current = this.find(item);
//////    newNode.next = current.next;
//////    current.next = newNode;
//////}
//////function findPrevious(item) {
//////    var currNode = this.head;
//////    while (!(currNode.next == null) &&
//////        (currNode.next.element != item)) {
//////        currNode = currNode.next;
//////    }
//////    return currNode;
//////}
//////function remove(item) {
//////    var prevNode = this.findPrevious(item);
//////    if (!(prevNode.next == null)) {
//////        prevNode.next = prevNode.next.next;
//////    }
//////}
//////function display() {
//////    var currNode = this.head;
//////    while (!(currNode.next == null)) {
//////        console.log(currNode.next.element);
//////        currNode = currNode.next;
//////    }
//////}
//////////////////////////////////////////////////////////////
////////JS模拟索引器。。。
////////http: //blog.csdn.net/muxrwc/article/details/1843775
//////Object.extend = function (a, b) {
//////    //追加方法
//////    for (var i in b) a[i] = b[i];
//////    return a;
//////};

//////var SuperArray = function () {
//////    //类-模拟索引器
//////    var wc = this;
//////    wc.array = [];
//////    return Object.extend(wc.array, wc);
//////};

//////SuperArray.prototype = {

//////    add: function (val) {
//////        //扩展方法
//////        var wc = this;
//////        wc.array.push(val);
//////    }

//////};

//////var wc = new SuperArray;
//////wc.add(0);
//////wc[0] = 999;
//////wc[1] = 888;
//////wc[2] = 777;
//////wc[3] = 666;
//////wc[wc.length] = 2;
//////alert([
//////    "length = ", wc.length
//////    , "\nwc[0] = ", wc[0]
//////    , "\nwc[1] = ", wc[1]
//////    , "\nwc[2] = ", wc[2]
//////    , "\nwc[3] = ", wc[3]
//////    , "\nwc[4] = ", wc[4]
//////    , "\nwc[5] = ", wc[5]
//////].join(""));
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/*
$.append: <a>aaa<b>111</b></a>
$.prepend: <a><b>111</b>aaa</a>
$.after: <a>aaa</a><b>111</b>
$.before: <b>111</b><a>aaa</a>
*/
//////////////////////////////////////////////////////////////
//////http://www.daimajiayuan.com/sitejs-17210-1.html
////////javascript 获取当前 URL 参数的两种方法：
////////返回的是字符串形式的参数，例如：class_id=3&id=2& 
//////function getUrlArgStr(){ 
//////    var q=location.search.substr(1); 
//////    var qs=q.split('&'); 
//////    var argStr=''; 
//////    if(qs){ 
//////        for(var i=0;i<qs.length;i++){ 
//////            argStr+=qs[i].substring(0,qs[i].indexOf('='))+'='+qs[i].substring(qs[i].indexOf('=')+1)+'&'; 
//////        } 
//////    } 
//////    return argStr; 
//////} 
////////返回的是对象形式的参数 
//////function getUrlArgObject(){ 
//////    var args=new Object(); 
//////    var query=location.search.substring(1);//获取查询串 
//////    var pairs=query.split(",");//在逗号处断开 
//////    for(var i=0;i<pairs.length;i++){ 
//////        var pos=pairs[i].indexOf('=');//查找name=value 
//////        if(pos==-1){//如果没有找到就跳过 
//////            continue; 
//////        } 
//////        var argname=pairs[i].substring(0,pos);//提取name 
//////        var value=pairs[i].substring(pos+1);//提取value 
//////        args[argname]=unescape(value);//存为属性 
//////    } 
//////    return args;//返回对象 
//////} 
//////另外列出一些 javascript 获取url中各个部分的功能方法：
//////window.location.host; //返回url 的主机部分，例如：www.xxx.com 
//////window.location.hostname; //返回www.xxx.com 
//////window.location.href; //返回整个url字符串(在浏览器中就是完整的地址栏)，例如：www.xxx.com/index.php?class_id=3&id=2 
//////window.location.pathname; //返回/a/index.php或者/index.php 
//////window.location.protocol; //返回url 的协议部分，例如： http:，ftp:，maito:等等。 
//////window.location.port //url 的端口部分，如果采用默认的80端口，那么返回值并不是默认的80而是空字符 
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
