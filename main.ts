namespace SpriteKind {
    export const amigo = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    mySprite.say("ahhh", 1000)
    scene.cameraShake(8, 500)
    mySprite.startEffect(effects.warmRadial, 1000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.say("encuentra el tesoro", 1000)
    mySprite.say(":)", 1000)
    mySprite3.say("no lo encontraras", 1000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTilemap(tilemap`level2`)
    scene.cameraShake(8, 5000)
    mySprite2.say("lo encontraste")
    info.changeScoreBy(1000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.over(true)
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 1 1 1 1 1 5 5 1 1 1 1 1 5 5 
    5 5 1 1 1 1 1 5 5 1 1 1 1 1 5 5 
    5 5 1 f f f 1 5 5 1 f f f 1 5 5 
    5 5 1 f f f 1 5 5 1 f f f 1 5 5 
    5 5 1 f f f 1 5 5 1 f f f 1 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 f f f 5 5 5 5 5 5 5 5 f f f 5 
    5 f f f 5 5 5 5 5 5 5 5 f f f 5 
    5 f f f f f f f f f f f f f f 5 
    5 5 5 5 f f f f f f f f 5 5 5 5 
    5 5 5 5 f f f f f f f f 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . . 1 1 9 1 1 . . . . . . 
    . . . . . f 1 9 f 1 . . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . . f 9 9 9 9 . . . . . . 
    . . 9 9 9 e e e e e 9 9 9 . . . 
    . . 9 9 9 e e e e e 9 9 9 . . . 
    . . 9 9 9 e e e e e 9 9 9 . . . 
    . . . . e e e e e e e . . 9 9 9 
    . . . . e e e e e e e 9 9 9 f 9 
    . . . . e e e e e e e 9 9 f 9 9 
    . . . 9 9 9 e e e 9 9 9 f 9 . . 
    . . . 9 9 9 . . . 9 9 9 . . . . 
    . . . 9 9 9 . . . 9 9 9 . . . . 
    `, SpriteKind.amigo)
mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 5 5 . . . . . . 
    . . . . . . . 5 5 5 . . . . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 5 5 7 7 7 5 5 5 . . . 
    . . . . 5 5 5 7 f 7 5 5 5 . . . 
    . . . . 7 7 7 7 7 7 7 7 7 . . . 
    . . . . 7 7 7 7 7 7 7 7 7 . . . 
    . . . . 7 7 7 . . . 7 7 7 . . . 
    . . . . 7 7 7 . . . 7 7 7 . . . 
    . . . . 7 7 7 . . . 7 7 7 . . . 
    `, SpriteKind.amigo)
mySprite2.setPosition(148, 105)
scene.setBackgroundColor(7)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
mySprite3.setPosition(20, 11)
info.setScore(0)
forever(function () {
    music.playMelody("F F D A D A F F ", 100)
    music.playMelody("C D E D A F D C5 ", 144)
    music.playMelody("C C5 C F A E D E ", 500)
    music.playMelody("C D E F F E D C ", 270)
})
