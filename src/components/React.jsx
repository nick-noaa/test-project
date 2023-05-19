// Imports
import { useState } from 'react';

function React() {
  const [name, setName] = useState('Team');
  const [num, setNum] = useState(0);

  return (
    <div style={{ padding: '10px' }}>
      Hello {name} This is a React Component!{' '}
      <button
        style={{
          padding: '10px 20px',
          margin: '0 20px',
          background: 'blue',
          color: '#fff',
          fontSize: '20px',
        }}
        onClick={() => setNum(prev => prev + 1)}
      >
        {' '}
        Button <span>{num}</span>
      </button>
    </div>
  );
}

export default React;
