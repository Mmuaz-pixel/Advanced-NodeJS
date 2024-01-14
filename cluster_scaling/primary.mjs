import cluster from 'cluster';
import os from 'os'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url)); 
const cpus = os.cpus().length; 

console.log(`Total cpus: ${cpus}`)
console.log(`primary id: ${process.pid}`)

cluster.setupPrimary({
    exec: __dirname + '/index.js'
})

for(let i = 0; i<cpus; i++)
{
    cluster.fork()
}

cluster.on('exit', (worker, code, signal)=> 
{
    console.log(`worker ${worker.process.pid} killed\nStarting another one`); 
    cluster.fork(); 
})