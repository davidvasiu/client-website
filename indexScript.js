$(document).ready(function () {
    //The purpose of the ajax request is to get an image vector, header, and description about the Vasiu way. It draws from a json file called index.json.
    $.ajax({
        type: "get",
        url: "index.json",
        dataType: "json",
        success: function (data) {
            data.vasiu.forEach(function(data){
                $("table tr:first").append("<td>" + "<img class='imageVector' src='"+ data.imageVector +"' alt='"+ data.alt +"'>" + "</td>");
                $("table tr:eq(1)").append("<th class='infoTrio'>" + data.header + "</th>")
                $("table tr:last").append("<th>" + data.description + "</th>");
            })
        }
    });
});
