// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require turbolinks
//= require jquery
//= require bootstrap-sprockets
//= require jquery.turbolinks
//= require jquery_ujs
//= require_tree .


(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
FB.XFBML.parse(document.getElementById('fb-share-button'));

var originalNavClasses;

function toggleNav() {
    var elem = document.getElementById('custom-menu');
    var classes = elem.className;
    if (originalNavClasses === undefined) {
        originalNavClasses = classes;
    }
    elem.className = /expanded/.test(classes) ? originalNavClasses : originalNavClasses + ' expanded';
}

$(document).ready(function(){
	$(".custom-menu5").hover(function(){
		$(".custom-menu5 .link").toggle();
	});
	$(".custom-menu4").hover(function(){
		$(".custom-menu4 .link").toggle();
	});
	$(".custom-menu3").hover(function(){
		$(".custom-menu3 .link").toggle();
	});
	$(".custom-menu2").hover(function(){
		$(".custom-menu2 .link").toggle();
	});
	$(".custom-menu1").hover(function(){
		$(".custom-menu1 .link").toggle();
	});

});

$('.carousel').carousel()

$(document).ready(function() {
    $('.bloglist .tab-links a').click(function() {
        var currentAttrValue = $(this).attr('href');
 
        // Show/Hide Tabs
        $('.bloglist ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
    });
});

