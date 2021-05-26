
const tasks = [
    {
        id: 1,
        text: 'Doctor Appointment',
        day: 'Feb 5th at 2pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Love Appointment',
        day: 'Jan 5th at 2pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Other Appointment',
        day: 'Aug 5th at 2pm',
        reminder: true,
    },
]

const Tasks = () => {
    return (
        {
            tasks.map((task) => (
            <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
          ))}
    )
}
