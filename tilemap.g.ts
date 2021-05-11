// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000060606060606060606060606060606060601020202020202020202020202030606080a0a0a0a0a0a0a0a0a0a0a0a040606080a0a0a0a0a0a0a0a0a0a0a0a040606080a0a0a0a0a0a0a0a0a0a0a0a040606080a0a0a0a0a0a0a0a0a0a0a0a040606080a0a0a0a0a0a0a0a0a0a0a0a040606080a0a0a0a0a0a0a0a0a0a0a0a040606080a0a0a0a0a0a0a0a0a0a0a0a040606080a0a0a0a0a0a0a0a0a0a0a0a040606080a0a0a0a0a0a0a0a0a0a0a0a040606080a0a0a0a0a0a0a0a0a0a0a0a040606080a0a0a0a0a0a0a0a0a0a0a0a040606080a0a0a0a0a0a0a0a0a0a0a0a04060607090909090909090909090909050606060606060606060606060606060606`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tileGrass1,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tilePath5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
