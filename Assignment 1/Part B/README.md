# 002772936_Ruchi_Kapadiwala

1. Audio - 

The <audio> tag in HTML is used to embed audio files in a web page. The src attribute is used to specify the URL of the audio file to be embedded. The controls attribute is used to display the audio controls such as play, pause, volume, etc.

It's also possible to include multiple sources for the audio, in case the browser does not support the first one, using the <source> tag inside the <audio> tag. This way it will try to play the first one that is supported by the browser.

Example:

<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>

---------------------------------------------------------------------------------------------------------------------------------

2. Video -

The <video> tag in HTML is used to embed video files in a web page. The src attribute is used to specify the URL of the video file to be embedded. The controls attribute is used to display the video controls such as play, pause, volume, etc. 

It's also possible to include multiple sources for the video, in case the browser does not support the first one, using the <source> tag inside the <video> tag. This way it will try to play the first one that is supported by the browser. You can also specify the width and height of the video using the width and height attributes respectively, or you can use CSS to control the size of the video.

Example:

<video controls width="600">
  <source src="video.mp4" type="video/mp4">
  <source src="video.ogg" type="video/ogg">
  Your browser does not support the video element.
</video>

---------------------------------------------------------------------------------------------------------------------------------

3. Header -

The <header> tag in HTML is used to define a container for introductory content or a set of navigational links. The <header> element typically contains the site logo, site title, and main navigation. It can also be used to hold other types of content such as a search form, tagline, or banner image.

The <header> tag is typically placed at the top of the HTML document, but it can also be used within an article or section to provide a header for that specific section of the page.

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

4. Footer -

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

5. Section -

The <section> tag in HTML is used to create a semantic container for different sections of content on a web page. It provides a way to group related content together, making it easier for users and search engines to understand the structure of the page.

The <section> tag is a semantic element, which means it gives meaning to the content it contains, but it doesn't affect the layout or presentation of the content.

A <section> tag can contain any type of content, including headings, paragraphs, images, lists, and other HTML elements. It can also have its own id or class attribute, which can be used to style the content with CSS.

Example:

<section>
  <h2>About Us</h2>
  <p>We are a company that specializes in...</p>
  <p>Our mission is to...</p>
</section>

This example will create a section called "About Us" that contains two paragraphs with text.

---------------------------------------------------------------------------------------------------------------------------------

6. Article -

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