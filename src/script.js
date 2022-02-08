
let f  = 0;
let proList = [];

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
    
   for (var x = 0; x < proList.length; x++ ){
       if(proList[x].id == parse_val1){
            alert("Product ID already exist");
            return proList;
       }
   }

   const myArray = { "id": parse_val1, "name" : val2, "price" : parse_val3};
  

   proList.push(myArray);
   return proList;


}

function display(result){
    for(let i = f; i < result.length; i++,f++)
    document.getElementById("result").innerHTML += "<tr> <td>" + result[i].id + "</td> <td>"+ result[i].name  + "</td ><td>"+ result[i].price + "</td> <tr/>";
}



