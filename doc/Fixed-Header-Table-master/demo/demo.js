$(document).ready(function () {
    $('.container_12 .grid_88').width(window.innerWidth - 30);
    $('.container_12 .grid_88').height(window.innerHeight - 50);
    
    $('#myTable01').fixedHeaderTable({ altClass: 'odd', footer: true, fixedColumns: 1 }); //footer: true, cloneHeadToFoot: true,

    // $('#myTable01').fixedHeaderTable('show', 1000);

    $('#myTable02').fixedHeaderTable({ footer: true, altClass: 'odd' });

    $('#myTable05').fixedHeaderTable({ altClass: 'odd', footer: true, fixedColumns: 1 });

    $('#myTable03').fixedHeaderTable({ altClass: 'odd', footer: true, fixedColumns: 1 });

    $('#myTable04').fixedHeaderTable({ altClass: 'odd', footer: true, cloneHeadToFoot: true, fixedColumns: 3 });
});
