// Demo API only. Uses in-memory sample data; no bank or identity-system connections.
const express=require('express');const cors=require('cors');const app=express();
app.use(cors());app.use(express.json());
let applications=[{id:'CBD-1048',business:'Li Wei Trading Ltd',stage:'Documents pending',crm:'Grace Chen'}];
let calls=[{id:'CALL-801',customer:'Li Wei Trading Ltd',crm:'Grace Chen',status:'Attended'}];
app.get('/api/health',(req,res)=>res.json({ok:true,environment:'demo',integrations:[]}));
app.get('/api/applications',(req,res)=>res.json(applications));
app.post('/api/applications',(req,res)=>{const item={id:'CBD-'+(1049+applications.length),...req.body,stage:'Registration received',crm:'Unassigned'};applications.push(item);res.status(201).json(item)});
app.patch('/api/applications/:id',(req,res)=>{applications=applications.map(x=>x.id===req.params.id?{...x,...req.body}:x);res.json(applications.find(x=>x.id===req.params.id)||null)});
app.get('/api/calls',(req,res)=>res.json(calls));
app.post('/api/calls',(req,res)=>{const item={id:'CALL-'+(801+calls.length),...req.body,status:'Scheduled'};calls.push(item);res.status(201).json(item)});
app.patch('/api/calls/:id',(req,res)=>{calls=calls.map(x=>x.id===req.params.id?{...x,...req.body}:x);res.json(calls.find(x=>x.id===req.params.id)||null)});
app.post('/api/bvn/verify',(req,res)=>res.status(501).json({message:'BVN verification is intentionally disabled in this prototype. No BVN data was processed.'}));
app.listen(4000,()=>console.log('Chinese Business Desk demo API listening on http://localhost:4000'));