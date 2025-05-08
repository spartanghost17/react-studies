export default function Task({ onDeleteTask, task, ...props }) {
  return (
    <li {...props} className="flex items-center justify-between my-4">
      <span>{task.text}</span>
      <button
        className="text-stone-700 hover:text-red-500"
        onClick={() => onDeleteTask(task.id)}
      >
        Clear
      </button>
    </li>
  );
}
