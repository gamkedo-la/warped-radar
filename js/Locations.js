//smallest size: 5 x 4

let johnsRoom = {
    layout: [
        2,2,2,2,2,2,2,2,2,2,
2,1,1,1,1,1,1,1,1,2,
2,1,1,1,1,1,1,1,1,2,
2,1,1,1,1,1,1,1,1,2,
2,1,1,1,1,1,1,1,1,2,
2,1,1,1,1,1,1,1,1,2,
2,1,1,1,1,3,1,1,1,2,
2,1,1,1,1,1,1,1,1,2,
2,1,1,1,1,1,1,1,1,2,
2,2,2,2,2,25,2,2,2,2
    ],
    columns: 10,
    rows: 10,
    name: "johnsRoom",
    
}

let johnsHallway = {
    layout: [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        81,81,81,80,80,1,81,81,1,1,1,1,80,80,1,1,
        81,81,81,81,81,81,81,81,80,80,3,1,80,80,1,25,
        81,81,81,81,81,81,81,81,81,80,81,81,81,81,80,1,
        81,1,1,81,81,81,80,81,81,81,81,81,81,81,80,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 ],
    columns: 16,
    rows: 10,
    name: "johnsHallway",
    
}

let johnsKitchen = {
    layout: [
            36,36,36,36,36,36,36,36,36,36,
            50,1,1,1,1,1,1,1,1,40,
            50,1,1,1,1,1,1,1,1,40,
            50,1,1,1,1,1,1,1,1,40,
            50,1,1,1,1,1,1,1,1,40,
            50,1,1,1,1,1,1,1,1,40,
            25,1,1,1,1,3,1,1,1,40,
            50,1,1,1,1,1,1,1,1,40,
            50,1,1,1,1,1,1,1,1,40,
            36,36,36,36,36,36,36,36,36,36
        ],
    columns: 10,
    rows: 10,
    name: "johnsKitchen",
    
}

