(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(r){if(r.ep)return;r.ep=!0;const e=t(r);fetch(r.href,e)}})();const a=document.querySelector("#bookTable"),d=localStorage.getItem("books"),i=d?JSON.parse(d):[];class f{constructor(t,s,r,e,n=!1){this.id=t,this.title=s,this.author=r,this.pages=e,this.status=n}}const h=o=>{const t=document.createElement("tr");t.setAttribute("class","bookContainer border-b dark:border-neutral-500");const s=document.createElement("td"),r=document.createElement("button");r.setAttribute("id","deleteBtn"),r.textContent="X",r.setAttribute("class","text-red-700 whitespace-nowrap px-6 py-4 rounded-sm"),s==null||s.appendChild(r);const e=document.createElement("td");e.setAttribute("class","bookTitle"),e.textContent=o.title,e.setAttribute("class","whitespace-nowrap px-6 py-4");const n=document.createElement("td");n.setAttribute("class","bookAuthor"),n.textContent=o.author,n.setAttribute("class","whitespace-nowrap px-6 py-4");const c=document.createElement("td");c.setAttribute("class","pageCount"),c.textContent=o.pages,c.setAttribute("class","whitespace-nowrap px-6 py-4");const u=document.createElement("td"),l=document.createElement("button");return l.textContent=o.status?"Read":"Not Read",l.setAttribute("id","readStatus"),o.status?l.setAttribute("class","whitespace-nowrap px-3 py-2 rounded-sm bg-green-600 text-white"):l.setAttribute("class","whitespace-nowrap px-3 py-2 rounded-sm bg-red-700 text-white"),u==null||u.appendChild(l),t==null||t.appendChild(e),t==null||t.appendChild(n),t==null||t.appendChild(c),t==null||t.appendChild(u),t==null||t.appendChild(s),t},b=(o,t)=>{if(o.status=!o.status,t.textContent=o.status?"Read":"Not Read",o.status?t.setAttribute("class","whitespace-nowrap px-3 py-2 rounded-sm bg-green-600 text-white"):t.setAttribute("class","whitespace-nowrap px-3 py-2 rounded-sm bg-red-700 text-white"),i){const s=i.findIndex(r=>r.id===o.id);s!==-1&&(i[s].status=o.status,localStorage.setItem("books",JSON.stringify(i)))}},y=(o,t)=>{if(i){const s=i.findIndex(r=>r.id===o.id);s!==-1&&(i.splice(s,1),localStorage.setItem("books",JSON.stringify(i)),t.remove())}},m=o=>{const t=h(o),s=t.querySelector("#readStatus"),r=t.querySelector("#deleteBtn");s==null||s.addEventListener("click",()=>{b(o,s)}),r==null||r.addEventListener("click",()=>{y(o,t)}),a==null||a.appendChild(t)},p=document.querySelector("#newBookForm");p.addEventListener("submit",o=>{o.preventDefault();let t=document.querySelector("#newBookTitle").value,s=document.querySelector("#newBookAuthor").value,r=document.querySelector("#pageCount").value,e=document.querySelector("#ifRead").checked,n=i.length?i.length+1:1;if(t&&s&&r&&e!==null){const c=new f(String(n),t,s,r,e);i.push(c),localStorage.setItem("books",JSON.stringify(i)),m(c),p.reset()}});const g=()=>{if(d){const o=JSON.parse(d);for(let t of o)m(t)}};document.addEventListener("DOMContentLoaded",g);
