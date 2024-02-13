var rl = require('readline-sync');

var story = ""

story = story + "Once upon a time, there lived a person named "

var userName = rl.question("What's your name? ")
	story = story + userName + ". "
	story = story + "They came from the beautiful village of "

var villageName = rl.question("What's your village name? ")
		story = story + villageName + ". "
		story = story + "They became the world's greatest "

var profession = rl.question("What's your profession? ")
			story = story + profession + ". "
            story = story + "The person achived this title when he/she was "

var age = rl.question("when did you achive it?")
                story = story + age + ". "
                story = story + "The person had to "

var method = rl.question("What did you do to become the greatest?")
                    story = story + method +  "to become the greatest"
                    console.log(story)
