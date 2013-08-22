// JavaScript Document
$(document).ready(function(){
	
	var userAgent = navigator.userAgent.toLowerCase(); 
	$.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase()); 
	
	if($.browser.chrome){
		userAgent = userAgent.substring(userAgent.indexOf('chrome/') +7);
		userAgent = userAgent.substring(0,userAgent.indexOf('.'));
		$.browser.version = userAgent;
		$.browser.safari = false;
	}
	
	if($.browser.safari){
		userAgent = userAgent.substring(userAgent.indexOf('version/') +8);
		userAgent = userAgent.substring(0,userAgent.indexOf('.'));
		$.browser.version = userAgent;
		$('.jqTransformSelectWrapper').each(function(){
			var iWidth = $(this).width();
			$(this).css({
				'width': iWidth-23
			});	
		});
		
		$('.jqTransformSelectWrapper ul').each(function(){
			var iWidth = $(this).width();
			$(this).css({
				'width': iWidth-23
			});	
		});
	}
	
	$('a.is-active').each(function(){
		if($(this).parents('.box__title').length){
			$(this).parents('li').addClass('is-actice-list');	
		}	
	});

	//Select Level
	$('.select-level').live('change',function(){
		switch ($(this).val())
		{
			case 'Levels 1':
				$('.box__level-data tr').hide();
				$('.box__level-data .lv1').parents('tr').show();
				break;
			case 'Levels 2':
				$('.box__level-data tr').hide();
				$('.box__level-data .lv2').parents('tr').show();
				break;
			case 'Levels 3':
				$('.box__level-data tr').hide();
				$('.box__level-data .lv3').parents('tr').show();
				break;
			case 'Levels 4':
				$('.box__level-data tr').hide();
				$('.box__level-data .lv4').parents('tr').show();
				break;
			case 'Levels 5':
				$('.box__level-data tr').hide();
				$('.box__level-data .lv5').parents('tr').show();
				break;
			case 'Levels 6':
				$('.box__level-data tr').hide();
				$('.box__level-data .lv6').parents('tr').show();
				break;
			case 'Levels 7':
				$('.box__level-data tr').hide();
				$('.box__level-data .lv7').parents('tr').show();
				break;
			case 'Levels 8':
				$('.box__level-data tr').hide();
				$('.box__level-data .lv8').parents('tr').show();
				break;
			case 'Levels 9':
				$('.box__level-data tr').hide();
				$('.box__level-data .lv9').parents('tr').show();
				break;
			case 'Levels 10':
				$('.box__level-data tr').hide();
				$('.box__level-data .lv10').parents('tr').show();
				break;
			default:
				$('.box__level-data tr').show();
		}
	});
	//Game Process
	$('.box__game-data .process-inner').each(function(){
		var processWidth = $(this).parents('.process').width();
		var process = $(this).parents('.process').find('.process-percent').text().replace('%','')/100;
		$(this).css({
			width: processWidth*process
		});
		if($(this).parents('.process').find('.process-percent').text() == '100%'){
			$(this).parents('.process').find('.process-percent').text('Completed');	
		}
	});
	//Silder
	if($('.js-jcarousel').length){
		$('.js-jcarousel').jcarousel({
			wrap: 'circular',
			scroll: 1
		});
	}
	//Modal For Box
	$('.box__mark').css("opacity", "0.9");
	if($.browser.msie&&($.browser.version == "7.0")){
		$('.box__mark').each(function(){
			var iWidth = $(this).parent().width();
			var iHeight = $(this).parent().height();
			$(this).css({
				'width': iWidth
			});
		});
	}
	$('.box__modal').each(function(){
		var iWidth = $(this).parent().find('.box__mark').width();
		var iHeight = $(this).parent().find('.box__mark').height();
		boxTop = (iHeight - $(this).height())/2;
		boxLeft = (iWidth - $(this).width())/2;
		$(this).css({
			'margin': boxTop + 'px auto 0 ' + boxLeft + 'px'	
		});	
	});
	
	//Navigation
	$('.box__home-switch .box__title-navi li a').live('click',function(){
		var i = $('.box__home-switch .box__title-navi li a').index($(this));
		$('.box__home-switch .switch-details--article').hide();
		$('.box__home-switch .switch-details--article').eq(i).show();
		$('.box__home-switch .box__title-navi li a').removeClass('is-active');
		$(this).addClass('is-active');
		$('.box__home-switch .box__title-navi li').removeClass('is-actice-list');	
		$('a.is-active').each(function(){
			if($(this).parents('.box__title').length){
				$(this).parents('li').addClass('is-actice-list');	
			}	
		});	
	});
	
	//Scroll
	$('.js-next').live('click',function(){
		$('.box__navi-scroll ul').animate({
			left: '-66px'
		},function(){
			$('.js-prev').show();
			$('.js-next').hide();
		});
	});
	
	$('.js-prev').live('click',function(){
		$('.box__navi-scroll ul').animate({
			left: '0'
		},function(){
			$('.js-prev').hide();
			$('.js-next').show();
		});
	});
	
	$('.box__navi-scroll li a').live('click',function(){
		var i = $('.box__navi-scroll li a').index($(this));
		$('.box__navi-scroll li a').removeClass('is-active');
		$(this).addClass('is-active');	
		$('.box__navi-content table').hide();
		$('.box__navi-content table').eq(i).show();
	});
	
	$('.l-whole-content .box__title-navi a').live('click',function(){
		var i = $('.l-whole-content .box__title-navi li a').index($(this));
		$('.l-whole-content .l-switch-details').hide();
		$('.l-whole-content .l-switch-details').eq(i).show();
		$('.l-whole-content .box__title-navi li a').removeClass('is-active');
		$(this).addClass('is-active');
		$('.l-whole-content .box__title-navi li').removeClass('is-actice-list');	
		$('a.is-active').each(function(){
			if($(this).parents('.box__title').length){
				$(this).parents('li').addClass('is-actice-list');	
			}	
		});	
		isLoading = false;
		isNoMore = false;
		$(window).bind('scroll', onScrollLoading);
	});
	
	//Toggle Filter
	$('.l-switch-details .js-filter').live('click',function(){
		if($(this).parents('.l-switch-details').hasClass('is-filter-show')){
			$(this).parents('.l-switch-details').removeClass('is-filter-show');	
		}else{
			$(this).parents('.l-switch-details').addClass('is-filter-show');		
		}
	});
	
	$('.achievements__container .filter-button li a').live('click',function(){
		var i = $('.achievements__container .filter-button li a').index($(this));
		$('.achievements__container .filter-button li a').removeClass('is-active');
		$(this).addClass('is-active');
		$('.achievements__container .achievements__data table').hide();
		$('.achievements__container .achievements__data table').eq(i).show();
		isLoading = false;
		isNoMore = false;
		$(window).bind('scroll', onScrollLoading);
	});
	
	if($('.js-quests-table').length > 0) {
		generateQuestsData();
		renderData();
	}
	
	$('.content--forum-adv-search .js-submit-forum-adv-search').live('click',function(){
		if(!$('.content--forum-adv-search .box--forum-adv-search__results').is(":hidden")){
			$('.content--forum-adv-search .box--forum-page').css({
				padding: 0,
				backgroundImage: 'none'	
			});
		}	
	});
	
	//Reset
	$('.honors__container .js-reset-button').live('click',function(){
		$('.honors__container .text').val('');
	});
	
	$('.js-profile-friends').delegate('.image-wrapper, .friend-request__photo, .username', 'mouseover', function() {
		if ($(this).hasClass('score-wrapper')) {
			return;
		}
		var popup = $('.firend-request__info:first');
		popup.show();
		
		
		var parent = $(this).parents('.js-friend-request').eq(0);
		var offset = parent.offset();
		
		if (parent.hasClass('current-user')) {
			popup.addClass('firend-request__info--self');
		} else {
			popup.removeClass('firend-request__info--self');
		}

		if (parent.parent().parent().hasClass('is-me')) {
			isFriendMode(true);
		} else {
			isFriendMode(false);
		}
		$('.is-tor-hover').removeClass('is-tor-hover');
		var tr = $(this).parents('tr').eq(0);
		if (tr.hasClass('is-completed')) {
			tr.addClass('is-tor-hover');
			isFriendMode(true);
		} else if (tr.hasClass('is-running')) {
			isFriendMode(false);
			tr.addClass('is-tor-hover');
		}

		
		var step_l = 210;
		var step_t = 26;
		
		if (parent.hasClass('alt')) {
			step_l -= 28;
			step_t -= 26;
		}
		if (parent.hasClass('filter-badge')) {
			step_t -= 22;
			step_l -= 41;
		}
		if (parent.hasClass('user-set')) {
			step_t -= 30;
			step_l -= 71;
		}
		
		if (parent.hasClass('is-td-col')) {
			step_t -= 20;
		}
		popup.css({
			left: offset.left + step_l,
			top: offset.top + step_t
		});
		if (window.timer) {
			window.clearTimeout(window.timer);
		}
	});
	
	$(".js-forum-remove-selected-rows,.js-forum-remove-hovered-row").click(function(){
		if($.browser.msie&&($.browser.version == "7.0" || $.browser.version == "8.0")){
			$('.forum-filter').each(function(){
				if(!$(this).next().next().is('table')){
					$(this).remove();
				}	
			});
		}
	});
	
	$('.forum-thread-post-row .forum-thread__attachments .box--forum-thread__attachment-item .button').css({
		width: 79,
		fontSize: 14	
	});

	//Navigation
	$('.l-navigationHeader li:last').addClass('navigation__last');

	//PIE
	if (window.PIE) {
        $('.stormbound-details__section,.switch-details--article,.comments-section,.current-stats-section,.box--honors .box__honors-data,.box--active-user .box__user-data,.box--achievements__content,.box--month-player .box__user-data,.box--game-result .box__game-data,.box--quests .box__quests-data,.box--play-news .box__play-news-data,.box--inbox .box__inbox-data,.box--top-story .box__stories-data,.box--about-game .box__game-data,.box--character-profile .box__profle-data,.challange__container .badges__data,.honors__container .honors__data,.achievements__container .achievements__data,.box--latest-game-result .box__result-data,.box--news .box__news-data,.box--news-category ul,.news-details__content,.box__news-preview-data,.content--forum .listing-tbl,.forum-watch-empty,.forum-thread-post-row__display .forum-thread-post-row__content,.box--forum-preview-edit .forum-thread-post-row .forum-thread-post-row__content,.forum-thread-post-row .forum-thread-post-row__admin-post,.forum-thread-post-row .forum-thread-post-row__content,.forum-adv-search,.view-tournaments .tournaments-table, .forum-no-permission-alert,.tournaments-details__content,.box__games-data,.tournamments-show-completed .my-tournaments--completed,.tournamments-show-active .my-tournaments--active,.friend_data,.box__modal,.popup--uploading-forum-attachment .popup__content-mid,.header-popup__content .middle,.box--game-result .box__game-data table .process .process-inner,.box__modal,.popup--login .popup__content-mid').each(function(){
            PIE.attach(this);
        });
    }
	
});

