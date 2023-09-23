import "../sass/components/footer.scss";
function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="footer">Portfolio @ {currentYear}</footer>;
}

export default Footer;
