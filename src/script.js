function submitForm(){
    var val1 = document.getElementById("product-id").value;
    var val2 = document.getElementById("product-name").value;
    var val3 = document.getElementById("product-price").value;

    var result = "";

    if(checkData(val1,val2,val3)){
        result = store(val1,val2,val3);
        display(result);
    }
    else
      document.getElementById("result-table").innerHTML = "<p>Invalid Text</p>";

}

function checkData(val1,val2,val3){
   if(val1=="" && val2 == "" && val3 == "")
      return false;
   else
     return true;
}


function store(val1, val2, val3){
    parse_val1 = parseInt(val1);
    parse_val3 = parseInt(val3);
    const myArray = { "id": parse_val1, "name" : val2, "price" : parse_val3};
    return myArray;
}

function display(result){
    document.getElementById("result").innerHTML += "<tr> <td>" + result["id"] + "</td> <td>"+ result["name"]  + "</td ><td>"+ result["price"] + "</td> <tr/>";
}



