var a = new Array(10);

for (var i=0; i<10; i++) {
	a[i] = new Array(get_random_value(10), get_random_color(), get_random_date());
} 

// Funció d'ordenació

Array.prototype.mysort = function() {
	this.sort(function(a,b){
		if (a[2] > b[2]) return  1;
		if (a[2] < b[2]) return -1;
		return 0;
	});
	return this;
}

// Main

$(document).ready(function() {

	$('#output').append('<h1>Before sort</h1><ol>');
	for (var i=0; i < a.length; i++) {
		$('#output').append('<li>' + a[i][2] + '</li>');
	};
	$('#output').append('</ol>');

	b = a.mysort();

	$('#output').append('<h1>After sort</h1><ol>');
	for (var i=0; i < b.length; i++) {
		$('#output').append('<li>' + b[i][2] + '</li>');
	};
	$('#output').append('</ol>');

});

// Funcions genèriques

function get_random_value(upper_limit) {
	return Math.floor((Math.random() * upper_limit) + 1);
}

function get_random_color() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.round(Math.random() * 15)];
	}
	return color;
}

function get_random_date() {
	return new Date(1900 + get_random_value(200), get_random_value(12), get_random_value(28));
}