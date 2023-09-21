(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const effectClasses = [
          'slideInLeft',
          'fadeInDown',
          'slideInRight',
          'bounceIn',
          'zoomInDown',
          'rotateIn',
          'zoomIn',
          'fadeInRight',
          'fadeInLeft',
          'zoomInUp',
          'jackInTheBox'
        ];
        if (entry.isIntersecting) {
        const matchingClass = entry.target.classList.value.split(' ')
          .find(className => effectClasses.includes(className));
        if (matchingClass) {
          entry.target.classList.add('animate__animated', `animate__${matchingClass}`);
        }
        observer.unobserve(entry.target);
        }
      });
    });

    const count = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const effectClasses = [
          'year-count',
          'happy-patients',
          'experts-doctors',
          'hospital-room',
          'award-winner',
          'appointment',
          'primary-care',
          'donate',
          'pay-bill',
          'emergency'
        ];
        if (entry.isIntersecting) {
          const matchingClass = entry.target.classList.value.split(' ')
            .find(className => effectClasses.includes(className));
          if (matchingClass) {
            let website = new CountUp('year-count', 0, 15, 0, 1);
            website.start();
            let happyPatients = new CountUp('happy-patients', 0, 150, 0, 4);
            happyPatients.start();
            let expertsDoctors = new CountUp('experts-doctors', 0, 120, 0, 4);
            expertsDoctors.start();
            let hospitalRoom = new CountUp('hospital-room', 0, 30, 0, 4);
            hospitalRoom.start();
            let awardWinner = new CountUp('award-winner', 0, 70, 0, 4);
            awardWinner.start();
            let appointment = new CountUp('appointment', 0, 500, 0, 4);
            appointment.start();
            let primaryCare = new CountUp('year-experince', 0, 15, 0, 4);
            primaryCare.start();
            let donate = new CountUp('donate', 0, 60, 0, 4);
            donate.start();
            let payBill = new CountUp('pay-bill', 0, 29, 0, 4);
            payBill.start();
            let emergency = new CountUp('emergency', 0, 35, 0, 4);
            emergency.start();
    
            // تعطيل المراقبة
            count.unobserve(entry.target);
          }
        }
      });
    }, { once: true }); // إضافة خاصية once: true
    
    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach(element => {
      observer.observe(element); 
    });

    const countElements = document.querySelectorAll('.count');
    countElements.forEach(element => {
      count.observe(element)
    })
})();


var input = document.querySelector("#phone");
window.intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: function(callback) {
    fetch("https://ipapi.co/json")
      .then(function(res) { return res.json(); })
      .then(function(data) { callback(data.country_code); })
      .catch(function() { callback("us"); });
  },
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.0/js/utils.js" // just for formatting/placeholders etc
});

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }

};

let scrollpos = window.scrollY
const header = document.getElementById("navbar")
const header_height = header.offsetHeight
const logo = document.getElementById("logo")

const add_class_on_scroll = () => {
  header.classList.add("fade-in", "fixed-top")
  logo.setAttribute('src', './images/icons/Wadee-logo.png')
}

const remove_class_on_scroll = () => {
  header.classList.remove("fade-in", "fixed-top")
  logo.setAttribute('src', './images/icons/header-logo.png')
  
}

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) { add_class_on_scroll() }
  else { remove_class_on_scroll() }

})


function myFunction() {

  document.addEventListener("click", function (event) {
   
    if (event.target.id === "send-it" || event.target.id === "send-img") {
      var chatInput = document.getElementById("chat-input");
      
      if (chatInput.value !== "") {
        var phoneNumber = document.getElementById("get-number").textContent,
          message = chatInput.value,
          whatsappWebUrl = "https://web.whatsapp.com/send",
          contact = phoneNumber,
          text = "&text=" + message;
        
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          whatsappWebUrl = "whatsapp://send";
        }
  
        var whatsappUrl = whatsappWebUrl + "?phone=+905524200400" + contact + text;
        window.open(whatsappUrl, "_blank");
      }
    } else if (event.target.classList.contains("informasi")) {
      var phoneNumberElement = event.target.querySelector(".my-number"),
          chatNamaElement = event.target.querySelector(".info-chat .chat-nama"),
          chatLabelElement = event.target.querySelector(".info-chat .chat-label");
  
      document.getElementById("get-number").textContent = phoneNumberElement.textContent;
      document.querySelector(".start-chat, .get-new").classList.add("show");
      document.querySelector(".start-chat, .get-new").classList.remove("hide");
      document.querySelector(".home-chat, .head-home").classList.add("hide");
      document.querySelector(".home-chat, .head-home").classList.remove("show");
      document.getElementById("get-nama").textContent = chatNamaElement.textContent;
      document.getElementById("get-label").textContent = chatLabelElement.textContent;
    } else if (event.target.classList.contains("close-chat")) {
      document.getElementById("whatsapp-chat").classList.add("hide");
      document.getElementById("whatsapp-chat").classList.remove("show");
    } else if (event.target.classList.contains("blantershow-chat")) {
      document.getElementById("whatsapp-chat").classList.add("show");
      document.getElementById("whatsapp-chat").classList.remove("hide");
    }
  });
  
}

document.getElementById("year").innerHTML = new Date().getFullYear();