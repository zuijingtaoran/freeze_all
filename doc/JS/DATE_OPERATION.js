function fill_date(fromdate, todate) {
    var datee = new Date();

    var t1 = new Date(datee.getTime() - 1 * 24 * 3600 * 1000); 
    $(fromdate).val(t1.getFullYear() + "-" + p((t1.getMonth() + 1)) + "-" + p(t1.getDate()));
    t1 = datee;
    $(todate).val(t1.getFullYear() + "-" + p((t1.getMonth() + 1)) + "-" + p(t1.getDate()));
} function p(s) {
    return s < 10 ? '0' + s : s;
}