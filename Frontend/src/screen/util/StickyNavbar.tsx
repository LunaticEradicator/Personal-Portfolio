export default function StickyNavbar() {
  window.onscroll = function () {
    stickyNavbar();
  };
  const navbar = document.getElementById("navbarParent");
  const sticky = navbar?.offsetTop;
  function stickyNavbar() {
    if (window.scrollY >= sticky) {
      navbar?.classList.add("sticky");
    } else {
      navbar?.classList.remove("sticky");
    }
  }
}
