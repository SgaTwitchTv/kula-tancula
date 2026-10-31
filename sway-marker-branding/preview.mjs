import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
const root=resolve(import.meta.dirname);
createServer(async(req,res)=>{
  const pathname=new URL(req.url,'http://localhost').pathname;
  const file=resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
  if(!file.startsWith(root+'\\') && file!==root){res.writeHead(403).end();return;}
  try{const data=await readFile(file);res.writeHead(200,{'Content-Type':extname(file)==='.png'?'image/png':extname(file)==='.svg'?'image/svg+xml':'text/html; charset=utf-8'});res.end(data);}catch{res.writeHead(404).end();}
}).listen(5180,'127.0.0.1',()=>console.log('SWAY concepts: http://127.0.0.1:5180/'));
