        // Set when the password modal is open. Used both by the modal handlers (to apply
        // the canvas blur / darken backdrop) and by the blotter render loop (to freeze the
        // "hello" animation while the modal is up).
        var _passwordModalOpen = false;

        document.fonts.ready.then(function() {
            // Cache the actual on-screen top of each <li> in the scrolling container.
            // These are the scroll positions where each <li> snap-aligns to the top of the visible area.
            // Computed once after fonts load, so the text wrap heights are accurate.
            var _scrollContainer = document.getElementById("scrolling-container");
            var _scrollContainerTop = _scrollContainer.getBoundingClientRect().top;
            var _snapTops = Array.prototype.map.call(
                _scrollContainer.querySelectorAll('#scrolling-text li'),
                function(li) {
                    return li.getBoundingClientRect().top - _scrollContainerTop + _scrollContainer.scrollTop;
                }
            );
            // The 3rd <li> wraps to 4 lines instead of 3, so push its snap point down by one
            // line height to match the CSS scroll-margin-top adjustment.
            _snapTops[2] += 90;
            // First snap position and the last useful one (the last <li> is always visible *below*
            // the second-to-last when the second-to-last is at the top, so we don't scroll past that).
            var _snapMin = _snapTops[0];
            var _snapMax = _snapTops[_snapTops.length - 2];
            // Midpoints between consecutive snap positions — used as thresholds for sentence highlight transitions.
            var _snapMid = [];
            for (var _i = 0; _i < _snapTops.length - 1; _i++) {
                _snapMid.push((_snapTops[_i] + _snapTops[_i + 1]) / 2);
            }

            _scrollContainer.addEventListener('scroll', function ( event ) {

                var height = $(_scrollContainer).scrollTop();

                if (height > _snapMax) {
                    _scrollContainer.scrollTop = _snapMax;
                }

                if (height < _snapMin) {
                    _scrollContainer.scrollTop = _snapMin;
                }

                var isSentenceOne = false;
                var isSentenceTwo = false;
                var isSentenceThree = false;
                var isSentenceFour = false;
                var isSentenceFive = false;

                if (height < _snapMid[0]) {
                    isSentenceOne = true;
                } else if (height < _snapMid[1]) {
                    isSentenceTwo = true;
                } else if (height < _snapMid[2]) {
                    isSentenceThree = true;
                } else if (height < _snapMid[3]) {
                    isSentenceFour = true;
                } else {
                    isSentenceFive = true;
                }

                document.getElementsByClassName("sentenceOne")[0].style.color = isSentenceOne ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
                document.getElementsByClassName("sentenceOne")[1].style.color = isSentenceOne ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';

                document.getElementsByClassName("sentenceTwo")[0].style.color = isSentenceTwo ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
                document.getElementsByClassName("sentenceTwo")[1].style.color = isSentenceTwo ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';

                document.getElementsByClassName("sentenceThree")[0].style.color = isSentenceThree ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
                document.getElementsByClassName("sentenceThree")[1].style.color = isSentenceThree ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';

                document.getElementsByClassName("sentenceFour")[0].style.color = isSentenceFour ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
                document.getElementsByClassName("sentenceFour")[1].style.color = isSentenceFour ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';

                document.getElementsByClassName("sentenceFive")[0].style.color = isSentenceFive ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
                document.getElementsByClassName("sentenceFive")[1].style.color = isSentenceFive ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';

            }, false);

            var animation = bodymovin.loadAnimation({
                container: document.getElementById('bm'),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                path: 'data.json'
            });

            animation.state = false
            document.getElementById("bm").addEventListener("click", function() {
                


                animation.state = !animation.state
                animation.state ? animation.setSpeed(1) : animation.setSpeed(-1)
                animation.play()
                document.getElementById('scroll-button').style.zIndex = !animation.state ? 100 : 0; //gallery button index
                document.getElementById("background-item").style.visibility = animation.state ? 'visible' : 'hidden'
                document.getElementById("canvas").style.filter = !animation.state ? 'blur(0px)' : 'blur(20px)' //100px
                document.getElementById("darken").style.backgroundColor = !animation.state ? 'rgba(18, 18, 18, 0)' : 'rgba(18, 18, 18, 0.88)'
                document.getElementById("darken").style.zIndex = !animation.state ? 0 : 1;
                document.getElementById("darken").style.backdropFilter = !animation.state ? 'blur(0px)' : 'blur(10px)'; // Adjust blur amount
                document.getElementById("darken").style.WebkitBackdropFilter = !animation.state ? 'blur(0px)' : 'blur(10px)'; // Safari support

                //document.getElementById("darken").style.filter = !animation.state ? 'blur(0px)' : 'blur(20px)';
                //document.getElementById("keynote").style.zIndex = 0;
                //document.getElementById("keynote").style.filter = !animation.state ? 'blur(0px)' : 'blur(4px)' //100px
                //document.getElementById("keynote").style.color = animation.state ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.1)'

                var preHeight = $(_scrollContainer).scrollTop();

                var isSentenceOne = false;
                var isSentenceTwo = false;
                var isSentenceThree = false;
                var isSentenceFour = false;
                var isSentenceFive = false;

                if (preHeight < _snapMid[0]) {
                    isSentenceOne = true;
                } else if (preHeight < _snapMid[1]) {
                    isSentenceTwo = true;
                } else if (preHeight < _snapMid[2]) {
                    isSentenceThree = true;
                } else if (preHeight < _snapMid[3]) {
                    isSentenceFour = true;
                } else {
                    isSentenceFive = true;
                }

                if (isSentenceOne) {
                    document.getElementsByClassName("sentenceOne")[0].style.color = animation.state ?  'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)';
                    document.getElementsByClassName("sentenceOne")[1].style.color = animation.state ?  'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)';
                } else {
                    document.getElementsByClassName("sentenceOne")[0].style.color = animation.state ?  'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)';
                    document.getElementsByClassName("sentenceOne")[1].style.color = animation.state ?  'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)';
                }

                if (isSentenceTwo) {
                    document.getElementsByClassName("sentenceTwo")[0].style.color = animation.state ?  'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)';
                    document.getElementsByClassName("sentenceTwo")[1].style.color = animation.state ?  'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)';
                } else {
                    document.getElementsByClassName("sentenceTwo")[0].style.color = animation.state ?  'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)';
                    document.getElementsByClassName("sentenceTwo")[1].style.color = animation.state ?  'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)';
                }

                if (isSentenceThree) {
                    document.getElementsByClassName("sentenceThree")[0].style.color = animation.state ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)';
                    document.getElementsByClassName("sentenceThree")[1].style.color = animation.state ?  'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)';
                } else {
                    document.getElementsByClassName("sentenceThree")[0].style.color = animation.state ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)';
                    document.getElementsByClassName("sentenceThree")[1].style.color = animation.state ?  'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)';
                }

                if (isSentenceFour) {
                    document.getElementsByClassName("sentenceFour")[0].style.color = animation.state ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)';
                    document.getElementsByClassName("sentenceFour")[1].style.color = animation.state ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)';
                } else {
                    document.getElementsByClassName("sentenceFour")[0].style.color = animation.state ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)';
                    document.getElementsByClassName("sentenceFour")[1].style.color = animation.state ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)';
                }

                if (isSentenceFive) {
                    document.getElementsByClassName("sentenceFive")[0].style.color = animation.state ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)';
                    document.getElementsByClassName("sentenceFive")[1].style.color = animation.state ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)';
                } else {
                    document.getElementsByClassName("sentenceFive")[0].style.color = animation.state ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)';
                    document.getElementsByClassName("sentenceFive")[1].style.color = animation.state ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)';
                }

            })

            const body = document.body;
            const docEl = document.documentElement;

            const MathUtils = {
                lineEq: (y2, y1, x2, x1, currentVal) => {
                    var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
                    return (m * currentVal) + b;
                },
                lerp: (a, b, n) =>  (1 - n) * a + n * b,
                distance: (x1, x2, y1, y2) => {
                    var a = x1 - x2;
                    var b = y1 - y2;
                    return Math.hypot(a,b);
                }
            };

            let winsize;
            const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
            calcWinsize();
            window.addEventListener('resize', calcWinsize);

            const getMousePos = (ev) => {
                let posx = 0;
                let posy = 0;
                if (!ev) ev = window.event;
                if (ev.pageX || ev.pageY) {
                    posx = ev.pageX;
                    posy = ev.pageY;
                }
                else if (ev.clientX || ev.clientY) 	{
                    posx = ev.clientX + body.scrollLeft + docEl.scrollLeft;
                    posy = ev.clientY + body.scrollTop + docEl.scrollTop;
                }
                return {x: posx, y: posy};
            }

            let mousePos = {x: winsize.width/2, y: winsize.height/2};
            window.addEventListener('mousemove', ev => mousePos = getMousePos(ev));


            const elem = document.querySelector('.content__text');
            const textEl = elem.querySelector('span.content__text-inner');

            //console.log ("window width:" + window.innerWidth);

            const createBlotterText = () => {
                const text = new Blotter.Text(textEl.innerHTML, {
                    family : "'WienModern'",
                    weight: 900,
                    size : 90,//120,
                    paddingLeft: 530, //window.innerWidth / 3.16, //530
                    paddingRight: 530, //window.innerWidth / 3.16,  //530
                    paddingTop: 360, //window.innerHeight / 2.47, //360
                    paddingBottom: 360, //window.innerHeight / 2.47,
                    fill : '#121212'
                });
                elem.removeChild(textEl);



                const material = new Blotter.ChannelLiquidMaterial();

                /* channel effect */
                material.uniforms.uOffset.value = 0.005;
                material.uniforms.uRotation.value = 45;
                material.uniforms.uApplyBlur.value = 1;
                material.uniforms.uAnimateNoise.value = 1;
                //material.uniforms.uBlendColor.value = [1,1,1,1];

                function angleBetweenPointsInDegrees(x1, y1, x2, y2) {
                    var angle = Math.atan2(y2 - y1, x2 - x1) * 180.0 / Math.PI;
                    angle = 180 + angle;
                    return angle;
                }

                function distanceBetweenPoints(x1, y1, x2, y2) {
                    var a = x1 - x2;
                    var b = y1 - y2;
                    return Math.sqrt((a * a) + (b * b));
                }

                /*liquid effect */

                material.uniforms.uSpeed.value = 0.3;  //0.25
                material.uniforms.uVolatility.value = 0;
                material.uniforms.uSeed.value = 1;
                const blotter = new Blotter(material, {texts: text});
                const scope = blotter.forText(text);
                scope.appendTo(elem);

                scope.on("mousemove", function (mousePosition) {
                    var angle = angleBetweenPointsInDegrees(0.5, 0.5, mousePosition.x, mousePosition.y);
                    var blur = Math.min(0.3, distanceBetweenPoints(0.5, 0.5, mousePosition.x, mousePosition.y));

                    //scope.material.uniforms.uRotation.value = angle;
                    //scope.material.uniforms.uOffset.value = Math.min(blur,0.01);
                    //console.log(scope.material.uniforms.uOffset.value);

                    });


                let lastMousePosition = {x: winsize.width/2, y: winsize.height/2};
                let volatility = 0;

                    const render = () => {
                        const docScrolls = {left : body.scrollLeft + docEl.scrollLeft, top : body.scrollTop + docEl.scrollTop};
                        const relmousepos = {x : mousePos.x - docScrolls.left, y : mousePos.y - docScrolls.top };
                        const mouseDistance = (!animation.state && !_passwordModalOpen) ? MathUtils.distance(lastMousePosition.x, relmousepos.x, lastMousePosition.y, relmousepos.y):  0

                        volatility = MathUtils.lerp(volatility, Math.min(MathUtils.lineEq(0.9, 0, 100, 0, 2*mouseDistance),0.9), 0.05);

                        material.uniforms.uVolatility.value = 0.05 + (volatility);

                        material.uniforms.uOffset.value = 0.001 + Math.min((volatility / 10),0.1); // 0.5
                        //console.log(material.uniforms.uOffset.value);
                        //console.log("volatility: " + material.uniforms.uVolatility.value);
                        //material.uniforms.uSpeed.value = 0.5 + volatility;

                        lastMousePosition = {x: relmousepos.x, y: relmousepos.y};
                        requestAnimationFrame(render);
                    }
                    requestAnimationFrame(render);


            };


            createBlotterText();

            });
            const reSizePage = () => {
                const width = window.innerWidth;
                const navBar = document.getElementsByTagName("nav")[0]
                const backgroundItem = document.getElementById("background-item")
                calculatePadding = 125 + (width-1792)/2
                navBar.style.padding = width > 1792 ? `0 ${calculatePadding}px` : '0 7%'
                backgroundItem.style.padding = width > 1792 ? `0 ${calculatePadding}px ` : '0 7%'

                const cardCarousel = document.getElementById('card-carousel')                
                cardCarousel.style.margin = width > 1792 ? `0 ${calculatePadding}px` : '0 7%'
                const cardWidth = width > 1792 ? 462.6+50 : width*0.86 * .3
                
                const cards = document.getElementsByClassName('card')
                for (let card of cards) {
                    card.style.width = `${cardWidth}px`
                    card.style.margin = width > 1792 ? '0 38.55px' : `${(width*0.86) * 0.025}px`
                    card.style.height = `${(cardWidth / 0.75) + 39}px`
                }

                const cardHeight = (cardWidth / 0.75) + 39;
                const buttonHeight = 78;
                const paginatedDots = 8;
                /*const cardHeight = card.style.height; */
                const margin = (width*0.86) * 0.025;
                const trueCardHeight = cardHeight + margin + margin;

                //Matt edits here
                const canvas = document.getElementById('canvas');
                const canvasHeight = canvas.style.height;
                //console.log('canvasHeight: ' + canvasHeight);

                const cardCarouselTopHeight = (window.innerHeight - buttonHeight - paginatedDots - trueCardHeight) * 0.5;
                cardCarousel.style.marginTop = `${cardCarouselTopHeight}px`;

                const footerHeight = window.innerHeight - buttonHeight - paginatedDots - cardCarouselTopHeight - trueCardHeight;
                const footer = document.getElementById('cardfooter');
                
                footer.style.height = `${footerHeight}px`;
            }

