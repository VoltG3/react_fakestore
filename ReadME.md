# React FakeStore
IntelliJ IDEA / Ubuntu Linux  
react / redux / js / flex / grid
api - https://fakestoreapi.com/products

#### So far finished
> From the API get unique "categorys" as navigation button label for the products  
> Onload local copy of products list if remote connection fall

<table>
  <tr>
    <td style ="width: 50%;" ><img src="https://github.com/VoltG3/react_fakestore/blob/master/doc/desktop01.png" alt="img"></td>
    <td style ="width: 50%;" ><img src="https://github.com/VoltG3/react_fakestore/blob/master/doc/desktop02.png" alt="img"></td>
  <tr>
 </table>

| Chapters                                                                |
| :---------------------------------------------------------------------- |
| [Create and config React project](#Create-and-config-React-project)     |
| [Create first commit as a clean template commit](#Create-first-commit-as-a-clean-template-commit) |
| [Dependencies](#Dependencies)                                           |

## Create and config React project
---
#### Create app
```
$ yarn create react-app react-fakestore
```
#### IntelliJ IDEA - Run/Debug Configurations
```
- add new configuration
- npm
- allow paralell run
- command: start
- package manager: npm /usr/bin/npm
```
#### Runs the app
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### Tips
For a better overview of the changes in the commit's use:
```
$ gitk
```

## Create first commit as a clean template commit:
#### Before first commit
Exclude inetlliJ IDEA files from project
add to .gitignore:
```
.idea/*
```
Delete exist .git directory in the project (give access and delete)
```
$ sudo chmod -R 777 .git
$ rm -r -v .git
```
Show hidden directoryes
```
$ ls -a
```

## Dependencies
---
```
$ yarn add styled-components
$ yarn add get-unique-key
$ yarn add react-svg-star-rating
$ yarn add react-router-dom@6
$ yarn add react-sliding-pane
$ yarn add axios

$ yarn add react-use-global  
$ yarn add react-redux  
$ yarn add redux  
$ yarn add redux-resource
```

- [styled-components](https://www.npmjs.com/package/styled-components)
- [get-unique-key]
- [react-svg-star-rating](https://www.npmjs.com/package/react-svg-star-rating)
- [react-router-dom@6](https://www.npmjs.com/package/react-router-dom)
- [react-sliding-pane](https://www.npmjs.com/package/react-sliding-pane)
- [axios](https://www.npmjs.com/package/axios))
- [react-use-global](https://www.npmjs.com/package/react-use-global)
- [react-redux](https://www.npmjs.com/package/react-redux)
- [redux](https://www.npmjs.com/package/redux)
- [redux-resource](https://www.npmjs.com/package/redux-resource)

##### Copy/Past in terminal
```
yarn add styled-components add get-unique-key add react-svg-star-rating add react-router-dom@6 add react-sliding-pane add axios add react-use-global add react-redux add redux add redux-resource
```

