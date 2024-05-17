
//Introduction page with a intro paragraph and a way to contact me at the bottom
function Introduction() {
  return (
    <div className="section">
      <h1>Welcome to My Portfolio</h1>
      <div className="image-container">
        <img src="assets/pc_image.jpg" alt="Person working on a PC" className="pc-image" />
      </div>
      <p>Hello, I'm Jacob Caranci, a computer science student at Cal State Fullerton. I've been 
        enjoying learning all about it a ton and im motivated to further increase my knowledge outside of the classroom.
        Currently im still exploring what I want to specialize in but no matter what I always put 100% effort into whatever im doing. </p>
      <div className="csuf-icon-container">
        <img src="assets/csuf_icon.png" alt="Cal State Fullerton Icon" className="csuf-icon" />
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/jacob-caranci-3164832b3/" target="_blank" rel="noopener noreferrer">
          <img src="assets/linkedin.png" alt="LinkedIn" width="30" height="30" />
        </a>
        <a href="https://github.com/JacobCSUF" target="_blank" rel="noopener noreferrer">
          <img src="assets/github.png" alt="GitHub" width="30" height="30" />
        </a>
        <a href="https://www.twitch.tv/nemmo111" target="_blank" rel="noopener noreferrer">
          <img src="assets/twitch.png" alt="Twitch" width="30" height="30" />
        </a>
      </div>
      <div className="contact">
        <p>Feel free to contact me via email: <a href="mailto:carancijacob@csu.fullerton.edu">carancijacob@csu.fullerton.edu</a></p>
      </div>
    </div>
  );
}

export default Introduction;
