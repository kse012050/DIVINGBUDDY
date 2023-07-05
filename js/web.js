$(document).ready(function () {

    //로그인 버튼 클릭 시
    $(window).keydown(function (event) {

        if(event.keyCode == 13){
            console.log(">>>"+getPageName());
            console.log(">>>"+window.location.href);

        }
        if (event.keyCode == 13 &&
            (getPageName() === 'article' || getPageName() === 'barogo' || getPageName() === 'main' || getPageName() === 'detail' || getPageName() ==='' || getPageName() ==='index')
             ) {
            if($('.searchBox')){
                if ($('.searchBox').hasClass('active')) {
                    var search = $('#searchinput').val();
                    if (getPageName() === 'detail') {
                        location.href = 'main?search=' + search;
                    } else {
                        $('#formSearch #search').val(search);
                        $('#formSearch').submit();
                    }
                }
            }

        }
    });




});



// 이메일 체크
function checkEmail(str) {
    var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!reg_email.test(str)) {
        return false;
    } else {
        return true;
    }
}

// 숫자 체크
function checkNumber(event) {
    if (event.key === '.'
        || event.key === '-'
        || event.key >= 0 && event.key <= 9) {
        return true;
    }

    return false;
}

function logic2(url, params, callback) {

    $.ajax({
        contentType: false,       // The content type used when sending data to the server.
        cache: false,             // To unable request pages to be cached
        processData: false,        // To send DOMDocument or non processed data file it is set to false
        type: "POST",
        url: url,
        data: params,
        success: callback,
        error: function (request, textStatus, errorThrown) {
            // alert(textStatus);
            alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + errorThrown);
        },
        progress: function (e) {
            if (e.lengthComputable) {
                var pct = (e.loaded / e.total) * 100;
                $('#prog')
                    .progressbar('option', 'value', pct)
                    .children('.ui-progressbar-value')
                    .html(pct.toPrecision(3) + '%')
                    .css('display', 'block');
            } else {
                console.warn('Content Length not reported!');
            }
        }
    });
}


function api(id) {
    let lb;
    let form = $('#' + id)[0];
    let formData = new FormData(form);
    let url = "";
    let is_logic = true;


    if (id === 'inviteForm') {
        url = "../api/web/invite";
    }
    
    if (is_logic) {
        logic2(url, formData, function callback(responseData) {
            if (lb) lb.close();
            if (!responseData.result) {
                alert(responseData.error_message);
            }
            if (responseData.result) {
                result(id, responseData);
            }

        });
    }


}

let formId;
let remainSec = 180;
var interval
function result(id, responseData) {

    var form = $('#' + id)[0];
    var formData = new FormData(form);
    var is_show_message = true;
    let is_reload = false;
    let is_index = false;
    let is_back = false;
    let is_logout = false;
    let is_window_close = false;
    let is_parent_window_reload = false;
    let is_move_url = false;
    let move_url = "";
    let is_replace = false;


   if (id === 'inviteForm') {
        is_reload = true
    }


    if(is_replace){
        location.replace(move_url);
    }
    if (is_show_message) {
        alert(responseData.error_message);
    }
    if (is_reload) {
        location.reload();
    }
    if (is_index) {
        location.href = 'login';
    }
    if (is_back) {
        history.back();
    }
    if (is_logout) {
        location.href = '/logout.php'
    }
    if (is_parent_window_reload) {
        opener.location.reload();
    }
    if (is_window_close) {
        window.close();
    }
    if (is_move_url && move_url) {
        location.href = move_url;
    }
}










