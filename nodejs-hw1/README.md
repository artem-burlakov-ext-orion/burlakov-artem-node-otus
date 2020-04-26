# show .json as a tree

example:
```
{
  "name": 1,
  "items": [{
    "name": 2,
    "items": [{ "name": 3 }, { "name": 4 }]
    }, {
      "name": 5,
      "items": [{ "name": 6 }]
    }]
}
```
result:

```
1
└──2
   └──3
   └──4
└──5
   └──6
```
How to use

```
git clone https://github.com/eifory/burlakov-artem-node-otus.git
npm start                                                           # show example file(tree.json) as a tree
npm start path_to_your_json_file                                    # show your json file as a tree
```
