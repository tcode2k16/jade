import Item from './class/Item';
import Background from './class/Background';

const WIDTH = 8;
const HEIGHT = 11;
const DELAY = 500;

class Game {
    constructor(op) {
        this.moving = false;
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.blocks = [];
        this.root = op.root;
        this.gameBoard = op.board;
        this.itemTypes = {
            'blueGem': 1,
            'purpleGem': 2,
            'greenGem': 3,
            'gold': 4,
            'redGem': 5,
            'silver': 6,
            'whiteGem': 7
        };

        this.onSelect = undefined;

        
        this.init_blocks();

        this.background = new Background({
            el: document.querySelector('.bg'),
            width: this.screenWidth,
            height: this.screenHeight
        });
        
        this.removeMatches(true);

        window.addEventListener('resize', this.onResize.bind(this));

        
        window.requestAnimationFrame(function() {
            this.root.style.transform = 'scale('+(this.screenWidth/150)+')';
        }.bind(this));
    }

    init_blocks() {
        this.blocks = []
        for (let x = 0; x < WIDTH; x++) {
            this.blocks.push([]);
            for (let y = 0; y < HEIGHT; y++) {
                let it = new Item({
                    type: this.randomItemType(),
                    root: this.gameBoard,
                    parent: this,
                    x,
                    y
                });
                this.blocks[x].push(it);
            }
        }
    }

    handleClick(obj) {
        if (!this.moving) {
            if (this.onSelect) {
                if (this.inRange(obj,this.onSelect)) {
                    this.swap(obj,this.onSelect);
                    if (this.haveMatch(this.toString()))
                        this.removeMatches()
                    else
                        setTimeout(this.swap.bind(this,obj,this.onSelect),DELAY);
                }
                this.onSelect.el.classList.toggle('selected');
                this.onSelect = undefined;

                
            } else {
                obj.el.classList.toggle('selected');
                this.onSelect = obj;
            }
        }
        

    }

    inRange(e1, e2) {
        return (Math.abs(e1.x-e2.x) < 2 && e1.y === e2.y) || (Math.abs(e1.y-e2.y) < 2 && e1.x === e2.x)
    }

    swap(e1, e2) {
        this.blocks[e1.x][e1.y] = e2;
        this.blocks[e2.x][e2.y] = e1;
        this.update();

    }

    randomItemType() {
        let keys = Object.keys(this.itemTypes)
        return keys[Math.floor(Math.random()*keys.length)]
    }  

    onResize() {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.root.style.transform = 'scale('+(this.screenWidth/150)+')';
        this.background.scale({
            width: window.innerWidth,
            height: window.innerHeight
        });
        this.background.updateScene();
    }

    resetItems() {
        for (let y = 1; y < HEIGHT; y++) {
            for (let x = 0; x < WIDTH; x++) {
                this.blocks[x][y].setType(this.randomItemType());
            }
        }
    }

    haveMove(s) {
        return /(\d)(\1(\d|.{6}|.{9})|(\d|.{6}|.{9})\1|.{7}\1(.|.{9})|(.|.{9})\1.{7}|(.{7,9}|.{17})\1.{8}|.{8}\1(.{7,9}|.{17}))\1/.test(s.replace(/\n/g,'A'))
    }

    haveMatch(s) {
        return /(\d)(\1{2,}|(.{8}\1){2,})/.test(s.replace(/\n/g,'A'))
    }

    removeMatches(init = false) {
        this.moving = true;
        if (init) {
            let rm = []
            for (let y = 1; y < HEIGHT; y++) {
                for (let x = 0; x < WIDTH; x++) {
                    if (this.isVMatch(x,y)||this.isHMatch(x,y))
                        rm.push(this.blocks[x][y])
                }
            }

            rm.map(function (e) {
                this.removeItem(e)
            }.bind(this))
            this.update();

            console.log(this.haveMatch(this.toString()));

            if (!this.haveMatch(this.toString())) {
                this.moving=false;
                while (!this.haveMove) this.resetItems();
                return 1;
            }

            this.removeMatches(init)
        }else {
            setTimeout(function() {
                let rm = []
                for (let y = 1; y < HEIGHT; y++) {
                    for (let x = 0; x < WIDTH; x++) {
                        if (this.isVMatch(x,y)||this.isHMatch(x,y))
                            rm.push(this.blocks[x][y])
                    }
                }

                rm.map(function (e) {
                    this.removeItem(e)
                }.bind(this))

                this.update();

                console.log(this.haveMatch(this.toString()));

                if (!this.haveMatch(this.toString())) {
                    this.moving=false;
                    while (!this.haveMove) this.resetItems();
                    return 1;
                }

                this.removeMatches(init)
            }.bind(this),DELAY);
        }
        
            
            
        
    }

    removeItem(item) {
        item.setType(this.randomItemType());
        this.blocks[item.x].splice(item.y,1);
        this.blocks[item.x].unshift(item);

    }

    update() {
        for (let x=0; x<this.blocks.length; x++)
            for (let y=0; y< this.blocks[x].length; y++) {
                let item = this.blocks[x][y]
                if (item.x !== x || item.y !== y)
                    item.setXY(x,y)
            }
    }

    isVMatch(x,y) {
        let matchUp = 0;
        let matchDown = 0;
        let item = this.blocks[x][y];
        let type = item.type;

        //up
        for (let i = y-1; i>0; i--)
            if (type===this.blocks[x][i].type)
                matchUp++;
            else
                break;
        //down
        for (let i=y+1; i<this.blocks[x].length; i++)
            if (type===this.blocks[x][i].type)
                matchDown++;
            else
                break;
        
        return matchUp+matchDown >= 2 ? true : false;
    }

    isHMatch(x,y) {
        let matchLeft = 0;
        let matchRight = 0;
        let item = this.blocks[x][y];
        let type = item.type;

        //left
        for (let i = x-1; i>=0; i--)
            if (type===this.blocks[i][y].type)
                matchLeft++;
            else
                break;
        //right
        for (let i= x+1; i<this.blocks.length; i++)
            if (type===this.blocks[i][y].type)
                matchRight++;
            else
                break;
        
        return matchLeft+matchRight >= 2 ? true : false;
    }

    toString() {
        let str = '';
        for (let y = 1; y < HEIGHT; y++) {
             for (let x = 0; x < WIDTH; x++) {
                str+=this.itemTypes[this.blocks[x][y].type];
            }
            str+='\n';
        }
        return str;

    }
}




let game = new Game({
    root: document.querySelector('.app'),
    board: document.querySelector('.box')
});