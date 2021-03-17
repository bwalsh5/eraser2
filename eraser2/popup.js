var isOn = false;

document.getElementById('turnon').addEventListener("click", function() {
  // alert('fff')
    chrome.tabs.query({url: '<all_urls>'}, tabs => {

        tabs.forEach(tab =>
            chrome.tabs.sendMessage(tab.id, { isOn } )
          );
     });
var isOff = false;
var isOn = true;
   });




   document.getElementById('turnoff').addEventListener("click", function() {

       chrome.tabs.query({url: '<all_urls>'}, tabs => {

           tabs.forEach(tab =>
               chrome.tabs.sendMessage(tab.id, { isOff } )
             );
        });
        var isOff = true;
        var isOn = false;
});
