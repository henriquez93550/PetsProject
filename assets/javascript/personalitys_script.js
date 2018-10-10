var Match = {
	selValue1: '',
	selValue2: '',
	selValue3: '',
	selValue4: '',
	type     : '',
	
	INTJ: { adultDog: 'Norwegian Forest Cat',
            reasonAdult: 'Norwegian Forest Cat are smart a perfect mathc for an analytical mind.  They also tend to grow alot of fur which an introvert will love to pet.',
			pupDog: 'Tabby', 
            reasonPuppy:  'Tabby kittens are smart and curious. They can be extremely loyal when given the right amount of food and social media exposure.'
		  },
	INTP: { adultDog: 'Turkish Van',
            reasonAdult: 'This cat has great reasoning skills which matches your analytical skills.  Turkish Van is, like you, in love with water', 
			pupDog: 'Ragdoll', 
            reasonPuppy:  'The Savannah is confident and dominant like a jar of mayo.  It is the result of breeding a wild cat such as a serval and a house cat.'
		  },
	ENTJ: { adultDog: 'MaineCoon',
            reasonAdult: 'The MaineCoon is probably the smartest of all cat breeds.  Both of you have one thing in common: illiteracy.', 
			pupDog: 'Savannah', 
            reasonPuppy:  'Ragdolls are smart but they can be aloof, quiet, and pensive.....just like your mother.'
		  }
	};
    
    
    
	function reSet() {
		$("#adultDog").val("");
		$("#reasonAdult").val("");
		$("#pupDog").val("");
		$("#reasonPuppy").val("");
	}; 
	reSet();
	
	var type = '';

	$('#btnGetValue').click(function() {
        Match.selValue1 = $('input[name=Q1]:checked').val();
		Match.selValue2 = $('input[name=Q2]:checked').val();
		Match.selValue3 = $('input[name=Q3]:checked').val();
		Match.selValue4 = $('input[name=Q4]:checked').val();
		
		console.log(Match.selValue1);
		console.log(Match.selValue2);
		console.log(Match.selValue3);
        console.log(Match.selValue4);
		
		type = (Match.selValue1 + Match.selValue2 + Match.selValue3 + Match.selValue4);
		console.log(type);
		
		if(type === 'INTP') {
		
			document.getElementById("mbType").value			= type;
			document.getElementById("adultDog").value       = Match['INTP'].adultDog;
			document.getElementById("reasonAdult").value    = Match['INTP'].reasonAdult;
			document.getElementById("pupDog").value         = Match['INTP'].pupDog;
			document.getElementById("reasonPuppy").value    = Match['INTP'].reasonPuppy;
		
		} else if(type === 'INTJ') {
		
			document.getElementById("mbType").value			= type;
			document.getElementById("adultDog").value       = Match['INTJ'].adultDog;
			document.getElementById("reasonAdult").value    = Match['INTJ'].reasonAdult;
			document.getElementById("pupDog").value         = Match['INTJ'].pupDog;
			document.getElementById("reasonPuppy").value    = Match['INTJ'].reasonPuppy;
		} else {
		
			document.getElementById("mbType").value			= type;
			document.getElementById("adultDog").value       = Match['ENTJ'].adultDog;
			document.getElementById("reasonAdult").value    = Match['ENTJ'].reasonAdult;
			document.getElementById("pupDog").value         = Match['ENTJ'].pupDog;
			document.getElementById("reasonPuppy").value    = Match['ENTJ'].reasonPuppy;
		
		};
		
    });
	
/* 	var adultDog = Match.INTP.adultDog;
	var reasonAdult = Match.INTP.reasonAdult;
	var pupDog = Match.INTP.pupDog;
	var reasonPuppy = Match.INTP.reasonPuppy;
	console.log(adultDog); */
                           

	
/* 	var adultDog = Match.INTP.adultDog;
	var reasonAdult = Match.INTP.reasonAdult;
	var pupDog = Match.INTP.pupDog;
	var reasonPuppy = Match.INTP.reasonPuppy;
	console.log(adultDog); */
                           

		
//		if(Match.personalityType == 'INTP') {
//			alert("value is INTP");
//			document.getElementById("adultDog").value        = Match['INTP'].adultDog;
//			document.getElementById("reasonAdult").value     = Match['INTP'].reasonAdult;
//			document.getElementById("pupDog").value          = Match['INTP'].pupDog;
//			document.getElementById("reasonPuppy").value     = Match['INTP'].reasonPuppy;
		
