'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');

var NamedGenerator = module.exports = function NamedGenerator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(NamedGenerator, ScriptBase);

NamedGenerator.prototype.getLastPathSegment = function(path) {
  var index = Math.max(path.lastIndexOf("\\"), path.lastIndexOf("/"));
  return path.substring(index+1);
}
NamedGenerator.prototype.createNamedItem = function() {
  var extension = '.cs';
  this.generateTemplateFile(
    'class.cs',
    extension, {
      namespace: this.namespace(),
      classname: this.getLastPathSegment(this.classNameWithoutExtension(extension))
    }
  );
};
