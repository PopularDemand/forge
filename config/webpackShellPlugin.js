var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
    console.log(stdout);
}

const options = {
  development: {
    onBuildStart: [],
    onBuildEnd: [
      'cp src/public/index.hbs build/public'
    ]
  },
  'production': {
    onBuildStart: [],
    onBuildEnd: [
      'cp src/public/index.hbs build/public'
    ]
  }
}

function WebpackShellPlugin(env) {
  this.options = options[env || 'development'];
}

WebpackShellPlugin.prototype.apply = function(compiler) {
  const options = this.options;

  compiler.plugin("compilation", compilation => {
    if(options.onBuildStart.length){
        console.log("Executing pre-build scripts");
        options.onBuildStart.forEach(script => exec(script, puts));
    }
  });

  compiler.plugin("emit", (compilation, callback) => {
    if(options.onBuildEnd.length){
        console.log("Executing post-build scripts");
        options.onBuildEnd.forEach(script => exec(script, puts));
    }
    callback();
  });
};

module.exports = WebpackShellPlugin;