

function Projects() {
    // Define ProjectItem component inside Projects component
    const ProjectItem = ({ title, description, link }) => (
        <div className="project">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">Project Link</a>
        </div>
    );

    return (
        <div className="section">
            <h1>Projects</h1>

            <ProjectItem
                title="Animal Guessing Game"
                description="This is a project in C++ that is an Animal guessing game. Think
                of an animal and by using a decision tree the program will try to guess 
                what you're thinking of."
                link="https://github.com/JacobCSUF/AnimalGuessingGame"
            />
            <ProjectItem
                title="Path Finder"
                description="This is a project in Python that creates a random maze with a size based
                on user input. Then it uses BFS to find the shortest path
                between a start and a goal."
                link="https://github.com/JacobCSUF/Path-Finder"
            />

            <div className="resume">
                <h2>Resume:</h2>
                <img src="assets/resume.png" alt="Resume" />
            </div>
        </div>
    );
}

export default Projects;
