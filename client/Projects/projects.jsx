import React from 'react';

const projects = [
    { id: 1, name: 'Project One', description: 'This is the first project' },
    { id: 2, name: 'Project Two', description: 'This is the second project' },
    { id: 3, name: 'Project Three', description: 'This is the third project' }
];

const ProjectDisplay = () => {
    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectDisplay;