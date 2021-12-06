'use strict';
import schema  from './form/schemas.js';
import creator  from './creator.js';
import tableLog from './form/tableSch.js';
import theadLog from './form/theadSch.js';
import tbodyLog from './form/tbodySch.js';
import tfootLog from './form/tfootSch.js';
import trLog    from './form/trSch.js';
import thLog    from './form/thSch.js';
import tdLog    from './form/tdSch.js';

export default function () {
  const idCount = 0;
  return (thArr, tbArr, tfArr) => {
    const thArrTag = [];
    const tbArrTag = [];
    const tfArrTag = [];
    if(thArr.length) {
      for(const h of thArr ) {
        const thSch = schema(thLog, h, [], '', {});
        const th = creator('th')(thSch);
        thArrTag.push(th);
      }
    } else console.error(`thArr ${thArr}`);
    
    if(tbArr.length) {
      for(const row of tbArr ) {
        const rowArr = [];
          if(row.length) {
            for(const r of row ) {
              const tdSch = schema(tdLog, r, [], '', {});
              const td = creator('td')(tdSch);
              rowArr.push(td);
            }
          } else console.error(`row ${b}`);
        const trSch2 = schema(trLog,'', rowArr, '', {});
        const tr2 = creator('tr')(trSch2);
        tbArrTag.push(tr2);
      }
    } else console.error(`thArr ${thArr}`)
    
    const trSch1 = schema(trLog,'', thArrTag, '', {});
    const tr1 = creator('tr')(trSch1);
    
    //const trSch2 = schema(trLog,'', tbArrTag, '', {});
    //const tr2 = creator('tr')(trSch2);
    
    const theadSch = schema(theadLog,'', [tr1], '', {});
    const thead = creator('thead')(theadSch);
    
    const tbodySch = schema(tbodyLog,'', tbArrTag, '', {});
    const tbody = creator('tbody')(tbodySch);
    
    const tfootSch = schema(tfootLog,'', [], '', {});
    const tfoot = creator('tfoot')(tfootSch);
    
    const tableSch = schema( tableLog,'', [thead, tbody, tfoot], '', {});
    const table = creator('table')(tableSch);
    
    return table;
  };
};