var chat = new Chat({

        greeting: [
		
'<div class="holder"> <div class="bar2"><p style="font-size:12px;font-family: Montserrat, sans-serif;margin-left:28px;margin-top:8px;color:black">Systm of units and fundamental units</p></div><iframe class="disableRightClick" width="100%" height="400" src="https://www.youtube-nocookie.com/embed/oAtDAoqdExw?rel=0&amp&start=10" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div> ',
'<div class="holder"> <div class="bar2"><p style="font-size:12px;font-family: Montserrat, sans-serif;margin-left:28px;margin-top:8px;color:black">Fundamental Units</p></div><iframe class="disableRightClick" width="100%" height="400" src="https://www.youtube-nocookie.com/embed/p9i-HwOA8GM?rel=0&amp&start=10" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div> ',
'<div class="holder"> <div class="bar2"><p style="font-size:12px;font-family: Montserrat, sans-serif;margin-left:28px;margin-top:8px;color:black">Accuracy and Precision</p></div><iframe class="disableRightClick" width="100%" height="400" src="https://www.youtube-nocookie.com/embed/hRAFPdDppzs?rel=0&amp&start=10" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div> ',
'<div class="holder"> <div class="bar2"><p style="font-size:12px;font-family: Montserrat, sans-serif;margin-left:28px;margin-top:8px;color:black">Error Analysis</p></div><iframe class="disableRightClick" width="100%" height="400" src="https://www.youtube-nocookie.com/embed/6YE_i5HHDyc?rel=0&amp&start=10" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div> ',
'<div class="holder"> <div class="bar2"><p style="font-size:12px;font-family: Montserrat, sans-serif;margin-left:28px;margin-top:8px;color:black">Significant Figures Introduction</p></div><iframe class="disableRightClick" width="100%" height="400" src="https://www.youtube-nocookie.com/embed/eCJ76hz7jPM?rel=0&amp&start=10" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div> ',
'<div class="holder"> <div class="bar2"><p style="font-size:12px;font-family: Montserrat, sans-serif;margin-left:28px;margin-top:8px;color:black">Rules for Significant Figures</p></div><iframe class="disableRightClick" width="100%" height="400" src="https://www.youtube-nocookie.com/embed/eMl2z3ezlrQ?rel=0&amp&start=10" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div> ',
'<div class="holder"> <div class="bar2"><p style="font-size:12px;font-family: Montserrat, sans-serif;margin-left:28px;margin-top:8px;color:black">Multiplication and Division with Significant Figures</p></div><iframe class="disableRightClick" width="100%" height="400" src="https://www.youtube-nocookie.com/embed/iorZdz4dsBU?rel=0&amp&start=10" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div> ',
'<div class="holder"> <div class="bar2"><p style="font-size:12px;font-family: Montserrat, sans-serif;margin-left:28px;margin-top:8px;color:black">Addition and Subtraction</p></div><iframe class="disableRightClick" width="100%" height="400" src="https://www.youtube-nocookie.com/embed/xHgPtFUbAeU?rel=0&amp&start=10" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div> ',
'<div class="holder"> <div class="bar2"><p style="font-size:12px;font-family: Montserrat, sans-serif;margin-left:28px;margin-top:8px;color:black">Vernier Calliper</p></div><iframe class="disableRightClick" width="100%" height="400" src="https://www.youtube-nocookie.com/embed/cGBurmX8suw?rel=0&amp&start=10" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div> ',
'<div class="holder"> <div class="bar2"><p style="font-size:12px;font-family: Montserrat, sans-serif;margin-left:28px;margin-top:8px;color:black">Screw Gauge</p></div><iframe class="disableRightClick" width="100%" height="400" src="https://www.youtube-nocookie.com/embed/dsYaVkvmaNQ?rel=0&amp&start=10" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div> ',
		  
           
          {
            type: 'choose',
            answers: [
			
		
			{
			  'text': 'I am ready.',
              'path': 'ready'
			 
            },
			
	
			]
          }
        ],

		
		   ready: [
          'The story starts in 1973.' ,
          '<img style="width:100%;" src="https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr02/2013/7/23/10/enhanced-buzz-orig-10855-1374591204-36.jpg?downsize=715:*&output-format=auto&output-quality=auto" />',
		'The world is having way less traffic than today. And world trade center looks like this :',
		'<img style="width:100%;" src="https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr03/2013/7/23/11/enhanced-buzz-orig-16873-1374593380-22.jpg?downsize=715:*&output-format=auto&output-quality=auto" />',
		
          {
            type: 'choose',
            answers: [{
               'text': 'Looks good. But why are we talking about 1973?',
              'path': 'forgood',
            }]
          }
        ],
		
		
		   forgood: [
          'Because that year, a boy came to birth , <b>Larry Page</b>.' ,
		  '<img style="width:100%;" src="http://www.snakkle.com/wp-content/uploads/2011/11/larry-page-split.jpg" />',
		  'Larry Page was born on March 26, 1973 in Ann Arbor, Michigan',
         
         


		 
		 
		 
		 
          {
            type: 'choose',
            answers: [{
               'text': 'So thats why we are talking about 1973...',
              'path': 'knowmusclename',
            }]
          }
        ],
		
		
		
		   knowmusclename: [
          'Not only that, Sergey Brin was also born in 1973.' , 
		   '<img style="width:100%;" src="https://iamanentrepreneur.in/wp-content/uploads/iamanentrepreneur-startup-sergey-1.jpg" />',
		  'Sergey Brin was born on August 21, 1973 in Moscow, Russia' , 
		  
          {
            type: 'choose',
            answers: [{
               'text': 'So what?',
              'path': 'wantsee',
            }]
          }
        ],
		
		
		
        wantsee: [
		'These 2 friends found the company , we will know more in details',
		'<img style="width:100%;" src="https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/05/31/104501593-GettyImages-541460159.1910x1000.jpg" />',
		
          {
            type: 'choose',
            answers: [{
			  'text': 'Yes, I want to!',
              'path': 'saw',
			 
            },
		
				
          
			
]
			
			
          }
        ],
		
        saw: [
          'The web as we know today largely is because of <b>hypertext.</b> ',
		  ' It is a text displayed on a computer display with references to other text that the reader can immediately access.', 
          'It has multiple level of details which are inter-connected to each other.',
	'<img style="width:100%;" src="https://upload.wikimedia.org/wikipedia/commons/4/41/Sistema_hipertextual.jpg" />',
		
		   
         
          {
            type: 'choose',
            answers: [{
			  'text': 'What Hypertext has to do with our story?',
              'path': 'wtypes',
			 
            }
			
			
]
			
			
          }
        ],
			
        wtypes: [
          'In 1990, Tim Berners-Lee and Robert Cailliau proposed a hypertext system starting the modern Internet.',
         'It was just one year after that WWW, the world wide web was launched.',
		 '	The World Wide Web is launched to the public on August 6, 1991',
		 '<img style="width:100%;" src="https://i0.wp.com/blogthinkbig.com/wp-content/uploads/2014/08/internet-y-la-web-1.jpg?resize=610%2C342" />',
		 'It is the reason why we can access set of images and pages on the internet', 
		 'Meanwhile 2 years later in 1993...', 'Sergey Brin attended the University of Maryland, College Park to study computer science and mathematics and received his Bachelor of Science degree in May 1993 with honors' ,
		 
		 
		 
          {
            type: 'choose',
            answers: [{
			  'text': 'What about the other founder?',
              'path': 'deeplook',
			 
            },

]
			
			
          }
        ],
		
		  deeplook: [
          'Larry Page attended the University of Michigan to study computer engineering and received his Bachelor of Science degree with honors. ',
         
           
        
          
          {
            type: 'choose',
            answers: [{
			  'text': 'So do they know each other yet?',
              'path': 'cardiacfunc',
			 
            }

]
			
			
          }
        ],
		  cardiacfunc: [
		
          'No. It was 1995, when Sergey Brin and Larry Page meet at Stamford University, in Palo Alto, California, to study for their PHDs.',
		  
		 
        
          {
            type: 'choose',
            answers: [{
			  'text': 'So then they started making Google?',
              'path': 'Ok1',
			 
            },
]
 }
		  
		  
		  
		  
		  
        ],
		
		  Ok1: [
		  'Not directly.',
          'Sergey Brin and Larry Page begin a research project working on the Stanford Digital Library Project (SDLP). The aim of the project was to develop the enabling technologies for a single, integrated and universal digital library.',
          'Larry Page and Sergey Brin collaborate on their <B>BackRub</B> search engine using back links in their search engine design.',
		    '<img style="width:100%;" src="https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/6403175/google-backrub.jpg?1477401186" />',
		
          {
            type: 'choose',
            answers: [{
			  'text': 'Backrub? What is that?.',
              'path': 'cquiz1',
			 
            }
]
 }
		  
       
        ],
		
		
		
       cquiz1: [
          '<b>Backrub :</b> was the initial name of search engine that they found. ',
          'But then, Larry Page and Sergey Brin produce a paper, <b>"Anatomy of a Large-Scale Hypertextual Web Search Engine,"</b> became the basis for the Google search engine.',
          '<img style="width:100%;" src="http://infolab.stanford.edu/~backrub/over.gif" />',
		  'Anyways, Do you know why they named it Google? ',
		
		  
		    {
            type: 'choose',
            answers: [{
			  'text': 'Yes. I know.',
              'path': 'whatsthediff',
			 
            },{
			  'text': 'No. I want to know.',
              'path': 'whatsthediff',
			 
            },
]
 }
		  
        ],
		
		
      
		
       whatsthediff: [
          'They called the search engine Google after the mathematical term <b>"Googol,"</b> which is a a number that is equal to 1 followed by 100 zeros and expressed as 10100 which they felt reflected their mission to organize the massive amount of information available on the Web.',
		  'In August 1996 - The first version of Google is released on the Stanford Web. The address was: google.stanford.edu.', 
		  'One of the first deployment of google search engine looked like this :',
          '<img style="width:100%;" src="http://www.viralthread.com/wp-content/uploads/2016/05/goo.jpg" />' , 
		  'Notice that , It is not google.com as of now.',
           
		       {
            type: 'choose',
            answers: [{
			  'text': 'So when did they become Google.com?',
              'path': 'nexttype',
			 
            }
]
 }   
		  
        ],
		
		
		  nexttype: [
          '1996 was critical opening year for google.',
          'But it was 1997 , Google.com was registered as a domain name.',
          'The same year , Larry Page and Sergey Brin try to sell Google through the venture capital firm of Kleiner Perkins Caufield & Byers (KPCB).',
		  'They are unsuccessful, nobody was interested in buying their search engine and they gave up the idea of selling Google.',
           
		       {
            type: 'choose',
            answers: [{
			  'text': 'Proceed',
              'path': 'overtype',
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		  overtype: [
          'September 7 <b>1998</b> - Google became an official corporation. The company mission statement was <b>"to organize the world information and make it universally accessible and useful"</b> and the company unofficial slogan was <b>"Dont be evil"</b> ',
          'Then , PC magazine recognized Google as the search engine of choice and one of the Top 100 Web Sites for 1998.',
          '<img style="width:100%;" src="https://image.slidesharecdn.com/google-the-information-industry-10117/95/google-the-information-industry-4-728.jpg?cb=1164411180" />' , 
		  'and Google opened its first office in Palo Alto and later moved to Bayshore Drive in nearby Mountain View.',
		  
		       {
            type: 'choose',
            answers: [{
			  'text': 'First Office of Google!',
              'path': 'isee',
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		  isee: [
          '<img style="width:100%;" src="http://visionwiz.net/wp-content/uploads/2010/12/s-first-office.jpg" />' , 
          'The same year , <b>1998</b>, Sergey Brin and Larry Page drop out of the Stanford graduate studies program to concentrate on their company.',
		  'At time, Google searches were made by 18 million people per day',
		  'When 2000 came , Foreign language Versions of Google.com were released in French, German, Italian, Swedish, Finnish, Spanish, Portuguese, Dutch, Norwegian, Danish, Chinese, Japanese and Korean',

		  'Think about , how google made profit in these days?',
         
		  
		       {
            type: 'choose',
            answers: [{
			  'text': 'How did they ?',
              'path': 'how',
			 
            }
]
 }   
		  
        ],
		
		
		
		
		  how: [
          'In its early years Google did not allow advertising in their search engine results. ',
          'Then Google began selling AdWords, its keyword related contextual advertising.',
          'The search engine became profitable with the introduction of unobtrusive text advertisements placed at the side of search results.',
		  'They looked nearly like this:',
		  '<img style="width:100%;" src="https://pas-wordpress-media.s3.amazonaws.com/content/uploads/2015/03/Screen-Shot-2015-03-25-at-2.33.59-AM.png" />' , 
		  'But now Google was getting big, they need more talent to handle company?  So who came next?',
		  
		       {
            type: 'choose',
            answers: [{
			  'text': 'Their new CEO ?',
              'path': 'greatuses',
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		  greatuses: [
          'Its <b>2001</b>, Positions of googlers needs to be decided.',
         'Eric Schmidt joined Google as its first chairman and later became its CEO. Larry Page became president of products and Sergey Brin became president of technology' ,
		 '<img style="width:100%;" src="https://cdn2.img.sputniknews.com/images/101726/23/1017262383.jpg" />' , 
		 'Then they came up with Google News in 2002.',
		
		  
		       {
            type: 'choose',
            answers: [{
			  'text': 'Then..?',
              'path': 'soundsbetter',
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		  soundsbetter: [
          'Larry page became World Economic Forum Global Leader.',
		  '<img style="width:100%;" src="https://cdn.slidesharecdn.com/ss_thumbnails/bus101presentation-150111022316-conversion-gate02-thumbnail-4.jpg?cb=1420945983" />' , 
          'Soon ,Sergey Brin and Larry Page were honored with the Marconi Prize', 'But this duo was planning on something big.',
		       {
            type: 'choose',
            answers: [{
			  'text': 'What was that big thing?',
              'path': 'doesitexist'
			 
            },
]
 }   
		  
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
		  'This is how gmail looked back then .. <img style="width:100%;" src="https://www.androidpolice.com/wp-content/uploads/2014/04/nexusae0_15.png" />' , 
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
		 'T-mobile G1, first android phone<img style="width:100%;" src="https://i.kinja-img.com/gawker-media/image/upload/s--T3JfA4u9--/c_scale,f_auto,fl_progressive,q_80,w_800/17yo9pzvslmw6jpg.jpg" />' , 
          
          
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
          '<img style="width:100%;" src="https://i.ytimg.com/vi/pFjK1eapTtI/maxresdefault.jpg" />' , 
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
		   '<img style="width:100%;" src="https://c1.staticflickr.com/3/2095/2265443025_767aacf3e6_b.jpg" />' , 
          
         
          
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
        '<img style="width:100%;" src="https://cdn.arstechnica.net/wp-content/uploads/2010/01/nexus_4_lineup.jpg" />' , 
          
         
          
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
		  '<img src="http://brilliantapproach.com/wp-content/uploads/2016/05/Anroid-Banner.jpg" style="width:100%;" />' , 
          'Its now <b>2014</b>. At Google IO, Android Lollipop was launched which was best designed android till that date. It was big deal , since it was a major design changes in android. ',
          'Sundar Pichai at Google IO 2014<img src="https://www1-lw.xda-cdn.com/files/2014/06/keynote-products.png" style="width:100%;" />' , 
          
          
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
		   '<img src="https://cdn.mos.cms.futurecdn.net/e99320857ca9f92ac2535d0c236f0155-970-80.jpg" style="width:100%;" />' , 
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
		   '<img src="https://mobitrends.co.ke/wp-content/uploads/2015/08/image-Google-Inc.-is-now-Alphabet-Company-A-is-now-for-Android.jpg" style="width:100%;" />' , 
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
			'<img src="https://9to5google.files.wordpress.com/2017/12/google-ai-china-center-e1513138782882.png?w=1000" style="width:100%;" />' , 
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
		  '<img src="https://api.thumbr.io/d28203849a7f46b503c044c3bcb16e2a/KhPZbWboUluRxv8PG87L/https%3A%2F%2Fwww.freepik.com/blog/wp-content/uploads/2016/09/The-evolution-of-Google-logo-as-well-as-its-Play-Store-logo-Aman-Singh_.jpg/900x/thumb.png" style="width:100%;" />' , 
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
		 ' <img src="https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/pose12.png?resize=600%2C250&ssl=1" style="width:100%;" />' , 
          'Now that you have basic understanding from line drawings, We will now also show real photos based on drawing. Like this:  ',
		  '  <img src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/7poses2_1.jpg?resize=600%2C1352&ssl=1" style="width:100%;" /> ',
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
		  '<img src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/pose21.png?resize=600%2C250&ssl=1" style="width:100%;" />' , 
		  'Another easy pose with hands placed together between the legs. Notice that arms should not be completely straightened, rather slightly bend at the elbows.','Also in the sample pose it is illustrated that toes should be straightened in order to raise the knees slightly up.',
          '  <img src="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/7poses2_2.jpg?resize=600%2C1352&ssl=1" style="width:100%;" /> ',
         
          
         
          
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
		   '<img src="https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/pose31.png?resize=600%2C250&ssl=1" style="width:100%;" />' , 
		   'One leg crossed over the other. We can also tweak it and add some hand moments.',
          '  <img src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/7poses2_3.jpg?resize=600%2C1352&ssl=1" style="width:100%;" /> ',
         
          
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
		    '<b> *Same pose + Hand Moments</b> <img src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/pose41.png?resize=600%2C250&ssl=1" style="width:100%;" />' , 
          'Enhance this pic with good looking shoes and non-cropped photos.',
		  '  <img src="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/7poses2_4.jpg?resize=600%2C1352&ssl=1" style="width:100%;" /> ',
         
          
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
		  '  <img src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/pose51.png?resize=600%2C250&ssl=1" style="width:100%;" /> ',
		  'Unlike chair poses, sitting on the ground works better barefoot.',
        '  <img src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/7poses2_5.jpg?resize=600%2C1352&ssl=1" style="width:100%;" /> ',
         
		 
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
		    '  <img src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/pose61.png?resize=600%2C250&ssl=1" style="width:100%;" /> ',
         'This is another easy sitting on the ground pose. Very suitable for different close-up portrait shots.',
		 '  <img src="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/7poses2_6.jpg?resize=600%2C852&ssl=1" style="width:100%;" /> ',
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
		    '  <img src="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/pose71.png?resize=600%2C250&ssl=1" style="width:100%;" /> ',
         'Despite the fact that only face is visible in the frame, it’s more comfortable to recreate it while being seated. You may use a cropping tool.',
		 '  <img src="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/7poses2_71.jpg?resize=600%2C852&ssl=1" style="width:100%;" /> ',
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
