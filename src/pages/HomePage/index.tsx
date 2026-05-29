import { CircleScene } from '../../shared/ui/CircleScene';
import htmlcssImg from '../../assets/cards/htmlcss.jpg'
import jsBaseImg from '../../assets/cards/jsBase.jpg'
import jsAdvancedImg from '../../assets/cards/jsAdvanced.jpg'

interface Card {
  id: number
  title: string
  image: string
}

const cards: Card[] = [
  {
    id: 1,
    title: 'HTML/CSS',
    image: htmlcssImg,
  },
  {
    id: 2,
    title: 'JS_Base',
    image: jsBaseImg,
  },
  {
    id: 3,
    title: 'JS_Advanced',
    image: jsAdvancedImg,
  }
]

export const HomePage = () => {
  return (
    <>
      <CircleScene />
      <div style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          textShadow: '0 0 10px rgba(0, 255, 255, .7)'
        }}>
          <span style={{ color: '#f7df1e' }}>JavaScript</span>
          <span style={{ color: '#10bc52'}}> &</span>
          <span style={{ color: '#3178c6', marginLeft: '0.5rem' }}>TypeScript</span>
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#a0a0b0',
          maxWidth: '400px'
        }}>
          Бета-тест справочника по JS/TS
          <br />
          <br />
          Сделано автором: github.com/ArcticStranger
        </p>
      </div>
      
<div className="grid grid-cols-3 gap-4 p-4">
         {cards.map((card) => (
        <div
          key={card.id}
          className="
            rounded-2xl
            overflow-hidden
            border
            border-zinc-200
            shadow-sm
            bg-white
          "
        >
          <img
            src={card.image}
            alt={card.title}
            className="
              w-full
              h-48
              object-cover
            "
          />

          <div className="p-4">
            <h2 className="text-xl font-semibold text-black-500">
              {card.title}
            </h2>
          </div>
        </div>
      ))}
       </div>
    </>
  );
};
