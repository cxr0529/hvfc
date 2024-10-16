$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 992) {
      $("#navbarNavAltMarkup").collapse('toggle');
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

(function (global) {

var hvfc = {};

var homeHtml = "snippets/home.html";
var history = "snippets/history.html";
var contact = "snippets/contact.html";
var calender = "snippets/calender.html";
var construction = "snippets/construction.html";
var links = "snippets/links.html";
var members = "snippets/membersList.html";
var lifetime = "snippets/lifetime.html";
var apparatus = "snippets/apparatus.html";
var rental = "snippets/hallRentalPhotos.html";


// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});

//function to load history page
hvfc.loadHistory = function () {
  showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  history,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

//function to load contact page
hvfc.loadContact = function () {
  showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  contact,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

//function to load calender page
hvfc.loadCalender = function () {
  showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  calender,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

//function to load construction page
hvfc.loadConstruction = function () {
  showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  construction,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

//function to load links page
hvfc.loadLinks = function () {
  showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  links,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

//function to load members page
hvfc.loadMembers = function () {
  showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  members,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

//function to load lifetime page
hvfc.loadLifetime = function () {
  showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  lifetime,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

//function to load apparatus page
hvfc.loadApparatus = function () {
  showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  apparatus,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

//function to load rental page
hvfc.loadRental = function () {
  showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  rental,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

global.$hvfc = hvfc;

})(window);