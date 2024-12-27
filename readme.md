# Description

## For development:
* Nodemon is used to monitor source files and rebuild them to build folder.
* Browser-sync can be started (npm run dev) to auto-refresh page when new bundles are built.
* (see package.json scripts)

## Setup
```npm run setup```

## Run Dev:
```npm run dev```
* Starts watching ./src/**/* for any changes and rebuilds
* Also starts a browser-sync session and watcher, which reload with any changes to the ./build/**/*
* Open http://localhost:3000 for the hot ./build

Or:
vite build
vite preview

## View the site without dev'ing:
```npm run serve```
* Will serve the files in ./build (```npm run build``` to create/update them)


# Data organization:

ApiService.get('entries?orderBy=createdAt');