import * as os from 'os';

console.log(`HOSTNAME: ${os.hostname}`);
console.log(`PLATFORM: ${os.platform}`);
console.log(`RELEASE: ${os.release}`);
console.log(`CPUS: ${os.cpus().length}x ${JSON.stringify(os.cpus()[0].model)}`);
console.log(`HOME DIRECTORY: ${os.homedir}`);
console.log(`FREE MEMORY: ${(os.freemem / Number("1E9")).toFixed(2)}GB`);
console.log(`TOTAL MEMORY: ${(os.totalmem / Number("1E9")).toFixed(2)}GB`);