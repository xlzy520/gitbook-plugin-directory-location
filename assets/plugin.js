require(['gitbook', 'jquery'], function(gitbook, $) {
  function scrollToPage(scrollTime) {
    var currentPagePath = location.pathname.substr(location.pathname.lastIndexOf('/')+1)
    var dom = $(`a[href="${currentPagePath}"]`)[0]
    document.body.onload = () =>{
      $(".book-summary").animate({
        scrollTop: dom.offsetTop - (window.innerHeight - dom.offsetHeight) / 2
      }, scrollTime || 300)
      // dom.scrollIntoView({
      //   behavior: "smooth", block: "center", inline: "nearest"
      // })
    }
  }
  gitbook.events.bind('start', function (e, config) {
    var scrollTime = config.scrollTime
    scrollToPage(scrollTime)
  })
 
})




