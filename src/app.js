import Item from './class/Item';

const WIDTH = 8;
const HEIGHT = 10;

class Game {
    constructor(op) {
        this.screenWidth = window.innerWidth;
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

        for (let y = 0; y < HEIGHT; y++) {
            this.blocks.push([]);
            for (let x = 0; x < WIDTH; x++) {
                this.blocks[y].push(new Item({
                    type: this.randomItemType(),
                    root: this.gameBoard,
                    x,
                    y
                }));
            }
        }

        console.log(this.toString());

        window.addEventListener('resize', this.onResize.bind(this))

        console.log(this.haveMatch(this.toString()));
        
        window.requestAnimationFrame(function() {
            this.root.style.transform = 'scale('+(this.screenWidth/150)+')';
        }.bind(this))
    }

    randomItemType() {
        let keys = Object.keys(this.itemTypes)
        return keys[Math.floor(Math.random()*keys.length)]
    }  

    onResize() {
        this.screenWidth = window.innerWidth;
        this.root.style.transform = 'scale('+(this.screenWidth/150)+')';
    }


    haveMatch(s) {

        return /(\d)(\1(\d|.{6}|.{9})|(\d|.{6}|.{9})\1|.{7}\1(.|.{9})|(.|.{9})\1.{7}|(.{7,9}|.{17})\1.{8}|.{8}\1(.{7,9}|.{17}))\1/.test(s.replace(/\n/g,'A'))

    }

    toString() {
        let str = '';
        for (let row of this.blocks) {
            for (let item of row)
                str += this.itemTypes[item.type];
            str+="\n";
        }
        return str;

    }
}




let game = new Game({
    root: document.querySelector('.app'),
    board: document.querySelector('.box')
});