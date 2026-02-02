"use strict";
import { TSprite } from "libSprite";
import { EGameStatus, menu } from "./FlappyBird.mjs";
import { TSineWave } from "lib2d";
import { TSoundFile } from "libSound";


const fnEatSound = "./Media/food.mp3";
const fnDeadSound = "./Media/heroIsDead.mp3";
const fnHitSound = "./Media/Thwomp.mp3";

export class THero extends TSprite{
    #gravity;
    #speed;
    #wave;
    #sfEat;
    #sfDead;
    #sfHit;

    constructor (aSpcvs, aSPI){
        super (aSpcvs, aSPI, 100, 100);
        this.animationSpeed = 15;
        this.#gravity = 9.81 / 100;
        this.#speed = 0;
        this.#wave = new TSineWave(1, 1);
        this.y += this.#wave.value;
        this.#sfEat = null;
        this.#sfDead = null;
    }


    eat(){
        if(this.#sfEat === null){
            this.#sfEat = new TSoundFile(fnEatSound);
        } else{
            this.#sfEat.stop();
        }
        this.#sfEat.play();
    }

    animate(){
        const hasGravity =
            EGameStatus.state === EGameStatus.gaming || 
            EGameStatus.state === EGameStatus.heroIsDead;
        if(hasGravity){
        if(this.y < 400 - this.height){
            this.#speed += this.#gravity; // increase speed due to gravity
            this.y += this.#speed; // update position based on speed
            if(this.rotation < 90){ // limit rotation to max 90 degrees
            this.rotation = this.#speed * 25; //tilt down based on speed
            }
      }
            else{
            EGameStatus.state = EGameStatus.gameOver;
            this.animationSpeed = 0;
            this.#sfDead = new TSoundFile(fnDeadSound);
            this.#sfDead.play();
            menu.stopSound();
            }
             }else if(EGameStatus.state === EGameStatus.idle){
             this.y += this.#wave.value;
             }
    } // end of animate


    hit(){
        this.#sfHit = new TSoundFile(fnHitSound);
        this.#sfHit.play();
    }

    flap(){
        this.#speed = -3; // give an instant upward speed
        this.rotation = -25; // tilt up
    }
}