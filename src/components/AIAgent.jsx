import React, { useState, useEffect } from 'react';
import { MemoryManager } from './MemoryManager';
import { UserSession } from './UserSession';
import { ZepClient } from '@getzep/zep-js';

const AIAgent = () => {
  const [session, setSession] = useState(null);
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    initializeZepClient();
  }, []);

  const initializeZepClient = async () => {
    try {
      const client = new ZepClient(process.env.REACT_APP_ZEP_API_URL || 'http://localhost:8000');
      // Initialize session
      const newSession = await client.memory.createSession({
        sessionId: Date.now().toString(),
        metadata: {
          type: 'user_session',
          timestamp: new Date().toISOString()
        }
      });
      setSession(newSession);
    } catch (error) {
      console.error('Failed to initialize Zep client:', error);
    }
  };

  const handleAddMemory = (memory) => {
    setMemories(prev => [...prev, { ...memory, timestamp: Date.now() }]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">AI Agent System</h1>
      <MemoryManager 
        memories={memories} 
        onAddMemory={handleAddMemory}
      />
      <UserSession session={session} />
    </div>
  );
};

export default AIAgent;