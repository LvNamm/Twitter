/*function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
    $('#demo').load('ajax_info.txt');
  }*/
  let a = {
    'home':function(){
        $('#demo').load('ajax_info.txt');
    },

    'explore': function(){

    },

}
$('#left').load('Left_slide_bar.html');
if (window.location.hash == "#explore"){
    console.log(a['home'])
}
