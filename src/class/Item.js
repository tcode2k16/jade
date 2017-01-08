import Hammer from 'hammerjs';

export default class Item {
    constructor(op) {
        // op = {
        //     root: app root,
        //     type: item type,
        //     x: x,
        //     y: y
        // }

        this.parent = op.parent;
        

        this.type = op.type;
        this.item = document.createElement('div');
        this.item.classList.add('item',op.type);
        this.setMargin()

        this.el = document.createElement('div');
        this.el.appendChild(this.item);
        this.el.classList.add('tile');
        this.setXY(op.x,op.y);
        
        op.root.appendChild(this.el);


        this.setUpHammer();
                

    }


    setType(t) {
        if (t === this.type)
            return;
        
        this.item.classList.remove(this.type);
        this.item.classList.add(t);
        this.type=t;
        this.setMargin();
    }

    setXY(x,y) {
        

        this.x=x;
        this.y=y;

        window.requestAnimationFrame(function() {
            this.el.style.transform = 'translate3d('+(x*16)+'px,'+((y-1)*16)+'px,0px)';
        }.bind(this))

        // if (y===0)
        //     this.el.classList.add('hidden')
        // else if (this.el.classList.contains('hidden'))
        //     this.el.classList.remove('hidden')
    }

    setMargin() {
        window.requestAnimationFrame(function() {
            this.item.style.marginLeft = (-this.item.clientWidth/2) + "px";
            this.item.style.marginTop = (-this.item.clientHeight/2) + "px";
            
        }.bind(this));
    }

    setUpHammer() {
        this.hammer = new Hammer.Manager(this.el);
        this.hammer.add(new Hammer.Tap())

        this.hammer.on('tap', this.parent.handleClick.bind(this.parent));

    }


}