(function(){"use strict";var t={7066:function(t,n,r){var i=r(9242),e=r(3396),o=r(7139);const l={id:"board"},s=["onClick"],u={key:0},c={key:1};function f(t,n,r,i,f,a){return(0,e.wg)(),(0,e.iD)("div",null,[(0,e._)("table",l,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(t.state.cells,((n,r)=>((0,e.wg)(),(0,e.iD)("tr",{key:r},[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(n,((n,i)=>((0,e.wg)(),(0,e.iD)("td",{key:i,onClick:n=>t.clickBorad(i,r),class:(0,o.C_)({"light-on":1===t.state.cells[r][i]})},null,10,s)))),128))])))),128))]),(0,e._)("button",{onClick:n[0]||(n[0]=n=>{t.state.hint=t.solve(t.state.cells),t.state.isHintOn=!t.state.isHintOn})},"ヒント"),t.state.isHintOn?((0,e.wg)(),(0,e.iD)("h4",u,"ヒント表示中")):(0,e.kq)("",!0),t.state.isHintOn?((0,e.wg)(),(0,e.iD)("ul",c,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(t.state.hint,((t,n)=>((0,e.wg)(),(0,e.iD)("li",{key:n}," y: "+(0,o.zw)(t.y+1)+", x: "+(0,o.zw)(t.x+1),1)))),128))])):(0,e.kq)("",!0)])}var a=r(4870),g=(0,e.aZ)({components:{},setup(){const t=(0,a.qj)({cells:[...Array(5)].map((()=>Array(5).fill(0))),hint:[],isHintOn:!1}),n=t=>{let n=JSON.parse(JSON.stringify(t)),i=[];const e=t=>t.reduce(((t,n)=>t|n.some((t=>t>=1))),!1);while(e(n)){for(let l=1;l<n.length;l++)for(let t=0;t<n[l].length;t++)if(n[l-1][t]&&(i.push({x:t,y:l}),n=r(n,t,l),!e(n)))return i;const t=n[n.length-1],o=(()=>JSON.stringify(t)===JSON.stringify([1,1,1,0,0])?[1]:JSON.stringify(t)===JSON.stringify([1,1,0,1,1])?[2]:JSON.stringify(t)===JSON.stringify([1,0,1,1,0])?[4]:JSON.stringify(t)===JSON.stringify([1,0,0,0,1])?[0,1]:JSON.stringify(t)===JSON.stringify([0,1,1,0,1])?[0]:JSON.stringify(t)===JSON.stringify([0,1,0,1,0])?[0,3]:JSON.stringify(t)===JSON.stringify([0,0,1,1,1])?[3]:[0])();for(const l of o)if(i.push({x:l,y:0}),n=r(n,l,0),!e(n))return i}return i},r=(t,n,r)=>{let i=JSON.parse(JSON.stringify(t));i[r][n]=Number(!i[r][n]);const e=[[0,-1],[1,0],[0,1],[-1,0]];for(const o of e){const t=o[0]+n,e=o[1]+r;t<0||t>=i.length||e<0||e>=i.length||(i[e][t]=Number(!i[e][t]))}return i},i=(i,e)=>{t.cells=r(t.cells,i,e),t.hint=n(t.cells)};for(let e=0;e<10;e++){const n=Math.floor(Math.random()*t.cells.length),i=Math.floor(Math.random()*t.cells.length);t.cells=r(t.cells,n,i)}return{state:t,clicked:r,solve:n,clickBorad:i}}}),h=r(89);const y=(0,h.Z)(g,[["render",f]]);var O=y;(0,i.ri)(O).mount("#app")}},n={};function r(i){var e=n[i];if(void 0!==e)return e.exports;var o=n[i]={exports:{}};return t[i](o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(n,i,e,o){if(!i){var l=1/0;for(f=0;f<t.length;f++){i=t[f][0],e=t[f][1],o=t[f][2];for(var s=!0,u=0;u<i.length;u++)(!1&o||l>=o)&&Object.keys(r.O).every((function(t){return r.O[t](i[u])}))?i.splice(u--,1):(s=!1,o<l&&(l=o));if(s){t.splice(f--,1);var c=e();void 0!==c&&(n=c)}}return n}o=o||0;for(var f=t.length;f>0&&t[f-1][2]>o;f--)t[f]=t[f-1];t[f]=[i,e,o]}}(),function(){r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,{a:n}),n}}(),function(){r.d=function(t,n){for(var i in n)r.o(n,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};r.O.j=function(n){return 0===t[n]};var n=function(n,i){var e,o,l=i[0],s=i[1],u=i[2],c=0;if(l.some((function(n){return 0!==t[n]}))){for(e in s)r.o(s,e)&&(r.m[e]=s[e]);if(u)var f=u(r)}for(n&&n(i);c<l.length;c++)o=l[c],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(f)},i=self["webpackChunkvue_lights_out_game"]=self["webpackChunkvue_lights_out_game"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(7066)}));i=r.O(i)})();
//# sourceMappingURL=app.bee7924f.js.map