# **<span style="color:#41b883;">Vue</span> ![vue](https://user-images.githubusercontent.com/58358235/196698159-f8a74305-3f3b-4c9b-97ba-99b066541b3c.png) <span style="color:#9961FE">Vite</span> ![vitejs](https://user-images.githubusercontent.com/58358235/196697914-57326a06-0e5c-406e-839c-d970c9ce7aa6.png) <span style="color:#3178C6">Typescript</span> ![typescript](https://user-images.githubusercontent.com/58358235/196697915-c8e4d7c1-0dd5-43d6-93ed-99fc96e8f284.png) Boilerplate 🚀**

This repo is template with newest technologies _(as of 19.10.2022)_

## Technologies

### Main technologies helping to quickly start projects are:

- Vue 3
- Vite 3
- Vue Router 4
- Typescript 4.8.4
- Sass 1.55

### It uses opiniated formatting and linting including:

- eslint
- stylelint
- prettier
- vue-tsc

### todo/worth considering:

- Adding Vitest
- Adding Testing Library
- Adding Playwright
- Adding Storybook
- Adding Pinia

## Why some solutions were used

### Extensions

The extensions of `const.ts`, `types.ts`, `utils.ts` were used to clearify what we are importing. Seems very readable and consistent for me.

### Directory organization

I try to keep all of component related things (tests, styles, types, consts, utils, etc.) close to component as it allows me to quickly search through project. When some types are used in multiple places I move them to common folder.

### Styles

I am trying to maintain SFC approach of Vue as it is highly encourged by Vue team. Keeping styles inside `.vue` files may seem like a mistake, I will see in the future.
