$(document).ready(function () {

  var form = Handlebars.compile($('#nameForm').html());
  var table = Handlebars.compile($('#nameTable').html());
  
  $('#addName').on('click', showForm);
  
  function showForm() {
    var data = {
      label: 'Name'
    };    
    var html = form( data);
    $('#mainTable').html(html);
    $('#submit').bind('click', showTable);
  }
  
  function showTable() {
   var nameTableData = JSON.parse(localStorage.getItem('nameTableData'));
    if (nameTableData === null) {
      nameTableData = [];
    }
    nameTableData.push($('#input').val());

    localStorage.setItem('nameTableData', JSON.stringify(nameTableData));
    
    var i;
    
    nameTableData.forEach(function callback(currentValue, index, array){
      i += '<tr><td>' + currentValue + '</td></tr>';
    });
      
    var data = {
      col: 'Name',
      row: i
    };
    var html = table( data);
    $('#mainTable').html(html);
  }  
});