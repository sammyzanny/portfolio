import selfie from './selfie.JPG'
import orderli from './Orderli.gif'
import icar from './icar.gif'

export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'Sam Zandi',
        headerTagline: [//Line 1 For Header
                        'Hi, I am Sam Zandi, Welcome to my Portfolio!',
                        //Line 2 For Header
                        'Software Developer',
                        //Line 3 For Header
                        'from South Suburbs of Chicago'
    ],
        //Contact Email
        contactEmail:'SamuelCZandi@gmail.com',
        // Add Your About Text Here
        abouttext: "I enjoy being challenged and am especially drawn to knowledge of how things work. This is what initially drew me towards Physics. After graduation I spent some time doing work with children teaching awesome early programming concepts and eventually I also became a Physics tutor. I was able to educate students in Chicago Public Schools who often do not get the opportunity to learn about programming and what it can do for you. This was perfect for me because I loved the work and also started to become more and more interested in programming until I eventually decided to enroll in Flatiron’s Software Engineering Bootcamp. Initially I loved software development because I love to solve problems, but as I learned more and began to create my own applications, I developed a new love for the creative side of software development. As I have grown older, I feel more in touch with my artistic side and I would love to be able to work at a company with the same values. I made some pretty interesting apps in my time at Flatiron. Breakdowns of my apps and demos are available on the apps tab.",
        aboutImage: selfie,
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here 
       projects:[
           {
            id: 1,//DO NOT CHANGE THIS (Please)😅
            title:'Animal Swapping', //Project Title - Add Your Project Title Here
             service:'Web App', // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
             imageSrc:"https://github.com/sammyzanny/animal-swapping-backend/blob/master/Screen%20Recording%202020-05-29%20at%203.41.35%20AM.gif?raw=true",
             //Project URL - Add Your Project Url Here
             url:'https://animal-swapping.herokuapp.com/'
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'In Case of Reign',
                service: 'Web App',
                imageSrc: icar,
                url: 'https://in-case-of-reign.herokuapp.com/'
            },
            { 
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: 'Orderli',
                service: 'Web App',
                imageSrc: orderli,
                url: 'https://github.com/sammyzanny/restaurant-pos-mod2-group-project'
            }

                    /*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'https://github.com/sammyzanny'},
            {
                name: 'Medium',
                url: 'https://medium.com/@samuelczandi'
            },
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/samuel-zandi/'
            }

        ]
    }