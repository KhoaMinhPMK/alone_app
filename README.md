# Alone Monorepo

This is the monorepo for the **Alone** project, an ecosystem of mobile applications for singles and couples.

## Structure

- **apps/**
  - `mobile-alone`: React Native application (Android).
  - `backend-api`: NestJS Backend API.
- **packages/**
  - `shared-types`: Shared TypeScript interfaces and types.
  - `database-schema`: Database schema definitions and migrations.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Build Shared Packages**:
    ```bash
    npm run build --workspace=@alone/shared-types
    ```

## Development

-   **Backend**: Navigate to `apps/backend-api` and run `npm run start:dev`.
-   **Mobile**: Navigate to `apps/mobile-alone` and run `npm run android`.

## Architecture

Refer to `docs/Architecture.md` for detailed architectural decisions.
