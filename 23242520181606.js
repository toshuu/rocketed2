var chat = new Chat({

        greeting: [
		
        '<i>Its never too late or too early to work towards healthiest you!</i>',
            'Ohh ... Hello, <span "display:inline" id="displayname"></span>. Hope you are well.' , 'Today we are going to study a topic highly related with wellness.','Not just welless, it also gives you good looks! ',
            
		
           
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
          'Tell me honestly. What are you here for?' ,
          'Dont lie :D ',
          {
            type: 'choose',
            answers: [{
               'text': 'For Good Looks',
              'path': 'forgood',
            },{
				 'text': 'For Good Health',
              'path': 'forgood',
			}]
          }
        ],
		
		
		   forgood: [
          'I see.' , 'Whatever you are here for, this information will help you, for sure.' ,
          'So lets get to the muscles.', 'Do you know why muscle is named muscle ?',
         


		 
		 
		 
		 
          {
            type: 'choose',
            answers: [{
               'text': 'Yes. I know.',
              'path': 'knowmusclename',
            },{
               'text': 'No. I want to know.',
              'path': 'knowmusclename',
            }]
          }
        ],
		
		
		
		   knowmusclename: [
          'The term muscle is derived from the Latin musculus meaning <b>little mouse</b>.' , 
		  'Its because of contracting muscles that look like mice moving under the skin.' , 
		 
          {
            type: 'choose',
            answers: [{
               'text': 'I want to see them.',
              'path': 'wantsee',
            }]
          }
        ],
		
		
		
        wantsee: [
		'So you wanna see them?',
		'Lets look at representative visualisations of muscles.','Every type of muscle exists for different purpose.',
		'<img style="width:100%;" src="https://www.visiblebody.com/hs-fs/hub/189659/file-2482834911-jpg/Learn_Articles/Muscular_System/Set_2_Tissue_Types/2B-Types-of-Muscle-Tissue.jpg?t=1528834912429" />',
		
          {
            type: 'choose',
            answers: [{
			  'text': ' Saw it.',
              'path': 'saw',
			 
            },
		
				
          
			
]
			
			
          }
        ],
		
        saw: [
          'Based on picture above, Can you guess how many types are there in muscles?',
     
	
		   
         
          {
            type: 'choose',
            answers: [{
			  'text': '2 Types',
              'path': 'wtypes',
			 
            },{
			  'text': '3 Types',
              'path': 'threetypes',
			 
            },,{
			  'text': '4 Types',
              'path': 'wtypes',
			 
            },
			
         
			
            
			
		
			
			
]
			
			
          }
        ],
			
        threetypes: [
          'Correct !',
         'There Names are :',
		 '•Cardiac Muscles <br/> •Skeletal Muscles <br/> •Smooth Muscles.',
		 'Should we have deeper look at pictorials?',
		 
		 
          {
            type: 'choose',
            answers: [{
			  'text': 'Sure',
              'path': 'deeplook',
			 
            },

]
			
			
          }
        ],
		
        wtypes: [
          'No! There are 3 types',
         'There Names are :',
		 '•Cardiac Muscles <br/> •Skeletal Muscles <br/> •Smooth Muscles.',
		 'Should we have deeper look at pictorials?',
		 
		 
          {
            type: 'choose',
            answers: [{
			  'text': 'Sure',
              'path': 'deeplook',
			 
            },

]
			
			
          }
        ],
		
		  deeplook: [
          'Alright .. first let us take a look at <b>Cardiac Muscle</b>. ',
           '<img style="width:100%;" src="https://www.visiblebody.com/hs-fs/hub/189659/file-2489937017-jpg/Learn_Articles/Muscular_System/Set_2_Tissue_Types/5C-Cardiac-Muscle.jpg?t=1528834912429" />' , 
           
        
          
          {
            type: 'choose',
            answers: [{
			  'text': 'What does cardiac muscle do?',
              'path': 'cardiacfunc',
			 
            },

]
			
			
          }
        ],
		  cardiacfunc: [
		
          'In your heart, There are 3 layers.',
          'The middle layer in them is called <b>myocardium.</b>',
          'It is the one who carries pumping actions of heart',
		  'And <b>inside this layer, There lies Cardiac muscles.</b>',
		  'It contracts in response to signals and makes your heart beat.',
        
          {
            type: 'choose',
            answers: [{
			  'text': 'Ok',
              'path': 'Ok1',
			 
            },
]
 }
		  
		  
		  
		  
		  
        ],
		
		  Ok1: [
          'So what does cardiac muscle do?',
         
           
          {
            type: 'choose',
            answers: [{
			  'text': 'Makes heart beat',
              'path': 'cquiz1',
			 
            },{
			  'text': 'Moves bones',
              'path': 'wquiz1',
			 
            },{
			  'text': 'Rejoins cells',
              'path': 'wquiz1',
			 
            },
]
 }
		  
       
        ],
		
		
		
       cquiz1: [
          'Correct !',
          'There is another type named <b> • Skeletal Muscle </b>',
          
		  
		    {
            type: 'choose',
            answers: [{
			  'text': 'Whats the function?',
              'path': 'whatsthediff',
			 
            },
]
 }
		  
        ],
		
		
       wquiz1: [
          'Nope !',
          'It <b> Makes heart beat. </b> , But anyways .. ',
          'There is another type named <b> • Skeletal Muscle </b>',
		  
		    {
            type: 'choose',
            answers: [{
			  'text': 'Whats the function?',
              'path': 'whatsthediff',
			 
            },
]
 }
		  
        ],
		
       whatsthediff: [
          'Skeletal muscles move bones by contracting and relaxing in response to voluntary messages from the nervous system. ',
          '<img style="width:100%;" src="https://www.visiblebody.com/hs-fs/hub/189659/file-2482834906-jpg/Learn_Articles/Muscular_System/Set_2_Tissue_Types/3C-Skeletal-Muscle.jpg?t=1528834912429" />' , 
           
		       {
            type: 'choose',
            answers: [{
			  'text': 'Next Type',
              'path': 'nexttype',
			 
            }
]
 }   
		  
        ],
		
		
		  nexttype: [
          'Smooth muscle is found in the walls of hollow organs like your intestines and stomach.',
          'They work automatically without you being aware of them. ',
          'The muscular walls of your intestines contract to push food through your body.',
		   '<img style="width:100%;" src="https://www.visiblebody.com/hs-fs/hub/189659/file-2482834916-jpg/Learn_Articles/Muscular_System/Set_2_Tissue_Types/4D-Smooth-Muscle.jpg?t=1528834912429" />' , 
           
		       {
            type: 'choose',
            answers: [{
			  'text': 'Next type.',
              'path': 'overtype',
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		  overtype: [
          'All 3 types of muscles were discussed by us.',
          'Now let us study most asked question.',
          '<b>How do muscles get bigger ?</b>.',
		  
		       {
            type: 'choose',
            answers: [{
			  'text': 'Yes. Whats the science behind it?',
              'path': 'isee',
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		  isee: [
          'Muscle is actually built not while lifting weights, but while the rest that you take after workout.',
          'They are result of the damages caused to your muscles which forces your body to have a bigger muscle.',
         
		  
		       {
            type: 'choose',
            answers: [{
			  'text': 'How exactly?',
              'path': 'how',
			 
            },
]
 }   
		  
        ],
		
		
		
		
		  how: [
          'For this you must force your muscles to adapt by creating stress that is different than the previous threshold your body has already adapted to.',
          'It simply means to lift heavier weights than you have previously lifted.',
          'This will trigger muscle protein breakdown',
		  
		       {
            type: 'choose',
            answers: [{
			  'text': 'Then...',
              'path': 'greatuses',
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		  greatuses: [
          'After you workout, your body repairs or replaces damaged muscle fibers through a cellular process where it fuses muscle fibers together to form new muscle protein strands or myofibrils.',
         'But these repaired myofibrils increase in thickness and number to create muscle hypertrophy (growth).' ,
		 'In simple language , your body tries to replair it. Making it even bigger.',
		
		  
		       {
            type: 'choose',
            answers: [{
			  'text': 'I see...',
              'path': 'soundsbetter',
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		  soundsbetter: [
          'While you are resting muscle protein synthesis is triggered.',
          'Muscle growth occurs whenever the rate of muscle protein synthesis is greater than the rate of muscle protein breakdown.',
          
		       {
            type: 'choose',
            answers: [{
			  'text': 'You said that muscles builds while resting',
              'path': 'doesitexist'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		  doesitexist: [
          'All these adaption, does not happen while you actually lift the weights. Instead, it occurs while you rest.',
          'Thats why it is said that muscles are not built by lifting , but by resting.',
		  'But you need to work out before you rest.',
		   '<div class="holder"> <div class="bar2"><p style="font-size:12px;font-family: Montserrat, sans-serif;margin-left:28px;margin-top:8px;color:black">How do muscles work and grow?</p></div><iframe class="disableRightClick" width="100%" height="400" src="https://www.youtube-nocookie.com/embed/-Dj42U4m1_E?rel=0&amp;start=7" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div> ',
		  
          
		       {
            type: 'choose',
            answers: [{
			  'text': 'Got it',
              'path': 'whenreality'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		  whenreality: [
          'So you need to stress your muscles and and allow it to have synthesis to create even larger muscles.',
		  'Remember , It is not until you rest that the repairing begins. If you are constantly exercising the same muscle, chances are it wont have enough time to rebuild itself.',
		  'You are doing more harm than good. At the very minimum, you should wait between 48 and 72 hours (2-3 days) before working the same muscle twice.',
         
          
		       {
            type: 'choose',
            answers: [{
			  'text': 'How much muscles can we gain?',
              'path': 'whenreality2'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		  whenreality2: [
          'In average natural man, a total of about 40-50 pounds of muscle in their life.',
          'In average natural woman: a total of about 20-25 pounds of muscle in their life.',
          
		       {
            type: 'choose',
            answers: [{
			  'text': 'Then how much percent body is made of muscles?',
              'path': 'survey'
			 
            }
]
 }   
		  
        ],
		
		
		
		
		
		  survey: [
          'According to Heymsfield, 30 to 40 percent of a healthy body mass is made up of skeletal muscle.',
          'For example, A 200-pound man has about 80 pounds of muscle mass.',
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'How many times do I need to workout?',
              'path': 'OKsurvey'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		
		
		  OKsurvey: [
		  'Speaking about muscles .. ' , 
          'Hit the weights hard 3-4 days per week',
		  'Never train more than 2 consecutive days in a row.',
		  'Can you guess why we are not training excessively?',
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Because Muscles grows by resting',
              'path': 'superai'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		
		
		
		  superai: [
		  'You got it!',
		  'We dont do excessive workout because of resting needs of muscles required to repair itself.' , 
        
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'What helps muscles grow?',
              'path': 'superai2'
			 
            },
]
 }   
		  
        ],
		
		
		  superai2: [
		  'Lets Proceed to <b>What helps for muscle building.</b> ' , 
          'Should we start with food?',
          
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Sure!',
              'path': 'superai3'
			 
            }
]
 }   
		  
        ],
		
		
		
		  superai3: [
		  'Here are foods that helps you grow your muscles :' , 
		  '<b> •Almonds </b> <img src="https://www.organicfacts.net/wp-content/uploads/almondsnutrition.jpg" style="width:100%;" />' , 
          'In Almonds Just 1/4 cup of almonds contains nearly 8 grams of protein -- that’s nearly 2 grams of protein more than your typical egg! ',
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Next',
              'path': 'superai4'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		  superai4: [
		   '<b> *Chocolate Milk </b> <img src="https://www.chatelaine.com/wp-content/uploads/2011/04/461ba9a44065acfa2bce826b645b-660x520.jpeg" style="width:100%;" />' , 
          'Some brand packs 20 grams of protein in 100 percent real milk in delicious chocolate, strawberry and vanilla flavors',
          
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Next',
              'path': 'path5'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		  path5: [
		   '<b> *Soy </b> <img src="https://cdn1.medicalnewstoday.com/content/images/articles/320/320472/is-soy-good-for-you.jpg" style="width:100%;" />' , 
          ' Just one cup of cooked soybeans contains over 20 grams of amino acids. Soy is also stacked with other important vitamins and minerals, making this meat alternative one of the healthiest muscle-building foods around.',
          
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Next',
              'path': 'path6'
			 
            },
]
 }   
		  
        ],
		
		
		
		  path6: [
		   '<b> *Eggs </b> <img src="https://www.seriouseats.com/recipes/images/2017/08/5708631471_06fed03518_o-1500x1125.jpg" style="width:100%;" />' , 
          ' Each egg comes loaded with around five to six grams of protein at the very low caloric cost of only 60 calories.',
          
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Next',
              'path': 'howwork'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		
		
		  howwork: [
		  '<b> *Chicken </b> <img src="https://images-gmi-pmc.edge-generalmills.com/b4054e0d-8892-4179-b2cd-1966b8bdf64f.jpg" style="width:100%;" />' , 
          ' A nice, lean 100-gram slab of this white meat will fill you with a hearty serving of 31 grams of protein with only -- wait for it -- four grams of fat.',
          
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Next',
              'path': 'howworkmean'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		  howworkmean: [
		  '<b> *Fish </b> <img src="https://images.fitpregnancy.mdpcdn.com/sites/fitpregnancy.com/files/styles/width_360/public/field/image/fresh-fish-lemons-herbs-cuttingboard_700x700.jpg" style="width:100%;" />' , 
          ' When it comes to building muscle, fish really crushes the competition. Take salmon, for example. Not only is salmon a protein powerhouse yielding around 25 grams of protein per 100-gram serving, but it’s also packed with so many other healthy nutrients that you should not avoid it. ',
          
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'What exercises to do?',
              'path': 'howml'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		  howml: [
		  'Sure, Here to help .. ',
		 '<b> *BARBELL SQUAT - 5 sets of 5 reps</b> <img src="https://www.bodybuilding.com/exercises/exerciseImages/sequences/3861/Male/m/3861_1.jpg" style="width:100%;" />' , 
          '  <img src="https://www.bodybuilding.com/exercises/exerciseImages/sequences/3861/Male/m/3861_2.jpg" style="width:100%;" /> ',
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Next',
              'path': 'predichelp'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		
		  predichelp: [
		  '<b> *PULLUPS - 2 sets of 8 reps</b> <img src="https://www.bodybuilding.com/exercises/exerciseImages/sequences/46/Male/m/46_1.jpg" style="width:100%;" />' , 
          '  <img src="https://www.bodybuilding.com/exercises/exerciseImages/sequences/46/Male/m/46_2.jpg" style="width:100%;" /> ',
         
          
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Next',
              'path': 'awesomeml'
			 
            },
]
 }   
		  
        ],
		
		
		
		
		  awesomeml: [
		   '<b> *SIDE LATERAL RAISE - 2 sets of 8 reps</b> <img src="https://www.bodybuilding.com/exercises/exerciseImages/sequences/373/Male/m/373_1.jpg" style="width:100%;" />' , 
          '  <img src="https://www.bodybuilding.com/exercises/exerciseImages/sequences/373/Male/m/373_2.jpg" style="width:100%;" /> ',
         
          
		         {
            type: 'choose',
            answers: [{
			  'text': 'Next',
              'path': 'feedbackn'
			 
            }
]
 }   
		  
        ],
		
		
		
		  feedbackn: [
		    '<b> *SIT-UP - 2 sets of 15 reps</b> <img src="https://www.bodybuilding.com/exercises/exerciseImages/sequences/217/Male/m/217_1.jpg" style="width:100%;" />' , 
          '  <img src="https://www.bodybuilding.com/exercises/exerciseImages/sequences/217/Male/m/217_2.jpg" style="width:100%;" /> ',
         
          
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
		  'There are lot other things to know about this vast topic.',
		  'But we will stop here for now in this course.',
		  'Did you enjoy the session ?',
		 
		 
		         {
            type: 'choose',
            answers: [{
			  'text': 'Yes',
              'path': 'thanks'
			 
            },{
			  'text': 'No',
              'path': 'feedn'
			 
            },
]
 }   
          
         
          
		    
		  
        ],
		
		  feedn: [
		  'Please <a href="mailto:toshuu.ps4@gmail.com">talk to us</a> and tell us what went wrong.',
		 
		 
		       
          
         
          
		    
		  
        ],
		
		
		
		
		  thanks: [
		  'Thank You! We are glad you like it.',
		   'You can always browse other courses at Rocketed App.' , 
		 
		        
          
         
          
		    
		  
        ],
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
      }, {
        targetNode: '.my_chat'
      });