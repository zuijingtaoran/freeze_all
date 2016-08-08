using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class detailData : System.Web.UI.Page
{
    public string para = "",from,to;
    protected void Page_Load(object sender, EventArgs e)
    {
     try {
            para = Request.QueryString["lot"].ToString() + "|" + Request.QueryString["test"].ToString();
            from = Request.QueryString["from"].ToString();
            to = Request.QueryString["to"].ToString();
            from = from.Substring(0, 4) + "-" + from.Substring(4, 2) + "-" + from.Substring(6, 2);
            to =to.Substring(0, 4) + "-" +to.Substring(4, 2) + "-" + to.Substring(6, 2);

      }        catch {            para = "";        }
    }
}