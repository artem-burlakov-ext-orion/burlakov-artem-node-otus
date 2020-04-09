# burlakov-artem-node-otus

Show directory as a tree

example:
```

```
result:
```
nodejs-hw2
└──.gitignore
└──README.md
└──buildTree.js
└──node_modules
   └──commander
      └──CHANGELOG.md
      └──LICENSE
      └──Readme.md
      └──index.js
      └──package.json
      └──typings
         └──index.d.ts
└──package-lock.json
└──package.json
└──tree.js
└──util.js
```

How to use

```
git clone https://github.com/eifory/burlakov-artem-node-otus.git
cd nodejs-hw2
npm publish --dry-run
npm link                                                      

tree <your_directory_path>  [option]    # show your directory as a tree with 

option:
  -V, --version                         #output the version number
  -d, --depth                           #show  all the directories down to a specified level
```
