$(function(){

	/** 
	 * 共通パーツ
	 * スマホメニュー
	 */
	navigation();

	/** 
	 * 共通パーツ
	 * スムーススクロール
	 */
	// smoothscroll();
});

const navigation = () => {
	const head = $('.js-header'),
	menu = $('.js-header-menu');

	menu.on('click',function(){
		head.toggleClass('active');
	});
}

const smoothscroll = () => {
	$('a[href^="#"]').click(function(){
		const speed = 500,
		href= $(this).attr("href"),
		target = $(href == "#" || href == "" ? 'html' : href),
		position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
			return false;
	});
}
$('.p-guide-faq__answer').css("display", "none");
$('.p-guide-faq__question').click(function() {
  $(this).toggleClass('active');
  $(this).next('.p-guide-faq__answer').slideToggle();
  $('.p-guide-faq__answer').not($(this).next()).slideUp();
});

$('.panel-list').css("display", "none");
$('.p-items-archive__filter__panel span').click(function() {
  $(this).toggleClass('active');
  $(this).next('.panel-list').slideToggle();
  $('.panel-list').not($(this).next()).slideUp();
});