function generateQuestsData() {
	tableData = [];
	var now = new Date();
	
	var isLogin = $('.welcome').length > 0;
	var link = (isLogin)?'quests-details-loggedin':'quests-details';
	for (var i = 1; i < 18; i++) {
		var random = Math.random() * 25 * 3600 * 24000;
		var start = new Date(now.getTime() - random);
		random = Math.random() * 25 * 3600 * 24000;
		var end = new Date(now.getTime() + random);
		var status = (Math.random() > 0.5)?'1':'2';
		var joined = (Math.random() > 0.5);
		var eligible = (Math.random() > 0.5)?'<span class="eligible">YES</span>':'<span>NO</span>';

		var obj = {
			'Name': 'NameLorem Ipsum ' + i,
			'Participants': Math.floor(Math.random() * 50),
			'Start Date': start,
			'End Date': end,
			active: true,
			status: status,
			join: joined
		}
		obj.html = '<tr><td class="js-friend-request is-td-col"><a href="' + link + 
					'.html" class="my-tournaments-name username"><img src="./asset/asset23.png" alt="" />' + 
					obj['Name'] + '</a></td><td class="align-center">'+ eligible +'</td><td>Lorem ipsum dolor sit...</td><td>' + $.format.date(start, 'dd/MM/yyyy hh:mm:ss') + 
					'</td><td>' + $.format.date(end, 'dd/MM/yyyy hh:mm:ss') + 
					'</td><td>';
		obj.html += '<span class="winner">$0000</span><span class="second-place">$0000</span></td></tr>';
		tableData.push(obj);
	}
}