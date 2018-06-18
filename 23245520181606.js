var chat = new Chat({

        greeting: [
		
        'The fact is .. People does really look at photos and judge people.',
         'So , <b><span "display:inline" id="displayname"></span></b>... Looking good in photos can be one of the best thing you will learn in life, we bet.' , 'Today we are going to study some of the best techniques based on which you can change and improve your selfie game.','Not just it will make you <b>look good</b>, it will also make you <b>feel good.</b>',
        
           
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
          'In this chapter , we will directly start with some interesting stuff.' ,
          'We will look at what makes selfies look good.',
          {
            type: 'choose',
            answers: [{
               'text': 'Okay',
              'path': 'forgood',
            }]
          }
        ],
		
		
		   forgood: [
          'After learning that , you will wonder about photographic poses..' , 'Thus we will learn some photographic poses.' ,
         
         


		 
		 
		 
		 
          {
            type: 'choose',
            answers: [{
               'text': 'Sounds good.',
              'path': 'knowmusclename',
            }]
          }
        ],
		
		
		
		   knowmusclename: [
          'Then you will kill your remaining fear of photography by knowing about how to be more photogenic.' , 
		  'Thus now you know , that <b>we are going to study all this in 3 chapters.</b>' , 
		  '•Chapter 1- Understanding Perfect Selfies <br> •Chapter 2 - Learning some good photographic poses <br> •Chapter 3- Being more photogenic' , 
		 
          {
            type: 'choose',
            answers: [{
               'text': 'Start with chapter #1.',
              'path': 'wantsee',
            }]
          }
        ],
		
		
		
        wantsee: [
		'Now, to understand how good selfies are made..',
		'We will study some aspects related to selfie photography.',
		'<img style="width:100%;" src="https://edge.alluremedia.com.au/m/g/2015/04/Good-Lighting.jpg" />',
		'<b>Number 1 : </b>Lighting is everything ', 'Dont you want to look energitic and fair ? ;)',
		
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
          'Experts says <i>"Light is the best beauty product you dont have to pay for."</i> ',
		  ' Instead of facing your computer screen or television, turn toward a window with natural light. ', 'Go outside, Good lighting can actually make undereye circles and shadows totally disappear.',
          'Also do you know about your photographic angle?',
	
		   
         
          {
            type: 'choose',
            answers: [{
			  'text': 'Lets learn about that...',
              'path': 'wtypes',
			 
            }
			
			
]
			
			
          }
        ],
			
        wtypes: [
          '<b>Number 2 :</b> Learn about your angles.',
         'When it comes to selfies, keep your chin down and the camera up.',
		 '<img style="width:100%;" src="https://edge.alluremedia.com.au/m/g/2015/04/Know-your-angles.jpg" />',
		 'You need to play around with camera to know what angles suits you up...', 'For majority ,its always the camera held tight upwards while chin down.',
		 'Why dont you try angles next time you hold camera ? ;)', 'Maybe like this ...' ,
		 '<img style="width:100%;" src="https://marketingland.com/wp-content/ml-loads/2014/04/avene_selfie-600x322.jpg" />',
		 
		 
		 
          {
            type: 'choose',
            answers: [{
			  'text': 'Yes, I will.',
              'path': 'deeplook',
			 
            },

]
			
			
          }
        ],
		
		  deeplook: [
          'What do you think of flash ? ',
           'Is he your friend ? Does he make your photos look good?' , 
           
        
          
          {
            type: 'choose',
            answers: [{
			  'text': 'Yes. I think so.',
              'path': 'cardiacfunc',
			 
            },{
			  'text': 'No. I dont like flash.',
              'path': 'cardiacfunc',
			 
            },

]
			
			
          }
        ],
		  cardiacfunc: [
		
          'People might have different opinions .. But truth is that <b>flash is not your friend!</b>',
		  'so <b>Number 3 : </b> : Breakup with flash.',
          'It’s just not good. You’re never going to get a good picture with flash. ',
		  'And selfies ? Never! , Just avoid using flash whenever you can.',
		  '<img style="width:100%;" src="https://edge.alluremedia.com.au/m/g/2015/04/Dont-use-flash.jpg" />',
		 
        
          {
            type: 'choose',
            answers: [{
			  'text': 'Ok. I will break up with flash. ;)',
              'path': 'Ok1',
			 
            },
]
 }
		  
		  
		  
		  
		  
        ],
		
		  Ok1: [
		  '<b>Number 4 : </b> Use rear cameras.',
          'Front cameras are great , But use Rear cameras whenever possible.',
          '<img style="width:100%;" src="https://edge.alluremedia.com.au/m/g/2015/05/back-facing-camera-tick.jpg" />',
		 'This can be kind of hard given that you’ll probably have to get someone else to take the photo., but it really makes a difference.',
		 'The photo taken by rear camera is always of higher resolution and edits better than front.',
           
          {
            type: 'choose',
            answers: [{
			  'text': 'Ofcourse.',
              'path': 'cquiz1',
			 
            }
]
 }
		  
       
        ],
		
		
		
       cquiz1: [
          '<b>Number 5 :</b>  Take lots of selfies. ',
          'Take lots of selfies, Dont show them to anyone.',
		  'Even if some selfies might be bad or ugly.. But it will always increase your skill.',
          '<img style="width:100%;" src="https://edge.alluremedia.com.au/m/g/2015/04/take-lots.jpg" />',
		  'Anyways, What do you think of tools that helps you for selfies? ',
		
		  
		    {
            type: 'choose',
            answers: [{
			  'text': 'I embrace it.',
              'path': 'whatsthediff',
			 
            },{
			  'text': 'I dont like tools.',
              'path': 'whatsthediff',
			 
            },
]
 }
		  
        ],
		
		
      
		
       whatsthediff: [
          'Despite the fact that there are people who dont like tools like editing apps and selfie stick... ',
		  'You should really embrace the tools', '<b>Number 6 :</b>  Embrace the tools. ',
		  'Take Selfie stick as an example .. They give you naturally perfected angle and makes you look good from far.',
          '<img style="width:100%;" src="https://edge.alluremedia.com.au/m/g/2015/05/selfie-stick-photos.jpg" />' , 
		  'what other things can make your selfies look better? ',
           
		       {
            type: 'choose',
            answers: [{
			  'text': 'Editing Apps.',
              'path': 'nexttype',
			 
            }
]
 }   
		  
        ],
		
		
		  nexttype: [
          'Yes. Editing Apps can work perfectly when you know how much to edit and where to edit.',
          'Time for warning, over-using editing app makes selfies look worst.',
          'Just remember when to stop, And you can master the rest.',
		   '<img style="width:100%;" src="https://edge.alluremedia.com.au/m/g/2015/05/facetune-tick.jpg" />' , 
		   'You can also just stick to normal settings to look good..',
           
		       {
            type: 'choose',
            answers: [{
			  'text': 'How exactly?',
              'path': 'overtype',
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		  overtype: [
          '<b>Number 7 :</b>  Set the scenes. ',
          'Its true that you look beautiful, but things in the background have potential to make you even more beautiful.',
          '<img style="width:100%;" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/selfie-tips-1498679790.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*" />' , 
		  'Its surprising that some people look good in selfies , some does not.. Dont you think?',
		  
		       {
            type: 'choose',
            answers: [{
			  'text': 'Thats ultimate question.. Why is that?',
              'path': 'isee',
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		  isee: [
          'This is the ultimate secret , watch carefully. Secret is ... :',
          '<b>Number 8 :</b>  Forget the shame.',
		  'Lots of people <b>overthinks</b> while taking pictures.','That kills their selfie.',
		  'The truth is , everyone will appreciate and admire you if you take a good selfie..',
		  'So <b>just stop thinking</b> , and get into that shameless & fearless mode hidden within you.',
		  'If you want to think.. then think <b>about the picture.</b> Remember , There is nothing wrong in taking pictures.',
		  'Promise me that you will work towards your next selfie without overthinking.',
         
		  
		       {
            type: 'choose',
            answers: [{
			  'text': 'I promise.',
              'path': 'how',
			 
            },{
			  'text': 'I dont want to.',
              'path': 'how',
			 
            },
]
 }   
		  
        ],
		
		
		
		
		  how: [
          'Brings us to our next aspect ..',
          '<b>Number 9 :</b>  Accessories,Accessories.',
          'If you want a reason to be on camera.. ',
		  'There are accessories .. use them up.',
		  '<img style="width:100%;" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2017-10-11-at-3-22-01-pm-1507749735.png?crop=0.865xw:1.00xh;0.0153xw,0&resize=980:*" />' , 
		  'Accessories like sunglasses make everyone look cool. Isnt it so?',
		  
		       {
            type: 'choose',
            answers: [{
			  'text': 'Yes. Indeed....',
              'path': 'greatuses',
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		  greatuses: [
          '<b>Number 10 :</b>  Go offbeat occasionally.',
         'You dont always need to show you face. Dont overdo it. Make changes.' ,
		 '<img style="width:100%;" src="https://improvephotography.com/wp-content/uploads/2014/06/selfieShoesDouble.jpg" />' , 
		 'Sometimes showing off different views in frame is good idea. It also gives wider view of you life.',
		 'So that was about , the various aspects that you shold know about selfies.',
		
		  
		       {
            type: 'choose',
            answers: [{
			  'text': 'Any bonus tip?',
              'path': 'soundsbetter',
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		  soundsbetter: [
          'Sure. There is one most important bonus tip.',
		  '<img style="width:100%;" src="http://www.intrepidescape.com/wp-content/gallery/selfie-success/Steps-to-Selfie-Success-7-1.jpg" />' , 
          'Never show your nostrills in selfie.', 'People wants to see you , not your inner nose!',
		       {
            type: 'choose',
            answers: [{
			  'text': 'Haha',
              'path': 'doesitexist'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		  doesitexist: [
          'That being said , There are many positions that you can use in order to look better.', 'Having the sense of poses will heavily increase your photographic skills.',
          'Poses in photography makes every photo look different and thus you must know few poses that suits you best.',
		  'Should we study some poses now?.',
		  
          
		       {
            type: 'choose',
            answers: [{
			  'text': 'Sure.',
              'path': 'whenreality'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		  whenreality: [
          'Poses generally differs for men and women. Since we are studying selfies.. we will look at both.',
		  'You will understand better by line drawings, so we will start with line drawings of men posing for a photos.',
		  '<img style="width:100%;" src="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2012/04/posing-men-subjects01.png?resize=600%2C400&ssl=1" />' , 
          'Most simple pose for men :  An upper body shot with crossed arms. ',
          
		       {
            type: 'choose',
            answers: [{
			  'text': 'Looks simple',
              'path': 'whenreality2'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		  whenreality2: [
          'Here are 2 things to take care of:.',
          '• Shoulders should be pulled back a little.', '• Stomach muscles should be kept in check.', 'Otherwise this simple pose will look bad.',
          
		       {
            type: 'choose',
            answers: [{
			  'text': 'I understand.',
              'path': 'survey'
			 
            }
]
 }   
		  
        ],
		
		
		
		
		
		  survey: [
          '<img style="width:100%;" src="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2012/04/posing-men-subjects02.png?resize=600%2C400&ssl=1" />' , 
          'Next up , The pose with <b>Crossed arms.</b> ', 'You should do it when you want photo in full height. ',
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Can something go wrong with this pose ?',
              'path': 'OKsurvey'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		
		
		  OKsurvey: [
		  'Yes , this pose might look akward when not done properly. ' , 
          'Make sure the body weight is not supported equal on both legs...',
		  'Otherwise that would look just awkward!',
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'I got it',
              'path': 'superai'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		
		
		
		  superai: [
		  'People have been confused for some time about their hands in photographs.',
		  'Where should you keep your hands at ?' , 
        '<img style="width:100%;" src="https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2012/04/posing-men-subjects03.png?resize=600%2C400&ssl=1" />' , 
          
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'I have that question too.',
              'path': 'superai2'
			 
            },
]
 }   
		  
        ],
		
		
		  superai2: [
		  'There are few places where hand are to be kept. ' , 
          'They are : •Loosely by side. •On the hips. •In the pockets. & •Both hands crossed on the chest.',
          
         
          
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
		  'Using a chair as a prop can make a portrait more engaging and interesting.' , 
		  '<img src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2012/04/posing-men-subjects14.png?resize=600%2C400&ssl=1" style="width:100%;" />' , 
          'Very suitable when introducing creative people in their work environment. ',
         'Where else can you take photos ?',
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Outdoor locations ?',
              'path': 'superai4'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		  superai4: [
		   '<img src="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2012/04/posing-men-subjects17.png?resize=600%2C400&ssl=1" style="width:100%;" />' , 
          'Man’s pose sitting on the ground is suitable for outdoor locations.',
          'How about using some walls for poses ?',
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'How exactly ?',
              'path': 'path5'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		  path5: [
		   '<img src="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2012/04/posing-men-subjects08.png?resize=600%2C400&ssl=1" style="width:100%;" />' , 
          '  The sideways way of leaning against the same wall. Works very well for both casual and formal shots.',
          
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'That looks good in formal.',
              'path': 'path6'
			 
            },
]
 }   
		  
        ],
		
		
		
		  path6: [
		    'This is how you can use walls also for not-so-formal photos',
			'<img src="https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2012/04/posing-men-subjects07.png?resize=600%2C400&ssl=1" style="width:100%;" />' , 
          ' Too much standing near the wall. Lets look at some sitting poses.',
          
         
          
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
		  '<img src="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2012/04/posing-men-subjects06.png?resize=600%2C400&ssl=1" style="width:100%;" />' , 
          ' When you sit.. Sit like a pro.', 'Your sitting pose should always show that there is nothing that worries you at that moment.',
         
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Proceed',
              'path': 'howworkmean'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		  howworkmean: [
		  ' <img src="https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2012/04/posing-men-subjects21.png?resize=600%2C400&ssl=1" style="width:100%;" />' , 
          ' Finally , you should know abot poses that focuses facial expressions ', 'Do not be afraid to crop tightly around the face.',
		  'Womens are made for different poses. Lets have a look.',
          
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Sure.',
              'path': 'howml'
			 
            },
]
 }   
		  
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