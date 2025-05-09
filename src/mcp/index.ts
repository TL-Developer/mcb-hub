import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { getUsers, createUsers } from './tool';
import { z } from 'zod';

const API_BASE_URL = 'http://localhost:3000';

async function main() {
  try {
    const server = new McpServer({
      name: 'rest-api-tools',
      version: '1.0.0',
      description: 'A tool for interacting with a REST API',
    });

    server.tool(
      'getUsers',
      {},
      async () => {
        const users = await getUsers(API_BASE_URL);
        
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(users),
            },
          ]
        }
      },
    );

    server.tool(
      'createUsers',
      {
        username: z.string().min(1, 'Username is required'),
      },
      async (args) => {
        const user = await createUsers(API_BASE_URL, args);
        
        return {
          content: [
            {
              type: 'text',
              text: `User ${JSON.stringify(user?.username)} created successfully`,
            },
          ]
        }
      },
    );

    const transport = new StdioServerTransport();
    await server.connect(transport);
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

main().catch((error) => {
  console.error('Error starting server:', error);
  process.exit(1);
});