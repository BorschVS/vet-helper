# vetHelper

```
git clone https://github.com/your-username/vet-helper.git
cd vet-helper
pnpm install
```

## Running the Complete Stack

To run the frontend, backend, and database all at once:
```
pnpm dev

```

## Frontend Setup

### Development Mode
```
pnpm --filter front dev
```
This will start the development server with hot-reload enabled. Access the application at http://localhost:5173 (or the port shown in your terminal).

### Production Build
```
pnpm --filter front build
```

## Backend Setup

### Development Mode
```
pnpm --filter back start:dev
```

### Production Setup
```
pnpm --filter back build
pnpm --filter back start:prod
```

### Package Manager Issues

This project uses pnpm for package management. If you encounter any issues:

```
pnpm store prune
pnpm install
```

### Run db

```
pnpm run db:push
```