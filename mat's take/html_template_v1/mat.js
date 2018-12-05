$(document).ready(function () {
    setTimeout(function(){

    
    $('.pixi').htmlgl();
        var renderer = window.HTMLGL.renderer;
        var stage = window.HTMLGL.stage;
        stage.interactive = true;
        var padding = 100;
        var bounds = new PIXI.Rectangle(-padding, -padding, window.HTMLGL.renderer.width +
            padding * 2, window.HTMLGL.renderer.height + padding * 2);

        var displacementSprite = PIXI.Sprite.fromImage(
            'https://pixijs.io/examples/required/assets/displace.png');
        var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

        
        displacementFilter.scale.x = 40;
        displacementFilter.scale.y = 40;
        displacementSprite.anchor.set(0.5);

        stage.addChild(displacementSprite);

        stage.filters = [displacementFilter];

        var ring = PIXI.Sprite.fromImage('https://pixijs.io/examples/required/assets/ring.png');

        ring.anchor.set(0.5);

        ring.visible = false;

        stage.addChild(ring);


        stage
            .on('mousemove', onPointerMove);

        function onPointerMove(eventData) {
            console.log(eventData.target.id);
            console.log(eventData);
            ring.visible = true;
            displacementSprite.visible = true;

            displacementSprite.position.set(eventData.data.global.x - 25, eventData.data.global
                .y);
            ring.position.copy(displacementSprite.position);
        }

        function animate() {
            renderer.render(stage);
            requestAnimationFrame(animate);
        }

        renderer.render(stage);
        requestAnimationFrame(animate);
    }, 500);
});