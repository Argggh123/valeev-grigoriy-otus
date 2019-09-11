const path = require('path');
const fs = require('fs');

const rootStructure = {
  files: [],
  dirs: [],
};

function tree(dirName, level) {
  if (dirName && dirName.length === 0) {
    throw new Error('Error');
  }
  // eslint-disable-next-line no-use-before-define
  newDir(dirName)
    .then(stats => {
      if (stats.isDirectory()) {
        if (level === 0) {
          rootStructure.dirs.push(`${path.parse(dirName).base}`);
        }
        access(dirName)
          .then(() => {
            readDir(dirName)
              .then(files => {
                for (let file in files) {
                  let next = path.join(dirName, files[file]);
                  newDir(next)
                    .then(stats => {
                      if (stats.isDirectory()) {
                        rootStructure.dirs.push(`${rootStructure.dirs[level]}/${path.parse(next).base}`);
                        tree(next, level + 1);
                      } else {
                        rootStructure.files.push(`${rootStructure.dirs[level]}/${path.parse(next).base}`);
                        console.log('file', next);
                      }
                    })
                    .catch(e => {
                      console.log(e);
                    });
                }
                console.log(rootStructure);
              });
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        throw new Error('Error');
      }
    });
  return level;
}

function newDir(dir) {
  return new Promise((resolve, reject) => {
    fs.lstat(dir, (err, stats) => {
      if (err) {
        reject(err);
      } else {
        resolve(stats);
      }
    });
  });
}

function access(dirName) {
  return new Promise((resolve, reject) => {
    fs.access(dirName, err => {
      if (err) {
        reject(err.message);
      } else {
        resolve();
      }
    });
  });
}

function readDir(dir) {
  return new Promise(resolve => {
    fs.readdir(dir, {}, (err, filesArr) => {
      resolve(filesArr);
    });
  });
}

tree(process.argv.slice(2)[0], 0);
