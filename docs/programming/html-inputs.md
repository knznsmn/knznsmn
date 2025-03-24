# HTML In Depth

## Semantic and Meta Tags

## User Inputs and Forms
### Input types
#### Button
This displays a clickable button and it’s mostly used in HTML forms to activate a script when clicked.
`<input type="button" value="Click me" onclick="msg()" />`

```html
<button onclick="alert('Are you sure you want to continue?')">
	<img src="https://yourserver.com/button_img.jpg" alt="Submit the form" height="64" width="64">
</button>
```

#### Checkbox
Defines a check box allowing single values to be selected or deselected. They are used to let a user select one or more options of a limited number of choices.

```html
<input type="checkbox" id="dog" name="dog" value="Dog">
<label for="dog">I like dogs</label>
<input type="checkbox" id="cat" name="cat" value="Cat">
<label for="cat">I like cats</label>
```

#### Radio
Displays a radio button, allowing only a single value to be selected out of multiple choices. They are normally presented in radio groups, which is a collection of radio buttons describing a set of related options that share the same "name" attribute.

```html
<input type="radio" id="light" name="theme" value="Light">
<label for="light">Light</label>
<input type="radio" id="dark" name="theme" value="Dark">
<label for="dark">Dark</label>
```

#### Submit
Displays a submit button for submitting all values from an HTML form to a form-handler, typically a server. The form-handler is specified in the form’s "action" attribute:

```html
<form action="myserver.com" method="POST">
	  …
	<input type="submit" value="Submit" />
</form>
```

#### Text
Defines a basic single-line text field that a user can enter text into.

```html
<label for="fname">First name:</label>
<input type="text" id="fname" name="fname">
```

#### Password
Defines a single-line text field whose value is obscured, suited for sensitive information like passwords.

```html
<label for="pwd">Password:</label>
<input type="password" id="pwd" name="pwd">
```

#### Date
Displays a control for entering a date with no time (year, month and day).

```html
<label for="dob">Date of birth:</label>
<input type="date" id="dob" name="date of birth">
```

#### Datetime-local
Defines a control for entering a date and time, including the year, month and day, as well as the time in hours and minutes.

```html
<label for="birthdaytime">Birthday (date and time):</label>
<input type="datetime-local" id="birthdaytime" name="birthdaytime">
```

#### Email
Defines a field for an email address. It’s similar to a plain text input, with the addition that it validates automatically when submitted to the server.

```html
<label for="email">Enter your email:</label>
<input type="email" id="email" name="email">
```

#### File
Displays a control that lets the user select and upload a file from their computer. To define the types of files permissible you can use the "accept" attribute. Also, to enable multiple files to be selected, add the "multiple" attribute.

```html
<label for="myfile">Select a file:</label>
<input type="file" id="myfile" name="myfile">
```

#### Hidden
Defines a control that is not displayed but whose value is still submitted to the server.

```html
<input type="hidden" id="custId" name="custId" value="3487">
```

#### Image
Defines an image as a graphical submit button. You should use the “src” attribute to point to the location of your image file.

```html
<input type="image"src="submit_img.png" alt="Submit" width="48" height="48">
```

#### Number
Defines a control for entering a number. You can use attributes to specify restrictions, such as min and max values allowed, number intervals or a default value.

```html
<input type="number" id="quantity" name="quantity" min="1" max="5">
```

#### Range
Displays a range widget for specifying a number between two values. The precise value, however, is not considered important. This is typically represented using a slider or dial control. To define the range of acceptable values, use the “min” and “max” properties.

```html
<label for="volume">Volume:</label>
<input type="range" id="volume" name="volume" min="0" max="10">
```

#### Reset
Displays a button that resets the contents of the form to their default values.

```html
<input type="reset">
```

#### Search
Defines a text field for entering a search query. These are functionally identical to text inputs, but may be styled differently depending on the browser.

```html
<label for="gsearch">Search in Google:</label>
<input type="search" id="gsearch" name="gsearch">
```

#### Time
Displays a control for entering a time value in hours and minutes, with no time zone.

```html
<label for="appt">Select a time:</label>
<input type="time" id="appt" name="appt">
```

#### Tel
Defines a control for entering a telephone number. Browsers that do not support “tel” fall back to standard text input. You can optionally use the "pattern" field to perform validation.

```html
<label for="phone">Enter your phone number:</label>
<input type="tel" id="phone" name="phone" pattern="[+]{1}[0-9]{11,14}">
```

#### Url
Displays a field for entering a text URL. It works similar to a text input, but performs automatic validation before being submitted to the server.

```html
<label for="homepage">Add your homepage:</label>
<input type="url" id="homepage" name="homepage">
```

#### Week
Defines a control for entering a date consisting of a week-year number and a year, with no time zone. Keep in mind that this is a newer type that is not supported by all the browsers.

