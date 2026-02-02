"use strict";
import { TSprite, TSpriteButton, TSpriteNumber } from "libSprite";
import { startGame } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

const fnCountDownSound = "./Media/countdown.mp3";
const fnBackgroundMusic = "./Media/running.mp3";

export class TMenu{
    #spTitle;
    #spPlayBtn;
    #spCountdown;
    #sfCountDown;
    #sfBackgroundMusic;
    #spGameScore;
    constructor(aSpcvs, aSPI){
        this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
        this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 235, 165);
        this.#spPlayBtn.addEventListener("click", this.spPlayBtn.bind(this));
        this.#spCountdown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 275, 165);
        this.#spCountdown.visible = false;
        this.#sfCountDown = null;
        this.#sfBackgroundMusic = null;
        this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 275, 10);
        this.#spGameScore.alpha = 0.8;
    }


    draw(){
        this.#spTitle.draw();
        this.#spPlayBtn.draw();
        this.#spCountdown.draw();
        this.#spGameScore.draw();
    }



    incGameScore(aScore){
        this.#spGameScore.value += aScore;
    }

    gameScore(aScore){}

    stopSound(){
        this.#sfBackgroundMusic.stop();
    }

    countdown(){
        if(this.#spCountdown.value > 1){
            this.#spCountdown.value--;
            setTimeout(this.countdown.bind(this), 1000);
        } else {
            this.#spCountdown.visible = false;
            this.#spTitle.hidden = true;
            startGame();
            this.#sfBackgroundMusic = new TSoundFile(fnBackgroundMusic);
            this.#sfBackgroundMusic.play();
        }
    }

    spPlayBtn(){
        console.log("Play button clicked");
        this.#spPlayBtn.hidden = true; 
        this.#spCountdown.visible = true;
        this.#spCountdown.value = 3;
        this.#sfCountDown = new TSoundFile(fnCountDownSound);
        this.#sfCountDown.play();
        setTimeout(this.countdown.bind(this), 1000);
    }
}