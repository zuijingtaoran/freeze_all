using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class rej_info : System.Web.UI.Page
{
    public string l1, l2;
    protected void Page_Load(object sender, EventArgs e)
    {
        l1 = Request.QueryString["v1"].ToString();
        l2 = Request.QueryString["v2"].ToString();
    }
}