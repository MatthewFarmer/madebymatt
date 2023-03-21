        
        document.fonts.ready.then(function() {
            document.getElementById("scrolling-container").addEventListener('scroll', function ( event ) {

                var height = $(document.getElementById("scrolling-container")).scrollTop();


                if (height > 885) {
                    document.getElementById("scrolling-container").scrollTop = 885;
                }

                if (height < 75) {
                    document.getElementById("scrolling-container").scrollTop = 75;
                }

                var isSentenceOne = true;
                var isSentenceTwo = true;
                var isSentenceThree = true;
                var isSentenceFour = true;

                if (height <= 75) {
                    isSentenceOne = true;
                    isSentenceTwo = false;
                    isSentenceThree = false;
                    isSentenceFour = false;
                } else if (height == 345) {
                    isSentenceOne = false;
                    isSentenceTwo = true;
                    isSentenceThree = false;
                    isSentenceFour = false;
                } else if (height == 615) {
                    isSentenceOne = false;
                    isSentenceTwo = false;
                    isSentenceThree = true;
                    isSentenceFour = false;
                } else if (height >= 885) {
                    isSentenceOne = false;
                    isSentenceTwo = false;
                    isSentenceThree = false;
                    isSentenceFour = true;
                }

                document.getElementsByClassName("sentenceOne")[0].style.color = isSentenceOne ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
                document.getElementsByClassName("sentenceOne")[1].style.color = isSentenceOne ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';

                document.getElementsByClassName("sentenceTwo")[0].style.color = isSentenceTwo ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
                document.getElementsByClassName("sentenceTwo")[1].style.color = isSentenceTwo ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';

                document.getElementsByClassName("sentenceThree")[0].style.color = isSentenceThree ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
                document.getElementsByClassName("sentenceThree")[1].style.color = isSentenceThree ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';

                document.getElementsByClassName("sentenceFour")[0].style.color = isSentenceFour ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
                document.getElementsByClassName("sentenceFour")[1].style.color = isSentenceFour ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';

                document.getElementsByTagName("a")[1].style.color = isSentenceFour ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
                document.getElementsByTagName("a")[2].style.color = isSentenceFour ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
                document.getElementsByTagName("a")[3].style.color = isSentenceFour ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
                document.getElementsByTagName("a")[4].style.color = isSentenceFour ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
                document.getElementsByTagName("a")[5].style.color = isSentenceFour ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
                document.getElementsByTagName("a")[6].style.color = isSentenceFour ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';

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
                document.getElementById("background-item").style.visibility = animation.state ? 'visible' : 'hidden'
                document.getElementById("canvas").style.filter = !animation.state ? 'blur(0px)' : 'blur(20px)' //100px
                document.getElementById("darken").style.backgroundColor = !animation.state ? 'rgba(18, 18, 18, 0)' : 'rgba(18, 18, 18, 0.8)'
                document.getElementById("keynote").style.zIndex = 0;
                document.getElementById("keynote").style.filter = !animation.state ? 'blur(0px)' : 'blur(4px)' //100px
                //document.getElementById("keynote").style.color = animation.state ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.1)'

                var preHeight = $(document.getElementById("scrolling-container")).scrollTop();

                var isSentenceOne = true;
                var isSentenceTwo = false;
                var isSentenceThree = false;
                var isSentenceFour = false;

                if (preHeight == 75) {
                    isSentenceOne = true;
                    isSentenceTwo = false;
                    isSentenceThree = false;
                    isSentenceFour = false;
                } else if (preHeight == 345) {
                    isSentenceOne = false;
                    isSentenceTwo = true;
                    isSentenceThree = false;
                    isSentenceFour = false;
                } else if (preHeight == 615) {
                    isSentenceOne = false;
                    isSentenceTwo = false;
                    isSentenceThree = true;
                    isSentenceFour = false;
                } else if (preHeight == 885) {
                    isSentenceOne = false;
                    isSentenceTwo = false;
                    isSentenceThree = false;
                    isSentenceFour = true;
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

                    document.getElementsByTagName("a")[1].style.color = animation.state ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)';
                    document.getElementsByTagName("a")[2].style.color = animation.state ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)';
                    document.getElementsByTagName("a")[3].style.color = animation.state ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)';
                    document.getElementsByTagName("a")[4].style.color = animation.state ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)';
                    document.getElementsByTagName("a")[5].style.color = animation.state ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)';
                    document.getElementsByTagName("a")[6].style.color = animation.state ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)';
                        
                } else {
                    document.getElementsByClassName("sentenceFour")[0].style.color = animation.state ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)';
                    document.getElementsByClassName("sentenceFour")[1].style.color = animation.state ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)';

                    document.getElementsByTagName("a")[1].style.color = animation.state ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)';
                    document.getElementsByTagName("a")[2].style.color = animation.state ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)';
                    document.getElementsByTagName("a")[3].style.color = animation.state ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)';
                    document.getElementsByTagName("a")[4].style.color = animation.state ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)';
                    document.getElementsByTagName("a")[5].style.color = animation.state ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)';
                    document.getElementsByTagName("a")[6].style.color = animation.state ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)';
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
                        const mouseDistance = !animation.state ? MathUtils.distance(lastMousePosition.x, relmousepos.x, lastMousePosition.y, relmousepos.y):  0

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
            
            