/*
            document.getElementById('download-link').addEventListener('click', function(event) {
                // Prevent the link from opening in the browser
                event.preventDefault();
              
                // Create a new hidden anchor element
                var a = document.createElement('a');
                a.style.display = 'none';
                a.href = `Matt's Portfolio.key`;
                a.download = 'My Presentation';
              
                // Append the anchor element to the DOM
                document.body.appendChild(a);
              
                // Click the anchor element to trigger the download
                a.click();
              
                // Remove the anchor element from the DOM
                document.body.removeChild(a);
            });

            */
            window.addEventListener('resize', function(event) {
                reSizePage();
            }, true);
            reSizePage();

            const carousel = document.getElementById('card-carousel');

// Update the scroll event to detect the centered card and update the active dot
const cardCarousel = document.getElementById('card-carousel');
const cards = document.getElementsByClassName('card');
const dots = document.getElementsByClassName('dot');



cardCarousel.addEventListener('scroll', () => {
    const scrollLeft = cardCarousel.scrollLeft;
    const cardWidth = cards[0].offsetWidth + parseFloat(getComputedStyle(cards[0]).marginRight);

    // Calculate the middle index based on the scroll position
    const middleCardIndex = Math.round(scrollLeft / cardWidth);

    // Update the active dots
    for (let i = 0; i < dots.length; i++) {
        // Set the active class based on the middleCardIndex
        dots[i].classList.toggle('active', i === middleCardIndex); // Adjust for 1-based index
    }
});
// Example JavaScript to add scroll functionality (optional)
const carouselWrapper = document.querySelector('#carousel-wrapper');

