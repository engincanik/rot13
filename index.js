function cypher(str){
    document.getElementById("cmsg").value = "";
    var message = document.getElementById("msg").value;
    message = message.toLowerCase();
    var str = [];
    var ltr;
    message = message.toLowerCase();

    for (let i = 0; i < message.length; i++) {
        ltr = (message.charCodeAt(i) > 109) ?  String.fromCharCode(message.charCodeAt(i) - 26 + 13).toLowerCase()
                                        : String.fromCharCode(message.charCodeAt(i) + 13).toLowerCase();
        str += ltr;
    }
    document.getElementById("cmsg").value = str;
}

function decypher(str){
    var message = document.getElementById("cmsg").value;
    message = message.toLowerCase();
    var str = [];
    var ltr;

    for (let i = 0; i < message.length; i++) {
        ltr = (message.charCodeAt(i) < 109) ?  String.fromCharCode(message.charCodeAt(i) + 26 - 13).toLowerCase()
                                        : String.fromCharCode(message.charCodeAt(i) - 13).toLowerCase();
        str += ltr;
    }
    document.getElementById("dmsg").value = str;
}