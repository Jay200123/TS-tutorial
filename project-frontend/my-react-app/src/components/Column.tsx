
interface ColumnProps {
  children: string
}

export default function Column ({ children }: ColumnProps) {
  return <div className='col-1'>{children}</div>
}
