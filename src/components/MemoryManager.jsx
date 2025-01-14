import React, { useState } from 'react';

export const MemoryManager = ({ memories, onAddMemory }) => {
  const [newMemory, setNewMemory] = useState('');

  const handleAddMemory = (e) => {
    e.preventDefault();
    if (newMemory.trim()) {
      onAddMemory({ content: newMemory });
      setNewMemory('');
    }
  };

  return (
    <div className="border rounded p-4 mb-4">
      <h2 className="text-xl mb-2">Memory Management</h2>
      
      {/* Add Memory Form */}
      <form onSubmit={handleAddMemory} className="mb-4">
        <input
          type="text"
          value={newMemory}
          onChange={(e) => setNewMemory(e.target.value)}
          className="border p-2 mr-2 rounded"
          placeholder="Add new memory..."
        />
        <button 
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Memory
        </button>
      </form>

      {/* Memory Display */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold mb-2">Short-term Memory</h3>
          {memories.slice(-5).map((memory, index) => (
            <div key={index} className="p-2 bg-gray-100 mb-2 rounded">
              <p>{memory.content}</p>
              <small className="text-gray-500">
                {new Date(memory.timestamp).toLocaleString()}
              </small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};