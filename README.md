# MCP Demo Web App

A simple web application created via Model Context Protocol (MCP) to demonstrate how AI assistants can create and modify web applications. This project is designed to be a foundation for testing MCP browser tools integration.

## Features

- Clean, responsive design
- Interactive demo with user input handling
- Mock data retrieval capabilities
- System information display
- Prepared for MCP browser tools integration

## MCP Integration

This web application includes a global `mcpIntegration` object that can be used to interact with MCP browser tools in the future. The object exposes:

- `getData()`: Returns current application state data
- `setData(data)`: Allows MCP tools to update the application state

## Getting Started

To run this application:

1. Clone the repository
2. Open `index.html` in your web browser

No build process or server is required - this is a simple static web application.

## Technologies Used

- HTML5
- CSS3
- JavaScript (vanilla)

## About MCP

The [Model Context Protocol (MCP)](https://github.com/anthropics/anthropic-cookbook/tree/main/mcp) is an open standard created by Anthropic that enables connections between AI models and data sources or tools. It allows LLM agents to:

- Access real-time data
- Interact with external systems and tools
- Perform actions like searching, querying databases, or executing commands

## License

MIT

## Created By

This repository was created entirely through MCP interactions with Claude (Anthropic).