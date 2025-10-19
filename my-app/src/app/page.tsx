
export default function Home() {
  return (
      <main style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#000',
        overflow: 'hidden'
      }}>
        <img
            src="/f-u-middle-finger.gif"
            alt="Hero"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              display: 'block'
            }}
        />
      </main>
  );
}
