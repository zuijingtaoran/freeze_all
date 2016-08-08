using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
///jianshi 的摘要说明
/// </summary>
public class jianshi
{
	public jianshi()
	{
		//
		//TODO: 在此处添加构造函数逻辑
		//
	}
    public string path = "//cvpmdsip02/cost/attachment/";
    public string sty = "xls,doc,ppt,pdf,txt,rar,zip,jpg,png,bmp,msg";
    public string filetype(string type){
        string b = "ok";
        type = type.ToLower();
        if (type.Contains("xls") || type.Contains("ppt") || type.Contains("doc") || type == "pdf" || type == "txt" || type == "rar" || type == "zip" || type == "jpg" || type == "png" || type == "bmp" || type == "msg")

        {

        }
        else { b = sty; }

        return b;
}
}