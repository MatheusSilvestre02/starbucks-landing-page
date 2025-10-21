// Rewards tabs functionality
document.addEventListener("DOMContentLoaded", () => {
  const rewardTabs = document.querySelectorAll(".reward-tab")
  const rewardItems = document.querySelectorAll(".reward-item")

  rewardTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const stars = this.getAttribute("data-stars")

      // Remove active class from all tabs
      rewardTabs.forEach((t) => t.classList.remove("active"))

      // Add active class to clicked tab
      this.classList.add("active")

      // Hide all reward items
      rewardItems.forEach((item) => item.classList.remove("active"))

      // Show corresponding reward item
      const activeItem = document.querySelector(`.reward-item[data-stars="${stars}"]`)
      if (activeItem) {
        activeItem.classList.add("active")
      }
    })
  })

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add scroll animation for sections
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe all sections
  document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(20px)"
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(section)
  })
})