```html
<label for="week">Select a week:</label>
<input type="week" id="week" name="week">
```

#### Month
Displays a control for entering a month and year, with no time zone. Keep in mind that this is a newer type that is not supported by all the browsers.

```html
<label for="bdaymonth">Birthday (month and year):</label>
<input type="month" id="bdaymonth" name="bdaymonth" min="1930-01" value="2000-01">
```


### Creating a form

```html
<form>
    <div>
        <label for="user_first_name">First Name</label><br>
        <input type="text" id="user_first_name" name="user_first_name">
    </div>
    <div>
        <label for="user_last_name">Last Name</label><br>
        <input type="text" id="user_last_name" name="user_last_name">
    </div>
    <div>
        <label for="user_email"></label>Email Address<br>
        <input type="email" id="user_email" name="user_email">
    </div>
    <div>
        <label for="user_password">Password</label><br>
        <input type="password" id="user_password" name="user_password">
    </div>
    <div>
        <label for="user_confirm_password">Confirm Password</label><br>
        <input type="password" id="user_confirm_password" name="user_confirm_password">
    </div>
    <button type="submit">Sign Up</button>
</form>
```

### Client-side Validation

#### Required attribute

```html
<form method="post">
    <label for="username">Username:</label><br>
    <input type="text" id="username" name="username" required><br>
    <label for="password">Password:</label><br>
    <input type="text" id="password" name="password" required><br>
    <input type="submit" value="Submit">
</form>
```

#### Length of data

```html
<form method="post">
    <label for="username">Username:</label><br>
    <input type="text" id="username" name="username" required minlength="6" maxlength="12"><br>
    <label for="password">Password:</label><br>
    <input type="text" id="password" name="password" required minlength="6" maxlength="12><br>
    <input type="submit" value="Submit">
</form>
```

#### Catching invalid input

```html
<style>
    input:focus:invalid {
        border: 2px solid red;
    }
</style>
```

### Radio Buttons

```html
<h1>Book a Table</h1>
<form method="post">
    <fieldset id="size">
        <label>
            <input type="radio" value="2" name="size"> 2-person table
        </label>
        <label>
            <input type="radio" value="4" name="size" checked> 4-person table
        </label>
        <label>
            <input type="radio" value="6" name="size"> 6-person table
        </label>
    </fieldset>
    <fieldset id="location">
        <label>
            <input type="radio" value="indoors" name="location" checked> Indoors
        </label>
        <label>
            <input type="radio" value="outdoors" name="location"> Outdoors
        </label>
    </fieldset>
    <button type="submit">Book table</button>
</form>
```

### Interactive form elements

**Required**
Denotes a mandatory input that the user can’t leave empty. It can be used with any input type, like password, radio, text and so on.

`<input type="text" id="firstName" name="firstName" required>` 

**Maxlength**
Specifies the maximum length of a text input, in other words, the maximum number of characters that can be entered for a specific field. If provided, it will prevent the user from entering more characters than the limit.

`<input type="text" id="description" name="description" maxlength="50"> `

**Minlength**
Specifies the minimum length of a text input. If set, the input will not accept fewer characters than those specified.

`<input type="password" id="password" name="password" minlength="8"> `

Min and max attributes
Determine the minimum and maximum values allowed for an input field. They are usually applied to numerical text inputs, range inputs or dates.

`<input type="number" id="quantity" name="quantity" min="1" max="10"> `
`<input type="range" id="volume" name="volume" min="1" max="100"> `

**Multiple**
Indicates that the user can enter more than one value in a single input field. This attribute can only be used for email and file input types.

`<input type="file" id="gallery" name="gallery" multiple> `

**Pattern**
Defines a particular pattern that an input field value has to fulfill to be considered valid. This attribute expects a regular expression to specify the pattern. It works with text, date, search, URL, tel, email and password input types. For example, you can restrict phone numbers to be only from the UK.

`<input type="tel" id="phone" name="phone" pattern=”^(?:0|\+?44)(?:\d\s?){9,10}$” > `

#### Using interactive form elements

```html
<h1>Book a Table</h1>
<form method="post">
    <div>
        <label for="booking_date">Booking Date</label>
        <input type="date" name="booking_date" id="booking_date">
    </div>
    <div>
        <label for="booking_people">Number of People</label>
        <input type="range" name="booking_people" id="booking_people" min="1" max="10" value="4" oninput="this.nextElementSibling.value = this.value">
        <output>4</output>
    </div>
    <div>
        <label for="booking_location"></label>
        <input type="text" id="booking_location" name="booking_location" list="locations">
        <datalist id="locations">
            <option value="Downtown"></option>
            <option value="Uptown"></option>
        </datalist>
</div>
    <button type="submit">Book Table</button>
    input:
</form>
```
### Form Submission

