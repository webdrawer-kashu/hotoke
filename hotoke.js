/**
* hotoke.js
* jQuery required.
*
* * Copyright 2017 (c) webdrawer-kashu
* * http://webdrawer.net/
* * Licensed Under the MIT.
*
*/

(function($) {

 	$.fn.hotoke = function(options){

 		//最初の呼び出し文言
 		var hotokeShout = [
 			'ヨ○ヒコー',
 			'ヨ○ヒコよー'
 		];

		//ほとけ降臨後の文言
 		var hotokeWords = [
			'ここにセリフを入れることができます。',
			'セリフ2',
			'画像やテキストの外をクリックすることで閉じます。'
		];

 		var defaults = {
            timeStart : 3000,
            hotokeImgPath : 'hotoke.png'
    	};
    
    	var setting = $.extend(defaults,options);
	
		$(this).append('<div class="hotokeBg"></div>');
		$('.hotokeBg').append('<div class="hotokeBody"><img src="' + setting.hotokeImgPath + '" alt="ほとけ"></div>');

		$(window).on('load',function(){
			setTimeout(function(){
				//おでましエリア
				$('.hotokeBg').fadeIn('slow');
				$('.hotokeBg').append('<div class="hotokeShout"></div>')
				hotokeShoutBuild();
				$('.hotokeBg .hotokeShout span').hide();
				hotokeshoutRepeat();

				$('.hotokeBg .hotokeShout').on('click','.hotokeShoutBtn',function(){
					$('.hotokeShout').hide();console.log(1);
					hotokeKourin();
				});

				//ほとけエリア
				var hotokeSizeW = $('.hotokeBg .hotokeBody img').width();
				var hotokeSizeH = $('.hotokeBg .hotokeBody img').height();
				$('.hotokeBg .hotokeBody').css({
					'width': hotokeSizeW,
					'margin-left': hotokeSizeW / 2 * -1,
					'position': 'absolute',
					'top': hotokeSizeH * -1,
					'left': '50%'
				});
			
			},setting.timeStart);
		});

		//閉じる
		$(document).on('click touchend', function(event) {
			if (!$(event.target).closest('.hotokeBg .hotokeBody,.hotokeBg .hotokeShout').length) {
		    	$('.hotokeBg').hide();
			}
		});

		//最初の呼びかけ
		function hotokeShoutBuild() {
			var hotokeShoutWordsNum = 0;
			$(hotokeShout).each(function(){
				$('.hotokeBg .hotokeShout').append('<span class="hotokeShout' + hotokeShoutWordsNum + '">' + hotokeShout[hotokeShoutWordsNum] + '</span>');
				hotokeShoutWordsNum++;
			});
		}

		var hotokeshoutRepeatNum = 0;
		function hotokeshoutRepeat(){
			if( hotokeshoutRepeatNum < hotokeShout.length - 1 ){
				$('.hotokeBg .hotokeShout' + hotokeshoutRepeatNum).fadeIn('slow',function(){
					$('.hotokeBg .hotokeShout' + hotokeshoutRepeatNum).delay(3000).fadeOut('slow',function(){
						hotokeshoutRepeatNum++;
						hotokeshoutRepeat();
					});
				});					
			}else {
				$('.hotokeBg .hotokeShout' + hotokeshoutRepeatNum).fadeIn('slow');
				$('.hotokeBg .hotokeShout').append('<div class="hotokeShoutBtn">ほとけを見る</div>');
			}
		}

		//ほとけ本体
		function hotokeKourin(){
			hotokeWordsBuild();
			$('.hotokeBg .hotokeBody .hotokeTalk').hide();
			$('.hotokeBg .hotokeBody').animate({
				'top': 0
			},5000,function(){
				hotokeWordsRepeat();
			});		
		}

		function hotokeWordsBuild() {
			var hotokeWordsNum = 0;
			$(hotokeWords).each(function(){
				$('.hotokeBg .hotokeBody').append('<span class="hotokeTalk hotokeTalk' + hotokeWordsNum + '">' + hotokeWords[hotokeWordsNum] + '</span>');
				hotokeWordsNum++;
			});
		}

		var hotokeWordsRepeatNum = 0;
		function hotokeWordsRepeat(){
			if( hotokeWordsRepeatNum < hotokeWords.length - 1 ){
				$('.hotokeBg .hotokeBody .hotokeTalk' + hotokeWordsRepeatNum).fadeIn('slow',function(){
					$('.hotokeBg .hotokeBody .hotokeTalk' + hotokeWordsRepeatNum).delay(5000).fadeOut('slow',function(){
						hotokeWordsRepeatNum++;
						hotokeWordsRepeat();
					});
				});
			}else {
				$('.hotokeBg .hotokeBody .hotokeTalk' + hotokeWordsRepeatNum).fadeIn('slow');
			}
		}
		
		//debug
		// $('.hotokeBg').show();
		//$('.hotokeBg .hotokeShout .hotokeShout1').show();
		//$('.hotokeBg .hotokeShout .hotokeShout2,.hotokeBg .hotokeShout .hotokeShoutBtn').show();
 	}

})(jQuery);