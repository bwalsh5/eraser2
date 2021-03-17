chrome.runtime.onMessage.addListener(request => {

  if(request.isOn == true) {

// alert('is on')

    document.addEventListener('click', function(e) {
          e.preventDefault();
           e = e || window.event;
           var target = e.target || e.srcElement,
               text = target.textContent || target.innerText;
               console.log(target);
               target.style.visibility = "hidden"

       }, false);

  }
  else if (request.isOff == true){

    // alert('is off')
    document.addEventListener('click', function(e) {
          e.preventDefault();
           e = e || window.event;
           var target = e.target || e.srcElement,
               text = target.textContent || target.innerText;
               console.log(target);
               target.style.visibility = "visible"

       }, false);

  }
})
