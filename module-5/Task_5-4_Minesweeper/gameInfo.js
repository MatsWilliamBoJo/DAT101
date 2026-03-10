"use strict";
import { TSpriteButton } from "libSprite";
import { SpriteInfoList } from "./Minesweeper.mjs";


export class TGameInfo {
    #emojiFace
    #leftNumber
    #rightNumber


    constructor(){
        this.#emojiFace = new TSpriteButton(SpriteInfoList.ButtonSmiley);
        this.#leftNumber = new TSpriteNumber(SpriteInfoList.ButtonLeft);
        this.#rightNumber = new TSpriteNumber(SpriteInfoList.ButtonRight);

        this.draw();
    }

    draw(){
        this.#emojiFace.draw();
        this.#leftNumber.draw();
        this.#rightNumber.draw();
    }
}