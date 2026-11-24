# Student Task Manager System
Our Target - Student Task Manager System (Full Stack App)
Frontend → Backend → Auth → Dashboard → Deployment
We Are Going to Develop It Day By Day Learning

## Day 1 – Understanding Websites, GitHub, and Browser Inspect

### 1. Understanding Websites

A website is a structured collection of interlinked web pages, mainly built using HTML, CSS, and JavaScript, and hosted on web servers.

#### What Happens When You Visit a Website?

When you enter a website URL in your browser, the following steps take place:

1. **Entering the URL** – You type a website address into the browser.
2. **Finding the Server (DNS)** – DNS (Domain Name System) converts the domain name into an IP address.
3. **Sending a Request** – The browser sends an HTTP/HTTPS request to the server.
4. **Server Processing** – The server processes the request and sends back the required data.
5. **Rendering the Page** – The browser displays the website using HTML, CSS, and JavaScript.

#### Main Technologies Used in Websites

| Technology | Purpose |
|---|---|
| HTML | Defines the structure and content of a website. |
| CSS | Controls visuals, colors, layouts, fonts, and styling. |
| JavaScript | Adds interactive features such as pop-ups, forms, and live updates. |

### 2. Components of a Website

The main components of a website include:

- **Web Host:** A service that stores website files and makes them accessible on the internet.
- **Address:** The URL or domain name used to access the website.
- **Homepage:** The main page of a website.
- **Design:** The visual appearance and layout of the website.
- **Content:** Text, images, videos, and other information.
- **Navigation Structure:** Links and menus that help users move between pages.

### 3. Types of Websites

#### Static Websites

- Built mainly using HTML, CSS, and JavaScript.
- Content generally remains the same for every visitor.
- Usually do not require server-side processing or a database.
- Fast loading and relatively simple to develop.

#### Dynamic Websites

- Web pages can be generated at runtime.
- Use server-side technologies such as PHP and Node.js.
- Content can change based on user requests and interactions.
- Can connect to databases to store and retrieve information.
- Useful for websites with login systems, dashboards, and real-time updates.

### 4. Understanding Domains

A **domain name** is a unique, human-readable address used to access a website on the internet.

Example: `www.example.com`

A domain consists of different parts:

- **Subdomain:** `www`
- **Domain Name:** `example`
- **Domain Extension (TLD):** `.com`

Behind the scenes, the **Domain Name System (DNS)** translates domain names into IP addresses so that browsers can locate the correct servers.

### 5. Understanding Git and GitHub

GitHub helps developers save code, track changes, collaborate with others, and showcase their projects.

#### Difference Between Git and GitHub

| Git | GitHub |
|---|---|
| A version control tool. | An online platform for hosting Git repositories. |
| Tracks changes in code. | Stores and shares repositories online. |
| Works locally on your computer. | Helps developers collaborate remotely. |

### 6. Basic Terminal Commands

These commands help you navigate and manage files and folders using the terminal.

| Command | Description |
|---|---|
| `pwd` | Displays the current folder location. |
| `ls` | Lists files and folders in the current directory. |
| `ls -a` | Displays all files, including hidden files. |
| `cd folder_name` | Moves into a specific folder. |
| `cd ..` | Moves one folder back (parent directory). |
| `cd ~` | Moves to the home directory. |
| `mkdir folder_name` | Creates a new folder. |

### 7. Basic Git Configuration

Before using Git, configure your username and email address.

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### 8. Basic Git Commands

| Command | Description |
|---|---|
| `git init` | Initializes a new Git repository. |
| `git status` | Shows the current status of your repository. |
| `git add .` | Stages all changes for the next commit. |
| `git commit -m "message"` | Saves staged changes as a commit. |
| `git push` | Uploads local commits to a remote repository. |
| `git pull` | Fetches and integrates changes from a remote repository. |

---

## Day 1 – Learning Summary

Today, I learned about:

- How websites work and how browsers load web pages.
- The roles of HTML, CSS, and JavaScript.
- Website components and types of websites.
- Domains, DNS, and IP addresses.
- The difference between Git and GitHub.
- Basic terminal commands for navigating directories.
- Git configuration and commonly used Git commands.

