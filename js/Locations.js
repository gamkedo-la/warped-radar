//smallest size: 5 x 4

const Layer = {
    Ground:0,
    Interaction:1,
    Overhead:2
}

let johnsRoom = {
    layers: [
//Layer.Ground (index 0)
[0,0,0,0,0,0,0,0,0,0,
0,1,1,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,1,1,0,
0,1,1,1,1,3,1,1,1,0,
0,1,1,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,1,1,0,
0,0,0,0,0,25,0,0,0,0],

//Layer.Interaction (index 1)
[2,2,2,2,2,2,2,2,2,2,
2,0,0,0,0,0,0,0,0,2,
2,0,0,0,0,0,0,0,0,2,
2,0,0,0,0,0,0,0,0,2,
2,0,0,0,0,0,0,0,0,2,
2,0,0,0,0,0,0,0,0,2,
2,0,0,0,0,0,0,0,0,2,
2,0,0,0,0,0,0,0,0,2,
2,0,0,0,0,0,0,0,0,2,
2,2,2,2,2,25,2,2,2,2]
    ],
    columns: 10,
    rows: 10,
    name: "johnsRoom",
    
}

let johnsHallway = {
    layers: [
        //Layer.Ground (index 0)
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
        0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
        0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
        81,81,81,80,80,1,81,81,1,1,1,1,80,80,1,0,
        81,81,81,81,81,81,81,81,80,80,3,1,80,80,1,25,
        81,81,81,81,81,81,81,81,81,80,81,81,81,81,80,0,
        81,1,1,81,81,81,80,81,81,81,81,81,81,81,80,0,
        0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
        0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
        0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
        0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
        0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
        0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
        0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

        //Layer.Interaction (index 1)
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
        2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,25,
        2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
        2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
        2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
        2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
        2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
        2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
        2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ],
    columns: 16,
    rows: 16,
    name: "johnsHallway",
}

