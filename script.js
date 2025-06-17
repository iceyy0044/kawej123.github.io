document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  const animatedElements = document.querySelectorAll(".fade-in, .slide-up, .slide-left, .slide-right")
  animatedElements.forEach((el) => observer.observe(el))

  const header = document.querySelector("header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  const menuItems = document.querySelectorAll(".menu-item")
  menuItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`
  })

  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const submitBtn = this.querySelector(".btn")
      const originalText = submitBtn.textContent

      submitBtn.textContent = "Odesilá sa..."
      submitBtn.style.background = "#ccc"
      submitBtn.disabled = true

      setTimeout(() => {
        alert("Ďakujeme za vašu správu! Odpovieme vám čo najskôr.")
        this.reset()
        submitBtn.textContent = originalText
        submitBtn.style.background = ""
        submitBtn.disabled = false
      }, 2000)
    })
  }

  const navLinks = document.querySelectorAll("nav a")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault()
        const targetId = this.getAttribute("href").substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    })
  })

  const features = document.querySelectorAll(".feature")
  features.forEach((feature) => {
    feature.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-15px) scale(1.05)"
    })

    feature.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(-15px)"
    })
  })

  let ticking = false
  function updateParallax() {
    const scrolled = window.pageYOffset
    const parallaxElements = document.querySelectorAll(".hero, .about, .menu")

    parallaxElements.forEach((element) => {
      const speed = 0.5
      const yPos = -(scrolled * speed)
      element.style.backgroundPosition = `center ${yPos}px`
    })

    ticking = false
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax)
      ticking = true
    }
  })

  const testimonials = document.querySelectorAll(".testimonial")
  testimonials.forEach((testimonial, index) => {
    testimonial.addEventListener("mouseenter", () => {
      testimonials.forEach((t, i) => {
        if (i !== index) {
          t.style.opacity = "0.7"
          t.style.transform = "scale(0.95)"
        }
      })
    })

    testimonial.addEventListener("mouseleave", () => {
      testimonials.forEach((t) => {
        t.style.opacity = "1"
        t.style.transform = "scale(1)"
      })
    })
  })

  const buttons = document.querySelectorAll(".btn")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px) scale(1.05)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(-3px) scale(1)"
    })
  })

  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "0"
      this.style.transition = "opacity 0.5s ease"
      setTimeout(() => {
        this.style.opacity = "1"
      }, 100)
    })
  })

  const priceElements = document.querySelectorAll(".price")
  priceElements.forEach((price) => {
    price.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.2)"
      this.style.color = "var(--primary-color)"
    })

    price.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)"
      this.style.color = "var(--accent-color)"
    })
  })
})