**Goal:** Build a strong foundation in web development, terminal usage, and GitHub before starting the Student Task Manager System project. 

## Day 2 – Login & Registration Page UI Development

Today, I worked on creating the Login and Registration page for my Student Task Manager System project using HTML and CSS.

### 1. Login Page

Created a simple and responsive login page where users can enter their login details.

**Features:**
- Created a centered login form.
- Added Email and Password input fields.
- Added a Login button.
- Added a link to navigate to the Registration page.
- Used CSS Flexbox for proper alignment and centering.
- Worked on spacing and made the layout responsive for mobile screens.

### 2. Registration Page

Created a registration page where new users can enter their details to register.

**Features:**
- Added Full Name input field.
- Added Email input field.
- Added Password input field.
- Added Confirm Password input field.
- Added a link to navigate back to the Login page.
- Added placeholder areas for displaying error messages.
- Maintained the same design and styling as the Login page.

### 3. Concepts Practiced

- HTML Forms and different input types.
- Using labels for input fields.
- CSS Flexbox for alignment and centering.
- Margin and padding for proper spacing.
- Creating responsive layouts using CSS.
- Connecting multiple HTML pages using anchor tags.
- Writing clean and structured HTML and CSS.

### 4. What I Learned Today

Today, I got more practice with HTML forms and CSS Flexbox. I learned how to create login and registration forms, align elements properly, and connect two HTML pages using navigation links.

I also understood how to maintain a consistent design across multiple pages and make the layout work on mobile screens.

**Day 2 Completed:** Successfully worked on the basic UI of Login and Registration pages for the Student Task Manager System.

## Day 3

### Task Title:
Frontend Navigation and View Switching

### What I Did:
Today, I implemented navigation between the Login and Registration sections of my project. Both sections are placed in the same HTML file, and JavaScript is used to switch between them without reloading the page.

### What I Added:
- Added Login and Registration sections.
- Added navigation links to switch between both sections.
- Used CSS to hide the Registration section initially.
- Used JavaScript to show and hide sections.
- Added click event listeners to handle navigation.

### My Approach:
First, I created both Login and Registration sections in HTML. I used CSS to hide the Registration section initially, so only the Login section appears when the website loads.

Then, I selected the required sections and navigation links using `document.getElementById()`.

After that, I used `addEventListener()` to handle click events. When the Registration link is clicked, the Login section gets hidden and the Registration section becomes visible. Similarly, clicking the Login link switches back to the Login section.

I also used `event.preventDefault()` to prevent the browser from navigating to another page when clicking the links.

### What I Learned:
- DOM manipulation using `document.getElementById()`.
- Event handling using `addEventListener()`.
- How `event.preventDefault()` works.
- How to show and hide elements using `style.display`.
- How to switch between different views using JavaScript.
- How to prevent a full page reload during navigation.
- How CSS and JavaScript work together to control UI visibility.

### Outcome:
Successfully implemented navigation between Login and Registration sections without a full page reload. The navigation works smoothly, and both sections maintain a consistent UI design.

# Day 4

### Task Title:
Client-Side Form Validation

### Concepts Revised:
- JavaScript validation logic
- Regular expressions (basic email validation)
- Event handling
- Conditional statements (`if/else`)
- DOM manipulation
- Error handling patterns

### What I Did:
- Added client-side validation to both login and registration forms.
- Implemented email format validation using a regular expression.
- Added password validation to ensure a minimum length of 6 characters.
- Added confirm password validation to check whether both passwords match.
- Added name validation to ensure the name field is not empty.
- Displayed inline error messages below the respective input fields.
- Used `event.preventDefault()` to prevent form submission when validation fails.
- Used separate submit event listeners for login and registration forms.

### My Approach:
I first selected the required form elements and error message elements using JavaScript DOM methods.

I kept login and registration validation separate because both forms have different validation requirements.

I used a regular expression to validate email formats and conditional statements to check password length, empty fields, and password matching.

I also used a boolean variable (`isValid`) to keep track of the validation status. Before checking the inputs, I cleared the previous error messages so that old errors would not remain visible.

