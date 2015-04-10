var harp = require('harp');
var nodePath = require('path');

var projectPath = nodePath.resolve(process.cwd(), 'src');
harp.server(projectPath, { port: 9000 });
