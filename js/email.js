///先讓Mail的HTML檔案中，表格內的東西是空的
var initSubject='',initBody='';

    ///最下方的ONCLICK觸發這個function
    function submitHandler(){
        var to = "taipeicameraclub@gmail.com";   ///因為是客服信箱，收件者是固定的
        var name = nameText.value;               ///下方就是依照內容填寫
        var email = emailText.value;
        var tel = telText.value;
        var subject = subText.value;

        var body = ""+bodyText.value+'%0A%0A%0A';    ///信件內容處先填寫反映事項
            body += "寄件人："+nameText.value+'%0A';  ///隨後附上三者(表格填寫內容)
            body += "連絡電話："+telText.value+'%0A';
            body += "電郵地址："+emailText.value+'%0A';

        mailTo.href="mailto:"+to+"?subject="+subject+"&body="+body;
        mailTo.click();
    }

    function init(){
        subText.value=initSubject;
        toText.value=initTo;
        bodyText.value=initBody;
    }
