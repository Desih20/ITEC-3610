function calculate() {







var operator;
if (document.getElementById("CentimetersOperator").checked) {
  operator = document.getElementById("CentimetersOperator").value;
}
if (document.getElementById("MetersOperator").checked) {
  operator = document.getElementById("MetersOperator").value;
}
if (document.getElementById("KilometersOperator").checked) {
  operator = document.getElementById("KilometersOperator").value;
}
if (document.getElementById("InchesOperator").checked) {
  operator = document.getElementById("InchesOperator").value;
}
if (document.getElementById("FeetOperator").checked) {
    operator = document.getElementById("FeetOperator").value;
  }
  if (document.getElementById("YardsOperator").checked) {
    operator = document.getElementById("YardsOperator").value;
  }
  if (document.getElementById("MilesOperator").checked) {
    operator = document.getElementById("MilesOperator").value;
  }
}

function clearform() {
    /* Set all of the form values to blank or false */
    document.getElementById("Value").value = "";
    document.getElementById("ValueError").value = "";
    document.getElementById("CentimetersOperator").checked = false;
    document.getElementById("MetersOperator").checked = false;
    document.getElementById("KilometersOperator").checked = false;
    document.getElementById("InchesOperator").checked = false;
    document.getElementById("FeetOperator").checked = false;
    document.getElementById("YardsOperator").checked = false;
    document.getElementById("MilesOperator").checked = false;
    document.getElementById("OperatorError").innerHTML = "";
  }

/* Form Validation */
$("#myform").validate({});