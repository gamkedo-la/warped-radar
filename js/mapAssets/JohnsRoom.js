(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("JohnsRoom",
{ "height":10,
 "infinite":false,
 "layers":[
        {
         "data":[111, 30, 122, 122, 122, 122, 122, 122, 30, 120, 31, 121, 122, 122, 122, 122, 122, 122, 123, 122, 31, 124, 125, 125, 125, 125, 125, 125, 126, 122, 31, 125, 125, 125, 125, 125, 125, 125, 125, 125, 31, 125, 125, 125, 125, 125, 125, 125, 125, 125, 31, 125, 125, 125, 125, 125, 125, 125, 125, 29, 31, 125, 125, 125, 125, 125, 125, 125, 125, 29, 31, 125, 125, 125, 125, 125, 125, 125, 125, 29, 31, 125, 125, 125, 125, 125, 125, 125, 125, 29, 113, 27, 27, 27, 125, 125, 125, 27, 27, 112],
         "height":10,
         "id":1,
         "name":"Ground",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":10,
         "x":0,
         "y":0
        }, 
        {
         "data":[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 25, 25, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 3, 0, 0, 0, 2, 2, 0, 0, 0, 0, 25, 0, 0, 0, 2, 2, 2, 2, 2, 2, 25, 2, 2, 2, 2],
         "height":10,
         "id":2,
         "name":"Interactable",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":10,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 118, 0, 0, 0, 0, 0, 0, 120, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 129, 0, 0, 0, 0, 0, 28, 0, 26, 0, 0, 0],
         "height":10,
         "id":3,
         "name":"Depth-Sorted",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":10,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":10,
         "id":4,
         "name":"Heightmap",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":10,
         "x":0,
         "y":0
        }],
 "nextlayerid":5,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"2018.12.22",
 "tileheight":40,
 "tilesets":[
        {
         "firstgid":1,
         "source":"..\/..\/tiledMaps\/AllTiles.tsx"
        }],
 "tilewidth":40,
 "type":"map",
 "version":1.2,
 "width":10
});