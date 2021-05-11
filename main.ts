controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f b b b b f . . . . . 
        . . . . f b b b b b b f . . . . 
        . . . . f b b b b b b f . . . . 
        . . . . f b b b b b b f . . . . 
        . . . . f b b b b b b f . . . . 
        . . . 2 f c c c c c c f 2 . . . 
        . . . 2 2 f c c c c f 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 e e e e e e e e e e 2 . . 
        . . 2 e e e e e e e e e e 2 . . 
        . . e e e e e e e e e e e e . . 
        . . . e e e e e e e e e e . . . 
        . . . . . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f b b b b f . . . . . 
        . . . . f b b b b b b f . . . . 
        . . . . f b b b b b b f . . . . 
        . . . . f b b b b b b f . . . . 
        . . . . f b b b b b b f . . . . 
        . . . 2 f c c c c c c f 2 . . . 
        . . . 2 2 f c c c c f 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 e e e e e e e e e e 2 . . 
        . . 2 e e e e e e e e e e 2 . . 
        . . e e e e e e e e e e e e . . 
        . . . e e e e e e e e e e . . . 
        . . . . f f f . . . . . . . . . 
        `],
    200,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.starField)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f f b b b b f . . . . . 
        . . . f b b b b b b f . . . . . 
        . . . f f f f b b b f . . . . . 
        . . . f f f f b b b f . . . . . 
        . . . f f f b b b b f . . . . . 
        . . . 2 b b b b b b f f 2 . . . 
        . . . f f f b b b f f b f . . . 
        . . 2 f b b b b b b b b f 2 . . 
        . . 2 f c b b b b b b c f 2 . . 
        . . 2 f c c b b b b c c f 2 . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        . . . . f f f . f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f . . f . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . f f b b b f f . . . . . 
        . . . f b b b b b b f . . . . . 
        . . . f f f f b b b f . . . . . 
        . . . f f f f b b b f . . . . . 
        . . . 2 f f b b b b f f 2 . . . 
        . . . f f f b b b f f b f . . . 
        . . 2 f b b b b b b b b f 2 . . 
        . . 2 f c b b b b b b c f 2 . . 
        . . 2 f c c b b b b c c f 2 . . 
        . . . f f f f f f f f f f . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f . . . . . . . 
        `],
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f b b b b f f . . . . 
        . . . . . f b b b b b b f . . . 
        . . . . . f b b b f f f f . . . 
        . . . . . f b b b f f f f . . . 
        . . . . . f b b b b f f f . . . 
        . . . 2 f f b b b b b b 2 . . . 
        . . . f b f f b b b f f f . . . 
        . . 2 f b b b b b b b b f 2 . . 
        . . 2 f c b b b b b b c f 2 . . 
        . . 2 f c c b b b b c c f 2 . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        . . . . . f f f . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . f . . . . . 
        . . . . . . . f f f f . . . . . 
        . . . . . f f b b b f f . . . . 
        . . . . . f b b b b b b f . . . 
        . . . . . f b b b f f f f . . . 
        . . . . . f b b b f f f f . . . 
        . . . 2 f f b b b b f f 2 . . . 
        . . . f b f f b b b f f f . . . 
        . . 2 f b b b b b b b b f 2 . . 
        . . 2 f c b b b b b b c f 2 . . 
        . . 2 f c c b b b b c c f 2 . . 
        . . . f f f f f f f f f f . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f f f . . . . . 
        `],
    200,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f b b b b f . . . . . 
        . . . . f b f f f f b f . . . . 
        . . . . f b f f f f b f . . . . 
        . . . . f b f f f f b f . . . . 
        . . . . f b b f f b b f . . . . 
        . . . 2 f b b b b b b f 2 . . . 
        . . . f b f b b b b f b f . . . 
        . . 2 f b b b b b b b b f 2 . . 
        . . 2 f c b b b b b b c f 2 . . 
        . . 2 f c c b b b b c c f 2 . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f b b b b f . . . . . 
        . . . . f b f f f f b f . . . . 
        . . . . f b f f f f b f . . . . 
        . . . . f b f f f f b f . . . . 
        . . . 2 f b b f f b b f 2 . . . 
        . . . f f b b b b b b f f . . . 
        . . 2 f b f b b b b f b f 2 . . 
        . . 2 f c b b b b b b c f 2 . . 
        . . 2 f c c b b b b c c f 2 . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    true
    )
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Ash Knight`, SpriteKind.Player)
controller.moveSprite(mySprite, 200, 200)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
