# 002772936_Ruchi_Kapadiwala

1. Favicon - 

A favicon (short for "favorites icon") is a small icon that is displayed in the browser's address bar and tab when a website is visited. The favicon is specified using the "favicon" or "icon" link element in the HTML code of a website. The format of the icon file can be either .ico or .png. 

Here is an example of the code to add a favicon to a website:

<link rel="icon" href="Images/FavIcon.png" type="image/png">

---------------------------------------------------------------------------------------------------------------------------------

2. Table -

The HTML <table> tag is used to create a table on a web page. The table is composed of rows (using the <tr> tag) and cells (using the <td> or <th> tags). The <th> tags are used for table headers, and the <td> tags are used for the data cells. You can use <caption> tag to add a caption to the table, <thead> <tbody> <tfoot> to group the header and footer content separately from the body content.

Here is an example of a simple table:

<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
  </tr>
</table>

---------------------------------------------------------------------------------------------------------------------------------

3. Form - 

The HTML <form> tag is used to create a form on a web page. A form is used to collect input from a user, such as text fields, checkboxes, radio buttons, and more. The form is then sent to a server for processing. The form has a action attribute that specifies the server-side script or page that will handle the form data when it is submitted. The method attribute specifies how the form data will be sent to the server, either "get" or "post".

Here is an example of a simple form with a text input field and a submit button:

<form action="submit-form.php" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Submit">
</form>

---------------------------------------------------------------------------------------------------------------------------------

4. Label -

The <label> tag is used to create a label for an input element, and the for attribute is used to associate the label with the input element. The <input> tag is used to create various types of input elements, such as text fields, checkboxes, radio buttons, and more. The type attribute specifies the type of input element. The name attribute specifies the name of the input element, which is used to identify the input when the form is submitted.

---------------------------------------------------------------------------------------------------------------------------------

5. Images -

The <img> tag in HTML is used to embed images in a web page. The src attribute is used to specify the URL of the image file to be embedded. The alt attribute is used to provide alternative text that is displayed if the image cannot be loaded. 

Here is an example of the code to add an image to a website:

<img src="image.jpg" alt="A sample image">

---------------------------------------------------------------------------------------------------------------------------------

6. Hyperlink -

The <a> (anchor) tag in HTML is used to create a hyperlink. The href attribute is used to specify the URL or web address of the link. The text or content between the opening and closing <a> tags will be displayed as the link.

Example: 

<a href="https://www.example.com">Visit our website</a>. 

This will create a link that says "Visit our website" and when clicked it will take you to the website https://www.example.com

---------------------------------------------------------------------------------------------------------------------------------

7. Button -

The <button> tag in HTML is used to create a clickable button on a web page. The text or content between the opening and closing <button> tags will be displayed as the button label. 

Example: <button>Click Me</button>. 
This will create a button that says "Click Me" on the page.


You can also use the type attribute to specify the type of button, such as a "submit" button to submit a form or a "reset" button to clear the form fields. 

Example: <button type="submit">Submit</button>.


You can also use the onclick attribute to specify a JavaScript function to be executed when the button is clicked. 

Example: <button onclick="myFunction()">Click Me</button>