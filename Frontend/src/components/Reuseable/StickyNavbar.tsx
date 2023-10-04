import "../../sass/components/stickyBar.scss";
export default function StickyNavbar() {
  window.onscroll = function () {
    stickyNavbar();
    scrollProgressBar();
  };
  const navbar = document.getElementById("navbarParent");
  const sticky = navbar?.offsetTop;
  function stickyNavbar() {
    if (sticky && window.scrollY >= sticky) {
      navbar?.classList.add("sticky");
    } else {
      navbar?.classList.remove("sticky");
    }
  }

  function scrollProgressBar() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const sike = document.getElementById("myBar");
    sike && (sike.style.width = scrolled + "%");
  }
}
