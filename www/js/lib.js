$(document).ready(function($) {
    // 头部搜索框
    $('.btn-search').click(function(event) {
        /* Act on the event */
        if($('.form-search').hasClass('active') && $('.inp-search').val() !== ''){
            $('.form-search').submit();
        }else{
            $('.inp-search').addClass('show').animate({'width': 120});
            $('.form-search').addClass('active');
            return false;
        }
        event.stopPropagation();
    });
    $('.inp-search').click(function(event) {
        /* Act on the event */
        event.stopPropagation();
    });
    $('body').on('click', function(event) {
        /* Act on the event */
        $('.inp-search').animate({'width': 0}, function(){$(this).removeClass('show')});
        $('.form-search').removeClass('active');
    });

    // 选项卡 鼠标点击
    $(".TAB_CLICK li").click(function(){
      var tab=$(this).parent(".TAB_CLICK");
      var con=tab.attr("id");
      var on=tab.find("li").index(this);
      $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
      $(con).eq(on).show().siblings(con).hide();
    });
    $(".TAB_CLICK li").filter(':first').trigger('click');
});