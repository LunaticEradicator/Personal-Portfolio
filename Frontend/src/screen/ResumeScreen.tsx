import "../sass/screens/resumeScreen.scss";

export default function ResumeScreen() {
  return (
    <div className="resume">
      <iframe className="resume__inner" src="/Yedukrishnan_Resume.pdf"></iframe>
      {/* <iframe
        src="http://docs.google.com/gview?url=/resume.pdf&embedded=true"
        className="resume__inner"
        // frameborder="0"
      ></iframe> */}
      {/* <embed  src="/Resume.pdf" /> */}
    </div>
  );
}
