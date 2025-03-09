const SKETCH = function(W, H) {
    return (p) => {

        let X = [];
        let Y = [];
        let F_X = [];

        const LEFT = Math.floor(W * 0.05);
        const RIGHT = Math.floor(W * 0.95);
        const UP = Math.floor(H * 0.05);
        const DOWN = Math.floor(H * 0.95);

        let a, b;
        let v1Start, v1End, v1Counter, v1Direction;

        let uX, uY;
        let den;

        p.setup = function() {
            p.createCanvas(W, H);
            for(let x = LEFT; x <= RIGHT; x++) {
                X.push(x);
                let f = p.map(x, LEFT, RIGHT, -10, 10);
                F_X.push(-(f * f));
            }
            let F_MIN = Math.min(...F_X);
            let F_MAX = Math.max(...F_X);
            for(let i = 0; i < F_X.length; i++) {
                Y.push(
                    p.map(F_X[i], F_MIN, F_MAX, UP, DOWN)
                );
            }

            a = Math.floor(X.length * 0.1);
            b = Math.floor(X.length * 0.72);
            v1Start = a;
            v1End = b;
            v1Counter = a;
            v1Direction = 1;

            uX = X[b] - X[a];
            uY = Y[b] - Y[a];
            den = (uX * uX) + (uY * uY);
        };

        p.draw = function() {
            p.background(52);
            p.stroke(255);
            p.strokeWeight(4);
            p.noFill();
            p.beginShape();
            for(let i = 0; i < X.length; i++) {
                p.vertex(X[i], Y[i]);
            }
            p.endShape();

            p.strokeWeight(2);
            p.line(
                X[a], Y[a],
                X[b], Y[b]
            );
            
            v1Counter += v1Direction;
            if(v1Counter == v1End) {
                v1Direction *= -1;
                v1End = v1Start;
                v1Start = v1Counter;
            }
            p.strokeWeight(16);
            p.point(X[v1Counter], Y[v1Counter]);

            
            let vX = X[v1Counter] - X[a];
            let vY = Y[v1Counter] - Y[a];
            let num = (uX * vX) + (uY * vY);
            let proX = X[a] + ((num/den) * uX);
            let proY = Y[a] + ((num/den) * uY);
            p.strokeWeight(2);
            p.line(X[v1Counter], Y[v1Counter], proX, proY);
        };
    };
};

const SKCONT = document.getElementById("sketch");
let SK1 = SKETCH(
    SKCONT.offsetWidth,
    SKCONT.offsetHeight
);
new p5(SK1, "sketch");