let isDragging = false;
let startPosition = 0;
let currentScrollLeft = 0;
let startPos = 0;

// Mouse down event for dragging
carouselWrapper.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPosition = e.pageX - carouselWrapper.offsetLeft;
    currentScrollLeft = cardCarousel.scrollLeft;
    carouselWrapper.style.cursor = 'grabbing';
});

// Mouse move event for dragging
carouselWrapper.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.pageX - carouselWrapper.offsetLeft;
    const walk = (x - startPosition) * 1.5; // Increase the multiplier to drag faster
    cardCarousel.scrollLeft = currentScrollLeft - walk;
});

// Mouse up and leave events to stop dragging
carouselWrapper.addEventListener('mouseup', () => {
    isDragging = false;
    carouselWrapper.style.cursor = 'default';
});

carouselWrapper.addEventListener('mouseleave', () => {
    isDragging = false;
    carouselWrapper.style.cursor = 'default';
});

// Touch support for mobile devices
carouselWrapper.addEventListener('touchstart', (e) => {
    isDragging = true;
    startPos = e.touches[0].pageX - carouselWrapper.offsetLeft;
    currentScrollLeft = cardCarousel.scrollLeft;
});

carouselWrapper.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselWrapper.offsetLeft;
    const walk = (x - startPos) * 1.5; // Adjust the multiplier for touch sensitivity
    cardCarousel.scrollLeft = currentScrollLeft - walk;
});

