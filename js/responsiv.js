$(function (){
    $('.side_bar_menu .side_item header').click(function (){
       $('.side_bar_menu .side_item header + .sub_side_menu:visible').hide();
       $(this).find('+ .sub_side_menu').show(); 
    });
});