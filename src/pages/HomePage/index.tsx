import { CircleScene } from '../../shared/ui/CircleScene';

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
          Изучай программирование через интерактивные уроки с геймификацией
        </p>
      </div>
    </>
  );
};
