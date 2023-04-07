READMEReferences and Citations

BONUS: FREE HOSTING is done using GitHub.io

It is hosted online at https://krishp520.github.io/a3/


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


The following websites were used for creating wireframes used in PART 2.

Article title - The go-to wireframing tool.
URL - https://wireframe.cc/
Website title - Wireframe.cc
Date accessed - April 6, 2023Article title - draw.io - free flowchart maker and diagrams online
URL - https://app.diagrams.net/
Website title - Flowchart Maker & Online Diagram Software
Date accessed - April 6, 2023

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


List of Assets
Images - krish.jpg, KP1.png, gradient1.png, 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg.

Index.html
Page1.html
Page2.html
styles.css
myjs.js
PART1.pdf
PART2-DESIGN.pdf
README.txt


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The reused code from A2 is 

index.html

<!DOCTYPE html>
<html lang="en">
    <head>
    <link rel="icon" href="KP1.png">
    <link rel="Stylesheet" href="styles.css">
    <script src="./myjs.js"></script>
    <title>Home page</title>
    </head> 

    <nav>
        <div id="navigation">
            <a href="index.html">HOME </a>
            <a href="page1.html">ABOUT ME </a>
            <a href="page2.html">LEARNING RESOURCES</a>
        </div>
    </nav>

    <header>
        <h1>
            KRISH PATEL
        </h1>
    </header>  

    <h2 id="title" ondblclick="resetColor()" onclick="changeColor()">
        PERSONAL WEBSITE OF A 1ST YEAR CS STUDENT
    </h2>
    <body>
        <h3>
            MY JOURNEY
        </h3>
        
        <div class="myself">

        <p>
            A student of computer science and a lover of mathematics with a passion for solving mind games. 
            A graduate from the prestigious Jamnabai Narsee School, aiming to make a mark in the field of technology.
            When I'm not studying, you can find me playing cricket or trying to unravel puzzles.
            An international student migrated from India to complete tertiary education having basic understanding of programming after studying in high school.
        </p>

        <a href="page1.html"><img src="krish.jpg" alt="My Photo" height="346" width="260"></a>

    </div>

        <div class="hobby">
        <h3>
            HOBBIES
        </h3>
        
        <p>
            <ol>
                <li>Playing sports</li>
                <li>Eating food</li>
                <li>Watching cricket</li>
                <li>Photography
                    <ul><li>There is a photo gallery including photos that I took.</li></ul>
                </li>
            </ol>
        </p>
    </div>

    <div class="table">
        <table border="1">
            <div class="heading">
                <th colspan="3">
                    Education
                </th>
            </div>
            <tr>
                <th>Dalhousie University, Halifax, NS</th>
                <th>Studying, Bachelor of Computer Science</th>
                <th> <a href="https://www.dal.ca/">Click here to open Website</a> </th>
            </tr>

            <tr>
                <th>Jamnabai Narsee School, India</th>
                <th>Completed High School</th>
                <th><a href="https://www.jnsgiftcity.org/">Click here to open Website</a></th>
            </tr>
    </table>
    </div>

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Page1.html


