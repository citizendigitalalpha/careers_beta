(function(){

  var all = 8;
  // var start = 0;
  var yesclicks = 0;
  var results = document.querySelector('#results');
  var noresults = document.querySelector('#no-results');
  var counter = document.querySelector('#counter');
  // var shortListCounter = document.querySelector('.shortlist-counter');
  // var removedCounter = document.querySelector('.removed-counter');

  function updatecounter() {
    --all;
    counter.innerHTML = all;
  }

  // function updateShortlistCounter() {
  //   --start;
  //   shortListCounter.innerHTML = all;
  //   // removedCounter.innerHTML = all;
  // }

    function updateyesclicks()
    {
        yesclicks ++;
        //alert(yesclicks);
    }

    // function updatenopeclicks()
    // {
    //     nopeclicks --;
    //     //alert(yesclicks);
    // }


  document.body.addEventListener('yepjob', function(ev) {
    results.innerHTML += '<li>'+ev.detail.job.innerHTML+'</li>';
    updatecounter();
    updateyesclicks();
    // updatenopeclicks();
    // updateShortlistCounter();
  });

  document.body.addEventListener('nopejob', function(ev) {
    updatecounter();
    updatenopeclicks();
    // updateShortlistCounter();
});

  document.body.addEventListener('deckempty', function(ev) {

      if (yesclicks > 0) {
       results.classList.add('live');
      }
     else   {
         noresults.classList.add('live');
         document.querySelector('h1').style.display = "none";
     }

    ev.detail.container.style.display = 'none';
  });

  window.addEventListener('load', function(ev) {
    // check if template is supported
    // browsers without it wouldn't need to
    // do the content shifting
    if ('content' in document.createElement('template')) {
      // get the template
      var t = document.querySelector('template');
      // get its parent element
      var list = t.parentNode;
      // cache the template content
      var contents = t.innerHTML;
      // kill the template
      list.removeChild(t);
      // add the cached content to the parent
      list.innerHTML += contents;
    }
    var listitems = document.body.querySelectorAll('.job');
    all = listitems.length + 1;
    updatecounter();
    // updateShortlistCounter();
  });

})();

// (function(){
//
//      var yesCount, noCount;
//      yesCount = noCount = 0;
//
//      function count_y() {
//          yesCount++;
//          aler("yesCount");
//      }
//
//      function count_y() {
//          noCount++;
//          aler("noCount");
//      }
//
// })();
