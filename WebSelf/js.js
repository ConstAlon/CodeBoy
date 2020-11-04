var index = 1;

window.onload = function () {
	// 页面资源加载完成后进行数据处理
	var inver = setInterval(run,3000);

	var bu_left = document.getElementById('bu_left');
	var bu_right = document.getElementById('bu_right');
	bu_left.addEventListener('click',ChangPho1);
	bu_right.addEventListener('click',ChangPho2);

	var head_img = document.getElementById('head_img');
	head_img.onmouseover = function(){
		clearInterval(inver);
	}
	head_img.onmouseleave = function(){
		inver = setInterval(run,3000);
	}

}

function ChangPho1() {

	// 切换图片

	if (index <= 1){
		index = 4;
	}
	else{
		index = index - 1;
	}

	document.getElementById('Pho').src = "images/img" + index + ".jpg";
	
	
	
};

function ChangPho2() {

	// 切换图片
	
	if (index == 4) {
		index = 1;
	}
	else{
		index = index + 1;
	}

	document.getElementById('Pho').src = "images/img" + index + ".jpg";
	
};

function ChangPho3(){

	document.getElementById('Pho').src = "images/img" + index + ".jpg";

};

function run() {
	// 改变时间，自动更改
	if(index == 4){
		index = 1;
	}
	ChangPho3(index);
	index++;

};