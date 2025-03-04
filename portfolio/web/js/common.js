// JavaScript共用區
//20160921 by kevin

	var winHeight    = $(window).height();          //螢幕高度
	var win_W		 = $(window).width();			//螢幕寬度
	var headerHeight  = $(".header").innerHeight();;	//版頭高度
	var footerHeight = $(".footer").innerHeight();;	//版腳高度

	//浮動式top鍵
	$(window).load(function(){
		$(window).bind('scroll resize', function(){
			var $this = $(this);
			var $this_Top=$this.scrollTop();
			
			//當高度小於100時，關閉區塊 
			if($this_Top < 100){
				$('.topBtn').stop().animate({bottom:"-70px"});
			}
			if($this_Top > 100){
				$('.topBtn').stop().animate({bottom:"133px"});
			}
			

			//當高度小於100時，關閉區塊 
			if($this_Top < 100){
				$('.social_btn_area').stop().animate({bottom:"30px"});
			}
			if($this_Top > 100){
				$('.social_btn_area').stop().animate({bottom:"185px"});
			}
			
			
			
			//當視窗卷軸滑動時，版頭下緣陰影會有顯示、隱藏的動作
			//當高度小於55時，關閉區塊 
			if($this_Top < 5){
				$('.header').stop().removeClass("fixed");
			}
			if($this_Top > 5){
				$('.header').stop().addClass("fixed");
			}
		}).scroll();
	});
	
	//錨點平滑滾動效果
	$(function(){
		$('a[href*=#]').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
				if ($target.length) {
					var targetOffset = $target.offset().top;
					$('html,body').animate({
						scrollTop: targetOffset
					},
					1000);
					return false;
				}
			}
		});
	});
	
	//----------------------------------將主體添加最小高度 讓footer置底----------------------------------
	$(function(){
		function mainH() {
			winHeight    = $(window).height();
			headerHeight  = $(".header").outerHeight();
			footerHeight = $(".footer").outerHeight();
			
			$(".main").css({
				'padding-top': headerHeight -0+'px',
				//'min-height': winHeight-headerHeight-footerHeight-0+'px',		//"-30"這要隨每個案子不同調整
						//"-30"這要隨每個案子不同調整
			})
		}
		
		mainH();
		
		setTimeout(function(){
		mainH();
		},300)
		
		$(window).resize(function(e) {
			setTimeout(function(){
				mainH();
			},300)
		});
	
	});
	
	
	
	
	
	//----------------------------------手機版主按鍵收合----------------------------------
	$(function(){
		$(".menu_btn").click(function(e) {
            $(this).toggleClass("active");
			$(".header_rightArea").toggleClass("active");
			$("body").toggleClass("active");
			e.stopPropagation();
        });
		
		$(window).resize(function(e) {
			var win_W		 = $(window).width();			//螢幕寬度
            if ( win_W > 990 ) {
				$(".header_rightArea").removeClass("active");
				$("body").removeClass("active");
				$(".menu_btn").removeClass("active");
			}
        });
		
		$(".header_rightArea").click(function(e) {
            e.stopPropagation();
        });
		
		$(window).click(function(e) {
            $(".header_rightArea").removeClass("active");
			$("body").removeClass("active");
			$(".menu_btn").removeClass("active");
        });
	});
	
	







//----------------------------------主按鍵收合----------------------------------
$(function(){
	
	$(".nav").children("a").click(function(e) {
		$(this).siblings(".navOpen.mobile").slideToggle("fast");
		$(".nav").children("a").not(this).siblings(".navOpen.mobile").slideUp("fast");
		
		e.stopPropagation();
	});
	
	$(".navOpen.mobile").click(function(e) {
		e.stopPropagation();
	});
	
	$(window).click(function(e) {
		$(".navOpen.mobile").slideUp("fast");
	});
	

});		
	










	//----------------------------------手機板左選單收合----------------------------------
	$(function(){
		$(".left_title").click(function(e) {		
			if ( $(window).width() <= 990 ) { // Eric修改-手機版時才有收合效果 860隨每個案子修改
			$(this).toggleClass("active");
				
				$(".leftListArea").slideToggle("slow");
				$("body").toggleClass("active");
				e.stopPropagation();
            }
        });
        

		//  Eric 20190529修改 判斷當前左選單是否為手機版
		var mobile_left = false;
		$(window).load(function(){
			if ( $(window).width() <= 990 ) { 
				mobile_left = true;
            }
		});
        // Eric 20180314 返回pc時 左選單選單回覆展開狀態 20190529修改
       	$(window).resize(function(e) {
			//  860隨每個案子修改
			if ( $(window).width() > 990 ) { 
				$(".left_title").removeClass("active");
				$(".leftListArea").show();
				$("body").removeClass("active");
				mobile_left = false;
			}
			// Eric修改-手機版時才有收合效果 767隨每個案子修改 
			if ( $(window).width() <= 990) { 
				if(!mobile_left){ // Eric 20190529 增加判斷當前左選單是否為手機版
					$(".leftListArea").hide();
				}
				mobile_left = true;
				/*$(this).toggleClass("active");*/
				/*$(".leftListArea").slideToggle("slow");*/
				/*$("body").toggleClass("active");*/
            }
			e.stopPropagation();
     	});

	
	});


	//----------------------------------左選單第二層收合----------------------------------
	$(function(){
		$(".leftList").children("a").click(function(e) {
			$(".leftList").children("a").not(this).parent(".leftList").removeClass("active");
			$(this).parent(".leftList").toggleClass("active");
			
			$(".leftList").children("a").not(this).siblings(".leftList_open").slideUp();
            $(this).siblings(".leftList_open").slideToggle();
        });
	})	
	
	






//----------------------------------測試時隱藏連結用----------------------------------
$(function(){
	//$(".navbar a").attr("href" , "javascript:void(0)");
	// $(".mLI_btn input").attr("onclick" , "location='javascript:void(0)'");
});	
 




	

  //------------------------ 使手機版LINE 另開手機預設瀏覽器 20181226 -------------------
	if (/Line/.test(navigator.userAgent)) {
		var str=location.href
		if(str.indexOf("?")>-1)location.href =  location.href + '&openExternalBrowser=1';
		else location.href =  location.href + '?openExternalBrowser=1';
	}
 
 

$(function(){
});