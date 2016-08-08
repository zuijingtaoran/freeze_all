using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DCoolWeb.Data;
using System.Data;
using System.IO;
using System.Text;
using DCoolWeb;
using System.Threading;
/// <summary>
///get_some_list 的摘要说明
/// </summary>
public class get_some_list
{
	
	
		
    
    public    string rtn_slct_recd_tab(string v_in,string prna,string tabcls){
        string tab = "";
        //string v_in =  "<v_in><para name=\"v_proc_name\">GET_MATRIX_DTL_PRODUCT_LINE</para>                 ";
        //v_in += "              </v_in>";
        //v_in += "";
        string v_out = "";
        DataSet dss = new DataProvier().ExecProce<DataSet>(prna, "", DCoolWeb.Data.DbType.Oracle, v_in, v_out, v_out);
        DataTable ds = dss.Tables[1];
        int roc = ds.DataCount(); int coc = ds.Columns.Count;
        tab = "<table " + tabcls + "><tr><th class='tab_op' align='right' colspan='" + coc + "'><img class='clsimg' onclick='gb()' src='doc/IMG/close_hei.png'  /></th></tr><tr>";
        for (int i = 0; i < coc; i++) {
            tab += "<th>" + ds.Columns[i].ColumnName.Replace("'", "") + "</th>";
        } tab += "</tr>";
        for (int i = 0; i < roc; i++) {
            tab += "<tr>";
            for (int a = 0; a < coc; a++) {

                tab += "<td>" + ds.Rows[i][a].ToString()+"</td>";
            }
            tab += "</tr>";


        } tab += "</table>";
            return tab;
	}
    public string rtn_slct_recd_tab_nor(string v_in, string prna, string tabcls)
    {
        string tab = "";
        //string v_in =  "<v_in><para name=\"v_proc_name\">GET_MATRIX_DTL_PRODUCT_LINE</para>                 ";
        //v_in += "              </v_in>";
        //v_in += "";
        string v_out = "";
        DataSet dss = new DataProvier().ExecProce<DataSet>(prna, "", DCoolWeb.Data.DbType.Oracle, v_in, v_out, v_out);
        DataTable ds = dss.Tables[1];
        int roc = ds.DataCount(); int coc = ds.Columns.Count;
        tab = "<table class='" + tabcls + "'><tr>";
        for (int i = 0; i < coc; i++)
        {
            tab += "<th>" + ds.Columns[i].ColumnName + "</th>";
        } tab += "</tr>"; string ite = "",sj;
        for (int i = 0; i < roc; i++)
        {
            tab += "<tr>";
            for (int a = 0; a < coc; a++)
            {
                ite = ds.Rows[i][a].ToString();
                //sj =   ite.Substring(0, 19);
                //ite = ite.Replace(sj, ""); sj = "<i class='sjian'>" + sj + "</i>";
                tab += "<td>" + ite +"</td>";
            }
            tab += "</tr>";


        } tab += "</table>";
        return tab;
    }
    public string rtn_slct_opt(string v_in, string prna) {
        string tab = "";
        string v_out = "";
        DataSet dss = new DataProvier().ExecProce<DataSet>(prna, "", DCoolWeb.Data.DbType.Oracle, v_in, v_out, v_out);
        DataTable ds = dss.Tables[1];
        int roc = ds.DataCount(); int coc = ds.Columns.Count;
        if (coc==1) //1 列
        {
            for (int i = 0; i < roc; i++)
            {
                tab += "<option value='" + ds.Rows[i][0] + "'>" + ds.Rows[i][0].ToString()+"</option>";
            }
        } if (coc == 2)
        {
            for (int i = 0; i < roc; i++)
            {
                tab += "<option value='" + ds.Rows[i][0] + "'>" + ds.Rows[i][1].ToString() + "</option>";
            }
        }
        return tab;
    
    }
}