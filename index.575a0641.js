var e=document.getElementsByClassName("population"),t=0,n=!0,a=!1,l=void 0;try{for(var o,r=e[Symbol.iterator]();!(n=(o=r.next()).done);n=!0){var i=o.value;t+=Number(i.textContent.replace(/,/g,""))}}catch(e){a=!0,l=e}finally{try{n||null==r.return||r.return()}finally{if(a)throw l}}var m=t/e.length;document.getElementsByClassName("total-population")[0].innerHTML=t.toLocaleString("en-US"),document.getElementsByClassName("average-population")[0].innerHTML=m.toLocaleString("en-US");
//# sourceMappingURL=index.575a0641.js.map