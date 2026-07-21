/* =====================================================
   FOCUL INIMII ❤️
   JAVASCRIPT
===================================================== */


/* =====================================================
   START WEBSITE
===================================================== */

const loadingScreen =
    document.getElementById("loading-screen");

const startButton =
    document.getElementById("start-button");


startButton.addEventListener(
    "click",
    function () {

        loadingScreen.classList.add("hidden");

        // Pornește muzica dacă este configurată
        const music =
            document.getElementById("background-music");

        if (music) {

            music.play().catch(() => {

                console.log(
                    "Browserul a blocat redarea automată."
                );

            });

        }

    }
);


/* =====================================================
   SMOOTH SCROLL
===================================================== */

function scrollToSection(sectionId) {

    const section =
        document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({

            behavior: "smooth"

        });

    }

}


/* =====================================================
   RELATIONSHIP TIMER
===================================================== */

// Data începutului relației
const relationshipStart =
    new Date("2024-11-03T00:00:00");


function updateRelationshipTimer() {

    const now =
        new Date();


    let years =
        now.getFullYear()
        -
        relationshipStart.getFullYear();


    let months =
        now.getMonth()
        -
        relationshipStart.getMonth();


    let days =
        now.getDate()
        -
        relationshipStart.getDate();


    let hours =
        now.getHours()
        -
        relationshipStart.getHours();


    let minutes =
        now.getMinutes()
        -
        relationshipStart.getMinutes();


    let seconds =
        now.getSeconds()
        -
        relationshipStart.getSeconds();


    /*
    Dacă valorile sunt negative,
    împrumutăm din unitatea următoare.
    */


    if (seconds < 0) {

        seconds += 60;

        minutes--;

    }


    if (minutes < 0) {

        minutes += 60;

        hours--;

    }


    if (hours < 0) {

        hours += 24;

        days--;

    }


    if (days < 0) {

        const previousMonth =
            new Date(
                now.getFullYear(),
                now.getMonth(),
                0
            );

        days +=
            previousMonth.getDate();

        months--;

    }


    if (months < 0) {

        months += 12;

        years--;

    }


    /*
    Actualizăm valorile pe pagină.
    */


    document.getElementById("years")
        .textContent = years;


    document.getElementById("months")
        .textContent = months;


    document.getElementById("days")
        .textContent = days;


    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2, "0");

}


/*
Actualizăm timerul imediat.
*/

updateRelationshipTimer();


/*
Actualizăm timerul în fiecare secundă.
*/

setInterval(
    updateRelationshipTimer,
    1000
);


/* =====================================================
   TIMELINE SCROLL ANIMATION
===================================================== */


const timelineItems =
    document.querySelectorAll(
        ".timeline-item"
    );


const timelineObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(

                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }

            );

        },

        {

            threshold: 0.2

        }

    );


timelineItems.forEach(

    function (item) {

        timelineObserver.observe(item);

    }

);


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */


const navbar =
    document.querySelector(
        ".navbar"
    );


window.addEventListener(

    "scroll",

    function () {

        if (
            window.scrollY > 50
        ) {

            navbar.style.background =
                "rgba(9, 7, 11, 0.95)";

        }

        else {

            navbar.style.background =
                "linear-gradient(rgba(9,7,11,0.8), transparent)";

        }

    }

);


/* =====================================================
   PARALLAX HERO
===================================================== */


window.addEventListener(

    "scroll",

    function () {

        const hero =
            document.querySelector(
                ".hero-content"
            );


        if (
            window.scrollY <
            window.innerHeight
        ) {

            hero.style.transform =
                `translateY(${window.scrollY * 0.25}px)`;

            hero.style.opacity =
                1 -
                window.scrollY /
                window.innerHeight;

        }

    }

);


/* =====================================================
   CREATE FLOATING PARTICLES
===================================================== */


