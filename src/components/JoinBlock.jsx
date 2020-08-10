import React from 'react';
import axios from 'axios';

function JoinBlock({ onLogin }) {
  let roomId = '';
  const [userName, setUserName] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);

  const onEnter = async () => {
    if (!roomId || !userName) {
      return alert('Неверные данные');
    }
    const obj = {
      roomId,
      userName,
    };
    setLoading(true);
    await axios.post('/rooms', obj);
    onLogin(obj);
  };

  return (
    <div className="join-block">
      
      <input
        type="text"
        placeholder="Ваше имя"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button disabled={isLoading} onClick={() => {
        roomId = "Work";
        onEnter();
      }} className="btn btn-success">
        {isLoading ? "Work..." : "Work"}
      </button>
      <button disabled={isLoading} onClick={() => {
        roomId = "Flood";
        onEnter();
      }} className="btn btn-success">
        {isLoading ? "Flood..." : "Flood"}
      </button>
    </div>
  );
}

export default JoinBlock;
