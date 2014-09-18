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
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .


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

