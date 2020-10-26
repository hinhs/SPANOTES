document.getElementById("done").onclick = function () {
    
   
    var live_with_value = document.querySelector('input[name=live_with]:checked').value;
    var waiting_value = document.querySelector('input[name=waiting]:checked').value;
    var contact_value = document.querySelector('input[name=contact]:checked').value;
    var airplane_value = document.querySelector('input[name=airplane]:checked').value;
    var symptoms_value = document.querySelector('input[name=symptoms]:checked').value;
    var temperaure = document.getElementById("temp").value
   live_withvalue=parseInt(live_with_value);
    waitingvalue=parseInt(waiting_value);
    contactvalue=parseInt(waiting_value); airplanevalue=parseInt(airplane_value); symptomsvalue=parseInt(symptoms_value);
    
    
    var total_value = 0; 
    var total_val = live_with_value + waiting_value + waiting_value + airplane_value + symptoms_value;
   
    const scriptURL = ""
    const form = document.forms['submit-to-google-sheet']

    form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    document.getElementById("send_page").onclick = function () {
    
    var temperaure = document.getElementById("temp").value;
    
    
    if (total_val >0){
      function myFunction() {
  location.replace("");
    else function myFunction() {
  location.replace("");}
    
  
};
