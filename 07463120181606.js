var chat = new Chat({

        greeting: [
		
        '<p>Hi. We are about to learn about AI.</p>',
            '<p>This topic is interesting and futuristic. Nice choice!</p>' , 'So here is the story for you ... ','Do you know about <b style="color:#00bcac">Google Duplex</b>?',
            
		
           
          {
            type: 'choose',
            answers: [
			
		
			{
			  'text': 'Yes',
              'path': 'yes1'
			 
            },{
			  'text': 'No',
              'path': 'no1'
			 
            },
			
	
			]
          }
        ],

		
		   yes1: [
          'Great! So Google is a giant company and they host an yearly event called <p style="color:#00bcac;display:inline">Google I/O</p>.' ,
          'But during the Google I/O 2018 , they introduced very interesting application of Artificial Intelligence.',
          'Suddenly the whole audience including non techy people got interested in AI.',
          ,
         


		 
		 
		 
		 
          {
            type: 'choose',
            answers: [{
               'text': 'Wow. What was it about?',
              'path': 'whatwasitabout',
            }]
          }
        ],
		
		
		   no1: [
          'No worries. I will tell you...' , 
          , 
         


		 
		 
		 
		 
          {
            type: 'choose',
            answers: [{
               'text': 'Yes. I wanna know.',
              'path': 'yes1',
            }]
          }
        ],
		
		
		
		   whatwasitabout: [
          'The AI implemented could talk to real human in natural language and do cetain things for you.' , 'Take a good look at the short video from the event.' , 
          , ' <div class="holder"> <div class="des"><p style="font-size:12px;font-family: Montserrat, sans-serif;margin-left:28px;margin-top:8px;color:black">Google Duplex : Intro</p></div><iframe id="testVideo" class="disableRightClick"  width="100%" height="100px" src="https://www.youtube-nocookie.com/embed/lXUQ-DdSDoE?rel=0&amp" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div> ' ,
         


		 
		 
		 
		 
          {
            type: 'choose',
            answers: [{
               'text': 'watched it.',
              'path': 'watched1',
            }]
          }
        ],
		
		
		
        watched1: [
		'Did you see how a robot was able to talk to human in natural language?',
		'Thats considered to be the potential future in coming years.',
		
          {
            type: 'choose',
            answers: [{
			  'text': ' Great',
              'path': 'great1',
			 
            },
		
				
          
			
]
			
			
          }
        ],
		
        great1: [
          'But the real question is ... ',
          'How does this happen ?',
		   'and What is Artificial Intelligence?',
		   'How does it work?',
	
		   
         
          {
            type: 'choose',
            answers: [{
			  'text': ' And what else it can do?',
              'path': 'andwhatelse',
			 
            },
			
         
			
            
			
		
			
			
]
			
			
          }
        ],
			
        andwhatelse: [
          'Exactly !',
         'What else it can do?',
		 'We are about to understand all these concepts today in this conversation.',
		 'You ready for that ?',
		 '<img src="https://gif-free.com/uploads/posts/2018-01/1515782758_angry-birds-movie-happy-excited.gif" style="width:100%;"/>',
		 
          {
            type: 'choose',
            answers: [{
			  'text': 'Yes. Waiting for it!',
              'path': 'yes2',
			 
            },

]
			
			
          }
        ],
		
		  yes2: [
          'Alright .. Lets start with what is AI. ',
           'Let me tell you a story' , 
           'Back in 1950s .. 2 computer scientists Minsky & McCarthy , already defined the definition of AI.' , 
        
          
          {
            type: 'choose',
            answers: [{
			  'text': 'AI is that old?',
              'path': 'aiisthatold',
			 
            },

]
			
			
          }
        ],
		  aiisthatold: [
		
          'Yes. Its an age old concept , ever growing to evolve and someday be at its best.',
          'Majority thinks that AI was discovered recently. But that is not true.',
          'But we will focus at those 2 scientists for now...',
        
          {
            type: 'choose',
            answers: [{
			  'text': 'Sure',
              'path': 'sure1',
			 
            },
]
 }
		  
		  
		  
		  
		  
        ],
		
		  sure1: [
          'So these 2 scientists defined AI as...',
          'Any task performed by a program or a machine that, if a human carried out the same activity, we would say the human had to apply intelligence to accomplish the task..',
          'This was simple but yet defines AI.',
          'Thats why you will always see AI doing things that human intelligence could do .. like planning, learning, reasoning, problem solving, knowledge representation, perception, motion, and manipulation and, to a lesser extent, social intelligence and creativity..',
         
           
          {
            type: 'choose',
            answers: [{
			  'text': 'So, All the AI does it?',
              'path': 'soall',
			 
            },
]
 }
		  
       
        ],
		
		
		
       soall: [
          'There are types of AI',
          'Broadly Speaking , there are 2 types of AI',
          '•Narrow AI & •General AI',
		  
		    {
            type: 'choose',
            answers: [{
			  'text': 'Whats the difference?',
              'path': 'whatsthediff',
			 
            },
]
 }
		  
        ],
		
       whatsthediff: [
          'Before telling that ... Can you guess which one is more advanced?',
          'Its a tricky question. Dont take it easy.',
		  
		       {
            type: 'choose',
            answers: [{
			  'text': 'Narrow AI',
              'path': 'narrowai',
			 
            },{
			  'text': 'General AI',
              'path': 'generalai',
			 
            },
]
 }   
		  
        ],
		
		
		  narrowai: [
          'Majority answers that.',
          'But it is not correct.',
          'General AI is more advanced but yet to become complete reality.',
		  
		       {
            type: 'choose',
            answers: [{
			  'text': 'I see. Tell me more.',
              'path': 'isee',
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		  generalai: [
          'Correct!',
          'You seem to know stuff about AI! Good.',
          'General AI is more advanced but yet to become complete reality.',
		  
		       {
            type: 'choose',
            answers: [{
			  'text': 'I see. Tell me more.',
              'path': 'isee',
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		  isee: [
          'Narrow AI is what we see all around in computers today.',
          'They are systems that have been taught or learned how to carry out specific tasks without being explicitly programmed .',
          'Like Siri , or other virtual assistants.',
		  
		       {
            type: 'choose',
            answers: [{
			  'text': 'Where are narrow ai being used?',
              'path': 'wherenarrow',
			 
            },
]
 }   
		  
        ],
		
		
		
		
		  wherenarrow: [
          'Narrow AI is being used today in many many applications.',
          'They can organize business calenders .',
          'respond to simple customer-service queries.',
          'book a hotel or flag inappropriate contents from web.',
		  
		       {
            type: 'choose',
            answers: [{
			  'text': 'Great uses!',
              'path': 'greatuses',
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		  greatuses: [
          'Not just that...',
          'They can analyse and inspect oil infrastructure .',
          'Detect the tumors in X-rays.',
          'Analyse the visuals coming from drone cameras & so on...',
		  
		       {
            type: 'choose',
            answers: [{
			  'text': 'If narrow is so cool, what does general do?',
              'path': 'soundsbetter',
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		  soundsbetter: [
          'General is a very different kind of AI',
          'Its more advanced and is like the one you see in movies.',
          'Movies like Terminator and Skynet can be an example.',
          'Have a look at these movies posters',
          '<img src="https://images-na.ssl-images-amazon.com/images/I/71dSmJWkHlL._SL1000_.jpg" style="width:50%;" /><img src="https://i.stack.imgur.com/FudFA.png?s=328&g=1" style="width:50%;" />',
		  
		       {
            type: 'choose',
            answers: [{
			  'text': 'Does it exist ?',
              'path': 'doesitexist'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		  doesitexist: [
          'General AI currently is not that in active existence.',
          'Theres an ongoing discussion on how soon it will become reality.',
          
		       {
            type: 'choose',
            answers: [{
			  'text': 'When will it become reality ?',
              'path': 'whenreality'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		  whenreality: [
          'Hard to tell. But Lets see...',
          'They studied how much time it might take for AI to rise actively.',
          
		       {
            type: 'choose',
            answers: [{
			  'text': 'What does that survey conclude?',
              'path': 'whenreality'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		  whenreality: [
          'Why dont you guess...',
          'When AI will be developed actively ?',
          
		       {
            type: 'choose',
            answers: [{
			  'text': 'Nearly in 2025-2030',
              'path': 'survey'
			 
            },{
			  'text': 'In 2040-2050',
              'path': 'survey'
			 
            },{
			  'text': 'In 2070-2080',
              'path': 'survey'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		  survey: [
          'Survey tells that Artificial General Intelligence (AGI) would be developed between 2040 and 2050',
          'They also tell that it will rise to 90 percent by 2075',
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'OK',
              'path': 'OKsurvey'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		
		
		  OKsurvey: [
		  'Lets have an overlook at types of AI' , 
          '<img src="https://engineercalcs.com/wp-content/uploads/2017/09/Progression-of-artificial-intelligence-AI.jpg" style="width:100%;" />',
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'But Hey , We never talked about that SuperAI',
              'path': 'superai'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		
		
		
		  superai: [
		  'SuperAI? ' , 
          'Yes... Lets take it even more further.',
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Sure. Am Ready.',
              'path': 'superai2'
			 
            },
]
 }   
		  
        ],
		
		
		  superai2: [
		  'Take a guess ' , 
          'Is superAI more advanced or inferior to General AI ?',
          'Tell me what do you think..',
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Advanced than General',
              'path': 'superai3'
			 
            },{
			  'text': 'Inferior',
              'path': 'superai3'
			 
            },
]
 }   
		  
        ],
		
		
		
		  superai3: [
		  'SAI is Any intellect that greatly exceeds the cognitive performance of humans in virtually all domains of interest' , 
		  '<img src="https://image.slidesharecdn.com/bots-vs-content-managers-v3recap-161117130844/95/bots-vs-content-managers-making-sense-of-artificial-intelligence-ai-14-638.jpg?cb=1480582409" style="width:100%;" />' , 
          
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Is it coming with General AI?',
              'path': 'superai4'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		  superai4: [
		  'No. It is predicted that , it would take 30 more years after generalAI has been developed.' , 
		  'That makes it long long futuristic concept.' , 
          
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'So who is leading the AI race?',
              'path': 'path5'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		  path5: [
		  'You know that companies like Google,Amazon are investing heavily on AI.' , 
		  'But do you know that countries like china and their companies are too ahead in the game.' , 
          
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Which companies?',
              'path': 'path6'
			 
            },
]
 }   
		  
        ],
		
		
		
		  path6: [
		  'Companies like Alibaba,Baidu,Lenovo are heavily investing on AI in fields like ecommerce & auto-driving.' , 
		  'Entire China is pursuing a three-step plan to turn AI into a core industry for the country.' , 
		  'AI even won chess games against champions of the game!' , 
          
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'How does AI work?',
              'path': 'howwork'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		  howwork: [
		  'That brings us to the second part of our session.' , 
		  'How does AI work?' , 
		  '<img src="https://qph.fs.quoracdn.net/main-qimg-5665fcd258d465c10a2d099887e5afc5.webp" style="width:100%;" />' , 
		  'These are the elements contributing to AI' , 
          
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'What does it mean?',
              'path': 'howworkmean'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		  howworkmean: [
		  'It means that AI takes input from large sources and processes with repect to these aspects.' , 
		  'For example, Using Machine learning : The rate of predicting is improved.' , 
		  'AI consist of multiple subsets , Machine learning(ML) is one of those.' , 
		  'It predicts something again and again till it gets it at its best prediction.' , 
          
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'How does ML works?',
              'path': 'howml'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		  howml: [
		  'Machine learning systems are made up of three major parts, which are:',
		  '•Model, •Parameter, •Learner',
		  '<img src="https://qph.fs.quoracdn.net/main-qimg-3506d169df14ea33cdde5d96f9f50c0e.webp" style="width:100%;" />' , 
		  'Model is the system that makes predictions or identifications.' , 
		  'Parameters are the signals or factors used by the model to form its decisions.' , 
		  'Learner is the system that adjusts the parameters — and in turn the model — by looking at differences in predictions versus actual outcome.' , 
          
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'So these predictions helps AI?',
              'path': 'predichelp'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		  predichelp: [
		  'Exactly !',
		  'AI Learns by such subsets and develops itself.',
		  '<img src="https://qph.fs.quoracdn.net/main-qimg-9e94fe810421d1ad5061071e9016de0e.webp" style="width:100%;" />' , 
		  'Overtime, AI is trained and accuracy increases.' , 
		 
          
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Awesome',
              'path': 'awesomeml'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		  awesomeml: [
		  'So that was how AI works !',
		  'By collecting large datas and using its subsets.',
		 'Did you enjoy the session ?',
          
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Yes. Excellent',
              'path': 'feedbacky'
			 
            },{
			  'text': 'No.',
              'path': 'feedbackn'
			 
            },
]
 }   
		  
        ],
		
		
		
		  feedbackn: [
		  'Please tell us in the feedback form what could have been better.',
		  '<a href="feedback.html">CLICK TO GIVE FEEDBACK</a>',
		 
          
         
          
		    
		  
        ],
		
		
		
		  feedbacky: [
		  'Great. Come back anytime for repeating the course',
		  'Or else browse some more courses about AI in Rocketed app.',
		 
		 
		         {
            type: 'choose',
            answers: [{
			  'text': 'Thank You.',
              'path': 'thanks'
			 
            },
]
 }   
          
         
          
		    
		  
        ],
		
		
		
		
		  thanks: [
		  'You are welcome!',
		   '<img src="https://media.giphy.com/media/3oEduGRYSthHoPSTGU/giphy.gif" style="width:100%;" />' , 
		 
		        
          
         
          
		    
		  
        ],
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
      }, {
        targetNode: '.my_chat'
      });