<!DOCTYPE html>
<html lang="en">

    <link rel="icon" href="KP1.png">
    <link rel="Stylesheet" href="styles.css">
    <script src="./myjs.js"></script>
    <title>Personal profile</title>

    <nav>
        <div id="navigation">
        <a href="index.html">HOME </a>
        <a href="page1.html">ABOUT ME  </a>
        <a href="page2.html">LEARNING RESOURCES</a>
        </div>
    </nav>

    <header>
        <h1>
            ABOUT ME 
        </h1>
    </header>  

    <body>

    <p>
        A common perpection about a Computer Science student is a geeky, nerdy, antisocial guy, typing code on a dark low-light room with the light just of a computer and RGB lighted keyboard and mouse. 
            That is a stereotype of a programmer usually depicted in movies, well its not completely true but to some extent. 
        <br> Talking about myself, I am not a nerdy guy. Being ironic, I am completely opposite to what a programmer is usually known. I am a person who likes to go out frequently, a fun loving person.
         A person who wants to socialize with people, also wanting to sit quietly in a room and binge watch web-series, playing almost every sport and a foodie, this is what describes me.
        
    </p>
    
    <div id="title">
        <h3><br>
            A DAY IN LIFE OF AN INTERNATIONAL STUDENT STUDYING COMPUTER SCIENCE
        </h3>
    </div>

    <div class="aboutbody">
            <img src="https://www.atlanticuniversities.ca/wp-content/uploads/2021/10/RSDalhousie-Aerial-2021-Aug-01-DJI_0358-1200x800-c-default.jpg" alt="Dalhousie University" >
        
        <p id="p1">
            I am first year student at Dalhousie University, Halifax, NS. My day begins early morning as I am a student, attending classes at university is the primary task. Back in my home country, I was living with my parents. 
            Like a typical Indian family, my mother use to prepare coffee and breakfast for my whole family. Everything being served to me, I was not familiar to how daily chores were done. Here, in a foreign country away from home, one has to do everything on their own. 
            After waking up, I make coffee and breakfast and after completing that I leave for my classes. Earlier I just had to get ready, while I have to prepare everything which made me realise how much time it takes in the morning.
        </p>

        <p id="p2">
            Earlier after coming here, understanding the teaching style and Education system. Now, since I have familiar with it, I am enjoying studying here. 
            When I head onto campus in the morning, there's a choice as to where do I spend the time in-between my timetabled lectures, lab sessions, tutorials. 
            During my free I head to the Library to study and complete some work and assignments which need to be done. 
        </p>

        <p id="p3">
            I have a Tuesday to Friday class schedule, while I work part-time on weekends. On weekdays after school, I go home and prepare dinner, wash utensils, it's a daily routine. 
            After completing these tasks, I feel tired and go to sleep. While Monday is an exception when I go out with friends, go out to dinner and relax. 
            No matter how my day turns out, they all have something in common. Social interaction, whether with classmates, roommates or specific time with friends.
        </p>

        <p id="p4">
            A day in the life of a computer science student is more than just coding at sunset. 
            It's not just sitting at a desk and staring at a computer screen for hours. Every experience is different and worthwhile, whether you prefer to use your free time productively or allow yourself to take breaks, play sports, and explore new places with friends. It all depends upon an individual.
        </p>

            <h3>
                MY CORE-COMPETENCIES
            </h3>
            
            <ul>
                <li>Good Inter-Personal Skills</li>
                <li>Hardworking</li>
                <li>Logical Thinker</li>
                <li>Innate Mathematical Skills</li>
                <li>Reasoning skills</li>
                <li>Patient</li>
                <li>Calm and Composed under pressure </li>
            </ul>
        </div>
    </body>       
</html>


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Page2.html


<!DOCTYPE html>
<html lang="en">

    <link rel="icon" href="KP1.png">
    <link rel="Stylesheet" href="styles.css">
    <script src="./myjs.js"></script>
    <title>My learning resources</title>

    <nav>
        <div id="navigation">
            <a href="index.html">HOME </a>
            <a href="page1.html">ABOUT ME  </a>
            <a href="page2.html">LEARNING RESOURCES</a>
        </div>
    </nav>

    <header>

    <h1>
        MY JOURNEY OF MAKING WEBSITE 
    </h1>
    </header>
    
    <body>
        <p> 
            My journey of this started at my university.I started learning HTML in my course and then I looked online for some learning places. 
            The prerequisite for making a website is having a good understanding of HTML language. Without HTML, making a website is not possible. 
            Nowadays, finding resources for learning computer languages is very easy. These are the places from where I have learnt to make a website.
        </p>

        <ol>
                <li>Classroom learning - Prof. Rina Wehbe</li><br>
                <li>Youtube<br>       
                </li><br>
                <li>HTML Cheatsheet</li><br>
                <li>w3schools</li><br>
        </ol>

        <h3>CONTACT ME</h3>

        <ul>
                <li>Email: ----@gmail.com</a></li><br>
                <li>Facebook: Krish Patel</li><br>
                <li>LinkedIn: Krish Patel</li><br>
        </ul>

        <h3>
            FEEDBACK AND SUGGESTIONS
        </h3>

        <form id="form1"  >
            
            <label for="firstname"> First name : </label>
            <input type="text" id="firstname" name="firstname"placeholder="First Name"> 
            <br>
            
            <label for="lastname"> Last name : </label>
            <input type="text" id="lastname" name="lastname"placeholder="Last Name" >
            <br>
            
            <label for="email">Email-id   : </label>
            <input type="email" id="email" name="email"placeholder="Email"><br>
            
            <p>If you have any feedback or any suggestions on the website, please fill the form below</p>

            <label for="feedback">Feedback : </label>
            <br>
            <input type="text" id="feedback" name="feedback"placeholder="Any feedback?"><br><br>
            
            <label for="suggestions">Suggestions : 
            </label>
            <br>
            <input type="text" id="suggestions" name="suggestions" placeholder="Suggestions"></placeholder><br><br>
            
          </form> 
          
    </body>
    
