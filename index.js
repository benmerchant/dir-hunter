/**
 * @filename '/noitunes/index.js'
 * @fileoverview crawl through a directory and its 287 sub-directories
 to find all 2,277 files,
 move them to a more easily accessible location,
 and pretty print the tree structure
 * @author Ben Merchant
 * @licence MIT
 * @copyright 2019
 */
const fs = require('fs');
const path = require('path');
/** {String} get current directory and replace the slashes */
const homeDir = __dirname;// .split(path.sep).join('/');
/**
* instantiate a {new TreeNode}
* @param {*} parent
* @param {*} entType
* @param {*} name
* @param {*} level
* @param {*} levelId
* @returns {new TreeNode} properties vary depending on >1 param
*/
class TreeNode{
  constructor(parent, entType, name, level, levelId) {
    this.entityType = entType;
    this.levelId = levelId; // an identifier for each entity in a row
    // if (top node) no parent
    this.parent = (parent) ? parent : null;
    // the higest node, only @homeDir can have a level===1
    this.level = (this.parent) ? level : 0;
    // have we check if it has children?
    if(entType==='directory'){
      // name with a leading slash
      this.name = name;
      // files dont need a children property
      this.children = [];
      this.childCheck = 0;
    } else {
      this.childCheck = 1;
      let tempNameArray = name.split('.');
      // name = file name sans file type
      this.name = tempNameArray[0];
      this.fileType = tempNameArray[1];
    }
  }
}
/**
* access the file system
* loop through an array of what we'll call "entities" {fs.Dirent objects}
* fs.readdir(path, {options}, cb)
  ^^^^{options.withFileTypes: true} - signals the function to provide the array
                of files (the second arg of the callback fn) as
                {fs.Dirent} objects, not {Strings}/{Buffers}.
* )nothing to return merely modifies an object
      ^^^ which I have read is not proper programming
* @param {String} currentDir - directoryname of a path
* @param {TreeNode} currentParent first run, this will be TopTreeNode
                          subsequent recursions will provide new 'Top' TreeNodes
                          with children of their own
*/
const readCurrentDirectoryAndReturnAllFiles = (err,currentDir) => {
  if(err) console.log(err);
  fs.readdir(currentDir,{withFileTypes:true},(err,filesArr) => {
    if (err) {
      console.log(err);
    } else {
      return (filesArr);
    }
  });



}
/**
* modifies the TopTreeNode, namely TopTreeNode.children
* @param {fs.Dirent obj} node mainly for building new TreeNodes
* @param {Array[fs.Dirent obj]} direntArr mainly for building new TreeNodes
* @param {TopTreeNode obj} currentParent mainly for building new TreeNodes
*/
const doNodeStuff = (node, direntArr, currentParent) => {
  let dirOrFile; // temporary variable for the current node
  // it could be something else besides a file; This has to be a bad pattern
  (node.isDirectory()) ? dirOrFile = 'directory' : dirOrFile = (node.isFile()) ? dirOrFile = 'file' : dirOrFile= 'It\'s neither, what is it?';;

  ///////////////////////////////////
  // TODO: combine if/else with ternary above
  ///////////////////////////////////
  // cheat sheet::: TreeNode constructor(parent, entType, name, level, levelId)
  let tempTreeNode = new TreeNode(
    currentParent.name,
    dirOrFile,
    node.name,
    currentParent.level+1,
    direntArr.indexOf(node)
  );
  if(dirOrFile==='directory'){
    // do directory stuff
    // recurse
  } else if (dirOrFile==='file'){
    // do file stuff
    // if the node is a file, we don't need to check for children
    delete tempTreeNode.children;
    tempTreeNode.childCheck = 1;

  } else {
    console.log(`[${node.name}] entity is neither a file nor a dir.`);
  }
  /* cheat sheet */
  /* constructor(parent, entType, name, level, levelId) */
  currentParent.children.push(tempTreeNode);
  //once built, add to children list of parent

  console.log(`[${node.name}] is a ${dirOrFile.toUpperCase()}:`);
  let goodbyeMessage = `NEXT node :`;
  // when we have created a node for every entity on this level
  if (direntArr.indexOf(node) === direntArr.length-1) {
    goodbyeMessage = `LAST node in this 'row'.`
  }



  console.log(`>>>>${goodbyeMessage}\n`);
}
/*** [ MAIN? Why not? ] */
const MAIN = () => {
  console.log(`\nWelcome to ${homeDir}!\n=====> Let's get this mess sorted. <=====\n`);
  // construct TOP node
  const TopTreeNode = new TreeNode(null, 'directory', homeDir.split('/').pop(), 0, 0); console.log(TopTreeNode);
  console.log(`^^^^^^^Current Parent^^^^^^^^^^<=====\n`);
  console.log(homeDir);

  console.log(readCurrentDirectoryAndReturnAllFiles(homeDir));
  // console.log(arrayOfFiles); console.log(`^^^^^^^^First Dirents^^^^^^^^^^<=====\n`);
  //
  // arrayOfFiles.forEach((node,ii,thisArr) => {
  //   doNodeStuff(node, thisArr, currentParent);
  // });
  // console.log(currentParent);

};

MAIN();
