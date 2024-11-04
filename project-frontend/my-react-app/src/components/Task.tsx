interface TaskProps {
    title: string
}

export default function Task({ title }: TaskProps) {
  return (
    <div className="task-1">{title}</div>
  )
}   