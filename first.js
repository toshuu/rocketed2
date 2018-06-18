var chat = new Chat({

        greeting: [
		
        'Please enter your name <input placeholder="Name" id="name"  type="text" class="validate"><a onclick="nameset();show();" style="background-color:#4a90e2" class="waves-effect waves-light btn">Ok</a>',
		'<p>Hi,<span "display:inline" id="displayname"></span> Welcome to Rocketed.</p>',
           'Apparently , This is your first time here here. Right ?','<p style="color:#4a90e2">Click the blue buttons below to reply.</p>',
            
           
          {
            type: 'choose',
            answers: [
			
		
			{
			  'text': 'Yes',
              'path': '1'
			 
            },{
			  'text': 'No',
              'path': '2'
			 
            },
			
	
			]
          }
        ],

		
		   1: [
          'Let me get you some quick tips to get started.', 'You have to click buttons below to reply.'
          ,
          {
            type: 'choose',
            answers: [{
               'text': 'Got it',
              'path': 'got_it'
            }]
          }
        ],
		
		
		   2: [
          'Haha! Dont lie ... New user.' , 
          ,
         
          {
            type: 'choose',
            answers: [{
               'text': 'Yes, I am first time here.',
              'path': '1'
            }]
          }
        ],
		
		
		
		   got_it: [
          'We have courses on various topics.' , 'But we need to know what things interests you.' ,  'Do you mind setting your personal interests one by one?' , 
          {
            type: 'choose',
            answers: [{
               'text': 'Lets do that!',
              'path': 'letsdothat'
            }]
          }
        ],
		
		
		
        letsdothat: [
		'Select any one from list',
		'<div class="row" style="margin-top:12px;">   <div onclick="show();technology();" style="border:1px solid #9e9e9e;;padding: 10px 10px;border-radius:2px;" class="col s6 waves-effect waves-dark "><center><img style="width:45px;height:45px;" src="img/first/technology.png"/><br/>Technology</center></div>      <div  onclick="show();business();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/business.png"/><br/>Business</center></div>     <div  onclick="show();photography();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/photography.png"/><br/>Photography</center></div>     <div  onclick="show();arts();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/arts.png"/><br/>Arts</center></div>     <div  onclick="show();future();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/future.png"/><br/>Future</center></div>     <div  onclick="show();history();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/history.png"/><br/>History</center></div>     <div  onclick="show();science();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/science.png"/><br/>Science</center></div>     <div  onclick="show();health();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/health.png"/><br/>Health</center></div>     </div>',
		
          {
            type: 'choose',
            answers: [{
			  'text': ' Proceed',
              'path': 'proceed1'
			 
            },
		
				
          
			
]
			
			
          }
        ],
		
        proceed1: [
          'Nice Choice!',
          'Now select another.',
		   '<div class="row" style="margin-top:12px;">   <div onclick="show();technology2();" style="border:1px solid #9e9e9e;;padding: 10px 10px;border-radius:2px;" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/technology.png"/><br/>Technology</center></div>      <div  onclick="show();business2();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/business.png"/><br/>Business</center></div>     <div  onclick="show();photography2();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/photography.png"/><br/>Photography</center></div>     <div  onclick="show();arts2();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/arts.png"/><br/>Arts</center></div>     <div  onclick="show();future2();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/future.png"/><br/>Future</center></div>     <div  onclick="show();history2();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/history.png"/><br/>History</center></div>     <div  onclick="show();science2();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/science.png"/><br/>Science</center></div>     <div  onclick="show();health2();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/health.png"/><br/>Health</center></div>     </div>',
		
         
          {
            type: 'choose',
            answers: [{
			  'text': ' Proceed',
              'path': 'proceed2'
			 
            },
			
         
			
            
			
		
			
			
]
			
			
          }
        ],
			
        proceed2: [
          'Awesome! Now select interest #3',
          '<div class="row" style="margin-top:12px;">   <div onclick="show();technology3();" style="border:1px solid #9e9e9e;;padding: 10px 10px;border-radius:2px;" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/technology.png"/><br/>Technology</center></div>      <div  onclick="show();business3();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/business.png"/><br/>Business</center></div>     <div  onclick="show();photography3();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/photography.png"/><br/>Photography</center></div>     <div  onclick="show();arts3();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/arts.png"/><br/>Arts</center></div>     <div  onclick="show();future3();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/future.png"/><br/>Future</center></div>     <div  onclick="show();history3();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/history.png"/><br/>History</center></div>     <div  onclick="show();science3();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/science.png"/><br/>Science</center></div>     <div  onclick="show();health3();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/health.png"/><br/>Health</center></div>     </div>',
		
          {
            type: 'choose',
            answers: [{
			  'text': 'Proceed',
              'path': 'proceed3'
			 
            },

]
			
			
          }
        ],
		
		  proceed3: [
          'Finally! Select one last interest below. ',
            '<div class="row" style="margin-top:12px;">   <div onclick="show();technology4();" style="border:1px solid #9e9e9e;;padding: 10px 10px;border-radius:2px;" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/technology.png"/><br/>Technology</center></div>      <div  onclick="show();business4();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/business.png"/><br/>Business</center></div>     <div  onclick="show();photography4();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/photography.png"/><br/>Photography</center></div>     <div  onclick="show();arts4();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/arts.png"/><br/>Arts</center></div>     <div  onclick="show();future4();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/future.png"/><br/>Future</center></div>     <div  onclick="show();history4();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/history.png"/><br/>History</center></div>     <div  onclick="show();science4();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/science.png"/><br/>Science</center></div>     <div  onclick="show();health4();" style="border:1px solid #9e9e9e;border-radius:2px;padding: 10px 10px" class="col s6 waves-effect waves-dark"><center><img style="width:45px;height:45px;" src="img/first/health.png"/><br/>Health</center></div>     </div>',
		
          
          {
            type: 'choose',
            answers: [{
			  'text': 'Proceed',
              'path': 'proceed4'
			 
            },

]
			
			
          }
        ],
		  proceed4: [
		
          'Done! Now we know what you like.',
          'Now we will show you courses based on what you like.',
        
          {
            type: 'choose',
            answers: [{
			  'text': 'Awesome!',
              'path': 'awesome'
			 
            },
]
 }
		  
		  
		  
		  
		  
        ],
		
		  awesome: [
          'You can launch any course and learn.',
          'An expert teacher bot will have conversation with you.',
          'You will learn more and more by having expert conversations.',
         
           
          {
            type: 'choose',
            answers: [{
			  'text': 'Okay. Awesome.',
              'path': 'awesome2'
			 
            },
]
 }
		  
       
        ],
		
		
		
       awesome2: [
          'Ready to have fun?',
		  
		    {
            type: 'choose',
            answers: [{
			  'text': 'Yes.',
              'path': 'contactask'
			 
            },
]
 }
		  
        ],
		
       yesz: [
          'Then lets get started ...  <a onclick="init()" class="waves-effect waves-light btn">Get Started</a>',
		  
		   
		  
        ],
		
		
		
       contactask: [
          'Before you start , would you mind giving your contact no. for better analysis:',
		  'Please enter mobile no.<input placeholder="Contact number" id="contactno"  type="text" class="validate"><a onclick="contactset();show();" class="waves-effect waves-light btn">Ok</a>',
		  
		  
		    {
            type: 'choose',
            answers: [{
			  'text': 'Proceed.',
              'path': 'yesz'
			 
            },
]
 }
		  
        ],
		
		
		
		
      }, {
        targetNode: '.my_chat'
      });