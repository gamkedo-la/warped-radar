const Layer = {
    Ground:0,
    Interaction:1,
    Depth_Sorted:2,
    Heightmap:3
}

const TileSet = {//index in the 'tilesets' array from Tiled
    Normal:0,
    Height:1
}

let johnsRoom = {
    layers: [
        //Layer.Ground (index 0)
        TileMaps.JohnsRoom.layers[Layer.Ground].data,
        //Layer.Interactable (index 1)
        TileMaps.JohnsRoom.layers[Layer.Interaction].data,
        //Layer.Depth_Sorted(index 2)
        TileMaps.JohnsRoom.layers[Layer.Depth_Sorted].data,
        //Layer.Heightmap(index 3)
        TileMaps.JohnsRoom.layers[Layer.Heightmap].data,
    ],
    columns: TileMaps.JohnsRoom.width,
    rows: TileMaps.JohnsRoom.height,
    name: "johnsRoom",
//    groundValue: TileMaps.JohnsRoom.tilesets[TileSet.Height].firstgid
}

let theCity = { 
    layers: [
        //Layer.Ground (index 0)
        TileMaps.City.layers[Layer.Ground].data,
        //Layer.Interaction (index 1)
        TileMaps.City.layers[Layer.Interaction].data,
        //Layer.Depth_Sorted (index 2)
        TileMaps.City.layers[Layer.Depth_Sorted].data,
        //Layer.Heightmap(index 3)
        TileMaps.City.layers[Layer.Heightmap].data,
    ],
    columns: TileMaps.City.width,
    rows: TileMaps.City.height,
    name: "theCity",
    groundValue: TileMaps.City.tilesets[TileSet.Height].firstgid
}

let davesHouse = { 
    layers: [
        //Layer.Ground (index 0)
        TileMaps.DavesHouse.layers[Layer.Ground].data,
        //Layer.Interaction (index 1)
        TileMaps.DavesHouse.layers[Layer.Interaction].data,
        //Layer.Depth_Sorted (index 2)
        TileMaps.DavesHouse.layers[Layer.Depth_Sorted].data,
        //Layer.Heightmap(index 3)
        TileMaps.DavesHouse.layers[Layer.Heightmap].data,
    ],
    columns: TileMaps.DavesHouse.width,
    rows: TileMaps.DavesHouse.height,
    name: "davesHouse",
    groundValue: TileMaps.DavesHouse.tilesets[TileSet.Height].firstgid
} 

let juliesStore = { 
    layers: [
        //Layer.Ground (index 0)
        TileMaps.JuliesStore.layers[Layer.Ground].data,
        //Layer.Interaction (index 1)
        TileMaps.JuliesStore.layers[Layer.Interaction].data,
        //Layer.Depth_Sorted (index 2)
        TileMaps.JuliesStore.layers[Layer.Depth_Sorted].data,
        //Layer.Heightmap(index 3)
        TileMaps.JuliesStore.layers[Layer.Heightmap].data,
    ],
    columns: TileMaps.JuliesStore.width,
    rows: TileMaps.JuliesStore.height,
    name: "juliesStore",
    groundValue: TileMaps.JuliesStore.tilesets[TileSet.Height].firstgid
}