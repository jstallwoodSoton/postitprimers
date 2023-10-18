let demo_data = { 
    "note_descriptions" : [
        [
            String.raw`<p>This is a <b>definition</b> card.</p>`,
            String.raw`<p>It will usually contain a known formula or solution to a problem.</p>`,
            String.raw`<p>For example:</p>`,
            String.raw`$$(x + y)^n = \sum_{k = 0}^{n}\binom{n}{k}x^{n-k}y^{k}$$`
        ],
        [
            String.raw`<p>This is an <b>explanation</b> card.</p>`,
            String.raw`<p>It will usually extra background information about the subject.</p>`,
            String.raw`<p>For example:</p>`,
            String.raw`<p><i>"The Binomial Theorem describes the algebreic expansion of powers of a binomial expression.</i></p>`,
            String.raw`<p><i>It uses binomial coefficients, e.g. \(\binom{n}{k}\), which you should be familiar with."</i></p>`
        ],
        [
            String.raw`<p>This is a <b>proof</b> card.</p>`,
            String.raw`<p>It will usually contain a proof or derivation to the content of a definition card.</p>`,
            String.raw`<p>For example:</p>`,
            String.raw`$$\text{Assume: } (x + y)^n = \sum_{k = 0}^{n}\binom{n}{k}x^{n-k}y^{k}$$`,
            String.raw`$$\text{Case 1, let } n = 1 $$`,
            String.raw`$$(x + y) = \sum_{k = 0}^{1}\binom{1}{k}x^{1 - k}y^{k} = \binom{1}{0}x + \binom{1}{1}y = x + y$$`,
            String.raw`$$\text{Case 2, let } n = 2 $$`,
            String.raw`$$ (x + y)^2 = x^2 + 2xy + y^2$$`,
            String.raw`$$(x + y)^2 = \sum_{k = 0}^{2}\binom{2}{k}x^{2 - k}y^{k} = \binom{2}{0}x^2 + \binom{2}{1}xy + \binom{2}{2}y^2$$`,
            String.raw`$$ \binom{2}{0}x^2 + \binom{2}{1}xy + \binom{2}{2}y^2 = x^2 + 2xy + y^2$$`

        ],
        [
            String.raw`<p>This is an <b>application</b> card.</p>`,
            String.raw`<p>It will usually demonstrate a specific application of the content of a definition card.</p>`,
            String.raw`<p>For example:</p>`,
            String.raw`$$ \sum_{k = 0}^{n}\binom{n}{k} = 2^n$$`,
            String.raw`$$ 2^n = (1 + 1)^n = \sum_{k = 0}^n \binom{n}{k}$$`
        ]
    ],
    "binom" : [
        [String.raw`$$(x + y)^n = \sum_{k = 0}^{n}\binom{n}{k}x^{n-k}y^{k}$$`],
        [
            String.raw`$$\text{Assume: } (x + y)^n = \sum_{k = 0}^{n}\binom{n}{k}x^{n-k}y^{k}$$`,
            String.raw`$$\text{Case 1, let } n = 1 $$`,
            String.raw`$$(x + y) = \sum_{k = 0}^{1}\binom{1}{k}x^{1 - k}y^{k} = \binom{1}{0}x + \binom{1}{1}y = x + y$$`,
            String.raw`$$\text{Case 2, let } n = 2 $$`,
            String.raw`$$ (x + y)^2 = x^2 + 2xy + y^2$$`,
            String.raw`$$(x + y)^2 = \sum_{k = 0}^{2}\binom{2}{k}x^{2 - k}y^{k} = \binom{2}{0}x^2 + \binom{2}{1}xy + \binom{2}{2}y^2$$`,
            String.raw`$$ \binom{2}{0}x^2 + \binom{2}{1}xy + \binom{2}{2}y^2 = x^2 + 2xy + y^2$$`,
            String.raw`$$\text{Induction Step One, let } a \in \mathbb{N}, a \gt 2 $$`,
            String.raw`$$\text{Assumption} \implies (x + y)^a = \binom{a}{0}x^a + \binom{a}{1}x^{a - 1}y + ... + \binom{a}{a - 1}xy^{a - 1} + \binom{a}{a}y^a$$`
        ],
        [
            String.raw`$$\text{Recall: } \binom{n + 1}{k} = \binom{n}{k} + \binom{n}{k - 1}$$`,
            String.raw`$$ (x + y)^{a + 1} = (x + y)(x + y)^a$$`,
            String.raw`$$ (x + y)(x + y)^a \implies x\sum_{k = 0}^{a}\binom{a}{k}x^{a - k}y^{k} + y\sum_{k = 0}^{a}\binom{a}{k}x^{a - k}y^{k}$$`,
            String.raw`$$ x\sum_{k = 0}^{a}\binom{a}{k}x^{a - k}y^{k} = \binom{a}{0}x^{a + 1} + \binom{a}{1}x^{a}y + ... + \binom{a}{a - 1}x^2y^{a-1} + \binom{a}{a}xy^{a}$$`,
            String.raw`$$ y\sum_{k = 0}^{a}\binom{a}{k}x^{a - k}y^{k} = \binom{a}{0}x^{a}y + \binom{a}{1}x^{a - 1}y^2 + ... + \binom{a}{a - 1}xy^{a} + \binom{a}{a}y^{a + 1}$$`,
            String.raw`$$ (x + y)\sum_{k = 0}^{a}\binom{a}{k}x^{a - k}y^{k} = $$`,
            String.raw`$$\binom{a}{0}x^{a + 1} + \left(\binom{a}{1} + \binom{a}{0}\right)x^ay + ... + \left(\binom{a}{a} + \binom{a}{a - 1}\right)xy^{a} + \binom{a}{a}y^{a + 1}$$`,
            String.raw`$$x^{a + 1} + \binom{a + 1}{1}x^ay + ... + \binom{a + 1}{a}xy^{a} + y^{a + 1}$$`,
        ],
        [
            String.raw`$$x^{a + 1} + \binom{a + 1}{1}x^ay + ... + \binom{a + 1}{a}xy^{a} + y^{a + 1} = \sum_{k = 0}^{a + 1}\binom{a + 1}{k}x^{a + 1 - k}y^{k}$$`,
            String.raw`$$ \text{ the assumption holds for } (a + 1) \text{. } \therefore \text{ by induction, it holds for all } n \in \mathbb{N}$$`
        ],
        [
            String.raw`<p><b>Calculus: The Power Rule</b></p>`,
            String.raw`$$ \frac{d}{dx}x^n = \lim_{\Delta x \rightarrow 0} \frac{(x + \Delta x)^n - x^n}{\Delta x}$$`,
            String.raw`$$ (x + \Delta x)^n = \sum_{k = 0}^{n}\binom{n}{k}x^{n - k}\Delta x^{k}$$`,
            String.raw`$$ (x + \Delta x)^n = \binom{n}{0}x^{n} + \binom{n}{1}x^{n - 1}\Delta x + ... + \binom{n}{n - 1}x\Delta x^{n - 1} + \binom{n}{n}\Delta x^{n}<br>$$`,
            String.raw`$$ \frac{d}{dx}x^n = \lim_{\Delta x \rightarrow 0} \frac{\binom{n}{0}x^{n} + \binom{n}{1}x^{n - 1}\Delta x + ... + \binom{n}{n - 1}x\Delta x^{n - 1} + \binom{n}{n}\Delta x^{n} - x^n}{\Delta x}$$`,
            String.raw`$$ \frac{d}{dx}x^n = \lim_{\Delta x \rightarrow 0} \frac{nx^{n - 1}\Delta x + ... + \binom{n}{n - 1}x\Delta x^{n - 1} + \binom{n}{n}\Delta x^{n}}{\Delta x}$$`,
            String.raw`$$ \frac{d}{dx}x^n = \lim_{\Delta x \rightarrow 0} nx^{n - 1} + ... + \binom{n}{n - 1}x\Delta x^{n - 2} + \binom{n}{n}\Delta x^{n - 1}$$`,
            String.raw`$$ \therefore \frac{d}{dx}x^n = nx^{n - 1}$$`
        ]
    ],
    "basel" : [
        [
            String.raw`$$ \sum_{k = 1}^{\infty} \frac{1}{k^2} = \frac{\pi^2}{6}$$`
        ],
        [
            String.raw `<img src="./img/euler.jpg">`,
            String.raw`<p>The sum of the squared reciprocals from one to infinity,</p>`,
            String.raw`<p>was such a hard problem to fix.</p>`,
            String.raw`<p>Though thanks to Euler's algebreic affinity we know</p>`,
            String.raw`<p>the answer's pi squared over six!</p>`
        ],
        [
            String.raw`$$ sin x = x(x - \pi)(x + \pi)(x - 2\pi)(x + 2\pi)... $$`, 
            String.raw`$$ sin x = x(x^2 - \pi^2)(x^2 - 2^{2}\pi^2)... $$`,
            String.raw`$$ (x^2 - a^2\pi^2) = \frac{-1}{a^2\pi^2}\left(1 - \frac{x^2}{a^2\pi^2}\right)$$`, 
            String.raw`$$ \text{Let } A = \prod_{a = 1}^{\infty} \frac{-1}{a^2\pi^2}$$`,
            String.raw`$$ sin x = xA\left(1 - \frac{x^2}{\pi^2}\right)\left(1 - \frac{x^2}{2^2\pi^2}\right)...$$`
        ],
        [
            String.raw`$$ \frac{sin x}{x} = A\left(1 - \frac{x^2}{\pi^2}\right)\left(1 - \frac{x^2}{2^2\pi^2}\right)...$$`,
            String.raw`$$ \lim_{x \rightarrow 0} \frac{sin x}{x} = \lim_{x \rightarrow 0} A\left(1 - \frac{x^2}{\pi^2}\right)\left(1 - \frac{x^2}{2^2\pi^2}\right)...$$`,
            String.raw`$$ 1 = A(1)(1)... \implies A = 1$$`,
            String.raw`$$ \frac{sin x}{x} = \left(1 - \frac{x^2}{\pi^2}\right)\left(1 - \frac{x^2}{2^2\pi^2}\right)...$$`,
            String.raw`$$ \frac{sin x}{x} = \left(1 - x^2\left(\frac{1}{\pi^2} + \frac{1}{2^2\pi^2} + ...\right) + ...\right) $$`
        ],
        [
            String.raw`$$ sin x = \left(x - x^3\left(\frac{1}{\pi^2} + \frac{1}{2^2\pi^2} + ...\right) + ...\right) $$`,
            String.raw`$$ sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - ...$$`,
            String.raw`$$ \therefore \left(\frac{1}{\pi^2} + \frac{1}{2^2\pi^2} + ...\right) = \frac{1}{3!}$$`,
            String.raw`$$ \frac{1}{\pi^2}\left(\frac{1}{1^2} + \frac{1}{2^2} + ...\right) = \frac{1}{3!}$$`,
            String.raw`$$ \sum_{k = 1}^{\infty} \frac{1}{k^2} = \frac{\pi^2}{6}$$`
        ]
    ],
    "bezier" : [
        [
            String.raw`$$f:\mathbb{R}^3 \rightarrow \mathbb{R}^3\text{; } t \mapsto \sum_{k = 0}^{n} \binom{n}{k}(1 - t)^{n - k}t^{k}P_t $$`,
            String.raw`$$ 0 \le t \le 1, t \in \mathbb{R} $$`
        ],
        [
            String.raw`<img src="./img/bezier.gif" style="width: 25vw">`,
            String.raw`<p><b>Note:</b> the first and last edges of the displayed Bezier polygon, are tangent to the Bezier curve.</p>`
        ],
        [
            String.raw`<iframe width="90%" height="70%" src="https://www.youtube.com/embed/na7LuZsW2UM?si=rDuAfgBQ0VEjwsb8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        ]
    ]
};

function displayInformation(displayID, dataID, dataIndex, newBGColor="white-bg") {
    let displayDiv = document.getElementById(displayID);
    displayDiv.innerHTML = "";
    displayDiv.classList = "";
    displayDiv.classList.add("large-note")
    let data = demo_data[dataID][dataIndex];
    data.forEach(line => displayDiv.innerHTML += line);
    MathJax.typeset();
    displayDiv.classList.add(newBGColor);
}

document.displayInformation = displayInformation;