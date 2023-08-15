function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
loco();

function page1Display() {
    document.querySelector(".page1-bottom-right-top-left").addEventListener("mouseenter", () => {
        document.querySelector(".page1-bottom-left-rotate").style.display = 'none';
        document.querySelector(".cube").style.backgroundColor = '#FFFFFF';
        document.querySelector(".cube").style.scale = '1.6';
        document.querySelector(".tringle").style.scale = '0.6';
        document.querySelector(".circle").style.scale = '0.6';
    })
    document.querySelector(".page1-bottom-right-top-left").addEventListener("mouseleave", () => {
        document.querySelector(".page1-bottom-left-rotate").style.display = 'block';
        document.querySelector(".cube").style.backgroundColor = '#A5A1FF';
        document.querySelector(".cube").style.scale = '1';
        document.querySelector(".tringle").style.scale = '1';
        document.querySelector(".circle").style.scale = '1';
    })


    document.querySelector(".page1-bottom-right-bottom").addEventListener("mouseenter", () => {
        document.querySelector(".page1-bottom-left-rotate").style.display = 'none';
        document.querySelector(".tringle").style.borderBottom = `100px solid #FFF480`;
        document.querySelector(".tringle").style.scale = '1.6';
        document.querySelector(".circle").style.scale = '0.6';
        document.querySelector(".cube").style.scale = '0.6';
    })
    document.querySelector(".page1-bottom-right-bottom").addEventListener("mouseleave", () => {
        document.querySelector(".page1-bottom-left-rotate").style.display = 'block';
        document.querySelector(".tringle").style.borderBottom = `100px solid #A5A1FF`;
        document.querySelector(".tringle").style.scale = '1';
        document.querySelector(".circle").style.scale = '1';
        document.querySelector(".cube").style.scale = '1';
    })


    document.querySelector(".page1-bottom-right-top-right").addEventListener("mouseenter", () => {
        document.querySelector(".page1-bottom-left-rotate").style.display = 'none';
        document.querySelector(".circle").style.backgroundColor = '#FFAEDC';
        document.querySelector(".circle").style.scale = '1.6';
        document.querySelector(".tringle").style.scale = '0.6';
        document.querySelector(".cube").style.scale = '0.6';
    })
    document.querySelector(".page1-bottom-right-top-right").addEventListener("mouseleave", () => {
        document.querySelector(".page1-bottom-left-rotate").style.display = 'block';
        document.querySelector(".circle").style.backgroundColor = '#A5A1FF';
        document.querySelector(".circle").style.scale = '1';
        document.querySelector(".tringle").style.scale = '1';
        document.querySelector(".cube").style.scale = '1';
    })


    document.querySelector(".page1-bottom-left").addEventListener("mouseenter", () => {
        document.querySelector(".page1-bottom-left-rotate").style.display = 'none';
        document.querySelector(".circle").style.backgroundColor = '#FFAEDC';
        document.querySelector(".cube").style.backgroundColor = '#FFFFFF';
        document.querySelector(".tringle").style.borderBottom = `100px solid #FFF480`;
    })
    document.querySelector(".page1-bottom-left").addEventListener("mouseleave", () => {
        document.querySelector(".page1-bottom-left-rotate").style.display = 'block';
        document.querySelector(".circle").style.backgroundColor = '#A5A1FF';
        document.querySelector(".cube").style.backgroundColor = '#A5A1FF';
        document.querySelector(".tringle").style.borderBottom = `100px solid #A5A1FF`;
    })
}
page1Display();

function page2Animation() {
    gsap.to("#page2-rotate", {
        rotate: `${180}deg`,
        scrollTrigger: {
            trigger: ".page2",
            scroller: ".main",
            // markers:true,
            start: "100% 100%",
            end: "110% -10%",
            scrub: 1,
        }
    })
}
page2Animation();

function page3Animation(){
    
let page3TL1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3-elem1",
        scroller: ".main",
        // markers:true,
        start: "top 112%",
        end:"top 30%",
        scrub: 2
    }
})
let page3TL2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3-elem2",
        scroller: ".main",
        // markers:true,
        start: "top 112%",
        end:"top 30%",
        scrub: 2
    }
})
let page3TL3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3-elem3",
        scroller: ".main",
        // markers:true,
        start: "top 112%",
        end:"top 35%",
        scrub: 2
    }
})
let page3TL4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3-elem4",
        scroller: ".main",
        // markers:true,
        start: "top 112%",
        end:"top 35%",
        scrub: 2
    }
})
page3TL1
    .to(".page3-elem-left1", {
        left: `${27.5}%`,
    }, 'a')
    .to(".page3-elem-right1", {
        left: `${75}%`,
    }, 'a')

page3TL2
    .to(".page3-elem-left2", {
        left: `${27.5}%`,
    }, 'b')
    .to(".page3-elem-right2", {
        left: `${75}%`,
    }, 'b')

page3TL3
    .to(".page3-elem-left3", {
        left: `${27.5}%`,
    }, 'c')
    .to(".page3-elem-right3", {
        left: `${75}%`,
    }, 'c')

page3TL4
    .to(".page3-elem-left4", {
        left: `${27.5}%`,
    }, 'd')
    .to(".page3-elem-right4", {
        left: `${75}%`,
    }, 'd')
}
page3Animation();