let johnsKitchen = {
    layers: [
            //Layer.Ground (index 0)
            [0,0,0,0,0,0,0,0,0,0,
            0,1,1,1,1,1,1,1,1,0,
            0,1,1,1,1,1,1,1,1,0,
            0,1,1,1,1,1,1,1,1,0,
            0,1,1,1,1,1,1,1,1,0,
            0,1,1,1,1,1,1,1,1,0,
            25,1,1,1,1,3,1,1,1,0,
            0,1,1,1,1,1,1,1,1,0,
            0,1,1,1,1,1,1,1,1,0,
            0,0,0,0,0,0,0,0,0,0],

            //Layer.Interaction (index 1)
            [36,36,36,36,36,36,36,36,36,36,
                50,0,0,0,0,0,0,0,0,40,
                50,0,0,0,0,0,0,0,0,40,
                50,0,0,0,0,0,0,0,0,40,
                50,0,0,0,0,0,0,0,0,40,
                50,0,0,0,0,0,0,0,0,40,
                25,0,0,0,0,0,0,0,0,40,
                50,0,0,0,0,0,0,0,0,40,
                50,0,0,0,0,0,0,0,0,40,
                36,36,36,36,36,36,36,36,36,36]
        ],
    columns: 10,
    rows: 10,
    name: "johnsKitchen",
    
}

    let theCity = 
    { 
    layers: [
    //Layer.Ground (index 0)
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,0,
    0,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,3,78,78,78,78,78,78,78,78,78,78,78,78,78,78,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,0,
    0,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,86,87,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,0,
    0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,25,4,4,4,4,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,85,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,87,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,84,85,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,0,
    0,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,0,
    0,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,0,
    0,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

    //Layer.Interaction (index 1)
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,27,27,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,30,30,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,33,33,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,48,48,49,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,26,27,28,0,0,0,0,0,0,0,0,0,0,0,0,26,28,50,51,51,52,0,0,0,0,26,27,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,26,27,28,29,30,31,0,0,0,0,26,28,0,0,0,0,0,0,29,31,50,51,51,52,0,0,0,0,29,30,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,29,30,31,32,33,34,35,36,36,37,29,31,35,36,36,36,36,37,32,34,50,51,51,52,35,36,36,37,32,33,34,0,35,36,36,36,36,37,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,32,33,34,50,51,52,47,48,48,49,32,34,41,42,43,44,45,46,38,40,50,51,51,52,47,48,48,49,50,51,52,0,47,48,48,48,48,49,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,38,39,40,50,71,52,59,60,61,62,38,40,53,71,55,56,57,58,50,52,50,51,51,52,59,60,61,62,50,71,52,0,59,60,61,61,61,62,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,63,64,65,63,72,65,74,75,76,77,63,65,66,72,68,69,70,77,63,65,63,64,64,65,74,75,76,77,63,72,65,0,74,75,76,76,76,77,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,27,27,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,30,30,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,33,33,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,35,36,36,37,0,0,0,0,0,0,0,26,27,28,0,0,0,0,26,27,27,27,28,0,0,0,0,38,39,39,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,35,36,36,37,0,0,50,39,39,40,35,36,37,26,27,27,28,29,30,31,26,27,28,0,29,30,30,30,31,0,0,0,0,63,64,64,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,50,39,39,40,0,0,63,64,64,65,50,39,40,32,33,33,34,32,33,34,29,30,31,0,32,33,33,33,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,63,64,64,65,0,0,0,0,0,0,50,51,52,38,39,39,40,38,39,40,32,33,34,0,38,39,26,27,28,0,0,0,0,26,27,27,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50,51,52,63,64,64,65,63,64,65,38,39,40,0,63,64,29,30,31,0,0,0,0,29,30,30,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,63,64,65,0,0,0,0,0,0,0,63,64,65,0,0,0,32,33,34,0,0,0,0,32,33,33,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,38,39,40,0,0,0,0,38,39,39,40,0,0,0,26,27,27,28,0,0,0,26,27,28,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,63,64,65,0,0,0,0,63,64,64,65,0,0,0,29,30,30,31,26,27,28,29,30,31,28,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,27,27,28,0,0,0,0,35,36,36,36,36,36,37,32,33,33,34,29,30,31,32,33,34,31,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,30,30,31,0,0,0,0,47,48,48,48,48,48,49,38,39,39,40,32,33,34,50,51,52,25,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,30,30,31,0,0,0,0,59,60,61,61,61,61,62,63,64,64,65,38,39,40,50,71,52,40,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,33,33,34,0,0,0,0,74,75,76,76,76,76,77,0,0,0,0,63,64,65,63,72,65,65,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,38,39,39,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,63,64,64,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,27,27,27,28,0,0,0,0,0,0,0,0,0,0,0,0,26,27,28,0,0,0,0,26,27,27,27,28,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,30,30,30,31,0,0,0,0,0,0,0,0,26,27,27,28,29,30,31,26,27,28,0,29,30,30,30,31,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,33,33,33,34,0,0,0,0,0,0,0,0,32,33,33,34,32,33,34,29,30,31,0,32,33,33,33,34,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,38,39,39,39,40,0,0,0,0,0,0,0,0,38,39,39,40,38,39,40,32,33,34,0,38,39,26,27,28,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,63,64,64,64,65,0,0,0,0,0,0,0,0,63,64,64,65,63,64,65,38,39,40,0,63,64,29,30,31,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,63,64,65,0,0,0,32,33,34,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,27,27,27,27,27,27,27,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,38,39,40,2,
    2,0,26,27,28,0,0,0,0,0,0,0,0,0,0,0,35,36,30,30,30,30,30,30,30,31,0,26,27,27,27,27,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,80,63,64,65,2,
    2,28,29,30,31,0,0,0,0,26,28,0,0,0,0,0,29,31,33,33,33,33,33,33,33,34,0,29,30,30,30,30,31,0,0,0,0,0,0,26,27,27,27,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,31,32,33,34,35,36,36,37,29,31,0,0,0,0,0,32,34,51,51,51,51,51,51,51,52,0,32,33,33,33,33,34,0,0,0,0,0,0,32,33,33,33,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,34,50,51,52,47,48,48,49,32,34,0,0,0,0,0,38,40,51,51,51,51,51,51,71,52,0,50,51,51,51,51,52,0,0,0,0,0,0,38,39,39,39,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,40,50,71,52,59,60,61,62,38,40,0,0,0,0,0,50,52,64,64,64,64,64,64,72,65,0,50,51,51,51,71,52,0,0,0,0,0,0,63,64,64,64,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,65,63,72,65,74,75,76,77,63,65,0,0,0,0,0,63,65,0,0,0,0,0,0,0,0,0,63,64,64,64,72,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,27,27,27,27,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,30,30,30,30,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,33,33,33,33,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    28,0,0,0,35,36,36,37,0,0,0,0,0,0,0,26,27,28,0,0,0,35,36,36,37,0,0,0,0,0,0,0,26,27,28,0,0,0,0,38,39,39,39,39,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    31,26,27,28,50,39,39,40,35,36,37,26,27,27,28,29,30,31,26,27,28,50,39,39,40,35,36,37,26,27,27,28,29,30,31,26,27,28,0,63,64,64,64,64,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    34,29,30,31,63,64,64,65,50,39,40,32,33,33,34,32,33,34,29,30,31,63,64,64,65,50,39,40,32,33,33,34,32,33,34,29,30,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    40,32,33,34,0,0,0,0,50,51,52,38,39,39,40,38,39,40,32,33,34,0,0,0,0,50,51,52,38,39,39,40,38,39,40,32,33,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    65,38,39,40,0,0,0,0,50,51,52,63,64,64,65,63,64,65,38,39,40,0,0,0,0,50,51,52,63,64,64,65,63,64,65,38,39,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,63,64,65,0,0,0,0,63,64,65,0,0,0,0,0,0,0,63,64,65,0,0,0,0,63,64,65,0,0,0,0,0,0,0,63,64,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ],
    columns: 60,
    rows: 60,
    name: "theCity",

    }