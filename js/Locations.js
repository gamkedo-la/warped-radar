//smallest size: 5 x 4

const Layer = {
    Ground:0,
    Interaction:1,
    Overhead:2
}

let johnsRoom = {
    layers: [
        //Layer.Ground (index 0)
        TileMaps.JohnsRoom.layers[0].data,
        //Layer.Interactable (index 1)
        TileMaps.JohnsRoom.layers[1].data,
        //Layer.Overhead (index 2)
        TileMaps.JohnsRoom.layers[2].data,
    ],
    columns: 10,
    rows: 10,
    name: "johnsRoom"
    
}

let johnsHallway = {
    layers: [
    //Layer.Ground (index 0)
    TileMaps.JohnsHallway.layers[0].data,
    //Layer.Interactable (index 1)
    TileMaps.JohnsHallway.layers[1].data,
    //Layer.Overhead (index 2)
    TileMaps.JohnsHallway.layers[2].data,
    ],
    columns: 16,
    rows: 16,
    name: "johnsHallway"
}

let johnsKitchen = {
    layers: [
           //Layer.Ground (index 0)
        TileMaps.JohnsKitchen.layers[0].data,
        //Layer.Ground (index 1)
        TileMaps.JohnsKitchen.layers[1].data,
        //Layer.Ground (index 2)
        TileMaps.JohnsKitchen.layers[2].data,
        ],
    columns: 10,
    rows: 10,
    name: "johnsKitchen"
    
}

let theCity = { 
    layers: [
    //Layer.Ground (index 0)
    TileMaps.City.layers[0].data,
    //Layer.Interactable (index 1)
    TileMaps.City.layers[1].data,
    //Layer.Overhead (index 2)
    TileMaps.City.layers[2].data,
    ],
    columns: 60,
    rows: 60,
    name: "theCity"

    }