# React FakeStore
IntelliJ IDEA / Ubuntu Linux  
react / redux / js  
api - https://fakestoreapi.com/products


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

