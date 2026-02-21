# Testing Guide

This document describes how to write, run, and structure tests for the notification service.

## Testing frameworks

- **Jest** is used as the test runner and assertion library.
- **ts-jest** compiles TypeScript on the fly.
- **Supertest** is used for HTTP integration tests.

## Directory layout

```
tests/
├── unit/         # isolated unit tests for individual functions/classes
└── integration/  # tests that exercise the HTTP API and may start the server
```

### Writing unit tests

- Place unit tests alongside the code under test (e.g., `tests/unit/notificationService.test.ts`).
- Mock external dependencies when appropriate.
- Aim for high coverage on business logic.

### Writing integration tests

- Use `supertest` to make HTTP requests to the Express app exported from `src/index.ts`.
- Avoid binding the server to a port; tests should import the `app` object directly.

### Running tests

- Execute `npm test` to run all tests with coverage.
- Use `npm run test -- --watch` during development for watch mode.

### Coverage

- Coverage reports are generated under `coverage/`.
- The Jest configuration enforces coverage thresholds; adjust `jest.config.js` as needed.

## Sample test

```ts
import { NotificationService } from '../../src/services/notificationService';

describe('NotificationService', () => {
  it('should set sentAt when sending', async () => {
    const service = new NotificationService();
    const notif = await service.send({
      id: '1',
      type: 'email',
      recipient: 'test',
      message: 'hello',
    });
    expect(notif.sentAt).toBeDefined();
  });
});
```

## Tips

- Keep tests fast and deterministic.
- Use instance injection or dependency inversion to replace network or I/O in tests.
- Ensure test data is reset between runs.
