/* SNAP shared offline pilot store — demo only. No network calls. */
window.SNAPShared = {
 key:'snap_offline_shared_v1',
 read(){try{return JSON.parse(localStorage.getItem(this.key)||'null')}catch{return null}},
 publish(data,workers,projects){
   const old=this.read()||{version:1};
   const p=projects.find(x=>x.id===data.site);
   const snapshot={version:1,updatedAt:new Date().toISOString(),supervisor:{name:'John',started:!!data.started,startAt:data.startAt,siteId:data.site,siteName:p?.name||null,siteAt:data.siteAt},
     projects:{...(old.projects||{})},expenses:data.expenses||[]};
   for(const proj of projects){
     const hasAttendance=!!(data.attendanceLocks||{})[proj.id] || Object.keys(data.attendance||{}).some(k=>k.startsWith(proj.id+'-'));
     if(hasAttendance){snapshot.projects[proj.name]={updatedAt:new Date().toISOString(),locked:!!(data.attendanceLocks||{})[proj.id],workers:workers.map(w=>({id:w.id,name:w.name,job:w.role,status:(data.attendance[proj.id+'-'+w.id]||{v:['P','P','H','A','P','P'][w.id%6]}).v})),works:(data.works||[]).map(w=>({id:w.id,title:w.title,pct:w.pct,due:w.due,owner:w.owner,todos:w.todos,updates:w.updates}))}}
   }
   localStorage.setItem(this.key,JSON.stringify(snapshot));
 },
 clear(){localStorage.removeItem(this.key)}
};