### What I Learned:
- How to validate form inputs using JavaScript.
- How to use regular expressions for basic email validation.
- How to check password length and compare password values.
- How to display error messages dynamically using `textContent`.
- How to use `isValid` to manage multiple validation conditions.
- Why `event.preventDefault()` is important in form validation.
- How to handle different forms using separate event listeners.

### Outcome:
Successfully implemented client-side validation for both login and registration forms with inline error messages and basic input validation.

# Student Task Manager System

## Day 5 – Dashboard UI Layout

Today, I worked on designing the Dashboard UI for my Student Task Manager System using HTML and CSS.

The main goal was to create a clean dashboard layout with sidebar navigation and a main content area.

### 1. Task Description

Created a static dashboard interface to provide a basic structure for the Student Task Manager System.

### 2. Features Implemented

- Created a sidebar navigation.
- Added Dashboard, Tasks, and Logout navigation items.
- Created a welcome section in the main content area.
- Added placeholder statistics cards.
- Used CSS Grid and Flexbox to structure and align the layout.
- Maintained proper spacing and alignment between different sections.
- Organized the layout to make the code easy to understand and maintain.

### 3. Concepts Practiced

- CSS Grid for creating the dashboard layout.
- CSS Flexbox for alignment and positioning.
- Layout design patterns.
- Margin and padding for proper spacing.
- Component structuring.
- Visual hierarchy and content organization.

### 4. What I Learned Today

Today, I learned how to structure a dashboard layout using CSS Grid and Flexbox.

I understood how to divide a webpage into different sections, such as a sidebar and main content area. I also practiced arranging multiple statistics cards and maintaining proper spacing between elements.

I got a better understanding of how dashboards are structured and how to organize HTML and CSS code for better readability.

**Day 5 Completed:** Successfully created a static Dashboard UI with sidebar navigation, a welcome section, and placeholder statistics cards.


## Day 6 – Task List Interface

### Task Overview
Developed the Task List interface for the Student Task Manager System. The main focus was to create a clean and structured layout for displaying tasks.

### What I Did
- Created a Task section in the dashboard.
- Added a Task List heading.
- Created task cards to display task information.
- Added a title and description to each task card.
- Added a status dropdown with Pending and Completed options.
- Added an "Add Task" button.
- Used Flexbox to arrange task card content properly.
- Maintained consistent spacing, colors, and styling.

### My Approach
First, I created the basic structure of the Task section using HTML. Then I divided the task card into separate containers to display the task details and status.

I used Flexbox to align the content and CSS properties like padding, gap, and border-radius to make the cards clean and readable.

I also added different styles for Pending and Completed statuses to make them visually distinguishable.

### What I Learned
- How to structure UI components using HTML.
- How to create reusable card layouts.
- How to use Flexbox for alignment and spacing.
- How to style dropdown elements.
- How to maintain consistency across UI components.

---

## Day 7 – Task Creation Modal

### Task Overview
Implemented a modal interface for adding new tasks. The main focus was to understand modal design patterns, overlay behavior, and event handling.

### What I Did
- Created a modal for adding new tasks.
- Added an overlay behind the modal.
- Added Title and Description input fields.
- Added Save and Cancel buttons.
- Used CSS positioning to center the modal on the screen.
- Used z-index to manage the layering of the overlay and modal.
- Styled the modal with proper spacing, colors, and borders.
- Worked on opening and closing the modal using JavaScript events.

### My Approach
First, I created the modal structure using HTML with a heading, form fields, and buttons.

Then I designed the modal using CSS Flexbox to arrange the elements vertically and maintain proper spacing.

For the overlay, I used `position: fixed` and `inset: 0` so that it covers the entire screen.

I used `z-index` to keep the overlay behind the modal. I also used JavaScript event handling to control the modal visibility through the Add Task and Cancel buttons.

### What I Learned
- How modal components work.
- How to create a full-screen overlay.
- How to use `position: fixed` and `z-index`.
- How to center elements using Flexbox.
- How to handle button click events using JavaScript.
- How to organize and style form elements inside a modal.

---

## Overall Learning

Through Day 6 and Day 7, I learned how to structure task cards and create a modal interface.

I also improved my understanding of Flexbox, CSS positioning, overlay behavior, and JavaScript event handling.

These tasks helped me build the UI components required for the Student Task Manager System and understand how different parts of a dashboard work together.