function createParticle() {

    const particle =
        document.createElement(
            "div"
        );


    particle.classList.add(
        "particle"
    );


    particle.innerHTML =
        "✦";


    particle.style.left =
        Math.random() * 100 +
        "%";


    particle.style.animationDuration =
        (
            5 +
            Math.random() * 10
        ) +
        "s";


    particle.style.fontSize =
        (
            5 +
            Math.random() * 10
        ) +
        "px";


    document.body.appendChild(
        particle
    );


    setTimeout(

        function () {

            particle.remove();

        },

        15000

    );

}


/*
Creăm particule periodic.
*/

setInterval(

    createParticle,

    700

);


/* =====================================================
   HIDDEN SURPRISE
===================================================== */


const secretHeart =
    document.createElement(
        "div"
    );


secretHeart.className =
    "secret-heart";


secretHeart.innerHTML =
    "♡";


document.body.appendChild(
    secretHeart
);


secretHeart.addEventListener(

    "click",

    function () {

        showLoveSurprise();

    }

);


/* =====================================================
   LOVE SURPRISE
===================================================== */


function showLoveSurprise() {

    const message =
        document.createElement(
            "div"
        );


    message.className =
        "love-surprise";


    message.innerHTML = `

        <div class="surprise-content">

            <div class="surprise-heart">
                ❤️
            </div>

            <h2>
                Andreea...
            </h2>

            <p>
                Te-aș alege în fiecare viață.
            </p>

            <span>
                ❤️
            </span>

        </div>

    `;


    document.body.appendChild(
        message
    );


    createConfetti();


    setTimeout(

        function () {

            message.classList.add(
                "show"
            );

        },

        100

    );


}


/* =====================================================
   CONFETTI
===================================================== */


function createConfetti() {

    for (
        let i = 0;
        i < 80;
        i++
    ) {

        const confetti =
            document.createElement(
                "div"
            );


        confetti.className =
            "confetti";


        confetti.style.left =
            Math.random() * 100 +
            "vw";


        confetti.style.animationDelay =
            Math.random() * 2 +
            "s";


        confetti.style.backgroundColor =
            getRandomColor();


        document.body.appendChild(
            confetti
        );


        setTimeout(

            function () {

                confetti.remove();

            },

            5000

        );

    }

}


/* =====================================================
   RANDOM COLORS
===================================================== */


function getRandomColor() {

    const colors = [

        "#ff4f91",

        "#ff8fb8",

        "#ffd1e0",

        "#ffffff",

        "#ffd700"

    ];


    return colors[
        Math.floor(
            Math.random()
            *
            colors.length
        )
    ];

}


/* =====================================================
   SECRET HEART POSITION
===================================================== */


secretHeart.style.position =
    "fixed";


secretHeart.style.bottom =
    "20px";


secretHeart.style.right =
    "20px";


secretHeart.style.zIndex =
    "999";


secretHeart.style.fontSize =
    "20px";


secretHeart.style.color =
    "rgba(255,255,255,0.15)";


secretHeart.style.cursor =
    "pointer";


secretHeart.style.transition =
    "all 0.3s";


secretHeart.addEventListener(

    "mouseenter",

    function () {

        secretHeart.style.color =
            "rgba(255,100,160,0.8)";

    }

);


secretHeart.addEventListener(

    "mouseleave",

    function () {

        secretHeart.style.color =
            "rgba(255,255,255,0.15)";

    }

);


/* =====================================================
   PAGE LOADED
===================================================== */


window.addEventListener(

    "load",

    function () {

        console.log(
            "❤️ Focul Inimii este gata!"
        );

    }

);

/* =====================================================
   MUSIC PLAYER
===================================================== */

const music =
    document.getElementById(
        "background-music"
    );

const musicButton =
    document.getElementById(
        "music-button"
    );


let musicPlaying =
    false;


musicButton.addEventListener(

    "click",

    function () {

        if (
            musicPlaying
        ) {

            music.pause();

            musicButton.textContent =
                "▶";

            musicPlaying =
                false;

        }

        else {

            music.play();

            musicButton.textContent =
                "❚❚";

            musicPlaying =
                true;

        }

    }

);

/* =====================================================
   IMAGE LIGHTBOX
===================================================== */

