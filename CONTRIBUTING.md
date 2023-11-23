# Contributing

Thanks for your interest in contributing to ahmeds12. We're happy to have you here.

Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

If you need any help, feel free to reach out to [@ahmed_oww](https://twitter.com/ahmed_oww).

## About this repository

- We use [pnpm](https://pnpm.io) as a package manager.
- We use [tailwindcss](https://tailwindcss.com) for styling components
- We use [contentlayer](https://contentlayer.dev/) for managing crafts

## Structure

This repository is structured as follows:

```
src
├── app
│   ├── (routes)
│   │   │── craft
│   │   │   │── [...slug]
│   │   │   │    └── page.tsx
│   │   │   └── page.tsx
│   │   │── photos
│   │   │   └── page.tsx
│   │   │── projects
│   │   │   └── page.tsx
│   │   └── page.tsx
│   └── layout.tsx
│── components
│   └── ui
│   │   │── button.tsx
│   │   └── dialog.tsx
│   └── other components
│── config
│── content
│── hooks
│── lib
│   └── utils.ts
└── styles
nextjs.config.mjs
```

## Development

### Fork this repo

You can fork this repo by clicking the fork button in the top right corner of this page.

### Clone on your local machine

```bash
git clone https://github.com/your-username/ahmeds12.git
```

### Navigate to project directory

```bash
cd ahmeds12
```

### Create a new Branch

```bash
git checkout -b my-new-branch
```

### Install dependencies

```bash
pnpm install
```

#### Examples

1. To run the `ahmeds12` website:

```bash
pnpm dev
```

## Crafts

The crafts for this projects is located in `src/content` folder. You can write any craft in category of post, prototype or video.

#### Instructions

To be able to create new craft or modify, run the following command on a separate terminal besides the dev server of nextjs.

```bash
pnpm contentlayer dev
```

This will spin up the local development server of [contentlayer](https://contentlayer.dev).

While creating new crafts make ensure that

- You make changes to all the styles
- Organize all your components & files as instructed

### Structures

- The video type don't have any markdown body. It shows up in `/craft` page and has to separate page for it. It depends on it's provided metadata. The metadata structure of `video` type is:

```md
---
title:
description: e.g. by Ahmed
video: /assets/{FOLDER_NAME}/
poster: /assets/{FOLDER_NAME}/poster.{jpg,png,webp}
date: e.g. 01-10-23
---
```

The files are in `src/content/videos/**.{md,mdx}` and you must organize all the assets in `public/assets/{FOLDER_NAME}/YOUR_ASSETS`.

- To create a new `post` article you should have the following metadata above the page.

```md
---
title:
description:
image: /assets/{FOLDER_NAME}/
date: e.g. November 2023
published: true
---
```

The files are in `src/content/posts/**.{md,mdx}` and you must organize all the assets in `public/assets/{FOLDER_NAME}/YOUR_ASSETS`.

- To create a new `prototype` article you should have the following metadata above the page.

```
---
title:
description:
image: /assets/{FOLDER_NAME}/
date: e.g. November 2023
published: true
---
```

The files are in `src/content/prototype/**.{md,mdx}` and you must organize all the assets in `public/assets/{FOLDER_NAME}/YOUR_ASSETS`.

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `add`: all changes that introduce completely new files of components, utils, etc..
- `update`: all changes that updates any existing files
- `feat / feature`: all changes that introduce completely new code or new
  features
- `style`: all changes that changes any styles
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the avatar component`
