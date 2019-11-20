/**
 * Toys
 *
 * $author       Richard Bultitude
 * $email        richard.bultitude@gmail.com
 * $url          http://www.point-b.co.uk/
 * $copyright    Copyright (c) 2014, point-b.co.uk. All rights reserved.
 *
 * $notes        Notes
 */

define(['p5'], function(p5) {
    'use strict';

    var thisSketch;

    var myp5 = new p5(function(sketch) {
        thisSketch = sketch;
        mySketch();
    },'toys-noise');

    function mySketch() {
        thisSketch.setup = setup;
        thisSketch.draw = draw;

        //vars
        var xstart;
        var xnoise;
        var ynoise;
        var ystart;
        var spacing = 5;
        var amt = 0.05;

        function setup() {
            thisSketch.frameRate(30);
            var myCanvas = thisSketch.createCanvas(600, 300);
            myCanvas.parent('toys-noise');

            xstart = thisSketch.random(10);
            ystart = thisSketch.random(10);
            
        }

        function draw() {
            thisSketch.background(0, 0, 0);

            xstart += 0.01;
            ystart += 0.01;

            xnoise = xstart;
            ynoise = ystart;

            //loop through rows & columns
            for (var y = 0; y <= thisSketch.height; y+=spacing) {
                //increment y noise
                ynoise += amt;
                //reset x noise
                xnoise = xstart;
                for (var x = 0; x <= thisSketch.width; x+=spacing) {
                xnoise += amt;
                //call function with new values
                drawPoint(x, y, thisSketch.noise(xnoise, ynoise));
                }
            }
        }

        function drawPoint(x, y, noiseFactor) {
            thisSketch.push();
            thisSketch.translate(x, y);
            //rotate(noiseFactor * radians(360));
            thisSketch.noStroke();
            thisSketch.fill(100, noiseFactor * 255, 220, 255);
            thisSketch.rect(0, 0, noiseFactor * thisSketch.radians(360), noiseFactor * thisSketch.radians(360));
            thisSketch.pop();
        }
    }
});