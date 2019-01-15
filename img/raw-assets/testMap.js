(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("testMap",
{ "height":16
 "infinite":false,
 "layers":[
        {
         "data":[1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 
1 , 0 , 0 , 0 , 0 , 0 , 0 , 5 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1 , 
1 , 0 , 0 , 0 , 0 , 0 , 0 , 5 , 10, 11, 12, 0 , 0 , 0 , 0 , 0 , 0 , 1 , 
1 , 24, 0 , 0 , 0 , 0 , 0 , 5 , 13, 14, 15, 0 , 0 , 0 , 0 , 0 , 0 , 1 , 
1 , 2 , 0 , 3 , 3 , 3 , 3 , 4 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1 , 
1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1 , 
1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 17, 0 , 0 , 0 , 0 , 0 , 0 , 1 , 
1 , 0 , 16, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1 , 
1 , 0 , 0 , 0 , 0 , 18, 0 , 0 , 0 , 0 , 19, 0 , 0 , 0 , 0 , 0 , 0 , 1 , 
1 , 0 , 22, 23, 0 , 0 , 0 , 25, 26, 26, 26, 26, 27, 0 , 0 , 0 , 0 , 1 , 
1 , 0 , 0 , 0 , 0 , 20, 0 , 28, 29, 29, 29, 29, 30, 0 , 0 , 0 , 0 , 1 , 
1 , 0 , 0 , 0 , 0 , 0 , 0 , 31, 32, 32, 32, 32, 33, 34, 35, 35, 36, 1 , 
1 , 0 , 0 , 0 , 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 47, 48, 1 , 
1 , 0 , 0 , 0 , 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 1 , 
1 , 0 , 0 , 0 , 62, 63, 64, 65, 66, 67, 68, 69, 72, 73, 74, 75, 76, 1 , 
1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1],
         "height":100,
         "id":1,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":100,
         "x":0,
         "y":0
        }],
 "nextlayerid":2,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"2018.12.22",
 "tileheight":40,
 "tilesets":[
        {
         "firstgid":1,
         "source":"AllTiles.tsx"
        }],
 "tilewidth":40,
 "type":"map",
 "version":1.2,
 "width":18
});