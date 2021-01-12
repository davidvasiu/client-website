window.onload = function() {
    document.getElementById("calc").onclick =function(){
        var total = 0;
        var acre = (25000)*(document.getElementById("acreage").value);
        var lot = 0;
        if(document.getElementById("lotYN").value == "yes" || document.getElementById("lotYN").value == "Yes"){
            lot = 8000;
        }else{
            lot=0;
        }
        var numBeds = (10000)*(document.getElementById("numBed").value);
        var numBaths = (8000)*(document.getElementById("numBath").value);
        var sqrFt = (25)*(document.getElementById("sqrFoot").value);
        var garage = (10000)*(document.getElementById("cars").value);
        total = acre + lot + numBeds + numBaths + sqrFt + garage;
        document.getElementById("total").value = "$" + total;
    };
    //This is one of my plugins that I am using
    //Info here: https://sweetalert2.github.io/#download
    Swal.fire({
        title: 'Attention!',
        text: 'This estimate is not to be used for "real life" considerations! ' +
            'To submit the contact information please fill out the forms that say "required". For example, First Name (required).',
        icon: 'warning',
        confirmButtonText: 'I understand'
    })
    //One of my widgets
    //help from here: https://jqueryui.com/datepicker/
    //here: https://www.youtube.com/watch?v=oms0VazlJUY
    //here: https://learn.jquery.com/jquery-ui/getting-started/
    $(function () {
        $("#date1").datepicker({
            changeMonth: true,
            changeYear: true
        });
    });


}


