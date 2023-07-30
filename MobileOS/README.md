# react-Mobile OS
## Submission Instructions [Please note]

## Maximum Marks - 8

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ should render Mobile Operating System heading in h1 tag  - 1 mark
 ✅ should render Mobile Manufacturers heading in h1 tag - 1 mark
 ✅ should render two unordered lists - 1 mark
 ✅ should render Mobile OS list items - 2 marks
 ✅ should renbder Mobile Manufacturers list items - 2 marks

```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json

```
npm install --engine-strict

// run locally
npm run start

// test locally
npm run test

```


# Problem Description

- Display two lists using the given boilerplate

### MobileOS.jsx

- It should have two lists
- First list should have the following heading and list items
  - heading -`Mobile Operating System` in `h1` tag
  - an unordered list with data-testid = `os-list` and following list items
    - Android
    - Blackberry
    - iPhone
    - Windows Phone
- Second list should have the following heading and list items

  - heading - `Mobile Manufacturers`
  - an unordered list with data-testid = `manufacturers-list` and following list items
    - Samsung
    - HTC
    - Micromax
    - Apple

- **Please do a default export of all the components**

#### **Note**

- Make sure you use only the given components and don't create new Components, files, or folders of your own. Changing component names, and file/folder structures might result in giving you zero marks
- Do Not Remove `data-testid="xxxx"` from anywhere, Testing tools use these to test your code, and removal of this will lead to low scores.
- Also, cross-check all the spellings and Cases of Texts.

