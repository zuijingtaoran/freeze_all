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
using DCoolWeb.Report.xls;
public partial class export_excel : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        string type = Request.QueryString["type"].ToString();

        string v_in = ""; string v_out = ""; string pkg_name = "PKG_lvm_yield_tracking.select_records";

        if (type == "get_main_table")
        {
            #region
          
            string[] val = Request.QueryString["value_1"].ToString().Split('|');
         v_in = "<v_in><para name=\"v_proc_name\">GET_ASSY_YIELD</para>";
            v_in += "                  <para name=\"v_from_date\">" + val[2].Replace("-", "").Replace("/", "") + "</para>";
            v_in += "                  <para name=\"v_to_date\">" + val[3].Replace("-", "").Replace("/", "") + "</para>";
            v_in += "                  <para name=\"v_pn\">" + val[0] + "</para>";//54-81-01850-4LAA
            v_in += "                  <para name=\"v_bd\">" + val[1] + "</para>";
            v_in += "                  <para name=\"v_lotno\"></para>";
            v_in += "                  <para name=\"v_lot_type\">" + val[4] + "</para>  ";
            v_in += "                  <para name=\"v_status\">" + val[5] + "</para>  ";
            v_in += "              </v_in>";
            v_in += ""; 
          

            #endregion
        }
        if (type == "get_rej_info")
        {
            #region
            string[] val = Request.QueryString["value_1"].ToString().Split('|');
          v_in = "<v_in><para name=\"v_proc_name\">GET_ASSY_YIELD_REJECT_QTY</para>";
            v_in += "                  <para name=\"v_from_date\">" + val[2].Replace("-", "").Replace("/", "") + "</para>";
            v_in += "                  <para name=\"v_to_date\">" + val[3].Replace("-", "").Replace("/", "") + "</para>";
            v_in += "                  <para name=\"v_pn\">" + val[0] + "</para>";//54-81-01850-4LAA
            v_in += "                  <para name=\"v_bd\">" + val[1] + "</para>";
            v_in += "                  <para name=\"v_lotno\">" + Request.QueryString["value_2"].ToString() + "</para>";
            v_in += "                  <para name=\"v_lot_type\">" + val[4] + "</para>  ";
            v_in += "              </v_in>";
            v_in += ""; 
         
            #endregion

        }//select * from lvm_assy_field_reject_chart
     

        if (type == "get_dd_table")
        {
            #region
            string[] val = Request.QueryString["value_1"].ToString().Split('|');
      v_in = "<v_in><para name=\"v_proc_name\">GET_DETAIL_DATA</para>";
            v_in += "                        <para name=\"v_from_date\">" + val[4].Replace("-", "") + "</para>";
            v_in += "                        <para name=\"v_to_date\">" + val[5].Replace("-", "") + "</para>";
            v_in += "                        <para name=\"v_pn\">" + val[0] + "</para>";
            v_in += "                        <para name=\"v_bd\">" + val[2] + "</para>";
            v_in += "                        <para name=\"v_lotno\">" + val[1] + "</para>";
            v_in += "                        <para name=\"v_test\">" + val[3] + "</para>";
            v_in += "              </v_in>";
         

            #endregion
        }
        if (type == "get_dc_table")
        {
            #region
            string[] val = Request.QueryString["value_1"].ToString().Split('|');
            v_in = "<v_in><para name=\"v_proc_name\">GET_DATA_COLLECTION</para>";
            v_in += "                        <para name=\"v_from_date\">" + val[4].Replace("-", "") + "</para>";
            v_in += "                        <para name=\"v_to_date\">" + val[5].Replace("-", "") + "</para>";
            v_in += "                        <para name=\"v_pn\">" + val[0] + "</para>";
            v_in += "                        <para name=\"v_bd\">" + val[2] + "</para>";
            v_in += "                        <para name=\"v_lotno\">" + val[1] + "</para>";
            v_in += "                        <para name=\"v_test\">" + val[3] + "</para>";
            v_in += "              </v_in>";
         

            #endregion
        } if (type == "get_ct_table")
        {
            #region
          
            string[] val = Request.QueryString["value_1"].ToString().Split('|');
          v_in = "<v_in><para name=\"v_proc_name\">GET_CYCLE_TIME</para>";
            v_in += "                        <para name=\"v_from_date\">" + val[3].Replace("-", "") + "</para>";
            v_in += "                        <para name=\"v_to_date\">" + val[4].Replace("-", "") + "</para>";
            v_in += "                        <para name=\"v_pn\">" + val[0] + "</para>";
            v_in += "                        <para name=\"v_bd\">" + val[2] + "</para>";
            v_in += "                        <para name=\"v_lotno\">" + val[1] + "</para>";

            v_in += "              </v_in>"; 
          
            #endregion
        }
        if (type == "get_dp_table")
        {
            #region
            string[] val = Request.QueryString["value_1"].ToString().Split('|');
         v_in = "<v_in><para name=\"v_proc_name\">GET_DP_YIELD</para>";
            v_in += "                  <para name=\"v_from_date\">" + val[4].Replace("-", "") + "</para>";
            v_in += "                  <para name=\"v_to_date\">" + val[5].Replace("-", "") + "</para>";
            v_in += "                  <para name=\"v_pn\">" + val[0] + "</para>";
            v_in += "                  <para name=\"v_assy_lot\">" + val[1] + "</para>";
            v_in += "                  <para name=\"v_assy_assign_step\">" + val[2] + "</para>";
            v_in += "                  <para name=\"v_dp_lot\">" + val[3] + "</para>  ";
            v_in += "              </v_in>";

           
          
            #endregion
        }
        if (type == "get_mt_table")
        {
            #region
            string[] val = Request.QueryString["value_1"].ToString().Split('|');
        v_in = "<v_in><para name=\"v_proc_name\">GET_MT_YIELD</para>";
            v_in += "                  <para name=\"v_from_date\">" + val[1].Replace("-", "") + "</para>";
            v_in += "                  <para name=\"v_to_date\">" + val[2].Replace("-", "") + "</para>";
            v_in += "                  <para name=\"v_pn\">" + val[0] + "</para>  ";
            v_in += "              </v_in>";

    
          
            #endregion
        }
        v_in = v_in.Replace("</v_in>", "<para name=\"v_export_excel\">1</para></v_in>");
    DataSet ds = new DataProvier().ExecProce<DataSet>(pkg_name, "", DCoolWeb.Data.DbType.Oracle, v_in, v_out, v_out);
 ExcelHelper<export_excel>.ExportByWeb(ds.Tables[1], "Report",  type + ".xls");

    }
}