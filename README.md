# Notification Service

Handles email and system notifications.

Consumes events from order-service.

## Project structure

```
notification-service/
├── config/           # configuration files
├── docs/             # design and instructions
├── src/
│   ├── controllers/  # express route handlers
│   ├── models/       # data models/interfaces
│   ├── services/     # business logic
│   ├── utils/        # shared utilities (logger, etc.)
│   ├── index.ts      # app entrypoint
├── tests/
│   ├── unit/         # unit tests
│   └── integration/  # integration tests
├── tsconfig.json
├── jest.config.js
├── package.json
├── .eslintrc.js
```

## Getting started

1. Install dependencies: `npm install`
2. Run in development mode: `npm run dev`
3. Build: `npm run build`
4. Start service: `npm start`

## Configuration

The service uses the `config` package. Default values are located in `config/default.json`.

## Testing

See [docs/testing.md](./docs/testing.md) for guidance on unit and integration tests.

## Overview

A simple microservice built with TypeScript and Express to demonstrate industry-standard structure and testing practices.
