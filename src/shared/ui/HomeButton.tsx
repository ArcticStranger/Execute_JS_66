import { Link } from 'react-router-dom'
import { CaretLeftOutlined } from '@ant-design/icons'

export const HomeButton = () => {
  return (
    <Link to="/home" className="home-button">
      <CaretLeftOutlined />
      Назад на главную
    </Link>
  )
}
