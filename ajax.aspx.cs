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
public partial class ajax : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

        //<><><><><><><--yongshijiance--><><><>><>><>><><>using System.Threading;
        System.Diagnostics.Stopwatch stopwatch = new System.Diagnostics.Stopwatch();
        stopwatch.Start(); //  开始监视代码运行时间
        //<><><><><><><--yongshijiance--><><><>><>><>><><>
        string type = Request.QueryString["type"].ToString();
        if (type == "get_main_table")
        {
            #region
        
            string[] val = Request.QueryString["value_1"].ToString().Split('|');
            string v_in = "<v_in><para name=\"v_proc_name\">GET_ASSY_YIELD</para>";
            v_in += "                  <para name=\"v_from_date\">" + val[2].Replace("-","").Replace("/","") + "</para>";
            v_in += "                  <para name=\"v_to_date\">" + val[3].Replace("-", "").Replace("/", "") + "</para>";
            v_in += "                  <para name=\"v_pn\">" + val[0] + "</para>";//54-81-01850-4LAA
        v_in += "                  <para name=\"v_bd\">" + val[1] + "</para>";
        v_in += "                  <para name=\"v_lotno\"></para>";
        v_in += "                  <para name=\"v_lot_type\">" + val[4] + "</para>  ";
        v_in += "                  <para name=\"v_status\">" + val[5] + "</para>  ";
        v_in += "              </v_in>";
        v_in += ""; string v_out = "";
        DataSet dss = new DataProvier().ExecProce<DataSet>("PKG_lvm_yield_tracking.select_records", "", DCoolWeb.Data.DbType.Oracle, v_in, v_out, v_out);
        DataTable ds = dss.Tables[1];
        int roc = ds.DataCount(); 
            int coc = ds.Columns.Count;
            string shuoming = "" ;
if (roc > 100) { roc = 100;
shuoming = "<i class='shuoming'>当前显示前"+roc+"条数据，更多符合条件数据请通过导出Excel的方式获取。</i>";

} 
         //  if (coc > 20) { coc = 20; }

            string tab = shuoming+"<table  class='assy_table'><tr>";
            string thna = "";
        for (int i = 0; i < coc; i++)
        {
            thna = ds.Columns[i].ColumnName; if (thna == "Defect") { thna = " Defect"; }
            tab += "<th >" +thna + "</th>";
        } tab += "</tr>"; string ite = "";
        for (int i = 0; i < roc; i++)
        {
            tab += "<tr>";
            for (int a = 0; a < coc; a++)
            {
                ite = ds.Rows[i][a].ToString();
                
                tab += "<td onclick='tc(this)'>" + ite + "</td>";
            }
            tab += "</tr>";


        } 
            tab += "</table>";
           
          Response.Write(tab + "#");//"----"+sj+" s<br/>"+

            #endregion
        }
        if (type == "get_rej_info") {
            #region
            string[] val = Request.QueryString["value_1"].ToString().Split('|');
            string v_in = "<v_in><para name=\"v_proc_name\">GET_ASSY_YIELD_REJECT_QTY</para>";
            v_in += " <para name=\"v_from_date\">" + val[2].Replace("-", "").Replace("/", "") + "</para>";
            v_in += "                  <para name=\"v_to_date\">" + val[3].Replace("-", "").Replace("/", "") + "</para>";
            v_in += "                  <para name=\"v_pn\">" + val[0] + "</para>";//54-81-01850-4LAA
            v_in += "                  <para name=\"v_bd\">" + val[1] + "</para>";
            v_in += "                  <para name=\"v_lotno\">"+Request.QueryString["value_2"].ToString()+"</para>";
            v_in += "                  <para name=\"v_lot_type\">" + val[4] + "</para>  ";
            v_in += "              </v_in>";
       
            
            
            string v_out = "";
            DataSet dss = new DataProvier().ExecProce<DataSet>("PKG_lvm_yield_tracking.select_records", "", DCoolWeb.Data.DbType.Oracle, v_in, v_out, v_out);
            DataTable ds = dss.Tables[1];
            int roc = ds.DataCount(); //if (roc > 10) { roc = 10; }
            int coc = ds.Columns.Count; //if (coc > 20) { coc = 20; }
            string tab = "<table ><tr>";
            for (int i = 0; i < coc; i++)
            {
                tab += "<th >" + ds.Columns[i].ColumnName + "</th>";
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


            } tab += "</table><div id='chart_rej' class='rej_ch_div'></div><div id='chart_dc' class='rej_ch_div'></div>";//chart_rej

            Response.Write(tab + "#");
            #endregion

        }//select * from lvm_assy_field_reject_chart
        if (type == "get_rej_chart")
        {

            #region
            DataTable ds;
            //string ll = "select * from lvm_assy_field_reject_chart";
            //DataProvier ora = new DataProvier();
            //ds = ora.GetDataTable(ll);
            string[] val = Request.QueryString["value_1"].ToString().Split('|');

            string v_in = "<v_in><para name=\"v_proc_name\">GET_ASSY_REJECT_CHART</para>";
        v_in += "                  <para name=\"v_from_date\">" + val[2].Replace("-", "").Replace("/", "") + "</para>";
        v_in += "                  <para name=\"v_to_date\">" + val[3].Replace("-", "").Replace("/", "") + "</para>";
        v_in += "                  <para name=\"v_pn\">" + val[0] + "</para>";//54-81-01850-4LAA
        v_in += "                  <para name=\"v_bd\">" + val[1] + "</para>";
        v_in += "                  <para name=\"v_lotno\"></para>";
        v_in += "                  <para name=\"v_lot_type\">" + val[4] + "</para>  ";
        v_in += "              </v_in>";
            string v_out="";
        DataSet dss = new DataProvier().ExecProce<DataSet>("PKG_lvm_yield_tracking.select_records", "", DCoolWeb.Data.DbType.Oracle, v_in, v_out, v_out);
       ds = dss.Tables[1];
            int coc = ds.DataCount(); 
            if (coc > 0)
            {
                string y_type = ds.Rows[0]["y_type"].ToString(); string[] sz = y_type.Split(',');
                string retval = "";
                string item = ""; string fh = ",", fhp = "=";
                for (int i = 0; i < coc; i++)
                {
                    if (i == coc - 1) { fh = ""; }
                    retval += ds.Rows[i]["x1"].ToString() + fh;
                }
                retval += "|";
                for (int i = 0; i < sz.Length; i++)
                {
                    fh = ",";
                    if (i == sz.Length - 1) { fhp = ""; }
                    for (int a = 0; a < coc; a++)
                    {
                        if (a == coc - 1) { fh = ""; }
                        item = ds.Rows[a]["y" + (i + 1).ToString()].ToString();
                        if (item == "") { item = "null"; }
                        retval += item + fh;
                    }
                    retval += fhp;
                }
                retval += "[" + y_type.Replace("Bar", "column").Replace("Line", "line");
                string t_tit = ds.Rows[0]["y_title"].ToString();

                retval += "[" + t_tit.Replace(" ", "");
                retval += "[" + ds.Rows[0]["key1_value"].ToString();
                retval += "[" + ds.Rows[0]["key_type"].ToString();
                Response.Write(retval + "#");

            //int coc = ds.DataCount();
            //if (coc > 0)
            //{
            //    string y_type = ds.Rows[0]["y_type"].ToString(); string[] sz = y_type.Split(',');
            //    string retval = "";
            //    string item = ""; string fh = ",", fhp = "=";
            //    for (int i = 0; i < coc; i++)
            //    {
            //        if (i == coc - 1) { fh = ""; }
            //        retval += ds.Rows[i]["x1"].ToString() + fh;
            //    }
            //    retval += "|";
            //    for (int i = 0; i < sz.Length; i++)
            //    {
            //        fh = ",";
            //        if (i == sz.Length - 1) { fhp = ""; }
            //        for (int a = 0; a < coc; a++)
            //        {
            //            if (a == coc - 1) { fh = ""; }
            //            item = ds.Rows[a]["y" + (i + 1).ToString()].ToString();
            //            if (item == "") { item = "null"; }
            //            retval += item + fh;
            //        }
            //        retval += fhp;
            //    }
            //    retval += "[" + y_type.Replace("bar", "column").Replace("Line", "spline");
            //    string t_tit = ds.Rows[0]["y_title"].ToString();
            //    //============manager
            //    //if (t_tit.Contains(")"))
            //    //{
            //    //    string[] tsz = t_tit.Replace(","," ").Split(')'); t_tit = ""; string mz = "";
            //    //    for (int aa = 0; aa < tsz.Length; aa++) {
            //    //     string[]mzsz=tsz[aa].Split('(');
            //    //       // if (mzsz[0].Length<2) { mz = mzsz[1]; } else { 
            //    //            mz = mzsz[0];
            //    //       // }
            //    //     //   if (mz.Length > 11) { mz = mz.Substring(0, 10) + "..."; }
            //    //        if (aa != tsz.Length - 1)
            //    //        {
            //    //            t_tit += mz + ",";
            //    //        }
            //    //        else { t_tit += mz; }

            //    //    }

            //    //}
            //    //============manager
            //    retval += "[" + t_tit.Replace(" ", "");
            //    retval += "[" + ds.Rows[0]["key1_value"].ToString();
            //    retval += "[" + ds.Rows[0]["key_type"].ToString();
            //    Response.Write(retval + "#");

           
            } 
            #endregion
        }
        if (type == "get_rej_table")
        {
            string[] val = Request.QueryString["value_1"].ToString().Split('|');
            string v_in = "<v_in><para name=\"v_proc_name\">GET_ASSY_REJECT_TABLE</para>";
            v_in += "                        <para name=\"v_from_date\">" + val[2].Replace("-", "").Replace("/", "") + "</para>";
            v_in += "                        <para name=\"v_to_date\">" + val[3].Replace("-", "").Replace("/", "") + "</para>";
            v_in += "                        <para name=\"v_pn\">" + val[0] + "</para>";
            v_in += "                        <para name=\"v_bd\">" + val[1] + "</para>";
            v_in += "                        <para name=\"v_lotno\"></para>";
            v_in += "     <para name=\"v_technology\">" + val[6] + "</para><para name=\"v_status\">" + val[5] + "</para>                    <para name=\"v_lot_type\">" + val[4] + "</para>";
            v_in += "              </v_in>";
            v_in += "";

            //string v_in = "<v_in><para name=\"v_proc_name\">GET_ASSY_REJECT_CHART</para>";
            //v_in += "                  <para name=\"v_from_date\">" + val[2].Replace("-", "").Replace("/", "") + "</para>";
            //v_in += "                  <para name=\"v_to_date\">" + val[3].Replace("-", "").Replace("/", "") + "</para>";
            //v_in += "                  <para name=\"v_pn\">" + val[0] + "</para>";//54-81-01850-4LAA
            //v_in += "                  <para name=\"v_bd\">" + val[1] + "</para>";
            //v_in += "                  <para name=\"v_lotno\"></para>";
            //v_in += "                  <para name=\"v_lot_type\">" + val[4] + "</para>  ";
            //v_in += "              </v_in>";PKG_lvm_yield_tracking.select_records
            string v_out = "";
            DataSet dss = new DataProvier().ExecProce<DataSet>("PKG_lvm_yield_tracking.select_records", "", DCoolWeb.Data.DbType.Oracle, v_in, v_out, v_out);
            DataTable ds = dss.Tables[1];
            int roc = ds.DataCount(); //if (roc > 10) { roc = 10; }
            int coc = ds.Columns.Count; //if (coc > 20) { coc = 20; }
            string tab = "<table class='rejtab' ><tr><th colspan='"+coc+"'>Reject information</th></tr><tr>";
            for (int i = 0; i < coc; i++)
            {
                tab += "<th >" + ds.Columns[i].ColumnName + "</th>";
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

            Response.Write(tab + "#");
        }
        if (type == "get_assy_dc_chart")
        {
            #region
            string[] val = Request.QueryString["value_1"].ToString().Split('|');
  string v_in = "<v_in><para name=\"v_proc_name\">GET_ASSY_YIELD_CHART</para>";
  v_in += "                  <para name=\"v_from_date\">" + val[2].Replace("-", "").Replace("/", "") + "</para>";
  v_in += "                  <para name=\"v_to_date\">" + val[3].Replace("-", "").Replace("/", "") + "</para>";
  v_in += "                  <para name=\"v_pn\">" + val[0] + "</para>";//54-81-01850-4LAA
  v_in += "                  <para name=\"v_bd\">" + val[1] + "</para>";
  v_in += "                  <para name=\"v_lotno\">" + Request.QueryString["value_2"].ToString() + "</para>";
  v_in += "                  <para name=\"v_lot_type\">" + val[4] + "</para><para name=\"v_chart_type\">assy</para> <para name=\"v_technology\">B2nm</para><para name=\"v_status\">" + val[5] + "</para>  ";
  v_in += "              </v_in>";
  v_in += ""; string v_out = "";
  DataSet dss = new DataProvier().ExecProce<DataSet>("PKG_lvm_yield_tracking.select_records", "", DCoolWeb.Data.DbType.Oracle, v_in, v_out, v_out);
  DataTable ds = dss.Tables[1];
  int coc = ds.DataCount(); //if (coc > 10) { coc = 10; }
 if (coc > 0)
 {
     string y_type = ds.Rows[0]["y_type"].ToString(); string[] sz = y_type.Split(',');
     string retval = "";
     string item = ""; string fh = ",", fhp = "=";
     for (int i = 0; i < coc; i++)
     {
         if (i == coc - 1) { fh = ""; }
         retval += ds.Rows[i]["x1"].ToString() + fh;
     }
     retval += "|";
     for (int i = 0; i < sz.Length; i++)
     {
         fh = ",";
         if (i == sz.Length - 1) { fhp = ""; }
         for (int a = 0; a < coc; a++)
         {
             if (a == coc - 1) { fh = ""; }
             item = ds.Rows[a]["y" + (i + 1).ToString()].ToString();
             if (item == "") { item = "null"; }
             retval += item + fh;
         }
         retval += fhp;
     }
     retval += "[" + y_type.Replace("Bar", "column").Replace("Line", "line");
     string t_tit = ds.Rows[0]["y_title"].ToString();

     retval += "[" + t_tit.Replace(" ", "");
     retval += "[" + ds.Rows[0]["key1_value"].ToString();
     retval += "[" + ds.Rows[0]["key_type"].ToString();
     Response.Write(retval + "#");

 }
            #endregion


        }
        if (type == "get_assy_dc_chart_1")
        {
            #region
            string[] val = Request.QueryString["value_1"].ToString().Split('|');
            string v_in = "<v_in><para name=\"v_proc_name\">GET_ASSY_YIELD_CHART</para>";
            v_in += "                  <para name=\"v_from_date\">" + val[2].Replace("-", "").Replace("/", "") + "</para>";
            v_in += "                  <para name=\"v_to_date\">" + val[3].Replace("-", "").Replace("/", "") + "</para>";
            v_in += "                  <para name=\"v_pn\">" + val[0] + "</para>";//54-81-01850-4LAA
            v_in += "                  <para name=\"v_bd\">" + val[1] + "</para>";
            v_in += "                  <para name=\"v_lotno\">" + Request.QueryString["value_2"].ToString() + "</para>";
            v_in += "                  <para name=\"v_lot_type\">" + val[4] + "</para><para name=\"v_chart_type\">dc</para> <para name=\"v_technology\">" + val[6] + "</para><para name=\"v_status\">" + val[5] + "</para>  ";
            v_in += "              </v_in>";
            v_in += ""; string v_out = "";
            DataSet dss = new DataProvier().ExecProce<DataSet>("PKG_lvm_yield_tracking.select_records", "", DCoolWeb.Data.DbType.Oracle, v_in, v_out, v_out);
            DataTable ds = dss.Tables[1];
            int coc = ds.DataCount(); //if (coc > 10) { coc = 10; }
            if (coc > 0)
            {
                string y_type = ds.Rows[0]["y_type"].ToString(); string[] sz = y_type.Split(',');
                string retval = "";
                string item = ""; string fh = ",", fhp = "=";
                for (int i = 0; i < coc; i++)
                {
                    if (i == coc - 1) { fh = ""; }
                    retval += ds.Rows[i]["x1"].ToString() + fh;
                }
                retval += "|";
                for (int i = 0; i < sz.Length; i++)
                {
                    fh = ",";
                    if (i == sz.Length - 1) { fhp = ""; }
                    for (int a = 0; a < coc; a++)
                    {
                        if (a == coc - 1) { fh = ""; }
                        item = ds.Rows[a]["y" + (i + 1).ToString()].ToString();
                        if (item == "") { item = "null"; }
                        retval += item + fh;
                    }
                    retval += fhp;
                }
                retval += "[" + y_type.Replace("Bar", "column").Replace("Line", "line");
                string t_tit = ds.Rows[0]["y_title"].ToString();

                retval += "[" + t_tit.Replace(" ", "");
                retval += "[" + ds.Rows[0]["key1_value"].ToString();
                retval += "[" + ds.Rows[0]["key_type"].ToString();
                Response.Write(retval + "#");

            }
            #endregion


        }

        if (type == "get_dd_table")
        {
            #region
            string[] val = Request.QueryString["value_1"].ToString().Split('|');
            string v_in = "<v_in><para name=\"v_proc_name\">GET_DETAIL_DATA</para>";
            v_in += "                        <para name=\"v_from_date\">"+val[4].Replace("-","")+"</para>";
            v_in += "                        <para name=\"v_to_date\">"+val[5].Replace("-","")+"</para>";
            v_in += "                        <para name=\"v_pn\">"+val[0]+"</para>";
            v_in += "                        <para name=\"v_bd\">"+val[2]+"</para>";
            v_in += "                        <para name=\"v_lotno\">"+val[1]+"</para>";
            v_in += "                        <para name=\"v_test\">"+val[3]+"</para>";
            v_in += "              </v_in>"; string v_out = "";
            DataSet dss = new DataProvier().ExecProce<DataSet>("PKG_lvm_yield_tracking.select_records", "", DCoolWeb.Data.DbType.Oracle, v_in, v_out, v_out);
            DataTable ds = dss.Tables[1]; string shuoming = "";
            int roc = ds.DataCount(); if (roc > 500) { roc = 500;
            shuoming = "<i class='shuoming'>当前显示前"+roc+"条数据，更多符合条件数据请通过导出Excel的方式获取。</i>";
            }
            //if (val[6] == "0") {
            //    if (roc > 100) { roc = 100; }
            //}
            int coc = ds.Columns.Count;// if (coc > 20) { coc = 20; }
            string tab = shuoming+"<table class='main_table'><tr>";
            for (int i = 0; i < coc; i++)
            {
                tab += "<th >" + ds.Columns[i].ColumnName + "</th>";
            } tab += "</tr>"; string ite = "";
            for (int i = 0; i < roc; i++)
            {
                tab += "<tr>";
                for (int a = 0; a < coc; a++)
                {
                    ite = ds.Rows[i][a].ToString();

                    tab += "<td onclick='tc(this)'>" + ite + "</td>";
                }
                tab += "</tr>";


            } tab += "</table>";
            Response.Write(tab + "#");

            #endregion
        }
        if (type == "get_dc_table")
        {
            #region
            string[] val = Request.QueryString["value_1"].ToString().Split('|');
            string v_in = "<v_in><para name=\"v_proc_name\">GET_DATA_COLLECTION</para>";
            v_in += "                        <para name=\"v_from_date\">" + val[4].Replace("-", "") + "</para>";
            v_in += "                        <para name=\"v_to_date\">" + val[5].Replace("-", "") + "</para>";
            v_in += "                        <para name=\"v_pn\">" + val[0] + "</para>";
            v_in += "                        <para name=\"v_bd\">" + val[2] + "</para>";
            v_in += "                        <para name=\"v_lotno\">" + val[1] + "</para>";
            v_in += "                        <para name=\"v_test\">" + val[3] + "</para>";
            v_in += "              </v_in>"; string v_out = "";
            DataSet dss = new DataProvier().ExecProce<DataSet>("PKG_lvm_yield_tracking.select_records", "", DCoolWeb.Data.DbType.Oracle, v_in, v_out, v_out);
            DataTable ds = dss.Tables[1];
            int roc = ds.DataCount();// if (roc > 10) { roc = 10; }
            int coc = ds.Columns.Count; //if (coc > 20) { coc = 20; }
            string tab = "<table class='main_table'><tr>";
            for (int i = 0; i < coc; i++)
            {
                tab += "<th >" + ds.Columns[i].ColumnName + "</th>";
            } tab += "</tr>"; string ite = "";
            for (int i = 0; i < roc; i++)
            {
                tab += "<tr>";
                for (int a = 0; a < coc; a++)
                {
                    ite = ds.Rows[i][a].ToString();

                    tab += "<td onclick='tc(this)'>" + ite + "</td>";
                }
                tab += "</tr>";


            } tab += "</table>";
            Response.Write(tab + "#");

            #endregion
        } if (type == "get_ct_table")
        {
            #region
            ////<><><><><><><--yongshijiance--><><><>><>><>><><>using System.Threading;
            //System.Diagnostics.Stopwatch stopwatch = new System.Diagnostics.Stopwatch();
            //stopwatch.Start(); //  开始监视代码运行时间
            ////<><><><><><><--yongshijiance--><><><>><>><>><><>
            string[] val = Request.QueryString["value_1"].ToString().Split('|');
            string v_in = "<v_in><para name=\"v_proc_name\">GET_CYCLE_TIME</para>";
            v_in += "                        <para name=\"v_from_date\">" + val[3].Replace("-", "") + "</para>";
            v_in += "                        <para name=\"v_to_date\">" + val[4].Replace("-", "") + "</para>";
            v_in += "                        <para name=\"v_pn\">" + val[0] + "</para>";
            v_in += "                        <para name=\"v_bd\">" + val[2] + "</para>";
            v_in += "                        <para name=\"v_lotno\">" + val[1] + "</para>";
                        
            v_in += "              </v_in>"; string v_out = "";
            DataSet dss = new DataProvier().ExecProce<DataSet>("PKG_lvm_yield_tracking.select_records", "", DCoolWeb.Data.DbType.Oracle, v_in, v_out, v_out);
            DataTable ds = dss.Tables[1];
            int roc = ds.DataCount(); 
            int coc = ds.Columns.Count; 
            //展示更多功能
            int zdz = 0; int bfb = 0;
            int dqzdz =17;
            if (roc > dqzdz) {
                zdz = roc;

                roc = dqzdz;
                bfb =  zdz;
            }
            string addtr = "<div align=center class='fenye'><button onclick='fymore(" + roc + ")' class='more_fy'>More</button><button onclick='fyall(" + roc + ")' class='all_fy yc'>All</button><i class='count_fy'>Count:<b>" + roc + "</b></i><i class='bfb_fy'>/" + bfb + "</i></div>";
            string tab = "<table class='main_table'><tr>";
            for (int i = 0; i < coc; i++)
            {
                tab += "<th >" + ds.Columns[i].ColumnName + "</th>";
            } tab += "</tr>"; string ite = "";
            for (int i = 0; i < roc; i++)
            {
                tab += "<tr>";
                for (int a = 0; a < coc; a++)
                {
                    ite = ds.Rows[i][a].ToString();

                    tab += "<td onclick='tc(this)'>" + ite + "</td>";
                }
                tab += "</tr>";


            } tab =tab+ addtr+"</table>";
            ////<><><><><><><--yongshijiance--><><><>><>><>><><>
            //stopwatch.Stop(); //  停止监视
            //TimeSpan timespan = stopwatch.Elapsed; //  获取当前实例测量得出的总时间

            //double milliseconds = timespan.TotalSeconds;  //  总毫秒数

            //string sj = milliseconds.ToString("f3");
            ////<><><><><><><--yongshijiance--><><><>><>><>><><><i class='sjts'>  " + sj + "s</i>
            Response.Write("" + tab + "#");

            #endregion
        }
        if (type == "get_ct_table_more")
        {
            #region
            
            string[] val = Request.QueryString["value_1"].ToString().Split('|');
            string v_in = "<v_in><para name=\"v_proc_name\">GET_CYCLE_TIME</para>";
            v_in += "                        <para name=\"v_from_date\">" + val[3].Replace("-", "") + "</para>";
            v_in += "                        <para name=\"v_to_date\">" + val[4].Replace("-", "") + "</para>";
            v_in += "                        <para name=\"v_pn\">" + val[0] + "</para>";
            v_in += "                        <para name=\"v_bd\">" + val[2] + "</para>";
            v_in += "                        <para name=\"v_lotno\">" + val[1] + "</para>";

            v_in += "              </v_in>"; string v_out = "";
            int qz = int.Parse(Request.QueryString["value_2"].ToString());

            DataSet dss = new DataProvier().ExecProce<DataSet>("PKG_lvm_yield_tracking.select_records", "", DCoolWeb.Data.DbType.Oracle, v_in, v_out, v_out);
            DataTable ds = dss.Tables[1];
            int roc = ds.DataCount();
            int coc = ds.Columns.Count;
            //展示更多功能
            int zdz = 0; 
            int dqzdz = 17;
            if (roc > dqzdz+qz)
            {
                zdz = roc;

                roc = dqzdz+qz;
               
            }
            string addtr = "<div align=center class='fenye'><button onclick='fymore(" + roc + ")' class='more_fy'>More</button><button onclick='fyall(" + roc + ")' class='all_fy'>All</button><i class='count_fy'>Count:<b>" + roc + "</b></i><i class='bfb_fy'>/" + zdz + "</i></div>";
            string tab = "";
           string ite = "";
            for (int i = qz; i < roc; i++)
            {
                tab += "<tr>";
                for (int a = 0; a < coc; a++)
                {
                    ite = ds.Rows[i][a].ToString();

                    tab += "<td onclick='tc(this)'>" + ite + "</td>";
                }
                tab += "</tr>";


            } tab = tab +"]"+ addtr ;
          
            Response.Write("" + tab + "#");

            #endregion
        }
        if (type == "get_ct_table_all")
        {
            #region

            string[] val = Request.QueryString["value_1"].ToString().Split('|');
            string v_in = "<v_in><para name=\"v_proc_name\">GET_CYCLE_TIME</para>";
            v_in += "                        <para name=\"v_from_date\">" + val[3].Replace("-", "") + "</para>";
            v_in += "                        <para name=\"v_to_date\">" + val[4].Replace("-", "") + "</para>";
            v_in += "                        <para name=\"v_pn\">" + val[0] + "</para>";
            v_in += "                        <para name=\"v_bd\">" + val[2] + "</para>";
            v_in += "                        <para name=\"v_lotno\">" + val[1] + "</para>";

            v_in += "              </v_in>"; string v_out = "";
            int qz = int.Parse(Request.QueryString["value_2"].ToString());

            DataSet dss = new DataProvier().ExecProce<DataSet>("PKG_lvm_yield_tracking.select_records", "", DCoolWeb.Data.DbType.Oracle, v_in, v_out, v_out);
            DataTable ds = dss.Tables[1];
            int roc = ds.DataCount();
            int coc = ds.Columns.Count;

            string addtr = "<div align=center class='fenye'><i>Count:<b>"+roc+"</b>/"+roc+"</i></div>";
            string tab = "";
            string ite = "";
            for (int i = qz; i < roc; i++)
            {
                tab += "<tr>";
                for (int a = 0; a < coc; a++)
                {
                    ite = ds.Rows[i][a].ToString();

                    tab += "<td onclick='tc(this)'>" + ite + "</td>";
                }
                tab += "</tr>";


            } tab = tab + "]" + addtr;

            Response.Write("" + tab + "#");

            #endregion
        }
        if (type == "get_dp_table")
        {
            #region
             string[] val = Request.QueryString["value_1"].ToString().Split('|');
            string v_in = "<v_in><para name=\"v_proc_name\">GET_DP_YIELD</para>";
            v_in += "                  <para name=\"v_from_date\">" + val[4].Replace("-","") + "</para>";
            v_in += "                  <para name=\"v_to_date\">" + val[5].Replace("-", "") + "</para>";
            v_in += "                  <para name=\"v_pn\">"+val[0]+"</para>";
            v_in += "                  <para name=\"v_assy_lot\">" + val[1] + "</para>";
            v_in += "                  <para name=\"v_assy_assign_step\">" + val[2] + "</para>";
            v_in += "                  <para name=\"v_dp_lot\">" + val[3] + "</para>  ";
            v_in += "              </v_in>";

            string v_out = "";
            DataSet dss = new DataProvier().ExecProce<DataSet>("PKG_lvm_yield_tracking.select_records", "", DCoolWeb.Data.DbType.Oracle, v_in, v_out, v_out);
            DataTable ds = dss.Tables[1];
            int roc = ds.DataCount(); //if (roc > 10) { roc = 10; }
            int coc = ds.Columns.Count;// if (coc > 20) { coc = 20; }
            string tab = "<table class='main_table'><tr>";
            for (int i = 0; i < coc; i++)
            {
                tab += "<th >" + ds.Columns[i].ColumnName + "</th>";
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
            Response.Write(tab + "#");
            #endregion
        }
        if (type == "get_mt_table")
        {
            #region
            string[] val = Request.QueryString["value_1"].ToString().Split('|');
            string v_in = "<v_in><para name=\"v_proc_name\">GET_MT_YIELD</para>";
            v_in += "                  <para name=\"v_from_date\">" + val[2].Replace("-", "") + "</para>";
            v_in += "                  <para name=\"v_to_date\">" + val[3].Replace("-", "") + "</para>";
            v_in += "                  <para name=\"v_pn\">"+val[0]+"</para>  ";
            v_in += "                  <para name=\"v_bd\">" + val[1] + "</para>  ";
            v_in += "              </v_in>";

            string v_out = "";
            DataSet dss = new DataProvier().ExecProce<DataSet>("PKG_lvm_yield_tracking.select_records", "", DCoolWeb.Data.DbType.Oracle, v_in, v_out, v_out);
            DataTable ds = dss.Tables[1];
            int roc = ds.DataCount();// if (roc > 10) { roc = 10; }
            int coc = ds.Columns.Count; //if (coc > 20) { coc = 20; }
            string tab = "<table class='main_table'><tr>";
            for (int i = 0; i < coc; i++)
            {
                tab += "<th >" + ds.Columns[i].ColumnName + "</th>";
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
            Response.Write(tab + "#");
            #endregion
        }
        if (type == "get_chart_dp")
        {
            #region
            string[] val = Request.QueryString["value_1"].ToString().Split('|');
            string v_in = "<v_in><para name=\"v_proc_name\">GET_DP_REJECT_CHART</para>";
            v_in += "                  <para name=\"v_from_date\">"+val[4].ToString().Replace("-","")+"</para>";
            v_in += "                  <para name=\"v_to_date\">" + val[5].ToString().Replace("-", "") + "</para>";
            v_in += "                  <para name=\"v_pn\">"+val[0]+"</para>";
            v_in += "                  <para name=\"v_assy_lot\">"+val[1]+"</para>";
            v_in += "                  <para name=\"v_assy_assign_step\">"+val[2]+"</para>";
            v_in += "                  <para name=\"v_dp_lot\">"+val[3]+"</para>  ";
            v_in += "              </v_in>";
            v_in += "";
            string v_out = "";
            DataSet dss = new DataProvier().ExecProce<DataSet>("PKG_lvm_yield_tracking.select_records", "", DCoolWeb.Data.DbType.Oracle, v_in, v_out, v_out);
         DataTable   ds = dss.Tables[1];
            int coc = ds.DataCount();
            if (coc > 0)
            {
                string y_type = ds.Rows[0]["y_type"].ToString(); string[] sz = y_type.Split(',');
                string retval = "";
                string item = ""; string fh = ",", fhp = "=";
                for (int i = 0; i < coc; i++)
                {
                    if (i == coc - 1) { fh = ""; }
                    retval += ds.Rows[i]["x1"].ToString() + fh;
                }
                retval += "|";
                for (int i = 0; i < sz.Length; i++)
                {
                    fh = ",";
                    if (i == sz.Length - 1) { fhp = ""; }
                    for (int a = 0; a < coc; a++)
                    {
                        if (a == coc - 1) { fh = ""; }
                        item = ds.Rows[a]["y" + (i + 1).ToString()].ToString();
                        if (item == "") { item = "null"; }
                        retval += item + fh;
                    }
                    retval += fhp;
                }
                retval += "[" + y_type.Replace("Bar", "column").Replace("Line", "line");
                string t_tit = ds.Rows[0]["y_title"].ToString();

                retval += "[" + t_tit.Replace(" ", "");
                retval += "[" + ds.Rows[0]["key1_value"].ToString();
                retval += "[" + ds.Rows[0]["key_type"].ToString();
                Response.Write(retval + "#");

             


            } 
            #endregion
        } if (type == "get_tabs_dp")
        {
            #region
            string[] val = Request.QueryString["value_1"].ToString().Split('|');
            string v_in = "<v_in><para name=\"v_proc_name\">GET_DP_REJECT_TABLE</para>";
            v_in += "                  <para name=\"v_from_date\">" + val[4].ToString().Replace("-", "") + "</para>";
            v_in += "                  <para name=\"v_to_date\">" + val[5].ToString().Replace("-", "") + "</para>";
            v_in += "                  <para name=\"v_pn\">" + val[0] + "</para>";
            v_in += "                  <para name=\"v_assy_lot\">" + val[1] + "</para>";
            v_in += "                  <para name=\"v_assy_assign_step\">" + val[2] + "</para>";
            v_in += "                  <para name=\"v_dp_lot\">" + val[3] + "</para>  ";
            v_in += "              </v_in>";
            v_in += "";
            string v_out = "";
            DataSet dss = new DataProvier().ExecProce<DataSet>("PKG_lvm_yield_tracking.select_records", "", DCoolWeb.Data.DbType.Oracle, v_in, v_out, v_out);
            DataTable ds = dss.Tables[1];
            int roc = ds.DataCount();// if (roc > 10) { roc = 10; }
            int coc = ds.Columns.Count; //if (coc > 20) { coc = 20; }
            string tab = "<table class='main_table'><tr>";
            for (int i = 0; i < coc; i++)
            {
                tab += "<th >" + ds.Columns[i].ColumnName + "</th>";
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
            Response.Write(tab + "#");
            #endregion
        } if (type == "")
        {
            #region
            #endregion
        } if (type == "")
        {
            #region
            #endregion
        } if (type == "")
        {
            #region
            #endregion
        } if (type == "")
        {
            #region
            #endregion
        }
        //<><><><><><><--yongshijiance--><><><>><>><>><><>
        stopwatch.Stop(); //  停止监视
        TimeSpan timespan = stopwatch.Elapsed; //  获取当前实例测量得出的总时间

        double milliseconds = timespan.TotalSeconds;  //  总毫秒数


        string sj = milliseconds.ToString("f3");
        System.Net.IPAddress ip = System.Net.IPAddress.Parse(Request.UserHostAddress);      //根据目标ip地址的获取ip对象

        System.Net.IPHostEntry ihe = System.Net.Dns.GetHostEntry(ip);    //根据ip对象创建主机对象   ihe.HostName

           //输出主机名
        string lLog = "insert into mbo_excute_log(report_id,run_time,xml_in,xml_out,run_sql)values('JG_pkg_lvm_func_log_new','" + DateTime.Now.ToString("yyyyMMddhh24mmss") + "','" + Request.QueryString["value_1"].ToString() + "=_" + Request.QueryString["value_2"].ToString() + "=_" + Request.QueryString["value_3"].ToString() + "=_" + type + "','" + ihe.HostName + "','" + sj + "')";

        new DataProvier().RunSql(lLog, "", DCoolWeb.Data.DbType.Oracle);
    }
}