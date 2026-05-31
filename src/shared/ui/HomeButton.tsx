import { Link } from 'react-router-dom'
import { CaretLeftOutlined } from '@ant-design/icons'

export const HomeButton = () => {
  return (
    <Link
      to="/home"
      className="rounded-lg 
      bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-700"
    >
      <CaretLeftOutlined />
      Назад на главную
    </Link>
  )
}
