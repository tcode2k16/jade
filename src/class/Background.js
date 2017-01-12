import Matter from 'matter-js'

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Composites = Matter.Composites;
const Common = Matter.Common;
const MouseConstraint = Matter.MouseConstraint;
const Render = Matter.Render;

export default class Background {
    constructor(op) {
        this.el = op.el;

        this.width = op.width;
        this.height = op.height;

        this.engine = Engine.create();
        this.render = Render.create({
            element: this.el,
            engine: this.engine
        });

        // this.render.options.wireframes = false;

        window.addEventListener('deviceorientation', function(e) {
            this.updateGravity(e);
            this.deviceOrientationEvent = e;
        }.bind(this), true);

        window.addEventListener('orientationchange', function() {
            this.updateGravity(this.deviceOrientationEvent);
        }.bind(this), false);



        setTimeout(function() {
            Engine.run(this.engine);
            Render.run(this.render);


            this.scale({
                width: op.width,
                height: op.height
            });

            this.updateScene();

        }.bind(this),800)
    }

    scale(op) {
        let boundsMax = this.engine.world.bounds.max;
        let renderOptions = this.render.options;
        let canvas = this.render.canvas;

        this.width = boundsMax.x = op.width;
        this.height = boundsMax.y = op.height;

        canvas.width = renderOptions.width = op.width;
        canvas.height = renderOptions.height = op.height;
        
    }

    updateGravity(event) {
        if (!this.engine)
            return;
        
        let orientation = window.orientation,
            gravity = this.engine.world.gravity;

        if (orientation === 0) {
            gravity.x = Common.clamp(event.gamma, -90, 90) / 90;
            gravity.y = Common.clamp(event.beta, -90, 90) / 90;
        } else if (orientation === 180) {
            gravity.x = Common.clamp(event.gamma, -90, 90) / 90;
            gravity.y = Common.clamp(-event.beta, -90, 90) / 90;
        } else if (orientation === 90) {
            gravity.x = Common.clamp(event.beta, -90, 90) / 90;
            gravity.y = Common.clamp(-event.gamma, -90, 90) / 90;
        } else if (orientation === -90) {
            gravity.x = Common.clamp(-event.beta, -90, 90) / 90;
            gravity.y = Common.clamp(event.gamma, -90, 90) / 90;
        }
    }

    updateScene() {
        this.reset()
        let world = this.engine.world;
        World.add(world, MouseConstraint.create(this.engine));
        
        let stack = Composites.stack(20, 20, 10, 5, 0, 0, function(x, y, column, row) {
            switch (Math.round(Common.random(0, 1))) {
                
            case 0:
                if (Common.random() < 0.8) {
                    return Bodies.rectangle(x, y, Common.random(20, 40), Common.random(20, 40), { friction: 0.01, restitution: 0.4 });
                } else {
                    return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(20, 30), {
                        friction: 0.01,
                        restitution: 0.4
                    });
                }
            case 1:
                return Bodies.polygon(x, y, Math.round(Common.random(4, 6)), Common.random(20, 40), { friction: 0.01, restitution: 0.4 });
            
            }
        });
        
        World.add(world, stack);


        // World.add(world, Bodies.rectangle(100, 100, Common.random(80, 120), Common.random(20, 30), {
        //     friction: 0.01,
        //     restitution: 0.4,
        //     render: {
        //         sprite: {
        //             texture: '/src/img/redGem.png'
        //         }
        //     }
        // }));
    }

    reset() {
        let world = this.engine.world;

        Common._seed = 2;
        
        World.clear(world);
        Engine.clear(this.engine);
        
        let offset = 5;
        World.addBody(world, Bodies.rectangle(this.width * 0.5, -offset, this.width + 0.5, offset*2, { isStatic: true }));
        World.addBody(world, Bodies.rectangle(this.width * 0.5, this.height + offset, this.width + 0.5, offset*2, { isStatic: true }));
        World.addBody(world, Bodies.rectangle(this.width + offset, this.height * 0.5, offset*2, this.height + 0.5, { isStatic: true }));
        World.addBody(world, Bodies.rectangle(-offset, this.height * 0.5, offset*2, this.height + 0.5, { isStatic: true }));
    }
}