function loadData(){
    var options = document.getElementsByClassName("formaction2");
    var option;
    console.log(options[0]);
    option = options[0];
    console.log(option)
    
    // var page = String(localStorage.getItem("location"));
    
    // if (page.includes("salinity_vertical")) { // index 0 is for salinity
    //     option = options[0];
    // }
    // if (page.includes("ph_vertical")) {
    //     option = options[1];
    // }
    
    
    
    var val =  String(option.value);
    
    // window.val = val;
    
    


    // var b = document.getElementById('formaction2').value;
    // url = 'http://dashboard/generic.html?formaction2=' + encodeURIComponent(b);

    // document.location.href = url;
   // localStorage["key"] = val
    prettyVal = val.replace(/_/g," ");
    localStorage.setItem("prettyvalue", prettyVal);
    localStorage.setItem("value", val);
    window.open("generic.html","_self");

};