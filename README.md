# Student Task Manager System

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