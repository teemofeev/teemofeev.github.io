const fs = require('fs');
const axios = require('axios');
const endOfLine = require('os').EOL;

const projectsDataPath = 'http://localhost:4200/assets/texts/projects/index.json';

const routesFile = './static-routes.txt';

const readRoutes = () => {
  axios.get(projectsDataPath).then(res => {
    const routes = [];
    res.data.forEach(item => {
      if (!item.slug.startsWith('http')) {
        console.log(item);
        routes.push('projects/' + item.slug);
      }
    });
    fs.writeFileSync(routesFile, routes.join(endOfLine), 'utf8');
  }).catch(e => console.log(e));
}

readRoutes();
