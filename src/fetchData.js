// // // From Local API // // // 





// // // From Contentful // // //

// import React, { useState } from 'react';
// import { createClient } from "contentful";

// // const [africa, setAfrica] = useState();
// // const [asia, setAsia] = useState();
// // const [europe, setEurope] = useState();
// // const [namerica, setNamerica] = useState();
// // const [oceania, setOceania] = useState();
// // const [samerica, setSamerica] = useState();

// const fetcher = () => { 
//   const client = createClient({
//     space: 'h4wwx2mbhm2q',//import.meta.env.VITE_SPACE,
//     accessToken: 'JphYl99ZF17a_nH6OD7_l54FRuFIY44JTYLfVuL7AxQ',//import.meta.env.VITE_TOKEN,
//     host: 'cdn.contentful.com'//import.meta.env.VITE_HOST
//   });

//   const getItem = async(contype) => {
//     try {
//       const contentx = await client.getEntries(
//       {
//         content_type: contype,
//         select: "fields" 
//       });
//       // console.log('continents----', contentx);
//       const contentEntries = contentx.items.map((item) => 
//       {
//         const images = item.fields.images.map(item => item.fields.file);
//         images.unshift(item.fields.image.fields.file);
//         delete item.fields.image;
//         const overview = item.fields.overview; //////
//         return { ...item.fields, images, overview };
//       });
//       // console.log('contentEntries', contentEntries);
//       return [contentEntries, null];
//     }
//     catch (error) {
//       return [null, error];
//     }
//   }

//   const getData = async () => {
//     const contype = 'continent';
//     const dta = await getItem(contype);
//     const contIds = ['africa', 'asia', 'europe', 'northAmerica', 'oceania', 'southAmerica'];
//     const contNames = ['Africa', 'Asia', 'Europe', 'North America', 'Oceania', 'South America'];
//     const nmID = contIds.map(x => x.substring(0,4).toUpperCase());
//     if (dta.length){
//       for (let i=0; i<6; i++){
//         const nme = dta[0][i].name.substring(0,4).toUpperCase();
//         const idx = nmID.indexOf(nme);
//         const dtaItem = await getItem(contIds[idx]);
//         if (dtaItem.length){
//           dta[0][i]['selected'] = dtaItem;
//         }        
//       }
//     }

//     // // object version
//     const objdta = dta[0].reduce((obj, cur) => ({...obj, [cur.name.substring(0,4).toLowerCase()]: cur}), {});
    
//     // const fs = require('fs');
//     const fs = require('fs');
//     let jsonData = JSON.stringify({a:1, b:'abebe'});
//     fs.writeFile("test.txt", jsonData, function(err) {
//     if (err) {
//         console.log(err);
//       }
//     });
    


//     // console.log(objToStore)
//     console.log('-----------')
//     console.log('processed dtaaaaaaaaa at fetched.js', dta)
//     console.log('++++++++++++')

    
//     // objToStore = {}
//     // dta.map(item => {
//     //   objToStore[item.name.substring(0,4)] = item
//     // })
//     return dta

//   }
//   return { getData };
// }

// export default fetcher;
