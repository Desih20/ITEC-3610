function RadioExample() {
    if (document.getElementById("rdChevrolet").checked) {
        document.getElementById("RadioExampleValue").innerHTML = 
            document.getElementById("rdChevrolet").value;
    }
    if (document.getElementById("rdFord").checked) {
        document.getElementById("RadioExampleValue").innerHTML = 
            document.getElementById("rdFord").value;
    }
    if (document.getElementById("rdDodge").checked) {
        document.getElementById("RadioExampleValue").innerHTML = 
            document.getElementById("rdDodge").value;
    }
    if (document.getElementById("rdDodge").checked) {
        document.getElementById("RadioExampleValue").innerHTML = 
            document.getElementById("rdDodge").value;
    }
}

$( "#RadioExampleValidationCheckForm" ).validate({

});