function openImage(
    imageSource
) {

    const lightbox =
        document.getElementById(
            "image-lightbox"
        );

    const lightboxImage =
        document.getElementById(
            "lightbox-image"
        );


    lightboxImage.src =
        imageSource;


    lightbox.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}


function closeImage() {

    const lightbox =
        document.getElementById(
            "image-lightbox"
        );


    lightbox.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "auto";

}


/* =====================================================
   LOVE LETTERS
===================================================== */


const letters = {

    1: `

        <h2>
            Pentru tine ❤️
        </h2>

        <p>

            Iubita mea,

            <br><br>

            Poate că nu îți spun în fiecare zi
            tot ce simt pentru tine.

            <br><br>

            Dar vreau să știi că ai devenit
            una dintre cele mai importante
            persoane din viața mea.

            <br><br>

            Din momentul în care ai apărut,
            viața mea a început să aibă
            o poveste pe care nu vreau
            să o termin niciodată.

            <br><br>

            Te iubesc.

            <br><br>

            — Barbatul tau ❤️

        </p>

    `,


    2: `

        <h2>
            Despre noi ❤️
        </h2>

        <p>

            Noi nu suntem perfecți.

            <br><br>

            Am avut momente frumoase.

            Am avut și momente grele.

            <br><br>

            Am avut distanță.

            Dor.

            Frică.

            <br><br>

            Dar de fiecare dată,
            povestea noastră a continuat.

            <br><br>

            Și poate că asta este
            una dintre cele mai frumoase
            părți ale poveștii noastre.

            <br><br>

            Faptul că încă suntem noi.

        </p>

    `,


    3: `

        <h2>
            Pentru viitorul nostru 🌙
        </h2>

        <p>

            Nu știu ce ne rezervă viitorul.

            <br><br>

            Nu știu unde vom locui.

            Nu știu unde vom călători.

            Nu știu câte obstacole vom avea.

            <br><br>

            Dar știu un lucru.

            <br><br>

            Vreau să descopăr toate
            lucrurile astea împreună cu tine.

            <br><br>

            Pentru că oriunde ar fi viitorul...

            <br><br>

            Sper să fim noi doi.

            <br><br>

            ❤️

        </p>

    `

};


function openLetter(
    letterNumber
) {

    const modal =
        document.getElementById(
            "letter-modal"
        );

    const text =
        document.getElementById(
            "letter-text"
        );


    text.innerHTML =
        letters[
            letterNumber
        ];


    modal.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}


function closeLetter() {

    const modal =
        document.getElementById(
            "letter-modal"
        );


    modal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "auto";

}


/* =====================================================
   100 REASONS
===================================================== */


