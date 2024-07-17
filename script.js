$(document).ready(function () {
  //DOM
  const $btn = $('#getBtn');
  const $tbody = $('#users tbody');

  //json整形用関数
  function jsonParse(json) {
    json = JSON.stringify(json);
    return JSON.parse(json);
  }

  //クリア処理
  function clearData(dom) {
    dom.empty();
  }

  //ボタンクリック時テーブルにjsonデータ読み込み
  $btn.on('click', function () {
    clearData($tbody);
    // ajaxでjson GET
    $.ajax({
      url: 'test_data.json',
      type: 'GET',
      dataType: 'json',
    })
      .done(function (data) {
        const $jsonParseData = jsonParse(data);

        //jsonデータをhtmlで出力
        $.each($jsonParseData, function (index, item) {
          let row =
            '<tr>' +
            '<td>' +
            item.id +
            '</td>' +
            '<td>' +
            item.name +
            '</td>' +
            '<td>' +
            item.phone_num +
            '</td>' +
            '<td>' +
            item.created_date +
            '</td>' +
            '</tr>';
          //tbody要素に挿入
          $tbody.append(row);
        });
      })
      .fail(function (data) {
        // error
        console.log('error');
      });
  });

  //テーブルからデータ消去
  $('#clearBtn').on('click', function () {
    clearData($tbody);
  });
});
