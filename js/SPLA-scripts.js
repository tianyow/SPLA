/* DataTable 英翻中
--------------------------------------------------------------------- */
var qryTableOptions = {
  paging: true,
  lengthChange: false,
  searching: false,
  pageLength: 20,
  language: 
  {
    "emptyTable":     "目前無任何資料",
    "info":           "檢視 _START_ to _END_ of _TOTAL_ 資料",
    "info":           "共 _TOTAL_ 筆",
    "infoEmpty":      "無相關資料",
    "infoFiltered":   "(在 _MAX_ 筆資料中找到)",
    "infoPostFix":    "",
    "thousands":      ",",
    "lengthMenu":     "檢視 _MENU_ 筆",
    "loadingRecords": "載入中...",
    "processing":     "處理中...",
    "search":         "搜尋:",
    "zeroRecords":    "無相關結果",
    "paginate": {
        "first":      "第一筆",
        "last":       "最後一筆",
        "next":       ">",
        "previous":   "<"
    }
  },
  "order": [],
    "columnDefs": [ {
      "targets"  : 'no-sort',
      "orderable": false,
    }]
}
/* 使用量細項展開
--------------------------------------------------------------------- */
$(document).ready(function() {  
  var table = $('#AppQryTable');

  var usageDetail =
  '<tr class="table-row-expand">'+
    '<td colspan="6">'+
      '<div>'+
        '<table class="expand-detail-table">'+
          '<tr>'+
            '<th width="100">產品編號</th>'+
            '<th>產品名稱</th>'+
            '<th class="aRight">數量</th>'+
            '<th class="aRight">單價</th>'+
            '<th class="aRight">小計</th>'+
          '</tr>'+
          '<tr>'+
            '<td>9EA-00039</td>'+
            '<td>WinSvrDCCore ALNG LicSAPk MVL 2Lic CoreL</td>'+
            '<td class="aRight">64</td>'+
            '<td class="aRight">NT$ 896</td>'+
            '<td class="aRight">NT$ 57,344</td>'+
          '</tr>'+
          '<tr>'+
            '<td>9EA-00039</td>'+
            '<td>WinSvrDCCore ALNG LicSAPk MVL 2Lic CoreL</td>'+
            '<td class="aRight">64</td>'+
            '<td class="aRight">NT$ 896</td>'+
            '<td class="aRight">NT$ 57,344</td>'+
          '</tr>'+
          '<tr class="sum-row">'+
            '<td colspan="5" valign="center">'+
            '<div class="sum-row-field"><span>營業稅</span> NTS 2,876</div>'+
            '<div class="sum-row-field"><span>總價</span> NTS 60,211</div>'+
            '</td>'+
          '</tr>'+
        '</table>'+
    '</div>'+
    '</td>'+
  '</tr>';

  $('#AppQryTable .btn-open-panel').on('click', function() {
    var $this = $(this);
    var tr = $this.closest('tr');
    var $target =  tr.next('.table-row-expand');

    if ($target.is(":visible")) {
      $target.remove();
      tr.removeClass('shown');
    } else {
      tr.after(usageDetail);
      tr.addClass('shown');
    }
  })
});

/* 行事曆
--------------------------------------------------------------------- */
var opt = {
   //dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
   dayNamesMin:["日","一","二","三","四","五","六"],
   monthNames:["1","2","3","4","5","6","7","8","9","10","11","12"],
   monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],
   //monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
   prevText:"上月",
   nextText:"次月",
   weekHeader:"週",
   showMonthAfterYear:true,
   dateFormat:"yy/mm/dd",
   changeYear: true,
   changeMonth: true
   };

$(".datepicker").datepicker(opt);

/* Tooltip
--------------------------------------------------------------------- */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})