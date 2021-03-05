function sentence() {
	console.log('lol');
}
/*
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

	// Pick a remaining element...
	randomIndex = Math.floor(Math.random() * currentIndex);
	currentIndex -= 1;

	// And swap it with the current element.
	temporaryValue = array[currentIndex];
	array[currentIndex] = array[randomIndex];
	array[randomIndex] = temporaryValue;
  }

  return array;
}

			var verbs, nouns, adjectives, adverbs, preposition;
            nouns = ["bird", "clock", "boy", "boy", "boy", "plastic", "duck", "teacher", "teacher", "teacher", "teacher", "sister", "sister", "sister", "sister", "mom", "Lexi", "Jacob", "Lexi", "Jacob", "teacher", "teacher", "teacher", "teacher", "sister", "sister", "sister", "sister", "mom", "Lexi", "Jacob", "Lexi", "Jacob", "teacher", "teacher", "teacher", "teacher", "sister", "sister", "sister", "sister", "mom", "Lexi", "Jacob's throbbing member", "Lexi's tits", "Jacob's dick", "hamster", "dog", "your member", "your face", "sisters"];
            verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed", "blew", "sucked", "sucked off", "came", "fucked", "squirted", "raped", "fucked"];
            adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy", "moist", "aroused", "horny", "wet", "erect", "squirming"];
            adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately", "moistly", "forcibly", "instinctually", "sexily", "sensually", "pleasuringly", "violently", ];
            preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards", "into your", "all over", "right up"];
			nouns = shuffle(nouns);
			verbs = shuffle(verbs);
			adjectives = shuffle(adjectives);
			preposition = shuffle(preposition);
            function randGen() {
              return Math.floor(Math.random() * 5);
            }

            function sentence() {
              var rand1 = Math.floor(Math.random() * 10);
              var rand2 = Math.floor(Math.random() * 10);
              var rand3 = Math.floor(Math.random() * 10);
              var rand4 = Math.floor(Math.random() * 10);
              var rand5 = Math.floor(Math.random() * 10);
              var rand6 = Math.floor(Math.random() * 10);
              //                var randCol = [rand1,rand2,rand3,rand4,rand5];
              //                var i = randGen();
              var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".";

              document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";
            };
            sentence();*/