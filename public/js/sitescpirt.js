//Navbar
let visibility1 = document.querySelector('.carousel-control-next-icon');
let visibility2 = document.querySelector('.carousel-control-prev-icon');
let carouselHover = document.querySelector('.carousel');

//Best Seller
let displayMe = document.querySelectorAll('.display-me');
let clickMe = document.querySelectorAll('.click-me1');
let temp = 0;

//Products
let clickMe1 = document.querySelectorAll('.product-click');
let changeBorder = document.querySelectorAll('.change-border');
let productImage = document.querySelectorAll('.product-img');

//Navbar
carouselHover.addEventListener('mousemove', () => {
    visibility1.style.visibility = 'visible';
    visibility2.style.visibility = 'visible';
});

carouselHover.addEventListener('mouseleave', () => {
    visibility1.style.visibility = 'hidden';
    visibility2.style.visibility = 'hidden';
});

//Best Seller
for (let i = 0; i < clickMe.length; i++) {
    clickMe[i].addEventListener('click', () => {
        clickMe[i].setAttribute("style", "color: #88c000; border-bottom: 1px solid #88c000;");
        displayMe[i].style.display = 'inline-block';

        if (temp != i) {
            clickMe[temp].removeAttribute("style", "color: #88c000; border-bottom: 1px solid #88c000;");
            displayMe[temp].style.display = 'none';
        }
        temp = i;
    });
}

//Products
for (let i = 0; i < clickMe1.length; i++) {
    clickMe1[i].addEventListener('mousemove', () => {
        changeBorder[i].style.display = 'block';
        productImage[i].style.borderColor = '#88c000';
    });
}

for (let i = 0; i < clickMe1.length; i++) {
    clickMe1[i].addEventListener('mouseleave', () => {
        changeBorder[i].style.display = 'inline-block';
        productImage[i].style.borderColor = '#e7f2cc';
    });
}

//Scroll to top
//Khi người dùng cuộn chuột thì gọi hàm scrollFunction
window.onscroll = function() { scrollFunction() };
// khai báo hàm scrollFunction
function scrollFunction() {
    // Kiểm tra vị trí hiện tại của con trỏ so với nội dung trang
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        //nếu lớn hơn 20px thì hiện button
        document.getElementById("myBtn").style.display = "block";
    } else {
        //nếu nhỏ hơn 20px thì ẩn button
        document.getElementById("myBtn").style.display = "none";
    }
}
//Gan su kien
document.getElementById('myBtn').addEventListener("click", function() {
    //Nếu button được click thì nhảy về đầu trang
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


//Owl Carousel
//Client
$('.own-two').owlCarousel({
        nav: false,
        dots: false,
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    //Lastest News
$('.owl-one').owlCarousel({
        nav: false,
        dots: false,
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    // Best Seller
$('.owl-three').owlCarousel({
    dotsEach: false,
    dots: true,
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        812: {
            items: 1
        },
        1200: {
            items: 4
        }
    }
})

$('.owl-four').owlCarousel({
    dots: true,
    dotsEach: true,
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        812: {
            items: 1
        },
        1200: {
            items: 4
        }
    }
})

$('.owl-five').owlCarousel({
    dots: true,
    loop: true,
    dotsEach: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        812: {
            items: 1
        },
        1200: {
            items: 4
        }
    }
})


$('.owl-six').owlCarousel({
    dots: true,
    dotsEach: true,
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        812: {
            items: 1
        },
        1200: {
            items: 4
        }
    }
})


$('.owl-seven').owlCarousel({
    dots: true,
    dotsEach: true,
    loop: true,
    margin: 10,
    checkVisible: false,
    responsive: {
        0: {
            items: 1
        },
        812: {
            items: 1
        },
        1200: {
            items: 3
        }
    }
})


// Navbar dropdown menu hover
document.addEventListener("DOMContentLoaded", function() {
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {

        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem) {

            everyitem.addEventListener('mouseover', function(e) {

                let el_link = this.querySelector('a[data-bs-toggle]');

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }

            });
            everyitem.addEventListener('mouseleave', function(e) {
                let el_link = this.querySelector('a[data-bs-toggle]');

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }


            })
        });

    }
    // end if innerWidth
});
// DOMContentLoaded  end

//Navbar search
let search = document.querySelector('.fa-search');
let toggle = docyment.querySelector('togglesearch');

function myFunction() {
    if (toggle.style.display === "none") {
        toggle.style.display = "block";
    } else {
        toggle.style.display = "none";
    }
}