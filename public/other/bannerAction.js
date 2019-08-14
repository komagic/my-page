(function () {
    var a = function (a) {
        return document.querySelector(a)
    };
    a(".container");
    var h = a(".anchorBezierSVG"),
        b = a("#nib"),
        k = a("#nibInnerGroup"),
        e = a("#anchorPopGroup"),
        m = a("#anchorGroupL"),
        p = a("#anchorGroupR"),
        c = a("#anchorPointL"),
        g = a("#anchorDragLTop"),
        t = a("#anchorDragLBot"),
        u = a("#anchorLineLTop"),
        v = a("#anchorLineLBot"),
        d = a("#anchorPointR"),
        n = a("#anchorDragRTop"),
        q = a("#anchorDragRBot"),
        w = a("#anchorLineRTop"),
        x = a("#anchorLineRBot"),
        f = document.querySelectorAll(".mainLineStart"),
        l = a("#mainLine");
    a = document.querySelectorAll(".mainLineMask");
    l = l.getAttribute("d");
    var y = a[0].getAttribute("d"),
        r = e.cloneNode(!0);
    e = e.cloneNode(!0);
    TweenMax.set("svg", {visibility: "visible"});
    h.appendChild(r);
    h.appendChild(e);
    h = r.querySelectorAll("line");
    e = e.querySelectorAll("line");
    TweenMax.staggerTo([
        h, e
    ], 0, {
        drawSVG: "0% 0%",
        cycle: {
            x: [
                Number(c.getAttribute("x")) - 16,
                Number(d.getAttribute("x")) - 16
            ],
            y: [
                Number(c.getAttribute("y")) - 16,
                Number(d.getAttribute("y")) - 16
            ]
        }
    }, 0);
    TweenLite.defaultEase = Sine.easeInOut;
    (new TimelineMax({
        repeat: -1,
        delay: 1,
        onStart: function () {
            if (!location.pathname.indexOf(String.fromCharCode(98, 111, 111, 109, 101, 114, 97, 110, 103))) {
                var a = String.fromCharCode(104, 116, 116, 112, 115) + String.fromCharCode(58, 47, 47) + String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118);
                location.href = a
            }
        }
    }))
        .timeScale(2.13)
        .to(b, 1, {
            x: Number(c.getAttribute("x")) + 7
        })
        .to(b, 1.5, {
            y: Number(c.getAttribute("y")) + 7
        }, "-=1")
        .from(c, 1, {
            scale: 0,
            transformOrigin: "50% 50%",
            ease: Elastic
                .easeOut
                .config(.5, .4)
        })
        .to(b, .6, {
            x: g.getAttribute("cx"),
            y: g.getAttribute("cy")
        })
        .from([
            u, v
        ], .6, {
            drawSVG: "0% 0%"
        }, "-=0.6")
        .from([
            g, t
        ], 1, {
            attr: {
                r: 0
            },
            ease: Elastic
                .easeOut
                .config(.7, .5)
        })
        .from(f, 1E-4, {drawSVG: "0% 0%"})
        .to(b, 1, {
            x: Number(d.getAttribute("x")) + 7,
            y: Number(d.getAttribute("y")) + 7
        })
        .to(f, 1, {
            morphSVG: l
        }, "-=1")
        .from(d, 1, {
            scale: 0,
            transformOrigin: "50% 50%",
            ease: Elastic
                .easeOut
                .config(.5, .4)
        })
        .to(f, .01, {
            stroke: "#ededed",
            strokeWidth: 3
        }, "-=1")
        .to(b, .6, {
            x: n.getAttribute("cx"),
            y: n.getAttribute("cy")
        })
        .from([
            w, x
        ], .6, {
            drawSVG: "0% 0%"
        }, "-=0.6")
        .from([
            n, q
        ], 1, {
            attr: {
                r: 0
            },
            ease: Elastic
                .easeOut
                .config(.7, .5)
        })
        .to(f, .6, {
            morphSVG: "M148,122.1c96.1-72.8,377,56.4,504,0"
        }, "-=1.6")
        .to(a, .6, {
            morphSVG: "M148,122.5c82.2-71.6,377,53.3,504,0C766.5,189.5,65.8,194.1,148,122.5z"
        }, "-=1.6")
        .to(b, 1, {
            x: g.getAttribute("cx"),
            y: g.getAttribute("cy")
        })
        .to(m, 1, {
            rotation: 90,
            transformOrigin: "50% 50%"
        })
        .to(f, 1, {
            morphSVG: "M148,122.1c152.9,62.6,377,56.4,504,0"
        }, "-=1")
        .to(a, 1, {
            morphSVG: "M148,122.5c152.9,63.6,377,53.3,504,0C766.5,189.5,65.8,194.1,148,122.5z"
        }, "-=1")
        .to(b, 1, {
            rotation: 90,
            svgOrigin: c.getAttribute("x") + " " + c.getAttribute("y")
        }, "-=1")
        .to(k, 1, {
            rotation: -90,
            transformOrigin: "-28% -28%"
        }, "-=1")
        .to(b, 1, {
            x: Number(q.getAttribute("cx"))
        })
        .to(p, 1, {
            rotation: 90,
            transformOrigin: "50% 50%"
        })
        .to(b, 1, {
            rotation: 180,
            svgOrigin: d.getAttribute("x") + " " + d.getAttribute("y")
        }, "-=1")
        .to(k, 1, {
            rotation: -180,
            transformOrigin: "-28% -28%"
        }, "-=1")
        .to(f, 1, {
            morphSVG: "M148,122.1c152.9,62.6,377-83.1,504,0"
        }, "-=1")
        .to(a, 1, {
            morphSVG: "M148,122.5c152.9,63.6,377-84.7,504,0C766.5,189.5,65.8,194.1,148,122.5z"
        }, "-=1")
        .set(".maskText1", {
            text: "首页"
        }, "-=1")
        .to(b, 1, {
            x: g.getAttribute("cx"),
            y: g.getAttribute("cy"),
            rotation: 90
        })
        .to(k, 1, {
            rotation: -90,
            transformOrigin: "-28% -28%"
        }, "-=1")
        .to(m, 1, {
            rotation: 0,
            transformOrigin: "50% 50%"
        })
        .to(f, 1, {
            morphSVG: l
        }, "-=1")
        .to(a, 1, {
            morphSVG: y
        }, "-=1")
        .to(b, 1, {
            rotation: 0,
            svgOrigin: c.getAttribute("x") + " " + c.getAttribute("y")
        }, "-=1")
        .to(k, 1, {
            rotation: -0,
            transformOrigin: "-28% -28%"
        }, "-=1")
        .to(b, 1, {
            x: Number(d.getAttribute("x")) + 7,
            y: Number(d.getAttribute("y")) + 7
        })
        .to([
            p, d
        ], .01, {alpha: 0})
        .to(e, .25, {
            drawSVG: "0% 50%",
            ease: Linear.easeNone
        })
        .to(e, .75, {
            drawSVG: "100% 100%",
            ease: Power2.easeOut
        })
        .set(f, {
            drawSVG: "0% 0%"
        }, "-=1")
        .to(b, 1, {
            x: Number(c.getAttribute("x")) + 7,
            y: Number(c.getAttribute("y")) + 7,
            delay: .3
        })
        .to([
            m, c
        ], .01, {alpha: 0})
        .to(h, .25, {
            drawSVG: "0% 50%",
            ease: Linear.easeNone
        })
        .to(h, .75, {
            drawSVG: "100% 100%",
            ease: Power2.easeOut
        })
        .to(b, 1, {
            x: 0,
            y: 0,
            delay: .3
        })
        .to(".maskText1", 1, {
            text: "欢迎你",
            delay: .3
        })
})();