// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Test Level":
            case "level2":return tiles.createTilemap(hex`0a00070004050505050501050503080b0b0b0b010b0b0b09080a0d0d0d0d0d0d0a09080d0d010d0d0d0d0d09080c010c0101010d0c0e0601070707070707010201010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . 2 . . . 2 
2 . . . . . . . . 2 
2 . . 2 . . . . . 2 
2 . 2 . 2 2 2 . . 2 
2 2 . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundCenter,sprites.dungeon.greenOuterEast0], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`3100070000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000400000000000000000000000000000004040000000404000000000000000004010400000000000000000000000000040004000000000000000000000000000400040000000000040000000000000004040401040000000000040000000004000400040000040000000004040000000404000400000000000400040000000004040404040400000004040404000000040004000400000400040000040403030103010201020202020203020301030303010103010303020202010301010303010302010203020203020301030301`, img`
.................................................
.................................................
......................2................2.........
......22...22........222.............2.2.........
....2.2.....2.......22222.....2....2.2.2..2....22
...22.2.....2.2....222222...2222...2.2.2..2.2..22
22222.2.....2.22222222222...22222222.2.2..2.22222
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile5,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "grassblock1":
            case "tile1":return tile1;
            case "cobblestone1":
            case "tile2":return tile2;
            case "mossblock1":
            case "tile3":return tile3;
            case "pencil trap":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
