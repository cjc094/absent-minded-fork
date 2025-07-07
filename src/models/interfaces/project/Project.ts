interface Project {
    id: string;
    name: string;
    ownerId: string;
    participants: string[];
    rootTask: string;
    url?: string; 
}

export default Project;
