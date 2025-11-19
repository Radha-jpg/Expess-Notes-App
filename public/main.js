const list=document.getElementById('list');
async function load(){
  list.innerHTML='';
  const res=await fetch('/api/notes');
  (await res.json()).forEach(n=>{
    const li=document.createElement('li');
    li.textContent=n.title+': '+n.content;
    list.appendChild(li);
  });
}
async function add(){
  const t=document.getElementById('title').value;
  const c=document.getElementById('content').value;
  await fetch('/api/notes',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({title:t,content:c})});
  load();
}
load();
