// Skill component to display details of each skill
function Skill({ name, imageSrc, details }) {
  return (
    <li>
      <img src={process.env.PUBLIC_URL + imageSrc} alt={`${name} Icon`} />
      <h2>{name}</h2>
      <ul className="skill-details">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </li>
  );
}

// SkillList component to render the list of skills
function SkillList({ skills, skillDetails }) {
  return (
    <ul className="skills-list">
      {skills.map(skill => (
        <Skill
          key={skill}
          name={skill}
          imageSrc={`/assets/${Images[skill]}`}
          details={skillDetails[skill]}
        />
      ))}
    </ul>
  );
}

const Images = {
  "C++": "default_cpp_icon.png",
  "Python": "default_python_icon.png",
  "Git": "default_git_icon.png",
  "Visual Studio Code": "default_vscode_icon.png",
  "Data Structures": "default_data_structures_icon.png"
};

const defaultSkillsDetails = {
  "C++": ["2 years of experience", "First programming language I learned", "Completed my data structures class with it"],
  "Python": ["I started using python this semester", "Very easy syntax compared to c++", "My favorite language now"],
  "Git": ["Several group projects done using git", "Regular use of github", "Good knowledge of work flow"],
  "Visual Studio Code": ["Main text editor I use", "Very helpful tools when debugging", "Very easy to use"],
  "Data Structures": ["One of my favorite topics i've learned", "Deep understanding of them", "Coded a hashtable, vector and linked list from scratch"]
};

function Skills() {
  const skills = Object.keys(Images);

  return (
    <div className="skills-section">
      <h1>Skills</h1>
      <SkillList skills={skills} skillDetails={defaultSkillsDetails} />
    </div>
  );
}

export default Skills;
