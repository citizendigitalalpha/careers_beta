/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (
  window.sessionStorage && window.sessionStorage.getItem('prototypeWarning') !== 'false' &&
  window.console && window.console.info
) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
  window.sessionStorage.setItem('prototypeWarning', true)
}

$(document).ready(function () {
  // Use GOV.UK selection-buttons.js to set selected
  // and focused states for block labels
  var $blockLabels = $(".block-label input[type='radio'], .block-label input[type='checkbox']")
  new GOVUK.SelectionButtons($blockLabels) // eslint-disable-line

  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .block-label uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()

  /* -------------------------------------------------------------
  Set session data
  ------------------------------------------------------------- */

  window.setSessionData = function(label, value, callback) {
    session[label] = value;
    $.post('/data', session, function(data){}); 

    if(callback) {
      callback();
    }
  }

    var $els = $('.jpsection');
    $els.not('.active').hide()
    $(".section-showhide-links").on("click", function (e) {
        var $target = $($(this).attr('href')).show()
        $els.not($target).hide()
        e.preventDefault();
    });


    $(".survey_close").click(function () {
        GOVUK.cookie('survey', 'dismissed', { days: 31 });
        $(".survey_container").removeClass("visible");
    });

    $(".survey_action").click(function () {
        GOVUK.cookie('survey', 'dismissed', { days: 31 });
    });

    if (GOVUK.cookie('survey') != "dismissed") {
        $(".survey_container").addClass("visible");
    };

    var currentcat = $('#currentcategory').text();

    if ($('#currentcategory').length > 0) {
        var currentcatURL = window.location.pathname;
        sessionStorage.setItem("data.currentcategoryURL", currentcatURL);
    };
    sessionStorage.setItem("data.currentcategory", currentcat);

});