const reasons = [

    "Pentru că zâmbetul tău îmi schimbă ziua.",

    "Pentru că râsul tău este unul dintre sunetele mele preferate.",

    "Pentru că lângă tine pot fi eu.",

    "Pentru că ești frumoasă chiar și atunci când tu nu crezi asta.",

    "Pentru că mă faci să vreau să fiu un om mai bun.",

    "Pentru că îmi place felul în care mă privești.",

    "Pentru că fiecare îmbrățișare de la tine înseamnă ceva.",

    "Pentru că îmi este dor de tine atunci când nu ești lângă mine.",

    "Pentru că mă faci fericit.",

    "Pentru că ai devenit parte din viața mea.",

    "Pentru că ești specială pentru mine.",

    "Pentru că mă faci să zâmbesc fără motiv.",

    "Pentru că îmi place să vorbesc cu tine.",

    "Pentru că îmi place să te ascult.",

    "Pentru că ești tu.",

    "Pentru că ai un loc pe care nimeni altcineva nu îl poate ocupa.",

    "Pentru că îmi faci inima să bată mai repede.",

    "Pentru că fiecare zi cu tine este o zi pe care vreau să mi-o amintesc.",

    "Pentru că mă faci să cred în noi.",

    "Pentru că te aleg pe tine.",

    "Pentru că îmi place să te văd fericită.",

    "Pentru că vreau să fiu motivul zâmbetului tău.",

    "Pentru că ești cea mai frumoasă parte din povestea mea.",

    "Pentru că lângă tine timpul trece altfel.",

    "Pentru că mă faci să uit de toate problemele.",

    "Pentru că îmi place să construiesc amintiri cu tine.",

    "Pentru că mă faci să simt lucruri pe care nu le pot explica.",

    "Pentru că îmi place vocea ta.",

    "Pentru că îmi place să te țin în brațe.",

    "Pentru că vreau să te văd în fiecare zi.",

    "Pentru că ești persoana la care mă gândesc când mă trezesc.",

    "Pentru că ești persoana la care mă gândesc înainte să adorm.",

    "Pentru că îmi faci viața mai frumoasă.",

    "Pentru că ești motivul pentru care zâmbesc uneori fără să-mi dau seama.",

    "Pentru că îmi place să fiu cu tine.",

    "Pentru că vreau să descopăr lumea alături de tine.",

    "Pentru că îmi place povestea noastră.",

    "Pentru că fiecare capitol al nostru contează.",

    "Pentru că nu vreau să uit niciodată cum a început totul.",

    "Pentru că primul nostru sărut va rămâne mereu special.",

    "Pentru că ai fost acolo când am avut nevoie.",

    "Pentru că mă faci să mă simt iubit.",

    "Pentru că îmi place să te fac fericită.",

    "Pentru că îmi place să te surprind.",

    "Pentru că mă gândesc la viitorul nostru.",

    "Pentru că vreau să construim ceva frumos.",

    "Pentru că vreau să avem cât mai multe amintiri.",

    "Pentru că vreau să râdem împreună cât mai mult.",

    "Pentru că vreau să călătorim împreună.",

    "Pentru că vreau să vedem apusuri împreună.",

    "Pentru că vreau să te văd împlinită.",

    "Pentru că îmi place să te susțin.",

    "Pentru că mă faci să cred că orice este posibil.",

    "Pentru că ai răbdare cu mine.",

    "Pentru că mă accepți așa cum sunt.",

    "Pentru că îmi place să fiu omul tău.",

    "Pentru că tu ești fata mea.",

    "Pentru că eu sunt bărbatul tău.",

    "Pentru că împreună suntem noi.",

    "Pentru că distanța nu a putut șterge ceea ce simțim.",

    "Pentru că mereu mi-e dor de tine.",

    "Pentru că fiecare revedere este specială.",

    "Pentru că îmi place momentul în care te văd după mult timp.",

    "Pentru că îmi place să te țin de mână.",

    "Pentru că îmi place să merg alături de tine.",

    "Pentru că îmi place să facem lucruri simple împreună.",

    "Pentru că lângă tine lucrurile simple devin speciale.",

    "Pentru că ești una dintre cele mai frumoase întâmplări din viața mea.",

    "Pentru că te-aș alege din nou.",

    "Pentru că vreau să te aleg în fiecare zi.",

    "Pentru că vreau să fiu lângă tine.",

    "Pentru că vreau să te protejez.",

    "Pentru că vreau să te văd zâmbind.",

    "Pentru că vreau să fiu omul pe care te poți baza.",

    "Pentru că vreau să fiu acolo pentru tine.",

    "Pentru că vreau să ne vedem toate visele împlinite.",

    "Pentru că vreau să avem o viață frumoasă.",

    "Pentru că vreau să avem un loc al nostru.",

    "Pentru că vreau să avem amintiri pe care să le povestim când vom fi bătrâni.",

    "Pentru că vreau să râdem de toate prostiile pe care le-am făcut.",

    "Pentru că vreau să îmbătrânesc alături de tine.",

    "Pentru că vreau să fiu parte din povestea ta.",

    "Pentru că vreau ca tu să fii parte din povestea mea.",

    "Pentru că tu ai devenit acasă pentru mine.",

    "Pentru că îmi place să spun că ești a mea.",

    "Pentru că îmi place să știu că sunt al tău.",

    "Pentru că ești omul meu preferat.",

    "Pentru că ești locul meu sigur.",

    "Pentru că ești liniștea mea.",

    "Pentru că ești focul inimii mele.",

    "Pentru că mă faci să simt că aparțin undeva.",

    "Pentru că vreau să te iubesc în fiecare zi.",

    "Pentru că vreau să te fac fericită.",

    "Pentru că vreau să fiu motivul pentru care zâmbești.",

    "Pentru că vreau să ne păstrăm povestea.",

    "Pentru că vreau să scriem împreună următoarele capitole.",

    "Pentru că nu vreau ca povestea noastră să se termine.",

    "Pentru că te iubesc.",

    "Pentru că ești Andreea.",

    "Pentru că ești tu.",

    "Și pentru că, dintre toate persoanele din lume, eu te-aș alege tot pe tine. ❤️"

];


