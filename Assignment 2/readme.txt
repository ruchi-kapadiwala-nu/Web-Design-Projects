# 002772936_Ruchi_Kapadiwala

Created a professional portfolio website with 4 sections: Home, Projects, Skills, and Contact

Tags used: 

1. Favicon - 

A favicon (short for "favorites icon") is a small icon that is displayed in the browser's address bar and tab when a website is visited. The favicon is specified using the "favicon" or "icon" link element in the HTML code of a website. The format of the icon file can be either .ico or .png. 

Here is an example of the code to add a favicon to a website:

<link rel="icon" href="Images/FavIcon.png" type="image/png">

---------------------------------------------------------------------------------------------------------------------------------

2. Header -

The <header> tag in HTML is used to define a container for introductory content or a set of navigational links. The <header> element typically contains the site logo, site title, and main navigation. It can also be used to hold other types of content such as a search form, tagline, or banner image. The <header> tag is typically placed at the top of the HTML document, but it can also be used within an article or section to provide a header for that specific section of the page.

Example:

<header>
  <h1>Welcome to My Website</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>

---------------------------------------------------------------------------------------------------------------------------------

3. Footer -

The <footer> tag in HTML is used to define the footer for a document or section. It typically contains information about the author, copyright information, and links to related documents. The <footer> tag can also be used to hold other types of content such as site navigation, address, and contact information.

The <footer> tag is typically placed at the bottom of the HTML document, but it can also be used within an article or section to provide a footer for that specific section of the page.

Example:

<footer>
  <p>Copyright © 2023 My Website</p>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</footer>

This example will create a footer that contains a copyright notice "Copyright © 2023 My Website" and a navigation bar with 3 links "Home", "About", "Contact"

---------------------------------------------------------------------------------------------------------------------------------

4. Article -

In HTML, the <article> tag represents a self-contained composition in a document, such as a forum post, a magazine or newspaper article, or a blog entry. The content inside the <article> element should make sense on its own and be able to be independently distributed or syndicated. The <article> tag is often used in conjunction with other tags, such as <header>, <footer>, and <section>, to create a complete and structured piece of content.

Example: 

<article>
  <header>
    <h1>Article Title</h1>
    <p>Written by John Doe on January 19, 2023</p>
  </header>
  <p>This is the main content of the article. It can include text, images, and other media.</p>
  <section>
    <h2>Subsection 1</h2>
    <p>Additional information related to the main content.</p>
  </section>
  <section>
    <h2>Subsection 2</h2>
    <p>More additional information related to the main content.</p>
  </section>
  <footer>
    <p>Copyright 2023 by Example.com</p>
  </footer>
</article>

In this example, the <article> tag is used to enclose the entire article, which includes a header with a title and author information, the main content, and two sections for additional information, and a footer with the copyright information. The <header> and <footer> tags are used to mark up the header and footer of the article respectively, and the <section> tags are used to group related content within the article.

---------------------------------------------------------------------------------------------------------------------------------

5. Form - 

The HTML <form> tag is used to create a form on a web page. A form is used to collect input from a user, such as text fields, checkboxes, radio buttons, and more. The form is then sent to a server for processing. The form has a action attribute that specifies the server-side script or page that will handle the form data when it is submitted. The method attribute specifies how the form data will be sent to the server, either "get" or "post".

Here is an example of a simple form with a text input field and a submit button:

<form action="submit-form.php" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Submit">
</form>

---------------------------------------------------------------------------------------------------------------------------------

6. Input -

The <input> tag in HTML is used to create various types of input fields, such as text fields, radio buttons, checkboxes, and more. The type attribute is used to specify the type of input field that should be created. Here are a few examples of how to use the <input> tag:

To create a text field: <input type="text">
To create a password field: <input type="password">
To create a checkbox: <input type="checkbox">
To create a radio button: <input type="radio">
To create a submit button: <input type="submit">

---------------------------------------------------------------------------------------------------------------------------------

7. Images -

The <img> tag in HTML is used to embed images in a web page. The src attribute is used to specify the URL of the image file to be embedded. The alt attribute is used to provide alternative text that is displayed if the image cannot be loaded. 

Here is an example of the code to add an image to a website:

<img src="image.jpg" alt="A sample image">

---------------------------------------------------------------------------------------------------------------------------------

8. Nav -

The <nav> tag in HTML is used to create a section of a webpage that contains navigation links. This tag is used to group together links that are used to navigate through the website. It's a semantic tag that helps to identify the main navigation block of the website, and it's commonly used to create site's main menu or a table of contents. The links within the <nav> tag can be created using the <a> tag, which stands for anchor. The <a> tag is used to create a hyperlink, which allows the user to navigate to another webpage or a specific location within the same webpage. An <a> tag must have a href attribute that specifies the destination of the link, it can be a relative or an absolute URL.

Here's an example of how to use the <nav> and <a> tags to create a navigation menu:

<nav>
    <a href="home.html">Home</a>
    <a href="about.html">About</a>
    <a href="services.html">Services</a>
    <a href="contact.html">Contact</a>
</nav>

---------------------------------------------------------------------------------------------------------------------------------

9. ul/li -

The <ul> tag in HTML is used to create an unordered list of items. It acts as a container for <li> (list item) elements, which define the individual items in the list. The text content of each <li> element is displayed as the item's text. It can be styled using CSS and can have class and id attributes for applying custom styling or javascript actions.

Here's an example of how to use the <ul> and <li> tags to create an unordered list:

<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

---------------------------------------------------------------------------------------------------------------------------------

10. Button -

The <button> tag in HTML is used to create a clickable button on a web page. The text or content between the opening and closing <button> tags will be displayed as the button label. 

Example: <button>Click Me</button>. 
This will create a button that says "Click Me" on the page.


You can also use the type attribute to specify the type of button, such as a "submit" button to submit a form or a "reset" button to clear the form fields. 

Example: <button type="submit">Submit</button>.


You can also use the onclick attribute to specify a JavaScript function to be executed when the button is clicked. 

Example: <button onclick="myFunction()">Click Me</button>

---------------------------------------------------------------------------------------------------------------------------------

Points covered in the application:

• Used an external CSS file
• Utilized the float and overflow properties for layout
• Implemented a column layout structure
• Used absolute and relative positioning as necessary
• Included tel and mailto options for contact information
• Applied CSS selectors to style elements
• Included an image gallery for the skills section
• Utilized HTML and HTML5 elements throughout the website
• Made the website responsive (Supports all device widths)

---------------------------------------------------------------------------------------------------------------------------------

Note:
1. Website not only supports these device widths like IPad(768px) and Smartphones (350 – 365px) but also supports all other device dimensions.
2. Multiple UI manipulations for device-specific dimensions.
3. Page-level CSS files are provided instead of maintaining a single external file.
4. Used ARIA (Accessible Rich Internet Applications) tags wherever necessary to make the application accessible to users with disabilities who use assistive technologies (AT).
5. UI rich.