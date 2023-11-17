$(function () {
  /* Slick Slider - Welcome */
  $('.slide').slick({
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true, 
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    pauseOnHover: false
  });

  /* TypeIt - Welcome */
  new TypeIt("#typing", {
    speed: 160,
    waitUntilVisible: true,
    loop: false
  })
  .type("언제 어디서든 협업하세요.") // 타이핑
  .pause(100) //멈춤
  .move(-6) // 이동(글자수)
  .pause(500)
  .type("소통하고 ")
  .move(6) 
  .go(); // 실행

  /* Header Trigger */
  $('.trigger').click(function(){
    $(this).toggleClass('active') /* 햄버거랑 x 버튼 클릭으로 바꿀 수 있음 */
    $('.menu').toggleClass('active')
  })
  $('.menu a, .welcome, .logo').click(function(){
    $('.menu, .trigger').removeClass('active')
  })
})