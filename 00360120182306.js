var chat = new Chat({

        greeting: [
		
      '<a onclick="bookpdf()" href="https://docs.google.com/gview?url=http://www.roblewis.com/wp-content/uploads/Think-And-Grow-Rich_2008-10.pdf" target="bookpdfframe">Hello</a> , <b><span "display:inline" id="displayname"></span></b>... Are you ready to read the book?' , 
        
           
          {
            type: 'choose',
            answers: [
			
		
			{
			  'text': 'Yes.',
              'path': 'ready'
			 
            },
			
	
			]
          }
        ],

		
		   ready: [
          'Instead of talking , Lets watch a video.' ,
          
          {
            type: 'choose',
            answers: [{
               'text': 'Watched it.',
              'path': 'forgood',
            }]
          }
        ],
		
		
		   forgood: [
          'Now since we are studying about Physical world, we must know about force.' ,
		  '<img onclick="welcome();window.assist.location.href=this.src;"  style="width:100%;" src="https://www.tutorialspoint.com/physics_part1/images/force.jpg"  onclick="welcome();window.assist.location.href=this.src;"/>',
		  'Motion, generated in an object, is because of an action of a force.',
		  'Force is something that causes a change in the motion of an object.',
         
         


		 
		 
		 
		 
          {
            type: 'choose',
            answers: [{
               'text': 'So how many forces there would be?',
              'path': 'knowmusclename',
            }]
          }
        ],
		
		
		
		   knowmusclename: [
          'There can be many forces, but there are four <b>fundamental forces.</b>' , 
		   '•Electromagnetic force <br/> •Weak nuclear force <br/> •Strong nuclear force <br/> •Gravitational force' , 
		   '<img onclick="welcome();window.assist.location.href=this.src;"  style="width:100%;" src="http://en.es-static.us/upl/2016/08/Four_Forces-e1471344564203.jpg" />',
		 
		  
          {
            type: 'choose',
            answers: [{
               'text': 'What does the fundamental means in here?',
              'path': 'wantsee',
            }]
          }
        ],
		
		
		
        wantsee: [
		'The fundamental forces are the most basic force.',
		'Other forces are derived forces and are innumerable in number. Some discovered , Some un-discovered ;)',
		'<img onclick="welcome();window.assist.location.href=this.src;"  style="width:100%;" src="https://image.slidesharecdn.com/the5thforce-150722051052-lva1-app6892/95/sk-the-5th-force-3-638.jpg?cb=1437554572" />',
		
          {
            type: 'choose',
            answers: [{
			  'text': 'What about 5th force?',
              'path': 'saw',
			 
            },
		
				
          
			
]
			
			
          }
        ],
		
        saw: [
          '<b>The 5th force ?</b> , Yes it might exists.',
		  'Until today, nobody has conducted such a fifth force. But ... ', 
          'We know , It is being currently researched..',
	'<img onclick="welcome();window.assist.location.href=this.src;"  style="width:100%;" src="https://img.purch.com/rc/300x200/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA1Ny81Njcvb3JpZ2luYWwvc3BpcmFsLWdhbGF4eS1kYXJrLW1hdHRlci5qcGc=" />',
	'Physicist at Hungarian Academy has found "protophobic X boson" — a strange particle whose existence could indicate a fifth force of nature.',
		
		   
         
          {
            type: 'choose',
            answers: [{
			  'text': 'Wow! So are we going to see discovery of 5th force anytime soon?',
              'path': 'wtypes',
			 
            }
			
			
]
			
			
          }
        ],
			
        wtypes: [
          'The 5th force, is still in research phase.',
         'For decades, we have known of four fundamental forces.',
		 '	But if we do discover it , then it will completely change our understanding of the universe, with consequences for the unification of forces and dark matter.',
		 '<img onclick="welcome();window.assist.location.href=this.src;"  style="width:100%;" src="http://en.es-static.us/upl/2016/08/Four_Forces-e1471344564203.jpg" />',
		 'But we will focus at those 4 basic forces for now!', 
		 'We will keep you updated in our app when 5th force is revealed. Isnt it exciting?', 
		 
		 
		 
          {
            type: 'choose',
            answers: [{
			  'text': 'Its exciting more than a movie!',
              'path': 'deeplook',
			 
            },{
			  'text': 'Yes. Indeed.',
              'path': 'deeplook',
			 
            },,{
			  'text': 'No.',
              'path': 'deeplook',
			 
            },

]
			
			
          }
        ],
		
		  deeplook: [
         '<div class="holder"> <div class="bar2"><p style="font-size:12px;font-family: Montserrat, sans-serif;margin-left:28px;margin-top:8px;color:black">The physical forces (3Mins)</p></div><iframe class="disableRightClick" width="100%" height="400" src="https://www.youtube-nocookie.com/embed/dTgMb2HEN1E?rel=0&amp&start=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div> ',
		 'We will let you have a look at some other forces too in the video.',
           
        
          
          {
            type: 'choose',
            answers: [{
			  'text': 'watched it',
              'path': 'cardiacfunc',
			 
            }

]
			
			
          }
        ],
		  cardiacfunc: [
		
          'That was about forces. Forces is important topic of physics.',
		  'Physics is a fundamental science concerned with understanding the natural phenomena that occur in our universe.',
		 'It has many branches such as Mechanics, Electromagnetism, Thermodynamics, Modem Physics, etc. Between 1600 and 1900, three broad areas were developed,which is together called Classical Physics',
        
          {
            type: 'choose',
            answers: [{
			  'text': 'Which areas?',
              'path': 'Ok1',
			 
            },
]
 }
		  
		  
		  
		  
		  
        ],
		
		  Ok1: [
		  'These three areas of study are classical mechanics, thermodynamics and electromagnetism.',
		  'But by 1905 it became apparent that classical ideas failed to explain several phenomena. ',
   
		    '<img onclick="welcome();window.assist.location.href=this.src;"  style="width:100%;" src="https://files.askiitians.com/cdn1/images/2017812-183547733-8519-classification-in-physics.jpg" />',
		
          {
            type: 'choose',
            answers: [{
			  'text': 'So what happened then ?',
              'path': 'cquiz1',
			 
            }
]
 }
		  
       
        ],
		
		
		
       cquiz1: [
          'Then some new theories were developed in what is called <b>Modem Physics</b> such as Special Relativity, Quantum Mechanics, etc. ',
          'Sure there are ups and downs in the field of physics. But physics is absolutely BIG.',
          '<img onclick="welcome();window.assist.location.href=this.src;"  style="width:100%;" src="http://www.aribertmunzner.com/media/photologue/photos/cache/Micro-macro-17_display.jpg" />',
		 
		
		  
		    {
            type: 'choose',
            answers: [{
			  'text': 'How big is physics? ',
              'path': 'whatsthediff',
			 
            },{
			  'text': 'What do you mean?',
              'path': 'whatsthediff',
			 
            },
]
 }
		  
        ],
		
		
      
		
       whatsthediff: [
          'Physics deals with the macroscopic world like galaxies and universe ',
		  'as well as microscopic world like nucleus of an atom and fundamental particles like electrons, protons, neutrons etc.', 
		  'The scope of Physics is very broad and covers a wide range of magnitude of physical quantities such as length, mass, time, energy, etc.',
          '<img onclick="welcome();window.assist.location.href=this.src;"  style="width:100%;" src="http://www.ucl.ac.uk/ioe/courses/images/pgce-physics-with-mathematics" />' , 
		  'Physics is a very significant branch of science which plays a crucial role in understanding the developments pertaining to the other branches of science such as Mathematics, Biology etc.',
           
		       {
            type: 'choose',
            answers: [{
			  'text': 'How is Physics related to Mathematics?',
              'path': 'nexttype',
			 
            }
]
 }   
		  
        ],
		
		
		  nexttype: [
          'Meaningful interpretation of Mathematics becomes Physics.',
          'Study of physical variables led to the idea of differentiation, integration and differential equation.',
          'Tell me , you never knew that actually <b>physics</b> led to idea of integration,differentiation. Right? ',
		 '<img onclick="welcome();window.assist.location.href=this.src;"  style="width:100%;" src="https://media3.giphy.com/media/yq5CgwSvwhquY/giphy.gif" />' , 
		 
		       {
            type: 'choose',
            answers: [{
			  'text': 'Haha. What about Biology?',
              'path': 'overtype',
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		  overtype: [
          'The conceptual study of pressure and its measurement has helped us to know blood pressure and hence the functioning of heart.',
	
          ' Invention of X-rays developed the field of diagnosis.',
		   '<img onclick="welcome();window.assist.location.href=this.src;"  style="width:100%;" src="https://www.radiologyinfo.org/gallery-items/images/bone-xray-hands.jpg" />' , 
		 
		  'Electron and optical microscopic designs have revolutionised the study of medical science',
          '<img onclick="welcome();window.assist.location.href=this.src;"  style="width:100%;" src="https://micro.magnet.fsu.edu/optics/intelplay/images/intelplay.jpg" />' , 
		 
		       {
            type: 'choose',
            answers: [{
			  'text': 'Thats Cool.',
              'path': 'isee',
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		  isee: [
          'Can you tell us some more subjects having connectivity with physics?',
		  'Ofcourse , we have suggestions below to help. :) ',
		  
		       {
            type: 'choose',
            answers: [{
			  'text': 'Astronomy',
              'path': 'how',
			 
            },{
			  'text': 'Meteorology',
              'path': 'how',
			 
            },{
			  'text': 'I dont know.',
              'path': 'how',
			 
            }
]
 }   
		  
        ],
		
		
		
		
		  how: [
          'Physics has a large connectivity with Astronomy,Meteorology and other fields.',
          'Optical telescopes of reflecting and refracting type enabled man to explore the space around. Discoveries like radio telescopes have revolutionised the study of Astronomy.',
          '<img onclick="welcome();window.assist.location.href=this.src;"  style="width:100%;" src="https://physics.uiowa.edu/sites/physics.uiowa.edu/files/field/image/gallery/alignment_over_veritas_0.jpg" />' , 
		  'The discoveries regarding the study of pressure variations help us to forecast the weather too!',
		  
		       {
            type: 'choose',
            answers: [{
			  'text': 'What should i know further?',
              'path': 'greatuses',
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		  greatuses: [
          'The future of physics!',
         'You now would have idea that physics is ever-growing field of knwoledge and continue to grow.' ,
		 '<img onclick="welcome();window.assist.location.href=this.src;"  style="width:100%;" src="https://qph.fs.quoracdn.net/main-qimg-90700a6706a186f277d5c8a262e21e91-c" />' , 
		 'Keep your interests in physics and it will inspire your soul to live, <b>for a purpose.</b> !',
		
		  
		       {
            type: 'choose',
            answers: [{
			  'text': 'Thank you.',
              'path': 'soundsbetter',
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		  soundsbetter: [
          'You are welcome.',
		  '<img onclick="welcome();window.assist.location.href=this.src;"  style="width:100%;" src="https://media2.giphy.com/media/X6hiFJjvTDAAw/giphy.gif" />' , 
          'Take care and keep learning.',
		      
		  
        ],
		
		
		
		
		
		  doesitexist: [
          'Google was slowly collecting data to make maps possible.', 'In 2005, Google Maps, Google Earth, and iGoogle were released.',
          'Untill 2006, it was not an official name , but then a new verb "to google" was officially added to the Oxford English Dictionary on June 15, 2006',
		  'Not just that , they even made it to next step .',
		  
          
		       {
            type: 'choose',
            answers: [{
			  'text': 'To which step?',
              'path': 'whenreality'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		  whenreality: [
          'Google purchased YouTube',
		  'Soon after that in 2007, Gmail became available to the general public on February 7, 2007.',
		  'This is how gmail looked back then .. <img onclick="welcome();window.assist.location.href=this.src;"  style="width:100%;" src="https://www.androidpolice.com/wp-content/uploads/2014/04/nexusae0_15.png" />' , 
          'Google also purchased Android in 2005, distribution started on 5 November 2007.  ',
		  'Android has a vast number of developers who write applications ("apps") that extend the functionality of the devices.',
          
		       {
            type: 'choose',
            answers: [{
			  'text': 'What they did next?',
              'path': 'whenreality2'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		  whenreality2: [
          'In 2008, Google launched Chrome, its first Web browser',
          'Same year, T-Mobile released the G1, the first Android-based phone.', 
		 'T-mobile G1, first android phone<img onclick="welcome();window.assist.location.href=this.src;"  style="width:100%;" src="https://i.kinja-img.com/gawker-media/image/upload/s--T3JfA4u9--/c_scale,f_auto,fl_progressive,q_80,w_800/17yo9pzvslmw6jpg.jpg" />' , 
          
          
		       {
            type: 'choose',
            answers: [{
			  'text': 'How did Chrome look back then?.',
              'path': 'survey'
			 
            }
]
 }   
		  
        ],
		
		
		
		
		
		  survey: [
          '<img onclick="welcome();window.assist.location.href=this.src;"  style="width:100%;" src="https://i.ytimg.com/vi/pFjK1eapTtI/maxresdefault.jpg" />' , 
          'Admittedly, Chrome looked lot better. It was 2008 afterall.', 
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Then...',
              'path': 'OKsurvey'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		
		
		  OKsurvey: [
		  'Now its <b>2009</b> ,Forbes magazine decided Sergey Brin and Larry Page were the fifth most powerful people in the world. ' , 
          'By now, They became biggest players of search engine world. Lots of other magazines had their faces on covers.',
		   '<img onclick="welcome();window.assist.location.href=this.src;"  style="width:100%;" src="https://c1.staticflickr.com/3/2095/2265443025_767aacf3e6_b.jpg" />' , 
          
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'What about newer android phones ?',
              'path': 'superai'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		
		
		
		  superai: [
		  'January 5, 2010, Google released an Android phone under its own company name called the Nexus One',
		  'It was made along with HTC' , 
        '<img onclick="welcome();window.assist.location.href=this.src;"  style="width:100%;" src="https://cdn.arstechnica.net/wp-content/uploads/2010/01/nexus_4_lineup.jpg" />' , 
          
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'I see.',
              'path': 'superai2'
			 
            },
]
 }   
		  
        ],
		
		
		  superai2: [
		  'Then there was vast changes in company. ' , 
          'In <b>2011</b>Co-founder Larry Page took over the role of CEO in April 2011.',
		  'Eric Schmidt becomes Executive Chairman.',
          
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Ok',
              'path': 'superai3'
			 
            }
]
 }   
		  
        ],
		
		
		
		  superai3: [
		  'Android started developing rapidly in coming years.' , 
		  '<img onclick="welcome();window.assist.location.href=this.src;"  src="http://brilliantapproach.com/wp-content/uploads/2016/05/Anroid-Banner.jpg" style="width:100%;" />' , 
          'Its now <b>2014</b>. At Google IO, Android Lollipop was launched which was best designed android till that date. It was big deal , since it was a major design changes in android. ',
          'Sundar Pichai at Google IO 2014<img onclick="welcome();window.assist.location.href=this.src;"  src="https://www1-lw.xda-cdn.com/files/2014/06/keynote-products.png" style="width:100%;" />' , 
          
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'When did Sundar Pichai became CEO then ?',
              'path': 'superai4'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		  superai4: [
		   '<img onclick="welcome();window.assist.location.href=this.src;"  src="https://cdn.mos.cms.futurecdn.net/e99320857ca9f92ac2535d0c236f0155-970-80.jpg" style="width:100%;" />' , 
          'It was 2015, Sundar Pichai was named CEO of Google.',
          'Soon after , company went to major re-structure,',
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Which restructures?',
              'path': 'path5'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		  path5: [
		   '<img onclick="welcome();window.assist.location.href=this.src;"  src="https://mobitrends.co.ke/wp-content/uploads/2015/08/image-Google-Inc.-is-now-Alphabet-Company-A-is-now-for-Android.jpg" style="width:100%;" />' , 
          '  A new company Alphabet Inc. was introduced, under which google is now working.',
          
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'So, whats the future for google?',
              'path': 'path6'
			 
            },
]
 }   
		  
        ],
		
		
		
		  path6: [
		    'Google currently plans on developing AI systems.',
			'<img onclick="welcome();window.assist.location.href=this.src;"  src="https://9to5google.files.wordpress.com/2017/12/google-ai-china-center-e1513138782882.png?w=1000" style="width:100%;" />' , 
          ' Google currently heavily invests on Artificial Intelligence and Machine Learning.',
          
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Yes!',
              'path': 'howwork'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		  howwork: [
		  '<img onclick="welcome();window.assist.location.href=this.src;"  src="https://api.thumbr.io/d28203849a7f46b503c044c3bcb16e2a/KhPZbWboUluRxv8PG87L/https%3A%2F%2Fwww.freepik.com/blog/wp-content/uploads/2016/09/The-evolution-of-Google-logo-as-well-as-its-Play-Store-logo-Aman-Singh_.jpg/900x/thumb.png" style="width:100%;" />' , 
          ' So this is all about Google. Hope you enjoyed it.',
         
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Thank You!',
              'path': 'howworkmean'
			 
            },
]
 }   
		  
        ],
		
		
		  howworkmean: [
		  
         'You are Welcome.','You may want to learn about Artificial Intelligence and Machine Learning in Rocketed app.', 'Goodbye!'
          
		        
		  
        ],
		
		
		

		
		
		
		
		  howml: [
		  'Start with simpler pose. ',
		 ' <img onclick="welcome();window.assist.location.href=this.src;"  src="https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/pose12.png?resize=600%2C250&ssl=1" style="width:100%;" />' , 
          'Now that you have basic understanding from line drawings, We will now also show real photos based on drawing. Like this:  ',
		  '  <img onclick="welcome();window.assist.location.href=this.src;"  src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/7poses2_1.jpg?resize=600%2C1352&ssl=1" style="width:100%;" /> ',
         'Is this format helping you to get an idea ?',
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Yes. This is good.',
              'path': 'predichelp'
			 
            },{
			  'text': 'No.',
              'path': 'predichelp'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		  predichelp: [
		  '<img onclick="welcome();window.assist.location.href=this.src;"  src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/pose21.png?resize=600%2C250&ssl=1" style="width:100%;" />' , 
		  'Another easy pose with hands placed together between the legs. Notice that arms should not be completely straightened, rather slightly bend at the elbows.','Also in the sample pose it is illustrated that toes should be straightened in order to raise the knees slightly up.',
          '  <img onclick="welcome();window.assist.location.href=this.src;"  src="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/7poses2_2.jpg?resize=600%2C1352&ssl=1" style="width:100%;" /> ',
         
          
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Is there any commonly compatible pose? That we can use max times.',
              'path': 'awesomeml'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		  awesomeml: [
		   'Sure there is a pose. Commonly used due to its simplicity',
		   '<img onclick="welcome();window.assist.location.href=this.src;"  src="https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/pose31.png?resize=600%2C250&ssl=1" style="width:100%;" />' , 
		   'One leg crossed over the other. We can also tweak it and add some hand moments.',
          '  <img onclick="welcome();window.assist.location.href=this.src;"  src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/7poses2_3.jpg?resize=600%2C1352&ssl=1" style="width:100%;" /> ',
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Hand moments ? How?',
              'path': 'feedbackn'
			 
            }
]
 }   
		  
        ],
		
		
		
		  feedbackn: [
		    '<b> *Same pose + Hand Moments</b> <img onclick="welcome();window.assist.location.href=this.src;"  src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/pose41.png?resize=600%2C250&ssl=1" style="width:100%;" />' , 
          'Enhance this pic with good looking shoes and non-cropped photos.',
		  '  <img onclick="welcome();window.assist.location.href=this.src;"  src="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/7poses2_4.jpg?resize=600%2C1352&ssl=1" style="width:100%;" /> ',
         
          
           {
            type: 'choose',
            answers: [{
			  'text': 'Okay!',
              'path': 'feedbacky'
			 
            }
]
 }   
          
		    
		  
        ],
		
		
		
		  feedbacky: [
		  'Lets go even further. <b>Use the ground</b>',
		  '  <img onclick="welcome();window.assist.location.href=this.src;"  src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/pose51.png?resize=600%2C250&ssl=1" style="width:100%;" /> ',
		  'Unlike chair poses, sitting on the ground works better barefoot.',
        '  <img onclick="welcome();window.assist.location.href=this.src;"  src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/7poses2_5.jpg?resize=600%2C1352&ssl=1" style="width:100%;" /> ',
         
		 
		         {
            type: 'choose',
            answers: [{
			  'text': 'Yes, Indeed.',
              'path': 'thanks'
			 
            }
]
 }   
          
         
          
		    
		  
        ],
		
		
		
		
		
		  thanks: [
		  'One more common practise is this pose.',
		    '  <img onclick="welcome();window.assist.location.href=this.src;"  src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/pose61.png?resize=600%2C250&ssl=1" style="width:100%;" /> ',
         'This is another easy sitting on the ground pose. Very suitable for different close-up portrait shots.',
		 '  <img onclick="welcome();window.assist.location.href=this.src;"  src="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/7poses2_6.jpg?resize=600%2C852&ssl=1" style="width:100%;" /> ',
         'And lastly , lets look at some facial close shots',
		        
          
          {
            type: 'choose',
            answers: [{
			  'text': 'Okay!',
              'path': 'facial'
			 
            }
]
 }   
          
          
		    
		  
        ],
		
		
		
		  facial: [
		  'One more common practise is this pose.',
		    '  <img onclick="welcome();window.assist.location.href=this.src;"  src="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/pose71.png?resize=600%2C250&ssl=1" style="width:100%;" /> ',
         'Despite the fact that only face is visible in the frame, it’s more comfortable to recreate it while being seated. You may use a cropping tool.',
		 '  <img onclick="welcome();window.assist.location.href=this.src;"  src="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/7poses2_71.jpg?resize=600%2C852&ssl=1" style="width:100%;" /> ',
         'Look at those hand moments in the photo. Try to be creative that way.',
		        
          
          {
            type: 'choose',
            answers: [{
			  'text': 'That was really good!',
              'path': 'chapter3'
			 
            }
]
 }   
          
          
		    
		  
        ],
		
		
		
		
		
		
		  chapter3: [
		  'Now that concludes our chapter #2.',
		   'Now you know so much about photography and selfies.',
		   'What you need is some words to go out and take pictures.',
		        'Chapter 3 is all about being more photogenic',
          
          {
            type: 'choose',
            answers: [{
			  'text': '.. And that is ?',
              'path': 'thatis'
			 
            }
]
 }   
          
          
		    
		  
        ],
		
		
		
		  thatis: [
		  'Photogenic basically means being photo friendly.',
		   'or looking attractive in photographs or on film.',
		   'have a look at this video about being more photogenic.',
		         '<div class="holder"> <div class="bar2"><p style="font-size:12px;font-family: Montserrat, sans-serif;margin-left:28px;margin-top:8px;color:black">How to be more photogenic?</p></div><iframe class="disableRightClick" width="100%" height="400" src="https://www.youtube-nocookie.com/embed/QQ8kvBnKeqM?rel=0&amp&start=10" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div> ',
		  
          
          {
            type: 'choose',
            answers: [{
			  'text': 'watched it.',
              'path': 'watchedphotogenic'
			 
            }
]
 }   
          
          
		    
		  
        ],
		
		
		  watchedphotogenic: [
		  'Here we end our course.',
		   'Hope you like this one.',
		   'Try other courses too in Rocketed App.',
		         
          
         
          
          
		    
		  
        ],
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
      }, {
        targetNode: '.my_chat'
      });
