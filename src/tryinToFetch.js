const contentful = require("contentful");
const fs = require('fs')
// import fs from 'fs';

const client = contentful.createClient({
  space: 'h4wwx2mbhm2q',//import.meta.env.VITE_SPACE,
  accessToken: 'JphYl99ZF17a_nH6OD7_l54FRuFIY44JTYLfVuL7AxQ',//import.meta.env.VITE_TOKEN,
  host: 'cdn.contentful.com'//import.meta.env.VITE_HOST
});

const getItem = async(contype) => {
  try {
    const contentx = await client.getEntries(
    {
      content_type: contype,
      select: "fields" 
    });
    const contentEntries = contentx.items.map((item) => 
    {
      const images = item.fields.images.map(item => item.fields.file);
      images.unshift(item.fields.image.fields.file);
      delete item.fields.image;
      const overview = item.fields.overview; //////
      return { ...item.fields, images, overview };
    });
    return [contentEntries, null];
  }
  catch (error) {
    return [null, error];
  }
}

const getData = async () => {
  const contype = 'continent';
  const dta = await getItem(contype);
  console.log('dta', dta)
  const contIds = ['africa', 'asia', 'europe', 'northAmerica', 'oceania', 'southAmerica'];
  // const contNames = ['Africa', 'Asia', 'Europe', 'North America', 'Oceania', 'South America'];
  const nmID = contIds.map(x => x.substring(0,4).toUpperCase());
  if (dta.length){
    for (let i=0; i<6; i++){
      const nme = dta[0][i].name.substring(0,4).toUpperCase();
      const idx = nmID.indexOf(nme);
      const dtaItem = await getItem(contIds[idx]);
      if (dtaItem.length){
        dta[0][i]['selected'] = dtaItem;
      }        
    }
  }

  // // object version
  const objdta = dta[0].reduce((obj, cur) => ({...obj, [cur.name.substring(0,4).toLowerCase()]: cur}), {});
  
  fs.writeFile(`continent.json`, JSON.stringify(objdta), (err) => { if (err) { console.log(err)} });

  return objdta
}

getData();

