$(document).ready(function () {
    //The purpose of the ajax request is to get an image, header, and description about the company. It draws from a json file called about.json.
    $.ajax({
        type: "get",
        url: "about.json",
        dataType: "json",
        success: function (data) {
            data.about.forEach(function(data){
                //help with selectors for aboutScript.js and indexScript.js from here: https://www.w3schools.com/jquery/jquery_ref_selectors.asp
                $("#table1 tr:first").append("<td>" + "<img class='imageVector2' src='"+ data.image +"' alt='"+ data.alt +"'>" + "</td>");
                $("#table1 tr:eq(1)").append("<th class='infoTrio1'>" + data.header + "</th>")
                $("#table1 tr:last").append("<th>" + data.desc + "</th>");
            })
        }
    });
});
