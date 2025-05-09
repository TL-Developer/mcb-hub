# mcb-hub

## Pré-requisitos

- Node.js na versão **22.15.0**

## Build dist folder

```npm run build```

## Instalação do MCP Server

Para instanciar o MCP server, siga os passos:
1. Acesse o menu
2. Vá em Cursor Settings
3. Selecione MCP
4. Clique em "Add new MCP server"

```json

{
  "mcpServers": {
    "mcp-server-users": {
      "command": "node",
      "args": ["C:/Git/mcb-hub/src/mcp/dist/index.js"]
    }
  }
}

```

## Run server users

```cd src/api/ && node server.js```


## Prompt

Altere para calude-sonnet

```liste todos os usernames dos usuarios usando o mcp-server-users```

```criar um novo usuario com o username Tiago Lima```

```liste todos os usernames dos usuarios usando o mcp-server-users```
