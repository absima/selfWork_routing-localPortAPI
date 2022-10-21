import fs from 'fs';
// const fs = require('fs');
const saveJSON = (obj, fname) => {
  let jsonData = JSON.stringify(obj);
  fs.writeFile(`${fname}.json`, jsonData, function(err) {
    if (err) {
      console.log(err);
    }
  });
}

export default saveJSON;