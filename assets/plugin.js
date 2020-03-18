require(['gitbook'], function(gitbook) {
  function scrollToPage() {
    const currentPagePath = location.pathname.substr(location.pathname.lastIndexOf('/')+1)
    const dom = document.querySelector(`a[href="${currentPagePath}"]`)
    document.body.onload = () =>{
      dom.scrollIntoView({
        behavior: "smooth", block: "center", inline: "nearest"
      })
    }
  }
  scrollToPage()
})




