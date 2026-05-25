# ✈️ Flight Booking UI 

Hey! Welcome to my Flight Booking frontend project. 

I built this to really push my vanilla JavaScript and CSS skills before diving into backend development. It’s a fully interactive, responsive user interface for booking flights, complete with passenger management and custom CSS animations. 

While it looks like a standard booking site on the outside, there’s actually a lot of DOM manipulation and logic running under the hood!

## 🚀 What it actually does

* **Smart Trip Selection:** You can click between One Way, Round Trip, and Multi-City. The form actively listens and disables the "Return Date" if you select One Way.
* **Passenger Logic (This took some work!):** * I built a custom popup to add passengers dynamically.
  * It capitalizes names automatically via JavaScript.
  * It strictly enforces a business rule, stopping you from booking more than 5 tickets at once.
  * You can delete specific passengers, and the JavaScript arrays/counters update perfectly in the background.
* **Seamless Form Handling:** The main submit button is wired up with JavaScript to intercept the default page refresh, allowing the UI to maintain its state smoothly without glitching out.
* **Sleek UI:** Added a buttery-smooth image carousel for destinations, a typewriter effect for the tagline, and an animated gradient background that uses background-positioning to slide seamlessly.

## 🛠️ The Tech Stack (So Far)

No massive frameworks here, just the core trio:
* **HTML5** * **CSS3** (Flexbox, Keyframes, Custom Gradients)
* **Vanilla JavaScript** (Event Listeners, DOM manipulation, Array methods)

## 🧠 Biggest Learnings from this Project

Building this wasn't just about making it look pretty. I spent a lot of time debugging and learning how things actually connect:
* **The `preventDefault` gotcha:** Learning that a submit button inside a form will stubbornly refresh the whole page unless you explicitly tell JavaScript to stop it.
* **Animating Gradients:** Discovering that CSS can't actually animate smoothly between two gradient colors natively, so I had to use the "giant background" trick and slide the `background-position` instead!
* **State Management:** Tracking variables (like the total passenger count) and making sure the visual UI always perfectly matches what the JavaScript array is doing behind the scenes.

## 🔮 What's Next? (Moving to the Backend)

This is currently a static frontend prototype, but I am actively transitioning into learning the **MERN Stack**. 

The ultimate goal is to wire this frontend up to a real backend. I plan to build a **Node.js/Express** API to handle the flight searches, use **MongoDB** to permanently store the passenger bookings, and eventually rewrite this interface using **React**.

---
### 🏃‍♂️ How to run this locally
Since it's pure frontend, it's super easy to run:
1. Clone the repo.
2. Open the folder.
3. Double-click `index.html` (or use VS Code Live Server). No backend installation required!

---
