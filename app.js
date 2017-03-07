/*Cookie Confectionary
Goal:

To demonstrate an understanding of setting and retrieving cookie data.

Assignment:

Imagine you're running a confectionary that serves 3 types of (edible) cookies: sugar, chocolate, and lemon. 
This confectionary serves these cookies as values stored inside of a browser cookie, which is far less satisfying, 
but the users of the confectionary still find value in it for some reason. Like most startups, we'll find the customers and profit later!

Create a simple front-end website where users can decide how many cookies that they'd like to eat of each flavor. 
Once they indicate this, which could be by clicking on an item on screen or by submitted a form, 
store this value inside of several browser cookies, which specify the type of confectionary cookies as the key and the 
amount of confectionary cookies eaten so far as a value.

Grading criteria:

Thoughtful styling added
Interactive and fun for the user to use
A user should be able to:
Click on a cookie flavor, which increments their cookie count by one
Come back to the page and see how many cookies they've grabbed so far
Clear their cookie count completely in case they're feeling guilty
http://www.javascript-coder.com/javascript-form/javascript-calculator-script.phtml

In many situations, using cookies is the most efficient method of 
remembering and tracking preferences, purchases, commissions, 
and other information required for better visitor experience or site statistics.
*/
$(document).ready(function(){

function createCookie(name,value,days) { //Cookie values may not include semicolons, commas, or whitespace. 
   var expires = "";
   if (days) {
       var date = new Date();
       date.setTime(date.getTime() + (days*24*60*60*1000));
       expires = "; expires=" + date.toUTCString();
   }
   document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
   var nameEQ = name + "=";
   var ca = document.cookie.split(';');
   for(var i=0;i < ca.length;i++) {
       var c = ca[i];
       while (c.charAt(0)==' ') c = c.substring(1,c.length);
       if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
   }
   return null;
}

	function resetCookieCounts() {
		createCookie("sugar_cookie","",-1);
		createCookie("lemon_cookie","",-1);
		createCookie("chocolate_cookie","",-1);
	}

	$('#lemon').on('click', function (){
		var cookie = readCookie("lemon_cookie");
		if (cookie != null) {
			cookie++;
			createCookie("lemon_cookie", cookie, 2); //Overwrites cookie with new value
			$('#lemonCtr').text(cookie); //Displays text via cookie variable to number of cookies like an alert box.
		} 
		else{
			createCookie("lemon_cookie","1", 2); //Expires after 2 days
			$('#lemonCtr').text("1");
		}
	});

	// TODO: choc
	$('#choc').on('click', function (){
		var cookie = readCookie("lemon_cookie");
		if (cookie != null) {
			cookie++;
			createCookie("lemon_cookie", cookie, 2); //Overwrites cookie with new value
			$('#lemonCtr').text(cookie); //Displays text via cookie variable to number of cookies like an alert box.
		} 
		else{
			createCookie("lemon_cookie","1", 2); //Expires after 2 days
			$('#lemonCtr').text("1");
		}
	});

	// TODO: sugar
	$('#sugar').on('click', function (){
		var cookie = readCookie("lemon_cookie");
		if (cookie != null) {
			cookie++;
			createCookie("lemon_cookie", cookie, 2); //Overwrites cookie with new value
			$('#lemonCtr').text(cookie); //Displays text via cookie variable to number of cookies like an alert box.
		} 
		else{
			createCookie("lemon_cookie","1", 2); //Expires after 2 days
			$('#lemonCtr').text("1");
		}
	});


}); // Ending parenthesis is part of document.ready fxn on line 25









