function load_initial() {

    /*
        $.ajax({
            url : "http://13.125.196.191:715/api/refrigerator/open",
            dataType : "json",
            type : "post",
            data : { 
               id : $("#id").val(),                 // 사용자 ID
               ic : findtd[1].getAttribute('id')    // 이름
           },
           success : function(r){
               console.log(r);
           },
           error : function(r){
               console.log(r);
           }
       });
        */
}

function additem(item) {
    //get parent & child tag
    var parent = item.parentNode;
    var findtd = parent.childNodes;

    $("#my-refrigerator > tbody").append('<tr><td>' + findtd[0].textContent + '</td><td>' + findtd[1].textContent + '</td><td type="button" class="btn-outline btn-danger" onclick="consumeitem(this)">소모</td></tr>');

    //TODO: POST로 내 냉장고에 추가해야 됨 
    /*
    $.ajax({
        url : "http://13.125.196.191:715/api/refrigerator/insert",
        dataType : "json",
        type : "post",
        data : { 
           id : $("#id").val(),                 // 사용자 ID
           ic : findtd[1].getAttribute('id')    // 이름
       },
       success : function(r){
           console.log(r);
       },
       error : function(r){
           console.log(r);
       }
   });
    */
}

function consumeitem(item) {
    var parent = item.parentNode;
    parent.remove();

    //TODO: POST로 내 냉장고에서 삭제해야 함
    /*
    $.ajax({
        url : "http://13.125.196.191:715/api/refrigerator/takeout",
        dataType : "json",
        type : "post",
        data : { 
           id : $("#id").val(),                 // 사용자 ID
           ic : findtd[1].getAttribute('id')    // 이름
       },
       success : function(r){
           console.log(r);
       },
       error : function(r){
           console.log(r);
       }
   });
    */
}

$(function () {

    $('#search-item').click(function () {
        var HttpClient = function () {
            this.get = function (aUrl, aCallback) {
                var anHttpRequest = new XMLHttpRequest();
                anHttpRequest.onreadystatechange = function () {
                    if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                        aCallback(anHttpRequest.responseText);
                }
                anHttpRequest.open("GET", aUrl, true);
                anHttpRequest.send(null);
            }
        }

        $('#ingredient-search').empty();
        $('#ingredient-search').append('<thead><tr><th style="text-align: center">카테고리</th><th style="text-align: center">식재료</th><th style="text-align: center">추가</th></tr></thead>')

        var theurl = 'http://13.125.196.191:715/api/ingredient/search?';
        var keyword = String($('#item-input').val());
        theurl = theurl + "keyword=" + keyword;
        var client = new HttpClient();
        client.get(theurl, function (response) {
            var response1 = JSON.parse(response);
            $('#ingredient-search').append('<tbody>');
            for (i = 0; i < response1.length; i++) {
                var ID = response1[i].ID
                var NAME = response1[i].NAME
                var CATEGORY = response1[i].CATEGORY
                $('#ingredient-search').append('<tr><td>' + CATEGORY + '</td><td id=' + ID + '>' + NAME + '</td><td type="button" class="btn-outline btn-success" onclick=additem(this)>추가</td></tr>');
            }
            $('#ingredient-search').append('</tbody>');
        });
    });


});


/*
$.ajax({
    type: 'POST',
    url: url,
    data: data,
    success: success,
    dataType: data
  })
  // 요청 url만, 리턴 결과값 무시함.
$.post(" http://web/test/"); 
  
// name이랑 time 포함해서 보내는 형식
$.post("http://web/test/", {name:"gddong",time:"2시"});
 
//Array 배열 형으로 넣어 보내는 형식
$.post("http://web/test/", {'arrayName[]' : ["array1","array2"]});
 
//폼데이터 내에 ID 가져옴
$.post("http://web/test/", $("#ID").serialize());
 
//값일 전송 후 리턴 값 받음.
$.post("http://web/test/", function(data){
    alert("데이터 불러온 결과: "+data);
}); 
 
// Json방식으로 전송하여 리턴 값 받음.
$.post("http://web/test/", {"func":"getNameAndTime"}, function(data){
    console.log(data.name);    //gddong
    console.log(data.time);    //2시
}, "json");
*/


/*
$.ajax({
        url : "http://13.125.196.191:715/api/user/create",
        dataType : "json",
        type : "post",
        data : {
            
           userId : $("#id").val(),                 // 사용자 ID
           password : $("#password").val(),        // 비밀번호
           email : $("#email").val(),              // 이메일
           name : $("#name").val()                // 이름
       },
       success : function(r){
           console.log(r);
       },
       error : function(r){
           console.log(r);
       }
   });
*/