function showRandomReason() {

    const reasonText =
        document.getElementById(
            "reason-text"
        );


    const randomIndex =
        Math.floor(
            Math.random()
            *
            reasons.length
        );


    reasonText.style.opacity =
        "0";


    setTimeout(

        function () {

            reasonText.textContent =
                reasons[
                    randomIndex
                ];


            reasonText.style.opacity =
                "1";

        },

        300

    );

}

/* =====================================================
   FAVORITE MOMENTS
===================================================== */

const moments = [

    {
        image:
            "images/poza1.jpg",

        title:
            "Prima noastră amintire",

        description:
            "Aici a început povestea noastră."
    },

    {
        image:
            "images/poza2.jpg",

        title:
            "O zi de neuitat",

        description:
            "O zi simplă care a devenit una dintre amintirile mele preferate."
    },

    {
        image:
            "images/poza3.jpg",

        title:
            "Primul nostru sărut",

        description:
            "Într-un parc de copii, într-o liniște care a devenit una dintre cele mai frumoase amintiri."
    },

    {
        image:
            "images/poza4.jpg",

        title:
            "Un moment doar al nostru",

        description:
            "Unul dintre acele momente pe care aș vrea să le pot retrăi la nesfârșit."
    },

    {
        image:
            "images/poza5.jpg",

        title:
            "Noi doi",

        description:
            "Indiferent unde suntem, cel mai important este că suntem împreună."
    }

];


let currentMoment = 0;


function showMoment(index) {

    const image =
        document.getElementById(
            "moment-image"
        );

    const title =
        document.getElementById(
            "moment-title"
        );

    const description =
        document.getElementById(
            "moment-description"
        );


    image.style.opacity = "0";


    setTimeout(

        function () {

            image.src =
                moments[index].image;

            title.textContent =
                moments[index].title;

            description.textContent =
                moments[index].description;


            image.style.opacity =
                "1";

        },

        250

    );

}


function nextMoment() {

    currentMoment++;

    if (
        currentMoment >=
        moments.length
    ) {

        currentMoment = 0;

    }

    showMoment(
        currentMoment
    );

}


function previousMoment() {

    currentMoment--;

    if (
        currentMoment < 0
    ) {

        currentMoment =
            moments.length - 1;

    }

    showMoment(
        currentMoment
    );

}


/* Schimbare automată */

setInterval(

    nextMoment,

    6000

);

/* =====================================================
   LOVE QUOTES
===================================================== */

const loveQuotes = [

    "Unele persoane apar în viața noastră și o schimbă pentru totdeauna.",

    "Dacă ar trebui să aleg din nou, te-aș alege tot pe tine.",

    "Tu ești partea mea preferată din fiecare zi.",

    "Acasă nu este un loc. Acasă ești tu.",

    "Cel mai frumos loc din lume este lângă tine.",

    "Nu am nevoie de o viață perfectă. Am nevoie doar de tine în viața mea.",

    "Aș traversa orice distanță doar pentru o îmbrățișare de la tine.",

    "Unele povești sunt scrise în cărți. A noastră este scrisă în inimă.",

    "Dintre toate drumurile pe care le-aș putea alege, sper să aleg mereu drumul care duce la tine.",

    "Tu ești focul inimii mele."

];


let quoteIndex = 0;


