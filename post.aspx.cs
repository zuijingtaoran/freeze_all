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
using System.Threading;
using System.Net;
public partial class post : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
   //type: 'edt0804',
   //                 v1: lotno,
   //                 v2: ind,
   //                 v3: def,
   //                 len: $('.fd_tab tr').length
        string type = Request.Form["type"].ToString();
        if (type == "edt0804") {
            string v1 = Request.Form["v1"].ToString();
            string v2 = Request.Form["v2"].ToString();
            string v3 = Request.Form["v3"].ToString();
            string len = Request.Form["len"].ToString();
            string v_in = "<v_in><para name=\"v_proc_name\">GET_ACTION_TRACKING_LOT_INFO</para>";
            v_in += "                        <para name=\"v_lotno\">"+v1+"</para>";
            v_in += "                        <para name=\"v_defect_code\">"+v3+"</para>";
            v_in += "                        <para name=\"v_reject_qty\">"+v2+"</para>";
            v_in += "              </v_in>";
            v_in += ""; string v_out = "";
            DataSet dss = new DataProvier().ExecProce<DataSet>("PKG_lvm_yield_tracking.select_records", "", DCoolWeb.Data.DbType.Oracle, v_in, v_out, v_out);
            DataTable ds = dss.Tables[1];
            int coc = ds.Columns.Count;string ret="",ret1="";
            if (len == "0") {
                for (int i = 0; i < coc; i++) {
                    ret += "<th>" + ds.Columns[i].ColumnName.Replace("_"," ") + "</th>";
                }
                ret = "<tr>" + ret + "</tr>";
            }
            //////////////
            for (int i = 0; i < coc; i++)
            {
                ret1 += "<td>" + ds.Rows[0][i].ToString()+ "</td>";
            }
            ret1 = "<tr>" + ret1 + "</tr>";
            Response.Write(ret+ret1);
            Response.End();
           
        }
        if (type == "up_tr") {
            string[] arr = Request.Form["val"].ToString().Split('|');
            string sid = Request.Form["sid"].ToString();
            string ll = "update lvm_Action_tracking set status='" + arr[0] + "', due_date='" + arr[1] + "', owner='" + arr[2] + "', action_requested='" + arr[3] + "', action_update='" + arr[4] + "' where sys_id='" + sid + "'";
            new DataProvier().RunSql(ll, "", DCoolWeb.Data.DbType.Oracle);
            new DataProvier().ExecProce<DataSet>("pkg_lvm_yield_tracking.save_lvm_Action_tracking", "", DCoolWeb.Data.DbType.Oracle, sid);
            Response.Write(sid); Response.End();

         //   PROCEDURE pkg_lvm_yield_tracking.save_lvm_Action_tracking(sys_id varchar2)
        }
        if (type == "del_fl")
        {
         
            string sid = Request.Form["fn"].ToString();
            string dele = "delete from lvm_Action_tracking_FILE where file_path='" +sid + "'";
            //   Response.Write(dele);
            new DataProvier().RunSql(dele, "", DCoolWeb.Data.DbType.Oracle); Response.Write(sid); Response.End();

            //   PROCEDURE pkg_lvm_yield_tracking.save_lvm_Action_tracking(sys_id varchar2)
        }
        if (type == "at_sear") {
            string[] arr = Request.Form["val"].ToString().Split('|');

            string v_in = "<v_in><para name=\"v_proc_name\">GET_ACTION_TRACKING_ALL</para>";
            v_in += "                        <para name=\"v_lotno\">"+arr[0]+"</para>";
            v_in += "                        <para name=\"v_owner\">" + arr[1] + "</para>";
            v_in += "                        <para name=\"v_status\">" + arr[2] + "</para>";
            v_in += "                        <para name=\"v_packagetype\">" + arr[3] + "</para>";
            v_in += "                        <para name=\"v_begin_date\">" + arr[4] + "</para>";
            v_in += "                        <para name=\"v_end_date\">" + arr[5] + "</para>";
            v_in += "                        <para name=\"v_pn\">" + arr[6] + "</para>";
            v_in += "                        <para name=\"v_bd\">" + arr[7] + "</para>";
            v_in += "              </v_in>";
            v_in += "";
            string v_out = "";
            DataSet dss = new DataProvier().ExecProce<DataSet>("PKG_lvm_yield_tracking.select_records", "", DCoolWeb.Data.DbType.Oracle, v_in, v_out, v_out);
            DataTable ds = dss.Tables[1];
            int roc = ds.DataCount(); //if (roc > 10) { roc = 10; }
            int coc = ds.Columns.Count;// if (coc > 20) { coc = 20; }
            string tab = "<table class='fd_tab'><tr>";
            for (int i = 0; i < coc; i++)
            {
                tab += "<th >" + ds.Columns[i].ColumnName.ToString().Replace("_"," ") + "</th>";
            } tab += "</tr>"; string ite = "";
            for (int i = 0; i < roc; i++)
            {
                tab += "<tr>";
                for (int a = 0; a < coc; a++)
                {
                    ite = ds.Rows[i][a].ToString();

                    tab += "<td>" + ite + "</td>";
                }
                tab += "</tr>";


            } tab += "</table>";
            Response.Write(tab);
            Response.End();
        }
    }
}