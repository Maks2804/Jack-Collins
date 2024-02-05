var el = document.getElementById('contact-window');
var btn = document.getElementById('btn');
var sBtn = document.getElementById('sendButton')
var close = document.getElementById('close');

btn.onclick = function() {
	el.style.visibility = "visible";
}

close.onclick = function(){
	el.style.visibility = "hidden"
}

sBtn.onclick = function(){
	alert("message has been sent");
	el.style.visibility = "hidden"
}