function changeQuote() {

    const quote =
        document.getElementById(
            "love-quote"
        );


    quote.style.opacity =
        "0";


    setTimeout(

        function () {

            quoteIndex++;

            if (
                quoteIndex >=
                loveQuotes.length
            ) {

                quoteIndex = 0;

            }


            quote.textContent =
                loveQuotes[
                    quoteIndex
                ];


            quote.style.opacity =
                "1";

        },

        700

    );

}


setInterval(

    changeQuote,

    10000

);

/* =====================================================
   MEMORY MAP
===================================================== */

const memories = {

    1: {

        title:
            "Liceul ❤️",

        text:
            "Locul unde ne-am cunoscut. Tu erai bobocica, eu eram în clasa a 11-a. O simplă ieșire la fumat a devenit începutul poveștii noastre."

    },

    2: {

        title:
            "Parcul nostru ❤️",

        text:
            "Locul unde am avut primul nostru sărut. Era liniște, iar tu mi-ai spus că nu îți place liniștea. Eu ți-am spus că uneori liniștea poate fi frumoasă."

    },

    3: {

        title:
            "Locul primei noastre ieșiri ❤️",

        text:
            "Una dintre primele zile în care am început să ne descoperim cu adevărat."

    },

    4: {

        title:
            "Locul nostru preferat ❤️",

        text:
            "Un loc care poate pentru alții nu înseamnă nimic, dar pentru noi va avea mereu o poveste."

    }

};


function showMemory(
    memoryNumber
) {

    const popup =
        document.getElementById(
            "memory-popup"
        );

    const title =
        document.getElementById(
            "memory-title"
        );

    const text =
        document.getElementById(
            "memory-text"
        );


    title.textContent =
        memories[
            memoryNumber
        ].title;


    text.textContent =
        memories[
            memoryNumber
        ].text;


    popup.classList.add(
        "active"
    );

}


function closeMemory() {

    const popup =
        document.getElementById(
            "memory-popup"
        );


    popup.classList.remove(
        "active"
    );

}



/* =====================================================
   SECRET INTRO SCREEN
===================================================== */

function openGift() {

    const intro =
        document.getElementById(
            "intro-screen"
        );


    const button =
        document.getElementById(
            "open-gift"
        );


    /*
        Dezactivăm butonul
        pentru a nu putea fi apăsat
        de mai multe ori.
    */

    button.disabled = true;


    button.innerHTML =
        "Pentru tine ❤️";


    /*
        Creăm o explozie
        de inimioare
    */

    createHeartExplosion();


    /*
        După animație,
        ascundem ecranul
        de introducere.
    */

    setTimeout(

        function () {

            intro.classList.add(
                "intro-hidden"
            );


            /*
                Pornim muzica,
                dacă există playerul.
            */

            const music =
                document.getElementById(
                    "background-music"
                );


            if (music) {

                music.play()
                    .catch(
                        function () {

                            console.log(
                                "Autoplay blocat de browser."
                            );

                        }
                    );

            }

        },

        1500

    );

}


/* =====================================================
   HEART EXPLOSION
===================================================== */

function createHeartExplosion() {

    const symbols = [

        "❤️",
        "💖",
        "💕",
        "💗",
        "✨"

    ];


    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const heart =
            document.createElement(
                "span"
            );


        heart.className =
            "explosion-heart";


        heart.innerHTML =
            symbols[
                Math.floor(
                    Math.random()
                    *
                    symbols.length
                )
            ];


        /*
            Poziție aleatoare
        */

        heart.style.left =
            "50%";


        heart.style.top =
            "50%";


        /*
            Direcție aleatoare
        */

        const angle =
            Math.random()
            *
            Math.PI
            *
            2;


        const distance =
            200
            +
            Math.random()
            *
            400;


        heart.style.setProperty(

            "--x",

            Math.cos(angle)
            *
            distance
            +
            "px"

        );


        heart.style.setProperty(

            "--y",

            Math.sin(angle)
            *
            distance
            +
            "px"

        );


        document.body.appendChild(
            heart
        );


        setTimeout(

            function () {

                heart.remove();

            },

            2000

        );

    }

}