$(document).ready(() => {

    function callback(data, status) {
        console.log("data: " + data + "\nstatus: " + status)
    }

    $("button#send").click(() => {
        var usr = $('#username').val();
        var text = $('#txt').val();
        $.post("chatSendText.php",
            { username: usr, txt: text },
            (data = "", status) => callback(data, status));
    });

    window.setInterval(() => {
        $.get("chatGet.php", (data = "", status) => {
            var data_json = JSON.parse(data);
            $('#content').empty();
            $('#content').append("<table id='table'></table>");
            data_json.map((i) => {
                $('#table').append("<tr><td>" + i[0] + " >> </td><td>" + i[1] + "</td></tr>")
            })
        })
    }, 1000)


    // animation **
    var timer = 0;
    function xxx() {
        if (timer < Math.PI * 8) { // เขยิบ 4 รอบ
            var x = Math.sin(timer) * 80 * (1.0 / timer);
            $('#txt').css("margin-left", x + "px");
            timer += 0.07;
            setTimeout(xxx(), 1);
        } else {
            $('#txt').css("margin-left", 0 + "px");
            timer=0
        }
    }
    $('#send').submit((e)=>{
        e.preventDefault();
        setTimeout(xxx(), 1);
    })
});
