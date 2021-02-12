// Custom Alert:
let popupBox = document.getElementById("popup");
let popupBoxTitle = document.getElementById("popup-title");
let popupBoxBody = document.getElementById("popup-body");
let popupBoxBtn = document.getElementById("popup-btn");

let popup = {
	isOpen: false,

	hide: ()=>{
		if(!popup.isOpen) return;
		popupBoxBtn.onclick = ()=>{};
		popupBox.style.animation = "fade-out 0.75s";
		setTimeout(()=>{
			popupBox.style.animation = "none";
			popupBox.classList.add("hide");
		}, 625);
	},

	show: (title, body, btnText="Okay", callBack=()=>{})=>{
		popupBoxTitle.innerText = title;
		popupBoxBody.innerHTML = body;
		popupBoxBtn.innerText = btnText;
		if(popup.isOpen){
			popupBoxBtn.onclick = ()=>{
				popup.hide();
				return callBack();
			};
		}
		else{
			popup.isOpen = true;
			popupBox.classList.remove("hide");
			popupBox.style.animation = "fade-in 0.75s";
			setTimeout(()=>{
				popupBox.style.animation = "none";
				popupBoxBtn.onclick = ()=>{
					popup.hide();
					return callBack();
				};
			}, 625);
		}
	}
}

//CD Player
let cdplayer = document.getElementById('cdplayer')
let cd = document.getElementById('cd')
let lcd = document.getElementById('lcdScreen')
function showCd(levelName){
	cd.style.transform = "rotate(0deg)"
	lcd.innerText = "Please Insert a Disc"
	soundEffects.cd.play()
	cdplayer.classList.remove('hide')
	cd.classList.add('cdIn')
	setTimeout(function(){
		lcd.innerText = "Now Playing: " + levelName
		cd.style.transform = "rotate(9000deg)"
		setTimeout(function(){
			cdplayer.classList.add('fade-out')
			setTimeout(function(){
				cdplayer.classList.add('hide')
				cdplayer.classList.remove('fade-out')
			},1000)
		},1000)
	},3000)
}