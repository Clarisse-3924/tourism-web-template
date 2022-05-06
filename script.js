function _(id) {
	return document.getElementById(id);
}
// Include a file
function includeHTML() {
	let z, i, elmnt, file, xhttp;
	/*loop through a collection of all HTML elements:*/
	z = document.getElementsByTagName('*');
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute('w3-include-html');
		if (file) {
			/*make an HTTP request using the attribute value as the file name:*/
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					if (this.status == 200) {
						elmnt.innerHTML = this.responseText;
					}
					if (this.status == 404) {
						elmnt.innerHTML = 'Page not found.';
					}
					/*remove the attribute, and call this function once more:*/
					elmnt.removeAttribute('w3-include-html');
					includeHTML();
				}
			};
			xhttp.open('GET', file, true);
			xhttp.send();
			/*exit the function:*/
			return;
		}
	}

	/**
	 * Here you will be setting information according to the company
	 */

	// In NavBar section add logo image
	document.logo.src = './images/sample-logo.png';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = 'WELCOME TO AKAGERA GAME LODGE';
	document.querySelector('#company-desc').innerHTML = `
                    <strong>SHORT DESCRPTION ABOUT YOUR COMPANY/ORGANISATION</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio
                    enim quis neque nulla mollitia corporis soluta, fugiat perferendis
                    `;
	document.querySelector('#company-title1').innerHTML = 'WELCOME TO VOLCANO NATIONAL PARK ';
	document.querySelector('#company-desc1').innerHTML = `
                    <strong>SHORT DESCRPTION ABOUT YOUR COMPANY/ORGANISATION</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio
                    enim quis neque nulla mollitia corporis soluta, fugiat perferendis
                    `;
	document.querySelector('#company-title2').innerHTML = 'WELCOME TO NYUNGWE NATIONAL PARK';
	document.querySelector('#company-desc2').innerHTML = `
									<strong>SHORT DESCRPTION ABOUT YOUR COMPANY/ORGANISATION</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio
									enim quis neque nulla mollitia corporis soluta, fugiat perferendis
									`;
				

					let slideIndex = 0;
					showSlides();
					
					function showSlides() {
					  let i;
					  let slides = document.getElementsByClassName("mySlides");
					  let dots = document.getElementsByClassName("dot");
					  for (i = 0; i < slides.length; i++) {
						slides[i].style.display = "none";  
					  }
					  slideIndex++;
					  if (slideIndex > slides.length) {slideIndex = 1}    
					  for (i = 0; i < dots.length; i++) {
						dots[i].className = dots[i].className.replace(" active", "");
					  }
					  slides[slideIndex-1].style.display = "block";  
					  dots[slideIndex-1].className += " active";
					  setTimeout(showSlides, 3000); // Change image every 2 seconds
					}				

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `<p>ABOUT YOUR COMPANY/ORGANISATION Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio
					enim quis neque nulla mollitia corporis soluta, fugiat perferendis
					corrupti deleniti impedit magni molestiae delectus autem voluptatem
					ducimus asperiores voluptatibus.</p>
					<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio
					enim quis neque nulla mollitia corporis soluta, fugiat perferendis
					corrupti deleniti impedit magni molestiae delectus autem voluptatem
					ducimus asperiores voluptatibus.</p>
					<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio
					enim quis neque nulla mollitia corporis soluta, fugiat perferendis
					corrupti deleniti impedit magni molestiae delectus autem voluptatem
					ducimus asperiores voluptatibus.</p>`;

	// Abous us section
	// left section in about us
	document.querySelector(
		'#mission'
	).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni asperiores velit!`;

	// middle section in about us
	

	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni asperiores velit!`;

	// In contact us section
	document.querySelector('#address').innerHTML = 'Kigali';
	document.querySelector('#email').innerHTML = 'info@template.rw';
	document.querySelector('#phone').innerHTML = '+25078xxxxxxx';
	
	//Footer
	document.getElementById("copyright").innerHTML="Company name &copy; " + new Date().getFullYear();

	// Link to social media
	

}
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

function click_hamburger() {
	document.getElementById('hamburger_btn').click();
}

function send_email() {
	function _(id) {
		return document.getElementById(id);
	}
	var status = _('response_status');
	if (
		_('email_from').value !== '' &&
		_('email_from').value.includes('@') &&
		_('contact_message').value !== ''
	) {
		status.innerHTML = 'Sending message ...';
		var formdata = new FormData();
		formdata.append('email', _('email_from').value);
		formdata.append('message', _('contact_message').value);
		var ajax = new XMLHttpRequest();
		ajax.open('POST', 'send_email.php');
		ajax.onreadystatechange = function () {
			if (ajax.readyState == 4 && ajax.status == 200) {
				if (ajax.responseText == 'success') {
					_('email_from').value = '';
					_('contact_message').value = '';
					status.innerHTML = 'Thanks your message is sent';
					setTimeout(function () {
						status.innerHTML = '';
					}, 5000);
				} else {
					status.innerHTML = ajax.responseText;
					_('my_btn').disabled = false;
					setTimeout(function () {
						status.innerHTML = '';
					}, 5000);
				}
			}
		};
		ajax.send(formdata);
	}
}
// ------ script for gallery ---------
window.onload = ()=> {
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");
    filterItem.onclick = (selectedItem)=>{
        if(selectedItem.target.classList.contains("item")){
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName = selectedItem.target.getAttribute("data-name");
           filterImg.forEach((image)=>{
               let filterImages = image.getAttribute("data-name");
               
               if((filterImages == filterName) || filterName == "all"){
                image.classList.remove("hide");
                   image.classList.add("show");
               }else{
                image.classList.add("hide");
                image.classList.remove("show");
               }
           });
        }
    }
}
