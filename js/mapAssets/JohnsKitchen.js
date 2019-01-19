(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("JohnsKitchen",
{ "height":10,
 "infinite":false,
 "layers":[
        {
         "data":[36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 50, 1, 1, 1, 1, 1, 1, 1, 1, 40, 50, 1, 1, 1, 1, 1, 1, 1, 1, 40, 50, 1, 1, 1, 1, 1, 1, 1, 1, 40, 50, 1, 1, 1, 1, 1, 1, 1, 1, 40, 50, 1, 1, 1, 1, 1, 1, 1, 1, 40, 25, 1, 1, 1, 1, 3, 1, 1, 1, 40, 50, 1, 1, 1, 1, 1, 1, 1, 1, 40, 50, 1, 1, 1, 1, 1, 1, 1, 1, 40, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36],
         "height":10,
         "id":1,
         "name":"Tile Layer 1",
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
         "id":2,
         "name":"Tile Layer 2",
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
         "id":3,
         "name":"Tile Layer 3",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":10,
         "x":0,
         "y":0
        }],
 "nextlayerid":4,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.2.0",
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