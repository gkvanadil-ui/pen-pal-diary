import React, { useState } from 'react';

const App = () => {
  const [apiKey, setApiKey] = useState(localStorage.getItem('ddb_api_key') || '');
  const [persona, setPersona] = useState(localStorage.getItem('ddb_persona') || '');

  const saveSettings = () => {
    localStorage.setItem('ddb_api_key', apiKey);
    localStorage.setItem('ddb_persona', persona);
    alert('설정이 저장되었습니다! 이제 편지를 쓸 수 있습니다.');
  };

  return (
    <div className="min-h-screen bg-[#F7F4EB] p-6 text-[#5D4037] flex flex-col items-center">
      <div className="w-full max-w-md bg-white rounded-[20px] shadow-lg p-6">
        <h1 className="text-2xl font-bold text-[#8D6E63] mb-6">DDB Diary 설정</h1>
        
        <div className="space-y-4">
          <label className="block font-medium">OpenAI API Key</label>
          <input 
            type="password" 
            className="w-full p-3 border rounded-xl"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="sk-..."
          />

          <label className="block font-medium">AI 페르소나 (말투/성격)</label>
          <textarea 
            className="w-full p-3 border rounded-xl h-40"
            value={persona}
            onChange={(e) => setPersona(e.target.value)}
            placeholder="여기에 AI 캐릭터의 설정을 길게 적어주세요."
          />

          <button 
            onClick={saveSettings}
            className="w-full py-4 bg-[#8D6E63] text-white rounded-xl font-bold text-lg"
          >
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