carouselWrapper.addEventListener('touchend', () => {
    isDragging = false;
});

// Scroll event to update pagination dots
cardCarousel.addEventListener('scroll', () => {
    const scrollLeft = cardCarousel.scrollLeft;
    const cardWidth = cards[0].offsetWidth + parseFloat(getComputedStyle(cards[0]).marginRight);

    // Calculate the middle index based on the scroll position
    const middleCardIndex = Math.round(scrollLeft / cardWidth);

    // Update the active dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.toggle('active', i === middleCardIndex);
    }
});

// Initial update to highlight the correct dot on page load
dots[0]?.classList.add('active');




document.getElementById('scroll-button').addEventListener('click', () => {
    const scrollY = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    if (scrollY < scrollHeight) {
        const scrollSection = document.getElementById('button-container');
        scrollSection.scrollIntoView({ behavior: 'smooth' });
    } else { //this might be broken but it works ¯\_(ツ)_/¯
        const scrollSection = document.getElementById('scroll-container');
        scrollSection.scrollIntoView({ behavior: 'smooth' });
    }
});


// Scroll to the next set of cards
function scrollNext() {
  carouselWrapper.scrollBy({ left: 450, behavior: 'smooth' });
}

// Scroll to the previous set of cards
function scrollPrev() {
  carouselWrapper.scrollBy({ left: -450, behavior: 'smooth' });
}

