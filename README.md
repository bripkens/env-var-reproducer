# Next.js App Router Env Var Support

This is a reproducer for a Next.js issue.

Also see https://github.com/vercel/next.js/discussions/50759

## How to reproduce

```sh
$ git clone https://github.com/bripkens/env-var-reproducer.git
$ cd env-var-reproducer
$ npm i
$ npm run build
```

## Problematic File

`src/app/users/page.tsx`

## Problematic Env Var

`API_ORIGIN`