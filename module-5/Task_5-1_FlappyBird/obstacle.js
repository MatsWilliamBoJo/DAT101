"use strict";
import { TSprite } from "libSprite";

export class TObstacle {
    #spUp;
    #spDown;
    constructor(aSpcvs, aSPI){
        const x = 580;
        this.#spDown = new TSprite(aSpcvs , aSPI, x, 300 );
        this.#spDown.index = 4;
        this.#spUp = new TSprite(aSpcvs , aSPI, x, -125 );
        this.#spUp.index = 1;
    }

    //Properties
    get x(){
        return this.#spDown.x; //Uses the x position of the down sprite, is the same as the up sprite
    }

    draw(){
        this.#spDown.draw();
        this.#spUp.draw();
    }

animate(){
    this.#spDown.x --;
    this.#spUp.x --;
    }
} //End of class TObstacle