**`GET` Method**
```html
<form method="get">
    <label for="username">Username:</label><br>
    <input type="text" id="username" name="username" value="admin"><br>
    <label for="password">Password:</label><br>
    <input type="text" id="password" name="password" value="password"><br>
    <input type="submit" value="Log In">
</form>
```
**`POST` method**
When the form is submitted using the post method, the form data is inserted into the content of the HTTP request. When the submit button is pressed, it will send an HTTP post request with the data contained in the body of the request. The HTTP post method is more secure than the HTTP GET method.

The HTTP POST method is more secure than the HTTP GET method. When a form is submitted using the Post method, the form data is inserted into the content of the HTTP request instead of appended at the end of the URL as is done with the GET method.  This makes it more difficult for a hacker to capture the data that is submitted through the form.

### Submitting a form

#### Action and Method
The `action` attribute specifies the URL where the form data will be sent. The `method` attribute specifies the HTTP method (`GET` or `POST`) to be used when submitting the form data.

The action attribute specifies to which web address the form must be sent. This address is location of server-side code that will process the request.

```html
<form action="/login"> 
</form> 
```

It is important to note that action can be a full URL address such as `https://meta.com`, an absolute path such as `/login`, or a relative path such as `login`.

The absolute path, which starts with a forward slash, will use the base address of the current website, such as `https://meta.com` and combine it with the absolute path. For example, if `/login` is the absolute path, the form will be submitted to `https://meta.com/login`. If the address is `https://meta.com/company-info/` and `/login` is the absolute path, the submission address will still be `https://meta.com/login`.

Similarly, a relative path will combine the current web address with a relative path. For example, if the web browser is currently on the web page `https://meta.com/company-info/`, and the relative path is set to `login`, the form will be submitted to `https://meta.com/company-info/login`.

The form will default to the HTTP GET method when the method attribute is not provided. 

### HTML Form Elements

**`<label>`**
Defines a label for an element. It has an attribute "`for`", the value of which should be equal to the `id` attribute of the element it is associated with. Note how in the example above, the `<label>` is associated with the `<input>` using its `id` value.


**`<select>`**
Defines a drop-down list of options presented to the user. It has a couple of attributes:
- Form, the `id` of the form in which the drop-down appears 
- Name specifies the name of the control 
- Multiple Boolean attribute, when specified, indicates if a user can select multiple options out of the list 
- Required indicates if the user is required to select an option before submitting a form 
- Size mentions the number of visible options in a drop-down list 

The options in a drop-down list are defined using the `<option>` element inside `<select>`. Note the example in the `<option>` description below.

**`<textarea>`**
Defines a multi-line input field, typically to allow the user to input longer textual data. The common attributes for this element include:
- `cols` defines the width of the text area, the default value is `20`
- `form` the form element the text area is associated with
- `maxlength` when specified, limits the maximum number of characters that can be entered in the text area
- `minlength` the minimum number of characters that the user should enter
- `readonly` once set, the user cannot modify the contents
- `rows` defines the number of visible text lines for the text area 

```html
<textarea name="response" rows="10" cols="30" maxlength=”200”>
</textarea> 
```

**`<button>`**
Defines a clickable button. The `onclick` attribute defines the behavior when the button is clicked by the user. For example, in the code below, an alert message is shown to the user.

```html
<button type="button" onclick="alert('You just clicked!')">Click Me! 
</button> 
```

**`<fieldset>`**
Used to group related `input` elements in a form. For instance, elements related to the user’s personal information and educational qualification can be grouped separately in two `fieldset`s.

**`<legend>** `**
Defines a caption for the `<fieldset>` element.

```html
<fieldset> 
  <legend>Personal Info</legend> 
  <label for="fname">First name:</label><br> 
  <input type="text" id="fname" name="fname" value="John"><br> 
  <label for="lname">Last name:</label><br> 
  <input type="text" id="lname" name="lname" value="Doe"><br> 
</fieldset> 

<fieldset> 
  <legend>Qualification</legend> 
  <label for="pdegree">Primary degree:</label><br> 
  <input type="text" id="pdegree" name="degree" value="Masters"><br> 
  <label for="fos">Last name:</label><br> 
  <input type="text" id="fos" name="field" value="Psychology"><br> 
</fieldset> 
```

**`<datalist>`**
Specifies a list of pre-defined options for an `input` element. It differs from `<select>` since the user can still provide textual or numeric input other than the listed options. 
 
```html
<form action="/my_action_page"> 
  <label for="flowers">Favourite flower:</label><br> 
  <input list="flowers" name="flowers"> 
  <datalist id="flowers"> 
    <option value="Rose"> 
    <option value="Lily"> 
    <option value="Tulip"> 
    <option value="Daffodil"> 
    <option value="Orchid"> 
  </datalist> 
  ... 
</form>
```