document.querySelectorAll('video').forEach(video => {
    video.addEventListener('contextmenu', (event) => {
        event.preventDefault(); // Prevent the context menu from showing
    });
});

// Password modal: clicking [Full Case Studies] blurs the page and shows a password prompt.
// Front-end-only check — this is just a small speed bump for recruiters, not real security.
const _caseStudiesText = document.getElementById('case-studies-text');
const _passwordOverlay = document.getElementById('password-modal-overlay');
const _passwordInput = document.getElementById('password-input');
const _CASE_STUDIES_PASSWORD = 'matt-farmer';
const _CASE_STUDIES_URL = 'https://www.figma.com/proto/Zgexff3aMamOPtOgEc6fvW/Matt-s-Portfolio-Presentation-2026?page-id=4001%3A31012&node-id=4001-34553&viewport=-31728%2C-4943%2C0.49&t=mmjSmIwkdoOWq05e-1&scaling=contain&content-scaling=fixed';

function _openPasswordModal() {
    _passwordOverlay.classList.add('active');
    _passwordModalOpen = true;
    // Same blur/darken treatment the burger menu uses, so it inherits the existing
    // 0.5s ease-in-out transitions on #canvas and #darken.
    document.getElementById('canvas').style.filter = 'blur(20px)';
    document.getElementById('darken').style.backgroundColor = 'rgba(18, 18, 18, 0.88)';
    document.getElementById('darken').style.zIndex = 1;
    document.getElementById('darken').style.backdropFilter = 'blur(10px)';
    document.getElementById('darken').style.WebkitBackdropFilter = 'blur(10px)';
    // Defer focus until after display:flex applies, otherwise some browsers ignore it
    requestAnimationFrame(() => _passwordInput.focus());
}

function _closePasswordModal() {
    _passwordOverlay.classList.remove('active');
    _passwordInput.value = '';
    _passwordModalOpen = false;
    document.getElementById('canvas').style.filter = 'blur(0px)';
    document.getElementById('darken').style.backgroundColor = 'rgba(18, 18, 18, 0)';
    document.getElementById('darken').style.zIndex = 0;
    document.getElementById('darken').style.backdropFilter = 'blur(0px)';
    document.getElementById('darken').style.WebkitBackdropFilter = 'blur(0px)';
}

_caseStudiesText.addEventListener('click', _openPasswordModal);

// Click on the dimmed backdrop (but not the modal itself) closes
_passwordOverlay.addEventListener('click', (e) => {
    if (e.target === _passwordOverlay) {
        _closePasswordModal();
    }
});

// Escape key closes
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && _passwordOverlay.classList.contains('active')) {
        _closePasswordModal();
    }
});

// Enter key submits the password
_passwordInput.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    if (_passwordInput.value === _CASE_STUDIES_PASSWORD) {
        window.location.href = _CASE_STUDIES_URL;
    } else {
        _passwordInput.classList.remove('shake');
        // Force reflow so the animation restarts even on consecutive failed attempts
        void _passwordInput.offsetWidth;
        _passwordInput.classList.add('shake');
        _passwordInput.value = '';
    }
});
