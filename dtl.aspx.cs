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
public partial class dtl : System.Web.UI.Page
{
   public string tab = "";
    protected void Page_Load(object sender, EventArgs e)
    {
        string pn = Request.QueryString["pn"].ToString();

     
        string v_in = "<v_in><para name=\"v_proc_name\">GET_QDN_DETAIL</para>";
        v_in += "                  <para name=\"v_lotno\">"+pn+"</para>";
        v_in += "              </v_in>";

        get_some_list gl = new get_some_list(); tab = gl.rtn_slct_recd_tab_nor(v_in, "PKG_lvm_yield_tracking.select_records", "");


    }
}