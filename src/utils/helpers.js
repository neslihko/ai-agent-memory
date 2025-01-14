export const generateSessionId = () => {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };
  
  export const formatMemory = (memory) => {
    return {
      ...memory,
      timestamp: new Date().toISOString(),
      id: Math.random().toString(36).substr(2, 9)
    };
  };