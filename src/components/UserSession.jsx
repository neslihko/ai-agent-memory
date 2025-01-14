import React from 'react';

export const UserSession = ({ session }) => {
  return (
    <div className="border rounded p-4">
      <h2 className="text-xl mb-2">User Session</h2>
      <div>
        <p>Session ID: {session?.sessionId || 'Not initialized'}</p>
        <p>Status: {session ? 'Active' : 'Inactive'}</p>
        <p>Created: {session ? new Date(session.metadata?.timestamp).toLocaleString() : 'N/A'}</p>
      </div>
    </div>
  );
};