//		};
	
/* Logician

Commander
   ENTJ:  adult.
	 
   ENTJ:  puppy
	 

Debater
   ENTP: Standard Poodle adult
	 The Standard Poodle is extremely                         easy to train.  They are always up for a challenge and have an outgiong personality like you.
   ENTP: Jack Russell Terrier puppy
                         	 The                            Jack Russell Terrier has an off-beat personality which you will find charming.  They are schemers and the two of you will surely be in trouble together.

Advocate
   INFJ: Siberian Husky adult
	 The Siberian Husky have a sense                         of adventure which will play to your natural curiosity.  These dogs are super sharp and independent like you.
   INFJ: Australian Shepherd puppy
                          	 the                           Australian Shepherd seems to have an unlimited amount of energy. You share one thing in common with this dog: you both love to help others.

Mediator
   INFP: Old English Sheepdog adult
                         	 The                             Old English Sheepdog is like you in one respect: you both have a lot of passion and enerby to contribute.  This dog is playful, loving, and intelligent.
   INFT: Tibetan Terrier puppy
	 The Tibetan Terrier is like                             in that they are shy and reserved when meeting other people.  This dog will follow you anywhere.

Protagnoist
   ENFJ: Collie adult
	 The Collie, like you, is a natural                      born leader.  This breed is intuitive and is famous for rescuing those in trouble.
   ENFJ: Golden Retriever puppy
	 The Golden Retriever is a charismatic                   leader.  This breed shares your love for meeitng and being with others.

Campaigner
   ENFP: French Bulldog adult
	 French Bulldogs have a ton of                           personality.  They are lively and social and share your desire to meet and be with others.
   ENFP: Dalmation puppy
	 Like you, the Dalmation will                            always be doing things differently than others.  This breed is spunky and have lovable personalities.

Logistician
   ISTJ: Rhodesian Ridgeback adult
                          	 The Rho                       desian Ridgeback is loyal and responsible, and a bit subbon...like you.  This dog can be a little reserved when meeting others.
   ISTJ: Saint Bernard puppy
	 the Saint Bernard is famous                             for rescuing others in need which is something you can relate to.  This breed is very protecting and loyal family members.

Defender
   ISFJ: Labrador Retriever Adult
                           	 Labr                         ador REtrievers, like you, have an easy termperament.  This breed is also fiercely loyal and has a lot energy when it's time to play.
   ISFJ: Newfoundland puppy
	 The Newfoundland is know as                             "nature's babysitter" because of their protective nature.  While their size can be intimidating, they are gentle and loving.

Executive
   ESTJ: Briard adult
	 The Briard is one of the most                           loving and loyal of all the dog breeds.  They grow close to ther human family and have a sweet and gentle disposition.
   ESTJ: German Shepard puppy
	 The German Shepard is very protective,                  sometimes to a fault.  You are both great teammates because of your smart and obedient nature. 

Consul
   ESFJ: Bichon Frise adult
	 The Bicon Frise is a social                             butterfly like you.  This breed will do anything to please its master.
   ESFJ: Pomeranian puppy
	 Pomeranian dogs are playful,                            friendly, and intelligent.  They also have a lot of social personality and love to be the center of attention.

Virtuoso
   ISTP: Bulldog adult
	 One can't resist those cute                             little scrunchyy faces.  This breed is perfect for you because they are content to amuse themselves.
   ISTP: Black Russian Terrier puppy
                        	 The Bla                         ck Russian Terrier have a calm and patient demeanor.  Like you, this breed is naturally curious and likes to explore.

Adventurer
   ISFP: Shibu Inu adult
	 Shibas have lots of playful                             energy.  Like you they are happy doing their own thing.
   ISFP: Saluki puppy
	 Salukis are reserved and shy                            when in the presence of others.  This breed is very creative but sensitive.

Entrepreneur
   ESTP: Beagle adult
	 The Beagle is very playful and                          loves to play.  When you are busy this breed loves to chill.
   ESTP: Irish Terrier puppy
	 Irish Terrier dogs have a strong,                       bold personality.  This breed is a great companion for someone who likes to live on the edge.

Entertainer
   ESFP: Flat-Coated Retriever adult
                        	 This bree                       d has a happy, carefree personality.  The Flat-Coated Retriever loves being in a crowd and comes alive when in the spotlight.
   ESFP: Corgi puppy
	 Corgis shine when in the spotlight.                     These dogs are especially entertaining when puppies. They are always the life of the party.
 */