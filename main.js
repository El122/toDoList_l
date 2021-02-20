(()=>{"use strict";let e=[],t=["Low","Average","High","Critical"],l=["Easy","Middle","Hard"],a=[{label:"Title",field:"input",type:"text",id:"title",placeholder:"Title",req:!0},{label:"Priority",field:"select",id:"priority",req:!1,values:[["",""],["Low","low"],["Average","average"],["High","high"],["Critical","critical"]]},{label:"Complexity",field:"select",id:"сomplexity",req:!1,values:[["",""],["Easy","easy"],["Middle","middle"],["Hard","hard"]]},{label:"Date",field:"input",type:"date",id:"date",placeholder:"Date",req:!0},{label:"Description",field:"textarea",placeholder:"Description",id:"description",req:!1,cols:30,rows:7}];const n=e=>{let t=new Date,l=t.getFullYear(),a=t.getMonth()+1,n=t.getDate();return a=a<10?"0"+a:a,"Today"==e?(n=n<10?"0"+n:n,l+"-"+a+"-"+n):"Tomorrow"==e?(n+=1,n=n<10?"0"+n:n,l+"-"+a+"-"+n):""},i=(e,t)=>{let l=n(t),a=document.createElement("div"),i=document.createElement("h2"),d=document.createElement("ul");a.classList.add("todayTasks"),i.innerHTML=t+" tasks";for(let t of e)t.date!=l||t.finished||d.appendChild(r(t));return a.appendChild(i),a.appendChild(d),a};let d=()=>{e.sort(((e,t)=>e.finished===t.finished||e.finished?1:-1));let t=JSON.stringify(e);localStorage.setItem("tasks",t)};const r=e=>{let t=document.createElement("li"),l=document.createElement("div"),a=document.createElement("input"),n=document.createElement("div");return l.classList.add("task"),l.innerHTML=e.title,a.type="checkbox",n.classList.add("taskBlock"),n.innerHTML="<p><b>Priority:</b> "+e.priority+"</p><p><b>Complexity:</b> "+e.complexity+"</p><p><b>Date:</b> "+e.date+"</p><p><b>Description:</b> "+e.description+"</p>",t.appendChild(a),t.appendChild(l),l.appendChild(n),l.onclick=()=>{let e=n.style.display;n.style.display="none"==e?"block":"none"},a.onclick=()=>{e.finished=a.checked},t},c=t=>{t.preventDefault();let l=document.querySelector("#title").value,a=document.querySelector("#priority").value,i=document.querySelector("#сomplexity").value,c=document.querySelector("#date").value,s=document.querySelector("#description").value;if(document.querySelector("#title").value="",document.querySelector("#priority").value="",document.querySelector("#сomplexity").value="",document.querySelector("#date").value="",document.querySelector("#description").value="",null==l||null==c)return alert("Title or date is not filled"),1;let o={title:l,priority:a,complexity:i,date:c,description:s,finished:!1};return n("Today")==o.date?document.getElementsByClassName("todayTasks")[0].getElementsByTagName("ul")[0].appendChild(r(o)):n("Tomorrow")==o.date&&document.getElementsByClassName("todayTasks")[1].getElementsByTagName("ul")[0].appendChild(r(o)),e.push(o),document.getElementsByClassName("mainContainer")[0],d(),o};let s=(e,t)=>{switch(e.field){case"input":t.setAttribute("type",e.type),t.setAttribute("placeholder",e.placeholder);break;case"select":for(let l=0;l<e.values.length;++l){let a=document.createElement("option");a.innerHTML=e.values[l][0],a.value=e.values[l][1],t.appendChild(a)}break;case"textarea":t.setAttribute("placeholder",e.placeholder),t.setAttribute("cols",e.cols),t.setAttribute("rows",e.rows)}return e.req&&t.setAttribute("require","require"),t};const o=()=>{let e=new Date,t=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes();return e.getHours()+":"+t},p=()=>{let e=new Date,t=e.getFullYear(),l=e.getMonth(),a=e.getDate();switch(l){case 0:l="January";break;case 1:l="February";break;case 2:l="March";break;case 3:l="April";break;case 4:l="May";break;case 5:l="June";break;case 6:l="July";break;case 7:l="August";break;case 8:l="September";break;case 9:l="October";break;case 10:l="November";break;case 11:l="December"}return a+" "+l+" "+t},m=e=>{let t=document.getElementsByClassName("mainContainer")[0];(e=>{let t=document.createElement("section"),l=(()=>{let e=document.createElement("form"),t=document.createElement("h2"),l=document.createElement("button");return t.innerText="Add new task",e.classList.add("newTask"),l.innerText="Add task",l.id="addNewTask",l.onclick=c,e.appendChild(t),(e=>{for(let t of a){let l=document.createElement("label"),a=document.createElement(t.field);a=s(t,a),a.setAttribute("id",t.id),l.innerHTML=t.label,l.appendChild(a),e.appendChild(l)}})(e),e.appendChild(l),e})();t.appendChild(l),e.appendChild(t)})(t),((e,t)=>{let l=document.createElement("section"),a=i(t,"Today"),n=i(t,"Tomorrow");l.appendChild(a),l.appendChild(n),e.appendChild(l)})(t,e),(e=>{let t=document.createElement("section"),l=(()=>{let e=document.createElement("div"),t=document.createElement("p"),l=document.createElement("p");return e.classList.add("dateAndTime"),t.classList.add("time"),l.classList.add("date"),t.innerHTML=o(),l.innerHTML=p(),setInterval((()=>{t.innerHTML=o(),l.innerHTML=p()}),1e4),e.appendChild(t),e.appendChild(l),e})();t.appendChild(l),e.appendChild(t)})(t)};let u=(e,t)=>{switch(e.field){case"input":t.setAttribute("type",e.type),t.setAttribute("placeholder",e.placeholder);break;case"select":for(let l=0;l<e.values.length;++l){let a=document.createElement("option");a.innerHTML=e.values[l][0],a.value=e.values[l][1],t.appendChild(a)}break;case"textarea":t.setAttribute("placeholder",e.placeholder),t.setAttribute("cols",e.cols),t.setAttribute("rows",e.rows)}return e.req&&t.setAttribute("require","require"),t},h=(e,t)=>{let l=document.createElement("label"),a=document.createElement("span"),n=document.createElement("input");return n.type="radio",n.name=t,n.value=e,n.id=e,l.for=e,a.innerHTML=e,l.appendChild(n),l.appendChild(a),l};const y=(e,t)=>{let l=document.createElement("div");for(let a of e){let e=h(a,t);l.appendChild(e)}return l},f=()=>{let a=document.createElement("form"),n=document.createElement("label"),i=document.createElement("span"),d=document.createElement("input"),r=document.createElement("label"),c=document.createElement("span"),s=document.createElement("input"),o=document.createElement("button"),p=document.createElement("button"),m=y(t,"priority"),u=y(l,"complexity");return a.classList.add("searchForm"),n.classList.add("searchBlock"),r.classList.add("dateBlock"),m.classList.add("priorityBlock"),u.classList.add("complexityBlock"),o.classList.add("searchButt"),p.classList.add("cleanButt"),d.type="text",s.type="date",o.innerText="Find",p.innerText="Show all",i.innerHTML="Task<br>",c.innerHTML="Date<br>",n.appendChild(i),n.appendChild(d),r.appendChild(c),r.appendChild(s),a.appendChild(n),a.appendChild(r),a.appendChild(m),a.appendChild(u),a.appendChild(o),a.appendChild(p),o.onclick=t=>{t.preventDefault();let l=d.value,a=s.value,n=m.querySelector('input[name="priority"]:checked')?.value.toLowerCase()||"",i=u.querySelector('input[name="complexity"]:checked')?.value.toLowerCase()||"",r=[];l=new RegExp(l,"i");for(let t of e)!l.test(t.title)&&!l.test(t.description)&&""!=l||t.date!=a&&""!=a||t.priority!=n&&""!=n||t.complexity!=i&&""!=i||r.push(t);C(r)},p.onclick=t=>{t.preventDefault(),C(e)},a},v=(e,t)=>{let l=document.createElement("div"),n=document.createElement("div"),i=document.createElement("h3"),r=document.createElement("div"),c=document.createElement("ul"),s=document.createElement("button"),o=document.createElement("button"),p=document.createElement("button");l.classList.add("card"),n.classList.add("cardTitle"),c.classList.add("cardInfo"),r.classList.add("titleEditBlock"),p.classList.add("finishedBtn");let m=["Priority","Complexity","Date","Description"],h=["priority","complexity","date","description"];e.finished?(p.innerHTML="<b>Finished</b>",l.style.filter="grayscale(1)"):(p.innerHTML="<b>Not finished</b>",l.style.filter="grayscale(0)"),i.innerText=e.title,s.innerHTML='<svg height="25px" width="25px" viewBox="-40 0 427 427.00131" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a"><stop offset="0" stop-color="#00efd1"/><stop offset="1" stop-color="#00acea"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="232.398627" x2="232.398627" xlink:href="#a" y1="-33.288691" y2="463.068309"/><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="114.398627" x2="114.398627" xlink:href="#a" y1="-33.288691" y2="463.068309"/><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="173.398627" x2="173.398627" xlink:href="#a" y1="-33.288691" y2="463.068309"/><path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" fill="url(#b)"/><path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" fill="url(#c)"/><g fill="url(#d)"><path d="m308.597656 52h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812zm-199.199218-12.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm158.601562 367.5h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm40.597656-299h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18zm0 0"/><path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/></g></svg>',o.innerHTML='<svg height="25px" viewBox="0 0 476 476" width="25px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="238" x2="238" y1="-8.29" y2="488.067"><stop offset="0" stop-color="#00efd1"/><stop offset="1" stop-color="#00acea"/></linearGradient><g fill="url(#a)"><path d="m466.910156 194.632812-42.472656-4.085937c-4.605469-17.902344-11.832031-35.019531-21.449219-50.800781l27.011719-32.589844c3.28125-3.957031 3.027344-9.757812-.589844-13.410156l-46.597656-47.136719c-3.644531-3.683594-9.496094-3.976563-13.488281-.675781l-32.699219 27.042968c-15.832031-9.53125-32.949219-16.75-50.824219-21.445312l-4.09375-42.445312c-.488281-5.136719-4.792969-9.0664068-9.953125-9.085938h-66.910156c-5.160156.0195312-9.460938 3.949219-9.953125 9.085938l-4.089844 42.414062c-17.929687 4.589844-35.078125 11.804688-50.894531 21.410156l-32.636719-26.980468c-3.972656-3.285157-9.792969-3.011719-13.4375.632812l-47.195312 47.136719c-3.65625 3.652343-3.929688 9.484375-.632813 13.460937l27.042969 32.609375c-9.539063 15.8125-16.753906 32.910157-21.425781 50.773438l-42.53125 4.089843c-5.136719.492188-9.0664065 4.792969-9.089844 9.953126v66.824218c.0195312 5.160156 3.949219 9.464844 9.089844 9.953125l42.472656 4.085938c4.605469 17.898437 11.832031 35.015625 21.449219 50.800781l-27.011719 32.585938c-3.296875 3.976562-3.019531 9.808593.632812 13.460937l47.203126 47.132813c3.644531 3.644531 9.464843 3.914062 13.4375.628906l32.699218-27.042969c15.835938 9.53125 32.949219 16.753906 50.828125 21.449219l4.09375 42.449218c.488281 5.136719 4.792969 9.0625 9.949219 9.085938h66.910156c5.160156-.019531 9.460938-3.949219 9.953125-9.085938l4.09375-42.421874c17.925781-4.589844 35.074219-11.804688 50.890625-21.414063l32.632813 26.988281c3.976562 3.285156 9.792969 3.007813 13.441406-.632812l47.195313-47.132813c3.652343-3.652343 3.929687-9.484375.632812-13.460937l-27.039062-32.609375c9.539062-15.8125 16.753906-32.914063 21.425781-50.78125l41.941406-4.085938c5.132813-.492187 9.058594-4.796875 9.078125-9.953125v-66.824218c-.019531-5.160157-3.949219-9.464844-9.089844-9.953126zm-10.910156 67.703126-40 3.894531c-4.316406.417969-7.875 3.566406-8.820312 7.796875-4.539063 20.496094-12.773438 39.992187-24.296876 57.539062-2.40625 3.671875-2.136718 8.480469.660157 11.859375l25.835937 31.164063-34.3125 34.269531-31.226562-25.828125c-3.394532-2.808594-8.226563-3.0625-11.898438-.628906-17.496094 11.59375-37.007812 19.808594-57.527344 24.214844-4.253906.945312-7.417968 4.519531-7.835937 8.859374l-3.90625 40.523438h-48.746094l-3.90625-40.527344c-.417969-4.335937-3.585937-7.910156-7.84375-8.835937-20.515625-4.5625-40.039062-12.792969-57.628906-24.300781-3.660156-2.363282-8.429687-2.082032-11.789063.695312l-31.226562 25.824219-34.3125-34.269531 25.84375-31.164063c2.808594-3.394531 3.070312-8.226563.636719-11.902344-11.601563-17.460937-19.828125-36.945312-24.25-57.441406-.9375-4.261719-4.519531-7.433594-8.863281-7.847656l-40.585938-3.90625v-48.652344l40.585938-3.902344c4.320312-.414062 7.882812-3.5625 8.828124-7.800781 4.539063-20.496094 12.773438-39.992188 24.300782-57.535156 2.40625-3.671875 2.136718-8.480469-.664063-11.859375l-25.832031-31.164063 34.308594-34.269531 31.230468 25.828125c3.394532 2.808594 8.226563 3.0625 11.898438.628906 17.496094-11.59375 37.007812-19.808594 57.527344-24.214844 4.253906-.941406 7.417968-4.519531 7.835937-8.859374l3.90625-40.523438h48.746094l3.90625 40.523438c.417969 4.335937 3.585937 7.90625 7.84375 8.835937 20.515625 4.5625 40.039063 12.792969 57.628906 24.300781 3.660157 2.359375 8.429688 2.078125 11.789063-.695312l31.179687-25.785156 33.800781 34.1875-25.878906 31.210937c-2.808594 3.390625-3.070312 8.222656-.636718 11.898437 11.601562 17.460938 19.828124 36.945313 24.25 57.441407.9375 4.265625 4.519531 7.433593 8.863281 7.847656l40.582031 3.90625zm0 0"/><path d="m238 116.40625c-67.152344 0-121.589844 54.4375-121.589844 121.589844s54.4375 121.59375 121.589844 121.59375 121.589844-54.4375 121.589844-121.589844c-.074219-67.121094-54.46875-121.515625-121.589844-121.59375zm0 223.183594c-56.109375 0-101.589844-45.484375-101.589844-101.59375s45.484375-101.589844 101.59375-101.589844c56.105469 0 101.589844 45.484375 101.585938 101.59375-.0625 56.078125-45.511719 101.523438-101.589844 101.589844zm0 0"/><path d="m238 168c-38.660156 0-70 31.339844-70 70s31.339844 70 70 70 70-31.339844 70-70c-.042969-38.644531-31.355469-69.957031-70-70zm0 119.992188c-27.617188 0-50-22.390626-50-50.003907 0-27.617187 22.390625-50 50.007812-49.996093 27.613282.003906 49.996094 22.390624 49.992188 50.007812-.03125 27.601562-22.398438 49.964844-50 49.992188zm0 0"/></g></svg>';for(let t=0;t<4;++t){let l=document.createElement("li");l.innerHTML="<span><b>"+m[t]+"</b></span><span>"+e[h[t]]+"</span>",c.appendChild(l)}return s.onclick=()=>{t.splice(t.indexOf(e),1),d(),document.getElementsByClassName("mainContainer")[0].innerText="",C(t)},o.onclick=()=>{let l=((e,t)=>{let l=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),r=document.createElement("h3"),c=document.createElement("button"),s=document.createElement("button"),o=(e=>{let t=document.createElement("div");for(let l of a){let a=document.createElement("label"),n=document.createElement(l.field);n=u(l,n),n.value=e[l.id],n.setAttribute("id",l.id),a.innerHTML=l.label,a.appendChild(n),t.appendChild(a)}return t})(e);return l.classList.add("modalWrapper"),n.classList.add("modalEditTask"),i.classList.add("titleEditBlock"),o.classList.add("modalContainer"),s.classList.add("saveBtn"),r.innerText="Edit task",c.innerHTML='<svg width="25px" height="25px" viewBox="0 0 512.001 512.001"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="0" y1="258.001" x2="512.0015" y2="258.001" gradientTransform="matrix(1 0 0 -1 0 514.0017)">\t<stop  offset="0" style="stop-color:#00F2FE"/><stop  offset="0.021" style="stop-color:#03EFFE"/><stop  offset="0.293" style="stop-color:#24D2FE"/><stop  offset="0.554" style="stop-color:#3CBDFE"/><stop  offset="0.796" style="stop-color:#4AB0FE"/><stop  offset="1" style="stop-color:#4FACFE"/></linearGradient><path style="fill:url(#SVGID_1_);" d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285s-20.475-7.811-28.285,0L256,227.717L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0s-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857L256,284.287l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285L284.286,256.002z"/></svg>',s.innerText="Save",c.onclick=()=>{l.remove()},s.onclick=a=>{a.preventDefault();let n=document.querySelector("#title").value,i=document.querySelector("#priority").value,r=document.querySelector("#сomplexity").value,c=document.querySelector("#date").value,s=document.querySelector("#description").value;if(null==n||null==c)return alert("Title or date is not filled"),1;e.title=n,e.priority=i,e.complexity=r,e.date=c,e.description=s,d(),C(t),l.remove()},n.onclick=e=>{e.stopPropagation()},l.onclick=()=>{l.remove()},o.appendChild(s),i.appendChild(r),i.appendChild(c),n.appendChild(i),n.appendChild(o),l.appendChild(n),l})(e,t);document.getElementsByTagName("main")[0].appendChild(l)},p.onclick=()=>{e.finished=!e.finished,e.finished?(p.innerHTML="<b>Finished</b>",l.style.filter="grayscale(1)"):(p.innerHTML="<b>Not finished</b>",l.style.filter="grayscale(0)"),d()},r.appendChild(o),r.appendChild(s),n.appendChild(i),n.appendChild(r),l.appendChild(n),l.appendChild(c),l.appendChild(p),l},C=e=>{let t=document.getElementsByClassName("mainContainer")[0];t.innerHTML="";let l=f(),a=(e=>{let t=document.createElement("div");t.classList.add("cardsContainer");for(let l of e){let a=v(l,e);t.appendChild(a)}return t})(e);t.appendChild(l),t.appendChild(a)},b=t=>{let l=document.getElementsByClassName("mainContainer")[0];switch(document.getElementsByClassName("promo")[0].style.display="none",l.innerHTML="",t){case"home":l.style.display="grid",l.style.gridTemplateColumns="1fr 1fr 1fr",m(e);break;case"allTasks":l.style.display="block",C(e)}},E=(e,t)=>{for(let t of e)t.classList.remove("active");t.classList.add("active")};document.addEventListener("DOMContentLoaded",(()=>{let t=localStorage.getItem("tasks");null!=t&&(e=JSON.parse(t));let l=document.querySelectorAll("[page]"),a="home";for(let e of l)e.onclick=()=>{a=e.getAttribute("page"),b(a),E(l,e)}}))})();