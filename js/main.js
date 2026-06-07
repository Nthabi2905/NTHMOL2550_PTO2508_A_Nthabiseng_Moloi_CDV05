/**
 * Portfolio site interactions
 * Handles mobile navigation, dynamic footer year, and contact form feedback.
 */

(function () {
  "use strict";

  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  const navLinks = document.querySelectorAll(".site-nav a");
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  const yearElement = document.getElementById("year");

  /**
   * Toggle the mobile navigation menu open/closed state.
   */
  function toggleNavigation() {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isExpanded));
    siteNav.classList.toggle("is-open", !isExpanded);
  }

  /**
   * Close the mobile menu after a navigation link is clicked.
   */
  function closeNavigation() {
    navToggle.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
  }

  /**
   * Display a status message below the contact form.
   * @param {string} message - Text to show the user
   * @param {"success"|"error"|""} type - Visual style for the message
   */
  function showFormStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = "form-status";

    if (type) {
      formStatus.classList.add(type);
    }
  }

  /**
   * Validate and handle contact form submission.
   * This demo does not send data to a server.
   */
  function handleFormSubmit(event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      showFormStatus("Please complete all required fields with valid information.", "error");
      contactForm.reportValidity();
      return;
    }

    contactForm.reset();
    showFormStatus("Thank you for your message. I will get back to you soon.", "success");
  }

  // Event listeners
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", toggleNavigation);
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", closeNavigation);
  });

  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmit);
  }

  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
})();
