const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const baseDir = path.join(__dirname, 'public', 'images', 'PROYECTOS');
const newBaseDir = path.join(__dirname, 'public', 'images', 'proyectos');

// Rename PROYECTOS to proyectos safely in Windows (case insensitive)
if (fs.existsSync(baseDir)) {
  const tempDir = path.join(__dirname, 'public', 'images', 'PROYECTOS_TEMP');
  fs.renameSync(baseDir, tempDir);
  fs.renameSync(tempDir, newBaseDir);
}

const dirMap = {
  'andes ciudad(proyecto ganador concurso cotelco )': 'andes-ciudad',
  'gym boutique': 'gym-boutique',
  'urban living': 'urban-living',
  'refugio  rural': 'refugio-rural',
  'caribe': 'caribe',
  'conant': 'conant'
};

function formatFilename(name) {
  return name.toLowerCase()
    .replace(/[()]/g, '')
    .replace(/[^\w\s\.-]/g, '') 
    .replace(/\s+/g, '-')
    .replace(/_plus_/gi, '') 
    .replace(/-+/g, '-') 
    .replace(/^-|-$/g, '');
}

if (fs.existsSync(newBaseDir)) {
  const projectsDirs = fs.readdirSync(newBaseDir);
  for (const pDir of projectsDirs) {
    const fullPDir = path.join(newBaseDir, pDir);
    if (!fs.statSync(fullPDir).isDirectory()) continue;
    
    // Rename files inside the project directory
    const files = fs.readdirSync(fullPDir);
    for (const file of files) {
      const formatted = formatFilename(file);
      if (formatted !== file) {
        const oldFile = path.join(fullPDir, file);
        const tempFile = path.join(fullPDir, formatted + '_temp');
        const newFile = path.join(fullPDir, formatted);
        fs.renameSync(oldFile, tempFile);
        fs.renameSync(tempFile, newFile);
      }
    }
    
    // Rename the project directory itself
    const lowerName = pDir.toLowerCase();
    const mapped = dirMap[lowerName];
    if (mapped && mapped !== pDir) {
        const tempPDir = path.join(newBaseDir, mapped + '_temp');
        const finalPDir = path.join(newBaseDir, mapped);
        fs.renameSync(fullPDir, tempPDir);
        fs.renameSync(tempPDir, finalPDir);
    }
  }
}

// Update lib/data/projects.ts
const projectsFile = path.join(__dirname, 'lib', 'data', 'projects.ts');
let content = fs.readFileSync(projectsFile, 'utf8');

// Replace PROYECTOS with proyectos
content = content.replace(/\/images\/PROYECTOS\//g, '/images/proyectos/');

// Replace each direct map in paths
for (const [oldName, newName] of Object.entries(dirMap)) {
  // Escape for regex
  const escapedOld = oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`\/images\/proyectos\/${escapedOld}\/`, 'gi');
  content = content.replace(re, `/images/proyectos/${newName}/`);
}

// Replace file names that match `/images/proyectos/...`
content = content.replace(/\/images\/proyectos\/([^\/"]+)\/([^\"]+)/g, (match, folder, file) => {
  return `/images/proyectos/${folder}/${formatFilename(file)}`;
});

fs.writeFileSync(projectsFile, content);
console.log('Fixed paths in projects.ts');
