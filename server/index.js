// Demo API only. Uses in-memory sample data; no bank or identity-system connections.
const express=require('express');const cors=require('cors');const app=express();
app.use(cors());app.use(express.json());
let applications=[];
let meetings=[
{id:'MEET-801',customer:'Li Wei Trading Ltd',crm:'Simisola Bright',status:'Attended',type:'Physical meeting'},
{id:'MEET-802',customer:'Mei Imports Nigeria',crm:'David Zhang',status:'Missed',type:'Physical meeting'},
{id:'MEET-803',customer:'Dragon Bridge Logistics',crm:'Lily Wang',status:'Scheduled',type:'Physical meeting'}
];
app.get('/api/health',(req,res)=>res.json({ok:true,environment:'demo',integrations:[]}));
app.get('/api/applications',(req,res)=>res.json(applications));
app.post('/api/applications',(req,res)=>{const item={id:'CBD-'+(1049+applications.length),...req.body,status:req.body.status||'Draft',stage:req.body.status||'Draft',createdAt:new Date().toISOString()};applications.push(item);res.status(201).json(item)});
app.patch('/api/applications/:id',(req,res)=>{applications=applications.map(x=>x.id===req.params.id?{...x,...req.body,updatedAt:new Date().toISOString()}:x);res.json(applications.find(x=>x.id===req.params.id)||null)});
app.get('/api/meetings',(req,res)=>res.json(meetings));
app.post('/api/meetings',(req,res)=>{const item={id:'MEET-'+(804+meetings.length),...req.body,status:'Scheduled',type:'Physical meeting'};meetings.push(item);res.status(201).json(item)});
app.patch('/api/meetings/:id',(req,res)=>{meetings=meetings.map(x=>x.id===req.params.id?{...x,...req.body}:x);res.json(meetings.find(x=>x.id===req.params.id)||null)});
app.post('/api/bvn/verify',(req,res)=>res.status(501).json({message:'BVN verification is intentionally disabled in this prototype. No BVN data was processed.'}));
app.listen(4000,()=>console.log('Chinese Business Desk demo API listening on http://localhost:4000'));
