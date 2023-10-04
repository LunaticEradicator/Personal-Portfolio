import "../../sass/components/scrollAnimation.scss";

export default function ScrollAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hide");
  const hiddenElementsText = document.querySelectorAll(".hideText");
  hiddenElements.forEach((el) => observer.observe(el));
  hiddenElementsText.forEach((el) => observer.observe(el));
}
