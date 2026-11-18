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

Day 3 now we are going to take our multiple page application to one page application 

also we dont want to reload The page  

using event preventDfult to stoping link click and we manualy add our code to conditional rendering

also firtly i build it for two section but what if the section increased in feuture  and used to hide display in css and too much things got messy so my second approch was reusable code for multiple sections also i dont want to write same logic for every sections so i take it
1. Created a reusable function.
2. added event listner to both links 
3. 