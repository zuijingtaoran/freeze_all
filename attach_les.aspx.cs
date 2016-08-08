using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using DCoolWeb.Data;
using System.Data;
using System.IO;
using System.Text;
using DCoolWeb;
public partial class attach_les : System.Web.UI.Page
{
    public string serverPath = "",type="",xm;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            Label1.Text = "test";
        try
        {
            Label1.Text =  Request.QueryString["id"].ToString();
            H1.Text = H2.Text = H3.Text = "";
           
           
       
            
            
           
        }
        catch { }
       
       
        }

    }
   
    protected void Button5_Click(object sender, EventArgs e)
    {

     
        try
        {

            if (FileUpload2.PostedFile.FileName == null)
            {
                Label3.Text = "Please select  attachment to upload！"; return;
            }
           if (FileUpload2.PostedFile.ContentLength > 1024 * 1024 * 50)//<10M
            {
                Label3.Text = "This  attachment should be less than 10M."; return;
            }
            string filePath =FileUpload2.PostedFile.FileName;

            string fileType = (filePath.Substring(filePath.LastIndexOf(".") + 1)).ToLower();
        
            jianshi js = new jianshi();
           paths j = new paths();

            string mes = js.filetype(fileType);
            if (mes != "ok") { Label3.Text = "Only " + mes; ; return; }
            string dd = DateTime.Now.Year.ToString() + "-" + DateTime.Now.Month.ToString() + "-" + DateTime.Now.Day.ToString() + "-" + DateTime.Now.Hour.ToString() + "-" + DateTime.Now.Minute.ToString() + "-" + DateTime.Now.Second.ToString();
            string fileName = filePath.Substring(filePath.LastIndexOf("\\") + 1);

            serverPath = j.path + j.path2+Label1.Text+"/" + dd + "_" + fileName; //Server.MapPath("attachment/excel/") + dd + "_" + fileName; //"//cvpmdsip02/eimis/" +dd + "_" + fileName;//Server.MapPath("upload/")
            string pp1 = j.path + j.path2 + Label1.Text ;
            if (shangchuan(serverPath, fileName, Label1.Text+"/"+ dd))
            {
              

                if (!System.IO.Directory.Exists(pp1))//判断文件夹是否已经存在
                {
                    System.IO.Directory.CreateDirectory(pp1);//创建文件夹
                }
                FileUpload2.PostedFile.SaveAs(serverPath);
            }
            else
            {
                Label3.Text = "Maximum 3 attachments allowed."; return;
                //An example can upload three attachments
            }
        }
        catch (Exception ex) { DCoolWeb.LogNet.Log.Instance().Catch(ex, ex.Message); }
    }
    public bool shangchuan(string path, string name, string date)
    {




      
        string rem = "";
        bool b = true;
        if (L1.Text == "")
        {
            H1.NavigateUrl = serverPath;
            H1.Text =name;
            H1.ToolTip = date;
            L1.Text = "Delete";
            rem = "insert into  lvm_Action_tracking_FILE(tracking_sysid,file_path,sort_id,input_user)values('" + Label1.Text + "','" + H1.ToolTip + "_" + H1.Text + "','1','" + xm + "')";
            new DataProvier().RunSql(rem, "", DCoolWeb.Data.DbType.Oracle);
            return b;
        }
        if (L2.Text == "")
        {
            H2.NavigateUrl = serverPath;
            H2.Text = name; ; H2.ToolTip = date;
            L2.Text = "Delete";
            rem = "insert into  lvm_Action_tracking_FILE(tracking_sysid,file_path,sort_id,input_user)values('" + Label1.Text + "','" + H1.ToolTip + "_" + H1.Text + "','2','" + xm + "')";
            new DataProvier().RunSql(rem, "", DCoolWeb.Data.DbType.Oracle);
            return b;
        }
        if (L3.Text == "")
        {
            H3.NavigateUrl = serverPath;
            H3.Text = name; ; H3.ToolTip = date; L3.Text = "Delete";
            rem = "insert into  lvm_Action_tracking_FILE(tracking_sysid,file_path,sort_id,input_user)values('" + Label1.Text + "','" + H1.ToolTip + "_" + H1.Text + "','3','" + xm + "')";
            new DataProvier().RunSql(rem, "", DCoolWeb.Data.DbType.Oracle);
            return b;
        }
        else { return false; }



    }
    protected void L1_Click(object sender, EventArgs e)
    {
        string dele = "";
        dele = "delete from lvm_Action_tracking_FILE where tracking_sysid='" + Label1.Text + "'and sort_id='1'";
        //  Response.Write(dele);
        new DataProvier().RunSql(dele, "", DCoolWeb.Data.DbType.Oracle);
        del(H1.NavigateUrl.ToString());
        H1.NavigateUrl = L1.Text = ""; H1.Text = ""; 

    }
    protected void L2_Click(object sender, EventArgs e)
    {
        string dele = "";
        dele = "delete from lvm_Action_tracking_FILE where tracking_sysid='" + Label1.Text + "'and  sort_id='2'";
        //   Response.Write(dele);
        new DataProvier().RunSql(dele, "", DCoolWeb.Data.DbType.Oracle);
       del(H2.NavigateUrl.ToString());
        H2.NavigateUrl = L2.Text = ""; H2.Text = ""; 
    }
    protected void L3_Click(object sender, EventArgs e)
    {
        string dele = "";
        dele = "delete from lvm_Action_tracking_FILE where tracking_sysid='" + Label1.Text + "'and  sort_id='3'";
        // Response.Write(dele);
        new DataProvier().RunSql(dele, "", DCoolWeb.Data.DbType.Oracle);
       del(H3.NavigateUrl.ToString());
        H3.NavigateUrl = L3.Text = ""; H3.Text = ""; 
    }
    public bool del(string path)
    {
        if (File.Exists(path))
        {
            FileInfo fi = new FileInfo(path);
            if (fi.Attributes.ToString().IndexOf("ReadOnly") != -1)
                fi.Attributes = FileAttributes.Normal;
            File.Delete(path);

        }
        return true;
    }
}