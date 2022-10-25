//https://obfuscator.io/
//seed: 4385987

function js_send(paydata, name, time, order) {
    //update this with your js_form selector
    var form_id_js = "javascript_form";
    var data_js = {
        "access_token": "gw1dl58m6f38n991e4irbxyg"
    };
    function js_onSuccess() {
        alert("Your order has succesfullt been send");
        // remove this to avoid redirect
        //window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
    }
    function js_onError(error) {
        // remove this to avoid redirect
        //window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
    }
    function toParams(data_js) {
        var form_data = [];
        for ( var key in data_js ) {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
        }
        return form_data.join("&");
    }
    var payed = true;
    if(payed){
        //sendButton.value='Sending…';
        //sendButton.disabled=true;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
                js_onSuccess();
            } else
            if(request.readyState == 4) {
                js_onError(request.response);
            }
        };
        var subject = name + " HappyFruits order";
        var message = "name:"+name+"\ntime:"+time+"\norder:"+order+"\npayment:"+paydata;
        data_js['subject'] = subject;
        data_js['text'] = message;
        var params = toParams(data_js);
        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send(params);
        return false;
    }
}
//sendButton.onclick = js_send;
