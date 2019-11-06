function team() {
  let members = document.querySelectorAll(".team-member");
  let avatar = document.querySelector(".section-avatar");
  if (avatar == null) {
    return
  }

  const onClick = function (element) {
    avatar.style.backgroundImage = "url(\"" + element.getAttribute("src") + "\")";
  };

  members.forEach(element => {
    element.addEventListener('click', function () {
      onClick(element);

      members.forEach(el => {
        el.classList.remove("selected")
      });

      element.classList.add("selected");
      let memberName = document.querySelector("#member-name");
      if (memberName) {
        memberName.textContent = element.getAttribute("alt")
      }
    })
  });

}

function openGallery() {
  $.fancybox.open([
    {src: '/assets/images/gallery/4.JPG'},
    {src: '/assets/images/gallery/1.JPG'},
    {src: '/assets/images/gallery/2.JPG'},
    {src: '/assets/images/gallery/3.JPG'},
    {src: '/assets/images/gallery/5.JPG'},
    {src: '/assets/images/gallery/6.JPG'},
    {src: '/assets/images/gallery/7.JPG'},
    {src: '/assets/images/gallery/8.JPG'},
    {src: '/assets/images/gallery/9.JPG'},
    {src: '/assets/images/gallery/10.JPG'},
    {src: '/assets/images/gallery/11.JPG'},
    {src: '/assets/images/gallery/12.JPG'},
    {src: '/assets/images/gallery/13.JPG'},
    {src: '/assets/images/gallery/14.JPG'},
    {src: '/assets/images/gallery/15.JPG'},
    {src: '/assets/images/gallery/16.JPG'},
    {src: '/assets/images/gallery/17.JPG'},
    {src: '/assets/images/gallery/18.JPG'},
    {src: '/assets/images/gallery/19.JPG'},
    {src: '/assets/images/gallery/20.JPG'}
  ]);
}

$(function () {
  team();

  $("#open-gallery").on('click', openGallery);
});