let theCity = 
{ 
layout: [
    2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,26,27,27,28,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,29,30,30,31,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,32,33,33,34,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,47,48,48,49,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
2,1,1,1,1,1,26,27,28,1,1,1,1,1,1,1,1,1,1,1,1,26,28,50,51,51,52,1,1,1,1,26,27,28,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
2,1,1,26,27,28,29,30,31,1,1,1,1,26,28,1,1,1,1,1,1,29,31,50,51,51,52,1,1,1,1,29,30,31,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
2,1,1,29,30,31,32,33,34,35,36,36,37,29,31,35,36,36,36,36,37,32,34,50,51,51,52,35,36,36,37,32,33,34,1,35,36,36,36,36,37,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
2,1,1,32,33,34,50,51,52,47,48,48,49,32,34,41,42,43,44,45,46,38,40,50,51,51,52,47,48,48,49,50,51,52,1,47,48,48,48,48,49,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
2,1,1,38,39,40,50,71,52,59,60,61,62,38,40,53,71,55,56,57,58,50,52,50,51,51,52,59,60,61,62,50,71,52,1,59,60,61,61,61,62,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
2,1,1,63,64,65,63,72,65,74,75,76,77,63,65,66,72,68,69,70,77,63,65,63,64,64,65,74,75,76,77,63,72,65,1,74,75,76,76,76,77,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,26,27,27,28,1,1,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
2,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,3,78,78,78,78,78,78,78,78,78,78,78,78,78,78,6,29,30,30,31,1,1,1,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
2,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,86,87,6,32,33,33,34,1,1,1,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
2,4,4,4,4,4,4,4,4,4,4,4,35,36,36,37,4,4,4,4,4,4,4,26,27,28,4,4,4,4,26,27,27,27,28,5,82,83,6,38,39,39,40,1,1,1,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
2,81,81,81,81,81,35,36,36,37,81,81,50,39,39,40,35,36,37,26,27,27,28,29,30,31,26,27,28,80,29,30,30,30,31,6,82,83,6,63,64,64,65,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
2,81,81,81,81,81,50,39,39,40,81,81,63,64,64,65,50,39,40,32,33,33,34,32,33,34,29,30,31,81,32,33,33,33,34,6,82,83,6,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
2,81,81,81,81,81,63,64,64,65,81,81,81,81,81,81,50,51,52,38,39,39,40,38,39,40,32,33,34,81,38,39,26,27,28,6,82,83,6,26,27,27,28,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,50,51,52,63,64,64,65,63,64,65,38,39,40,81,63,64,29,30,31,6,82,83,6,29,30,30,31,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,63,64,65,81,81,81,81,1,1,1,63,64,65,81,81,81,32,33,34,6,82,83,6,32,33,33,34,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,1,1,1,1,1,1,81,81,81,38,39,40,6,82,83,6,38,39,39,40,81,81,81,26,27,27,28,81,81,81,26,27,28,81,81,81,2,
2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,1,1,1,1,1,1,81,81,80,63,64,65,6,82,83,6,63,64,64,65,80,81,81,29,30,30,31,26,27,28,29,30,31,28,81,81,2,
2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,1,1,1,1,1,1,80,80,26,27,27,28,6,82,83,6,35,36,36,36,36,36,37,32,33,33,34,29,30,31,32,33,34,31,81,81,2,
2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,80,29,30,30,31,6,82,83,6,47,48,48,48,48,48,49,38,39,39,40,32,33,34,50,51,52,25,81,81,2,
2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,29,30,30,31,6,82,83,6,59,60,61,61,61,61,62,63,64,64,65,38,39,40,50,71,52,40,81,81,2,
2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,32,33,33,34,6,82,83,6,74,75,76,76,76,76,77,81,81,81,81,63,64,65,63,72,65,65,81,81,2,
2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,38,39,39,40,6,82,83,6,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,25,4,4,4,4,2,
2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,63,64,64,65,6,82,85,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,2,
2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,6,82,87,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,2,
2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,26,27,27,27,28,6,82,83,6,4,4,4,4,4,4,4,4,26,27,28,4,4,4,4,26,27,27,27,28,2,
2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,29,30,30,30,31,6,82,83,6,81,81,81,81,26,27,27,28,29,30,31,26,27,28,80,29,30,30,30,31,2,
2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,32,33,33,33,34,6,82,83,6,81,81,81,81,32,33,33,34,32,33,34,29,30,31,81,32,33,33,33,34,2,
2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,1,81,81,81,81,81,81,81,81,81,81,81,81,81,38,39,39,39,40,6,82,83,6,81,81,81,81,38,39,39,40,38,39,40,32,33,34,81,38,39,26,27,28,2,
2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,63,64,64,64,65,6,82,83,6,81,81,80,81,63,64,64,65,63,64,65,38,39,40,81,63,64,29,30,31,2,
2,81,81,81,81,81,81,81,81,80,81,81,81,81,81,80,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,6,82,83,6,81,81,81,81,81,81,81,81,1,1,1,63,64,65,81,81,81,32,33,34,2,
2,81,81,81,81,81,81,81,80,81,81,80,80,81,81,81,81,26,27,27,27,27,27,27,27,28,81,81,81,81,81,81,81,81,81,6,82,83,6,81,81,81,81,81,81,81,81,1,1,1,1,1,1,81,81,81,38,39,40,2,
1,1,26,27,28,1,1,1,1,1,1,81,81,81,81,81,35,36,30,30,30,30,30,30,30,31,81,26,27,27,27,27,28,81,81,6,82,83,6,81,81,81,81,81,81,81,81,1,1,1,1,1,1,81,81,80,63,64,65,2,
27,28,29,30,31,1,1,1,1,26,28,81,81,81,81,81,29,31,33,33,33,33,33,33,33,34,81,29,30,30,30,30,31,81,81,6,82,83,6,26,27,27,27,28,80,80,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
30,31,32,33,34,35,36,36,37,29,31,81,81,81,81,81,32,34,51,51,51,51,51,51,51,52,81,32,33,33,33,33,34,81,81,6,82,83,6,32,33,33,33,34,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
33,34,50,51,52,47,48,48,49,32,34,81,81,81,81,81,38,40,51,51,51,51,51,51,71,52,81,50,51,51,51,51,52,81,81,6,82,83,6,38,39,39,39,40,81,80,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
39,40,50,71,52,59,60,61,62,38,40,81,81,81,81,81,50,52,64,64,64,64,64,64,72,65,80,50,51,51,51,71,52,81,81,6,82,83,6,63,64,64,64,65,81,80,81,80,81,81,81,81,81,81,81,81,81,81,81,2,
64,65,63,72,65,74,75,76,77,63,65,81,81,81,81,81,63,65,81,80,81,81,81,81,81,81,81,63,64,64,64,72,65,81,81,6,82,83,6,81,81,81,80,81,81,81,80,81,81,81,81,81,81,81,81,81,81,81,81,2,
2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,82,83,6,26,27,27,27,27,28,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
2,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,84,85,6,29,30,30,30,30,31,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
2,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,6,32,33,33,33,33,34,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
28,4,4,4,35,36,36,37,4,4,4,4,4,4,4,26,27,28,4,4,4,35,36,36,37,4,4,4,4,4,4,4,26,27,28,4,4,4,5,38,39,39,39,39,40,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
31,26,27,28,50,39,39,40,35,36,37,26,27,27,28,29,30,31,26,27,28,50,39,39,40,35,36,37,26,27,27,28,29,30,31,26,27,28,81,63,64,64,64,64,65,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
34,29,30,31,63,64,64,65,50,39,40,32,33,33,34,32,33,34,29,30,31,63,64,64,65,50,39,40,32,33,33,34,32,33,34,29,30,31,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
40,32,33,34,81,81,81,81,50,51,52,38,39,39,40,38,39,40,32,33,34,81,81,81,81,50,51,52,38,39,39,40,38,39,40,32,33,34,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
65,38,39,40,81,81,81,81,50,51,52,63,64,64,65,63,64,65,38,39,40,81,81,81,81,50,51,52,63,64,64,65,63,64,65,38,39,40,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
1,63,64,65,81,81,81,81,63,64,65,81,81,81,81,1,1,1,63,64,65,81,81,81,81,63,64,65,81,81,81,81,1,1,1,63,64,65,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
columns: 60,
rows: 60,
name: "theCity",

}

/* two layer version of the city WIP, when we're ready to test out---------------

    let theCity = 
    { 
    layout: [
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,2,
    2,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,3,78,78,78,78,78,78,78,78,78,78,78,78,78,78,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,2,
    2,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,86,87,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,2,
    2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,25,4,4,4,4,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,85,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,87,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,82,83,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,84,85,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
    2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
    2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
    2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
    2,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,2,
    2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],

    layout2: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,27,27,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,30,30,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,33,33,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,48,48,49,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,26,27,28,0,0,0,0,0,0,0,0,0,0,0,0,26,28,50,51,51,52,0,0,0,0,26,27,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,26,27,28,29,30,31,0,0,0,0,26,28,0,0,0,0,0,0,29,31,50,51,51,52,0,0,0,0,29,30,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,29,30,31,32,33,34,35,36,36,37,29,31,35,36,36,36,36,37,32,34,50,51,51,52,35,36,36,37,32,33,34,0,35,36,36,36,36,37,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,32,33,34,50,51,52,47,48,48,49,32,34,41,42,43,44,45,46,38,40,50,51,51,52,47,48,48,49,50,51,52,0,47,48,48,48,48,49,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,38,39,40,50,71,52,59,60,61,62,38,40,53,71,55,56,57,58,50,52,50,51,51,52,59,60,61,62,50,71,52,0,59,60,61,61,61,62,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,63,64,65,63,72,65,74,75,76,77,63,65,66,72,68,69,70,77,63,65,63,64,64,65,74,75,76,77,63,72,65,0,74,75,76,76,76,77,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,27,27,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,30,30,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,33,33,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,35,36,36,37,0,0,0,0,0,0,0,26,27,28,0,0,0,0,26,27,27,27,28,0,0,0,0,38,39,39,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,35,36,36,37,0,0,50,39,39,40,35,36,37,26,27,27,28,29,30,31,26,27,28,0,29,30,30,30,31,0,0,0,0,63,64,64,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,50,39,39,40,0,0,63,64,64,65,50,39,40,32,33,33,34,32,33,34,29,30,31,0,32,33,33,33,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,63,64,64,65,0,0,0,0,0,0,50,51,52,38,39,39,40,38,39,40,32,33,34,0,38,39,26,27,28,0,0,0,0,26,27,27,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50,51,52,63,64,64,65,63,64,65,38,39,40,0,63,64,29,30,31,0,0,0,0,29,30,30,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,63,64,65,0,0,0,0,0,0,0,63,64,65,0,0,0,32,33,34,0,0,0,0,32,33,33,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,38,39,40,0,0,0,0,38,39,39,40,0,0,0,26,27,27,28,0,0,0,26,27,28,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,63,64,65,0,0,0,0,63,64,64,65,0,0,0,29,30,30,31,26,27,28,29,30,31,28,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,27,27,28,0,0,0,0,35,36,36,36,36,36,37,32,33,33,34,29,30,31,32,33,34,31,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,30,30,31,0,0,0,0,47,48,48,48,48,48,49,38,39,39,40,32,33,34,50,51,52,25,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,30,30,31,0,0,0,0,59,60,61,61,61,61,62,63,64,64,65,38,39,40,50,71,52,40,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,33,33,34,0,0,0,0,74,75,76,76,76,76,77,0,0,0,0,63,64,65,63,72,65,65,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,38,39,39,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,63,64,64,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,27,27,27,28,0,0,0,0,0,0,0,0,0,0,0,0,26,27,28,0,0,0,0,26,27,27,27,28,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,30,30,30,31,0,0,0,0,0,0,0,0,26,27,27,28,29,30,31,26,27,28,0,29,30,30,30,31,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,33,33,33,34,0,0,0,0,0,0,0,0,32,33,33,34,32,33,34,29,30,31,0,32,33,33,33,34,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,38,39,39,39,40,0,0,0,0,0,0,0,0,38,39,39,40,38,39,40,32,33,34,0,38,39,26,27,28,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,63,64,64,64,65,0,0,0,0,0,0,0,0,63,64,64,65,63,64,65,38,39,40,0,63,64,29,30,31,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,63,64,65,0,0,0,32,33,34,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,27,27,27,27,27,27,27,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,38,39,40,0,
    0,0,26,27,28,0,0,0,0,0,0,0,0,0,0,0,35,36,30,30,30,30,30,30,30,31,0,26,27,27,27,27,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,80,63,64,65,0,
    0,28,29,30,31,0,0,0,0,26,28,0,0,0,0,0,29,31,33,33,33,33,33,33,33,34,0,29,30,30,30,30,31,0,0,0,0,0,0,26,27,27,27,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,31,32,33,34,35,36,36,37,29,31,0,0,0,0,0,32,34,51,51,51,51,51,51,51,52,0,32,33,33,33,33,34,0,0,0,0,0,0,32,33,33,33,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,34,50,51,52,47,48,48,49,32,34,0,0,0,0,0,38,40,51,51,51,51,51,51,71,52,0,50,51,51,51,51,52,0,0,0,0,0,0,38,39,39,39,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,40,50,71,52,59,60,61,62,38,40,0,0,0,0,0,50,52,64,64,64,64,64,64,72,65,0,50,51,51,51,71,52,0,0,0,0,0,0,63,64,64,64,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,65,63,72,65,74,75,76,77,63,65,0,0,0,0,0,63,65,0,0,0,0,0,0,0,0,0,63,64,64,64,72,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,27,27,27,27,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,30,30,30,30,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,33,33,33,33,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    28,0,0,0,35,36,36,37,0,0,0,0,0,0,0,26,27,28,0,0,0,35,36,36,37,0,0,0,0,0,0,0,26,27,28,0,0,0,0,38,39,39,39,39,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    31,26,27,28,50,39,39,40,35,36,37,26,27,27,28,29,30,31,26,27,28,50,39,39,40,35,36,37,26,27,27,28,29,30,31,26,27,28,0,63,64,64,64,64,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    34,29,30,31,63,64,64,65,50,39,40,32,33,33,34,32,33,34,29,30,31,63,64,64,65,50,39,40,32,33,33,34,32,33,34,29,30,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    40,32,33,34,0,0,0,0,50,51,52,38,39,39,40,38,39,40,32,33,34,0,0,0,0,50,51,52,38,39,39,40,38,39,40,32,33,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    65,38,39,40,0,0,0,0,50,51,52,63,64,64,65,63,64,65,38,39,40,0,0,0,0,50,51,52,63,64,64,65,63,64,65,38,39,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,63,64,65,0,0,0,0,63,64,65,0,0,0,0,0,0,0,63,64,65,0,0,0,0,63,64,65,0,0,0,0,0,0,0,63,64,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ]
    columns: 60,
    rows: 60,
    name: "theCity",

    }

----------------end two layer city data */