</html>


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

styles.css


*{
    border: 1%;
}
h3 + p{
    padding-top: 0.1em;
}
#navigation{
    background-color: beige;
    float: right;
    display: flex;
    padding-right: 3em;
    padding-top: 0.4em;
}
#navigation > a{
    padding: 1.8em;
    color: darkslategrey;
    font-size: 14pt;
}
header{
    background-color: beige;
    padding: 0.73em;
    color: green;
    font-family:'Courier New', Courier, monospace;
}
h2{
    color: rgb(83, 185, 83);
    padding: 0.5em 0.5em 0.5em 0.4em;
    font-size: 22pt;
    font-family:'Courier New', Courier, monospace;
}
body{
    background-image: url(gradient1.png);
    background-size: cover;
}
.inspiration > h2{
    background-color: beige;
    padding: 0.72em;
}
h3{
    padding-left: 5em;
    padding-top: 1em;
    padding-bottom: 1em;
    background-color: azure;
    color: teal;
}
.myself{
    display: flex;
    flex-direction: row;
}
img[alt="My Photo"]{
    padding: 1em 1.5em 1em 1.5em;
    border: 1px solid white;
    box-shadow: 0 0 1em rgb(132, 132, 132);
    border-radius: 1em;
}
.myself > p{
    font-size: 15pt;
    margin-left: 1cm;
    padding-top: 8px;
    padding-bottom: 260px;
}
body > p{
    margin-left: 1cm;
}
.hobby > ol > li , .hobby > ol > ul > li{
    font-size: 14pt;
    padding: 2mm;
}
.table{
    padding: 2em;
}
th {
    padding: 1em;
    font-size: 18pt;
    color: green;
}
th ~ th{
    padding: 1em;
    font-size: 15pt;
    color: green;
}
th > a{
    color: green;
}
h4{
    color: teal;
    font-size: 20pt;
    padding: 4mm 0 2mm 0;
}

#title{
    float: center;
    padding-bottom: 1mm;
    background-color: azure;
    color: teal;
}
p{
    font-size: 16pt;
    padding: 3mm 0 3mm 0;
}
.aboutbody > img{
    float: left;
    padding: 1em 1.5em 1em 1.5em;
    border: 1px solid white;
    box-shadow: 0 0 1em rgb(132, 132, 132);
    border-radius: 1em;
    height:400px;
    width:600px;
}
.aboutbody > #p1 , .aboutbody > #p2 , .aboutbody > #p3  {
    padding-left: 17cm;
    padding-bottom: 3mm;
    font-size: 13pt;
    margin-left: 1cm;
}
#p4{
    margin-left: 1cm;
    font-size: 14pt;
}
.aboutbody > ul > li{
    font-size: 14pt;
    padding: 2mm;
    margin-left: 4mm;
}
li  {
    font-size: 14pt;
    padding: 0.5mm;
    margin-left: 4mm;
}
#p3::after{
    content: "\a \a";
    white-space: pre;
}
form{
    padding: 1em;
    margin-left: 5mm;
}
#firstname , #lastname , #email{
    padding: 0.5em;
    margin: 1em;
    border-radius: 4px;
}
#feedback , #suggestions{
    padding: 1em;
    margin: 1em;
    border-radius: 4px;
    width: 250px;
    height: 30px;
}
input{
    padding: 0.5em 0.25em 0.5em 0.5em;
    margin: 1em;
}
#toggleform{
    margin-left: 2.7em;
}
.container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
  
.enhance {
    padding: 1mm;
    transition: transform 0.3s ease-in-out;
    position: relative;
    z-index: 1;
}
  
.enhance:hover {
    transform: scale(1.2);
    filter: brightness(110%);
    z-index: 2;
}



---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


The added code is in the following files:
index.html, part2.html, styles.css

The new file added is myjs.js


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

NEW CODE DOCUMENTATION

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Index.html

<h3>
        PHOTO GALLERY
    </h3>

    <div class="container">
    <img src="1.jpg" alt="1"height="300" width="400"class="enhance">
    <img src="2.jpg" alt="2"height="400" width="300"class="enhance">
    <img src="8.JPG" alt="8"height="225" width="400"class="enhance">
    <img src="3.jpg" alt="3"height="400" width="300"class="enhance">
    <img src="4.jpg" alt="4"height="400" width="300"class="enhance">
    <img src="5.jpg" alt="5"height="400" width="300"class="enhance">
    <img src="6.jpg" alt="6"height="300" width="400"class="enhance">
    <img src="7.jpg" alt="7"height="400" width="300"class="enhance">
    </div>

    - Here in this code, using html I have created a photo gallery which displays 8 images.



