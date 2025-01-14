import { ZepClient } from '@getzep/zep-js';

class ZepService {
  constructor() {
    this.client = new ZepClient(process.env.REACT_APP_ZEP_API_URL);
  }

  async createSession(metadata = {}) {
    try {
      return await this.client.createSession({
        sessionId: Date.now().toString(),
        metadata
      });
    } catch (error) {
      console.error('Error creating session:', error);
      throw error;
    }
  }

  async addMemory(sessionId, memory) {
    try {
      const session = await this.client.getSession(sessionId);
      await session.addMemory(memory);
      return true;
    } catch (error) {
      console.error('Error adding memory:', error);
      throw error;
    }
  }
}

export default new ZepService();