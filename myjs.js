function formSubmit(){
    alert("Thank you for your Feedback!");
}

document.getElementById("Form").addEventListener("click", function(event)
{event.preventDefault()});

  function changeColor(){
    document.getElementById("title").style.color = "green";
  }
  function resetColor(){
    document.getElementById("title").style.color = "teal";
  }

  function toggleform() {
    var form1 = document.getElementById("form1");

    if (form1.style.display === "block") 
    {
      form1.style.display = "none";
      document.getElementById('toggleform').innerHTML = "Show Feedback Form";
    } 
    else 
    {
      form1.style.display = "block";
      document.getElementById('toggleform').innerHTML = "Hide Feedback Form";
    }
  }