---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Part2.html


<button onclick="toggleform()" id="toggleform">Hide Feedback Form</button>

<input onclick="formSubmit()" type="submit" value="Submit">

-Here, I have added two buttons, 'Submit' and 'Hide Feedback Form'.


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

styles.css

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


.container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
  
.enhance {
    padding: 1mm;
    transition: transform 0.3s ease-in-out;
    position: relative;
    z-index: 1;
}
  
.enhance:hover {
    transform: scale(1.2);
    filter: brightness(110%);
    z-index: 2;
}

-This part of code enhances the image by increasing its size 1.2 times, when a cursor is hovering on it.



---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


/* Mobile Layout */
@media screen and (max-width:800px) {
    #navigation>a{
        font-size: 11pt;
        margin-left: 1cm;
    }
    h1{
        padding-left: 20%;
    }
    h2{
        font-size: 14pt;
    }
    h3{
        font-size: 11pt;
        padding-left: 2.5em;
        padding-top: 0.3em;
        padding-bottom: 0.3em;
    }
    img[alt="My Photo"]{
        width: 150px;
        height: 200px;
    }
    .myself>p, li, .hobby > ol > li, p{
        font-size: 11pt;
    }
    .myself > p{
        padding-bottom: 20px;
    }
    tr>th, tr>th>a{
        font-size: 11pt;
    }
    .aboutbody>img{
        height:200px;
        width: 300px;
        float: right;
    }
    .aboutbody > #p1, .aboutbody > #p2, .aboutbody > #p3, .aboutbody > #p4{
        font-size: 11pt;
        padding-left: 0cm;
        padding-bottom: 3mm;
        margin-left: 1cm;
    }
    .aboutbody>ul>li{
        font-size: 11pt;
    }
    #firstname , #lastname , #email, #feedback, #suggestions{
        font-size: 7pt;
    }
}


-Here using media queries, I have created a mobile layout which implements itself when its mobile sized display.






---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Tablet Layout */
@media screen and (min-width:801px) and (max-width:1300px){
    #navigation>a{
        font-size: 13pt;
        padding-top: 1cm;
        margin-left: 1cm;
    }
    h2{
        font-size: 15pt;
    }
    h3{
        font-size: 13pt;
        padding-left: 2.5em;
        padding-top: 0.3em;
        padding-bottom: 0.3em;
    }
    img[alt="My Photo"]{
        width: 200px;
        height: 267px;
    }
    .myself>p, li, .hobby > ol > li, p{
        font-size: 13pt;
    }
    .myself > p{
        padding-bottom: 40px;
    }
    tr>th, tr>th>a{
        font-size: 13pt;
    }
    .aboutbody>img{
        height:300px;
        width:450px;
        float: right;
    }
    .aboutbody > #p1, .aboutbody > #p2, .aboutbody > #p3, .aboutbody > #p4{
        font-size: 13pt;
        padding-left: 0cm;
        padding-bottom: 3mm;
        margin-left: 1cm;
    }
    .aboutbody>ul>li{
        font-size: 13pt;
    }
    #firstname , #lastname , #email, #feedback, #suggestions{
        font-size: 10px;
    }
}

-Here using media queries, I have created a tablet layout which implements itself when its tablet sized display.


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
myjs.js
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function formSubmit(){
    alert("Thank you for your Feedback!");
}
document.getElementById("Form").addEventListener("click", function(event)
{event.preventDefault()});

-This function displays an alert message when submit button is pressed using Event Handler.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


function changeColor(){
    document.getElementById("title").style.color = "green";
  }
  function resetColor(){
    document.getElementById("title").style.color = "teal";
  }

-This changes colour of element named title, when it's pressed and also resets when it is again pressed.


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


  function toggleform() {
    var form1 = document.getElementById("form1");

    if (form1.style.display === "block") 
    {
      form1.style.display = "none";
      document.getElementById('toggleform').innerHTML = "Show Feedback Form";
    } 
    else 
    {
      form1.style.display = "block";
      document.getElementById('toggleform').innerHTML = "Hide Feedback Form";
    }
  }

- This function hides the form when button is pressed and changes text in button to 'Show Feedback Form', else it also resets it back to normal how it was before.





