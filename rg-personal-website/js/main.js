const navContainer = document.querySelector(".nav-container"); //changing the class on
const banner = document.querySelector(".banner"); //watching
const header = document.querySelector("header"); //watching


const sectionOneOptions = {
    // rootMargin: "0px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver) {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                navContainer.classList.add('nav-scrolled');
            } else {
                navContainer.classList.remove('nav-scrolled');
            }

        })
    }, sectionOneOptions);

sectionOneObserver.observe(header);



/*----------------------------------------------------*/
/* Highlight the current section in the navigation bar
------------------------------------------------------*/
const sections = document.querySelectorAll("section");
const navlink = document.querySelectorAll('nav ul li a');
const navigationlink = document.querySelectorAll('#nav #menu .nav__item .nav__link');

window.addEventListener('scroll', ()=> {
    let current = "";
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 4)){
            current = section.getAttribute('id');
        }
    })

    navlink.forEach( a => {
        a.classList.remove('active');
        console.log(current);
        if(a.classList.contains(current)){
            a.classList.add('active');
        }
    })

    // navigationlink.forEach( a => {
    //     a.classList.remove('current');
    //     if(a.classList.contains(current)){
    //         a.classList.add('current');
    //     }
    // })

});


window.addEventListener('scroll', ()=> {
    let activelinks = "";
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 2)){
            activelinks = section.getAttribute('id');
        }
    })

    navigationlink.forEach( a => {
        a.classList.remove('current');
        if(a.classList.contains(activelinks)){
            a.classList.add('current');
        }
    })

});

/*----------------------------------------------------*/
/* Add animation appear in skills
------------------------------------------------------*/
const faders = document.querySelectorAll('.fade-in');


const appearOptions = {
    threshold: 0.3,
    rootMargin: "-100px 0px -150px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        // if (!entry.isIntersecting) {
        //     return;
        // } else {
        //     entry.target.classList.add('appear');
        //     appearOnScroll.unobserve(entry.target);
        // }
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
           
        } else {
            entry.target.classList.remove('appear');
            
        }

       

    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

/*----------------------------------------------------*/
/* Trigger animation on skills when appeared
------------------------------------------------------*/
const html = document.querySelector('.progress-html');
const htmlAnimate = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('html-animation');
        } else {
            entry.target.classList.remove('html-animation');
        }

    });
});
htmlAnimate.observe(html);


const css = document.querySelector('.progress-css');
const cssAnimate = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('css-animation');
        } else {
            entry.target.classList.remove('css-animation');
        }

    });
});
cssAnimate.observe(css);


const js = document.querySelector('.progress-js');
const jsAnimate = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('js-animation');
        } else {
            entry.target.classList.remove('js-animation');
        }

    });
});
jsAnimate.observe(js);


const php = document.querySelector('.progress-php');
const phpAnimate = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('php-animation');
        } else {
            entry.target.classList.remove('php-animation');
        }

    });
});
phpAnimate.observe(php);


const mysql = document.querySelector('.progress-mysql');
const mysqlAnimate = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('mysql-animation');
        } else {
            entry.target.classList.remove('mysql-animation');
        }

    });
});
mysqlAnimate.observe(mysql);


const java = document.querySelector('.progress-java');
const javaAnimate = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('java-animation');
        } else {
            entry.target.classList.remove('java-animation');
        }

    });
});
javaAnimate.observe(java);




const phtml = document.querySelector('.phtml');
const htmlObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('html-animate');
        } else {
            entry.target.classList.remove('html-animate');
        }

    });
});
htmlObserver.observe(phtml);


const pcss = document.querySelector('.pcss');
const cssObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('css-animate');
        } else {
            entry.target.classList.remove('css-animate');
        }

    });
});
cssObserver.observe(pcss);


const pjs = document.querySelector('.pjs');
const jsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('js-animate');
        } else {
            entry.target.classList.remove('js-animate');
        }

    });
});
jsObserver.observe(pjs);


const pphp = document.querySelector('.pphp');
const phpObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('php-animate');
        } else {
            entry.target.classList.remove('php-animate');
        }

    });
});
phpObserver.observe(pphp);


const pmysql = document.querySelector('.pmysql');
const mysqlObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('mysql-animate');
        } else {
            entry.target.classList.remove('mysql-animate');
        }

    });
});
mysqlObserver.observe(pmysql);


const pjava = document.querySelector('.pjava');
const javaObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('java-animate');
        } else {
            entry.target.classList.remove('java-animate');
        }

    });
});
javaObserver.observe(pjava);





   

