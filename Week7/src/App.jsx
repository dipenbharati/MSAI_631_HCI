import React from 'react';
import ImageGrid from './components/ImageGrid';
import { useNavigate } from 'react-router-dom';

function App({ category, setCategory }) {
  const navigate = useNavigate(); // hook to programmatically navigate
  return (
    <div className="d-flex">
      <div className="p-5" style={{ width: '220px', backgroundColor: '#f8f9fa' }}>
        <h5 style={{ cursor: 'pointer' }} onClick={() => setCategory('Decent')}>Decent</h5>
        <hr />
        <h5 style={{ cursor: 'pointer' }} onClick={() => setCategory('Hot')}>Hot</h5>
        <hr />
        <h5 style={{ cursor: 'pointer' }} onClick={() => setCategory('Sexy')}>Sexy</h5>
        <hr />
        <h5 style={{ cursor: 'pointer' }} onClick={() => navigate('/size')}>Size</h5> 
      </div>
      <div className="flex-grow-1 p-4">
        <ImageGrid category={category} />
      </div>
    </div>
  );
}

export default App;
