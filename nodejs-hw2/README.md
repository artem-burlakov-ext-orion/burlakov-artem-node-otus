# burlakov-artem-node-otus

Show directory as a tree

example:
```
tree ../nodejs-hw2 --depth 2
```
result:
```
nodejs-hw2
└──.gitignore
└──README.md
└──bin
   └──tree.js
└──getDirTree.js
└──node_modules
   └──commander
└──package-lock.json
└──package.json
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