**`<output>`**
Represents the result of a calculation (typically the output of a script) or the outcome of the user action.

**`<option>`**
Defines an option for the drop-down list. The following code example demonstrates how a simple list can be defined, with the rendered view below the code block.

```html
<label for="course">Choose a course:</label><br> 
<select id="course" name="courselist"> 
  <option value="html">HTML Introduction</option> 
  <option value="css">Styling with CSS</option> 
  <option value="js">JavaScript</option> 
  <option value="react">React Basics</option> 
</select> 
```
By default, the first item in the drop-down list is selected. To define a pre-selected option, add the selected attribute to the option.

**`<optgroup>`**
Defines a group of related options in a drop-down list. Its attribute label names the group. 

## Media Elements

### Video and audio

#### Source and type attributes

**Video**
```html
<video width="640" height="420" controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.ogg" type="video/ogg">
</video>
```

**Audio**
```html
<audio loop controls>
    <source src="music.mp3" type="audio/mpeg">
    <source src="music.ogg" type="audio/ogg">
</audio>
```

**Images*
```html
<figure> 
   <img src="photo.png" width="320" alt="My Profile Photo"> 
   <figcaption>A photo of myself on a beach in 2015</figcaption> 
</figure>
```
The web browser only supports specific file types. These file types are:
- .APNG – Animated Portable Network Graphics
- .AVIF – AV1 Image Format
- .GIF – Graphics Interchange Format
- .JPEG / .JPG – Joint Photographic Expert Group image format
- .PNG – Portable Network Graphics
- .SVG – Scalable Vector Graphics
- .WEBP – Web Picture Format 

## iFrames
The `<iframe>` is the inline frame element that embeds an HTML page into another page.

Apart from the global attributes, which can be a part of the iframe, major element-specific attributes are listed below.

**`allow`**
It specifies what features or permissions are available to the frame, for instance, access to the microphone, camera, other APIs and so on. For example:
- `allow="fullscreen” the fullscreen mode can be activated`
- `allow=“geolocation” lets you access the user’s location`

To specify more than one feature, a semicolon-separator should be used between features. For example, the following would allow using the camera and the microphone:

`<iframe src="https://example.com/…" allow="camera; microphone"> </iframe>`

**`name`**
The name for the `<iframe>`. For example:

`<iframe name = "My Frame" width="400" height="300"></iframe>`

**`height`**
It specifies the height of the frame. The default value is `150`, in terms of CSS pixels.

**`width`**
Specifies the width of the frame, in terms of CSS pixels. The default value is `300` pixels.

**`referrerpolicy`**
A referrer is the HTTP header that lets the page know who is loading it. This attribute indicates which referrer information to send when loading the frame resource. The common values are:
- `no-referrer` The referrer header will not be sent.
- `origin` The referrer will be limited to the origin of the referring page
- `strict-origin` The origin of the document is sent as the referrer only when using the same protocol security level (HTTPS to HTTPS) 

**`sandbox`**
To enforce greater security, a sandbox applies extra restrictions to the content in the `<iframe>`. To lift particular restrictions, an attribute value (permission token) is used. The common permission tokens are listed below:
- `allow-downloads` Allows the user to download an item
- `allow-forms` Allows the user to submit forms
- `allow-modals` The resource can open modal windows
- `allow-orientation-lock` Lets the resource lock the screen orientation
- `allow-popups` Allows popups to open
- `allow-presentation` Allows a presentation session to start
- `allow-scripts` Lets the resource run scripts without creating popup windows

When the value of this attribute is empty, all restrictions are applied. To apply more than one permission, use a space-separated list.

**`src`**
The URL of the page to embed in the `<iframe>`. Using the value about:blank would embed an empty page.

**`srcdoc`**
Let's you specify the inline HTML to embed in the `<iframe>`. When defined, this attribute would override the src attribute.  

**`loading`**
This attribute let's you specify if the iframe should be loaded immediately when the web page loads (`eager`) or loaded when iframe is displayed in the browser (`lazy`). This allows you to defer loading iframe content if it is further down your web page and outside of the display area when the page is initially loaded.

**`title`**
This attribute let's you add a description to the iframe for accessibility purposes. The value of this attribute should accurately describe the iframe's content.

## Canvas
The `<canvas>` element is used to draw graphics, on the fly, via scripting (usually JavaScript). The `<canvas>` element is only a container for graphics. You must use a script to actually draw the graphics.

##
Additional resources

https://html.com/media/
https://studio.support.brightcove.com/publish/choosing-correct-embed-code.html
https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML
https://www.educba.com/iframes-in-html/
https://www.tutorialrepublic.com/html-tutorial/html5-canvas.php
https://html.spec.whatwg.org/multipage/media.html
