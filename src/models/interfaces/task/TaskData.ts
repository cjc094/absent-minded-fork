interface TaskData {
    label: string;
    description: string;
    deadline: Date | null;
    start: Date | null;
    url?: string;
}

export default TaskData;
