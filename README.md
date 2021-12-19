# [Vue 3](https://v3.vuejs.org/) + [Vite](https://vitejs.dev/guide/) + [TypeScript](https://www.typescriptlang.org/) + [ESLint](https://eslint.org/) + [Jest](https://jestjs.io/fr/) + [Vue Test Utils](https://vue-test-utils.vuejs.org/)

[![Generic badge](https://img.shields.io/badge/Vue-3.2.25-41B883.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/Vite-2.7.2-B143FE.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/TypeScript-4.4.4-3178C6.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/ESLint-8.4.1-7C7CEA.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/Jest-26.6.3-913F56.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/Vue_Test_Utils-2.0.0_rc.17-41B883.svg)](https://shields.io/)

This template should help get you started developing with the following tools already setup to properly work together :
- [Vue 3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev/guide/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/fr/)
- [Vue Test Utils](https://vue-test-utils.vuejs.org/)

---

## Getting started

This section will explain to you how to **start your development server**, **build your project for production** and **preview your project after building it**.

### Install the dependencies

The first step is to install the dependencies using `npm` by issuing the following command in your terminal:
````
> npm install
````

### Run the development server 

In order to visualize your [Vue 3](https://v3.vuejs.org/) application using [Vite](https://vitejs.dev/guide/), you need to run the following `npm` script (see the `scripts` section in the `package.json` file to edit the existing scripts):
````
> npm run dev

Local: http://localhost:3000/
````
Then navigate to the local link generated for you: http://localhost:3000/

---

### Build for production and preview

- #### To build your project for production, run the following `npm` script:
  ````
  > npm run build
  ````
  This operation will create a `dist` folder at the root of the project.

- #### To preview your project after building it:
  ``` 
  > npm run preview
  
  Local: http://localhost:5000/
  ````
  Then navigate to the local link generated for you: http://localhost:5000/

---

## Creating and using Vue components

The first component which will be mounted is the `src/App.vue` file.

You can create your own Vue components just as you would usually do it by creating a file with the `.vue` extension. 
This file should be placed directly inside the `src` folder **or** inside any folder hierarchy inside the `src` folder.

### Example

For instance, you can create a `example.vue` file inside the `src/components` folder containing the following code:

**_src/components/example.vue_**
``` vue
<template>
    The message prop is "{{ message }}".
</template>

<script
    setup
    lang="ts"
>
import { defineProps, PropType } from 'vue'

defineProps({
    message: {
        type: String as PropType<string>,
        required: true
    }
})
</script>

<style scoped>
</style>
```

Then in the `App.vue`, you can import your `example.vue` component using the following code:

**_src/App.vue_**
``` vue
<template>
    <example message="Hello, World!" />
</template>

<script
    setup
    lang="ts"
>
import Example from './components/example.vue'
</script>

<style>
</style>
```

After running your developement server, your browser should render a page with the following text: 
`The message prop is "Hello, World!"`.

---

## Testing your components  

This template comes with [Jest](https://jestjs.io/fr/) and [Vue Test Utils](https://vue-test-utils.vuejs.org/) already setup and ready to use.
If you never wrote unit tests with these tools, we suggest you read their respective documentations.

### Writing your first test
To create your first test, create a `example.vue.spec.ts` in the `tests/unit/components` folder (you will need to create the `components` folder first). 
This test file will test the `src/components/example.vue` component.

Put the following code inside the `tests/unit/components/example.vue.spec.ts` file:

**_tests/unit/components/example.vue.spec.ts_**
``` ts
import { shallowMount } from '@vue/test-utils'
import Example from '../../../src/components/example.vue' // Note that the '.vue' extension is required here

describe('example.vue', () => {
    it('should display the correct message', function () {
        const wrapper = shallowMount(Example, {
            props: {
                message: 'Hello, World!'
            }
        })
        expect(wrapper.text()).toMatch('Hello, World!')
    })
})
```

This test suit basically describes the expected behavior of the `example.vue` component.
The main steps are the following: 
- Shallow mounting the `example.vue` component using the `shallowMount` function
- Passing `Hello, World!` as the `message` prop
- Specifying that the content of the mounted component should contain `Hello, World!`

Note that you can write more test files by putting them inside the `tests/unit` folder with the `.js` or `.ts` extension (the `spec` part of the extension isn't required).
You can change the default regex used to find tests by editing the `testMatch` property in the `jest.config.js` file.

### Running your tests

To run all your tests, run the following `npm` script in a terminal:
```
> npm run tests
```

This is equivalent to running the `jest` command in a terminal and will simply run all tests while also measuring code coverage.
To disable code coverage, you can set the `collectCoverage` property in the `jest.config.js` file to `false`.

---

## Adding / Editing / Removing ESLint rules

If you want to add, edit or remove ESLint rules, you can do so using the `rules` property in the `.eslint.json` file.
We've already added a few rules, but feel free to edit or remove them to match your coding standard.
