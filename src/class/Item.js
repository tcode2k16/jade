import Hammer from 'hammerjs';

export default class Item {
    constructor(op) {
        // op = {
        //     root: app root,
        //     type: item type,
        //     x: x,
        //     y: y
        // }

        this.type = op.type;
        this.x = op.x;
        this.y = op.y;


        let item = document.createElement('div');
        item.classList.add(op.type, 'item');
        

        this.el = document.createElement('div');
        this.el.appendChild(item);
        this.el.classList.add('tile');
        
        
        // this.el.style.transform = "translate3d()"
        op.root.appendChild(this.el);

        
        window.requestAnimationFrame(function() {
            this.el.style.transform = 'translate3d('+(op.x*16)+'px,'+(op.y*16)+'px,0px)';
            item.style.marginLeft = (-item.clientWidth/2) + "px";
            item.style.marginTop = (-item.clientHeight/2) + "px";
            
        }.bind(this));


        this.hammer = new Hammer.Manager(this.el);
        this.hammer.add(new Hammer.Tap())

        this.hammer.on('tap', this.onTap.bind(this))

        // console.log(op);
    }

    onTap(ev) {
        // console.log(ev);
        this.el.classList.toggle('selected')
        
    }


}