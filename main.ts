controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.setVelocity(0, -100)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (dash == true) {
        if (mySprite.vx > 0) {
            for (let index = 0; index < 10; index++) {
                mySprite.x += 3
                pause(15)
            }
        }
        if (mySprite.vx < 0) {
            for (let index = 0; index < 10; index++) {
                mySprite.x += -3
                pause(15)
            }
        }
        dash = false
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`pencil trap`, function (sprite, location) {
    info.changeLifeBy(-3)
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    if (enemy1.isHittingTile(CollisionDirection.Left)) {
        enemy1.vx = 50
    } else {
        if (enemy1.isHittingTile(CollisionDirection.Right)) {
            enemy1.vx = -50
        }
    }
    if (enemy12.isHittingTile(CollisionDirection.Left)) {
        enemy12.vx = 50
    } else {
        if (enemy12.isHittingTile(CollisionDirection.Right)) {
            enemy12.vx = -50
        }
    }
    if (enemy13.isHittingTile(CollisionDirection.Left)) {
        enemy13.vx = 50
    } else {
        if (enemy13.isHittingTile(CollisionDirection.Right)) {
            enemy13.vx = -50
        }
    }
})
info.onLifeZero(function () {
    game.setGameOverMessage(false, "you have perished")
    game.setGameOverEffect(false, effects.dissolve)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
let enemy13: Sprite = null
let enemy12: Sprite = null
let enemy1: Sprite = null
let mySprite: Sprite = null
let dash = false
let dashCooldown = 0
info.setLife(3)
dash = false
scene.setBackgroundColor(6)
mySprite = sprites.create(assets.image`eraserdude1`, SpriteKind.Player)
controller.moveSprite(mySprite, 50, 0)
mySprite.setPosition(14, 97)
mySprite.ay = 260
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
enemy1 = sprites.create(assets.image`eraserminionv1`, SpriteKind.Enemy)
enemy1.setPosition(260, 88)
enemy1.vx = 50
enemy12 = sprites.create(assets.image`eraserminionv1`, SpriteKind.Enemy)
enemy12.setPosition(420, 87)
enemy12.vx = 50
enemy13 = sprites.create(assets.image`eraserminionv1`, SpriteKind.Enemy)
enemy13.x = 450
enemy13.y = 8
enemy13.vx = 50
let mySprite20241104T175732701Z = sprites.create(img`
    . . 6 . . . . 6 . . 
    . . . 6 . . 6 . . . 
    . 6 6 . 6 6 . 6 6 . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . 6 6 . . . . 
    . 6 . . . . . . 6 . 
    . . 6 . . . . 6 . . 
    . . . 6 6 6 6 . . . 
    . . . . . . . . . . 
    `, SpriteKind.Player)
let New_Piskel = assets.image`test`
let Example = img`
    ffff............fffffffffffff...
    fffffffff......ffff.ffffffffff..
    ff.fffffff...fffffff........ff..
    ff...fffff...fff.ffffff.........
    ff..fffffff..fff...ffffff.......
    fff.fff.fff...fff.....ffff......
    fffffff..fff..ffff......fff.....
    fffffff..fff...ffff......ff.....
    ffffff....fff...fffff....ff.....
    f.ffff....ffff...ffff....ff.....
    ffffff....fffff..........ffff...
    fffff....fffffff........ffffff..
    fffff...ffff.ffff......fff.fff..
    .ffff...fff...fff....ffff...ff..
    ...ff...ff.....ff....fff...fff..
    ...ffffffffffff......ff....ff...
    ...ffffffffffff......ff....ff...
    ...fff..ff...........ff....ff...
    ....ff..fff.........fff....ff...
    ...fff..ffffffffff.fff.....ff...
    ...ff...fffffffffffff......ff...
    ..fff...ffffff.fffffff.....ff...
    ..fff...ff........ffff.....fff..
    ..fff...ff..........ff......ff..
    ..fff...fffff.......ff......ff..
    ..ffff..fffff.......ffffffffff..
    ....ffffffffffffffffffffffffff..
    ....fffffffffffffffffff...ffff..
    .....fff....................ff..
    .fffffff...................fff..
    ffffffff....fffffff........ff...
    ff..........fffffff........ff...
    `
