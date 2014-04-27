//segments are parts of object-centric sentences.
function getRandomItem(list) {
	return list[Math.floor(Math.random()*list.length)];
}

// a random number between a range 
function getRandomRange(min, max) {
    return Math.random() * (max - min) + min;
}

// splices a string
function spliceSlice(str, index, count, add) {
  return str.slice(0, index) + add + str.slice(index + count);
}

symbols = new Array('c','r','d','o','s','a','p','m','i','j','v','t');
moods = new Array('anger', 'jealousy', 'fear', 'paranoia', 'curiosity', 'joyful', 'excited', 'calm', 'ashamed', 'apathetic', 'logical');
sources = new Array('i', 'we');
possessors = new Array('my', 'your', 'our', 'his', 'her', 'its', 'the', 'this');
subjects = new Array('her', 'him', 'me', 'this', 'it', 'that');
singularEmotiveActions = new Array('am', 'can be', 'will be', 'shall be', 'might be', 'should be', 'could be', 'would be');
pluralEmotiveActions = new Array('can be', 'will be', 'shall be', 'might be', 'are', 'should be', 'could be', 'would be');
modalActions = new Array('can', 'will', 'shall', 'might', 'should', 'could', 'would'); 
conditionals = new Array('then', 'but', 'and', 'or');
reflections = new Array('is', 'was', 'will be', 'be');
actions = new Array('accept', 'care', 'could', 'enjoy', 'happen', 'lead', 'open', 'reduce', 'settle', 'teach', 'account', 'carry', 'count', 'examine', 'hate', 'learn', 'order', 'refer', 'shake', 'tell', 'achieve', 'catch', 'cover', 'have', 'leave', 'ought', 'reflect', 'shall', 'tend', 'act', 'cause', 'create', 'expect', 'head', 'lend', 'own', 'refuse', 'share', 'test', 'add', 'change', 'cross', 'experience', 'hear', 'let', 'pass', 'regard', 'shoot', 'thank', 'admit', 'charge', 'cry', 'explain', 'help', 'lie', 'pay', 'relate', 'should', 'think', 'affect', 'check', 'cut', 'express', 'hide', 'like', 'perform', 'release', 'shout', 'throw', 'afford', 'choose', 'damage', 'extend', 'hit', 'limit', 'pick', 'remain', 'show', 'touch', 'agree', 'claim', 'dance', 'face', 'hold', 'link', 'place', 'remember', 'shut', 'train', 'aim', 'clean', 'deal', 'fail', 'hope', 'listen', 'plan', 'remove', 'sing', 'travel', 'allow', 'clear', 'decide', 'fall', 'hurt', 'live', 'play', 'repeat', 'sit', 'treat', 'answer', 'climb', 'deliver', 'fasten', 'identify', 'look', 'point', 'replace', 'sleep', 'try', 'appear', 'close', 'demand', 'feed', 'imagine', 'lose', 'prefer', 'reply', 'smile', 'turn', 'apply', 'collect', 'deny', 'feel', 'improve', 'love', 'prepare', 'report', 'sort', 'understand', 'argue', 'come', 'depend', 'fight', 'include', 'make', 'present', 'represent', 'sound', 'use', 'arrange', 'commit', 'describe', 'fill', 'increase', 'manage', 'press', 'require', 'speak', 'used to', 'arrive', 'compare', 'design', 'find', 'indicate', 'mark', 'prevent', 'rest', 'stand', 'visit', 'ask', 'complain', 'destroy', 'finish', 'influence', 'matter', 'produce', 'result', 'start', 'vote', 'attack', 'complete', 'develop', 'fit', 'inform', 'may', 'promise', 'return', 'state', 'wait', 'avoid', 'concern', 'die', 'fly', 'intend', 'mean', 'protect', 'reveal', 'stay', 'walk', 'base', 'confirm', 'disappear', 'fold', 'introduce', 'measure', 'prove', 'ring', 'stick', 'want', 'be', 'connect', 'discover', 'follow', 'invite', 'meet', 'provide', 'rise', 'stop', 'warn', 'beat', 'consider', 'discuss', 'force', 'involve', 'mention', 'publish', 'roll', 'study', 'wash', 'become', 'consist', 'divide', 'forget', 'join', 'might', 'pull', 'run', 'succeed', 'watch', 'begin', 'contact', 'do', 'forgive', 'jump', 'mind', 'push', 'save', 'suffer', 'wear', 'believe', 'contain', 'draw', 'form', 'keep', 'miss', 'put', 'say', 'suggest', 'will', 'belong', 'continue', 'dress', 'found', 'kick', 'move', 'raise', 'see', 'suit', 'win', 'break', 'contribute', 'drink', 'gain', 'kill', 'must', 'reach', 'supply', 'wish', 'build', 'control', 'drive', 'get', 'knock', 'need', 'read', 'sell', 'support', 'wonder', 'burn', 'cook', 'drop', 'give', 'know', 'notice', 'realize', 'send', 'suppose', 'work', 'buy', 'copy', 'eat', 'go', 'last', 'obtain', 'receive', 'separate', 'survive', 'worry', 'call', 'correct', 'enable', 'grow', 'laugh', 'occur', 'recognize', 'serve', 'take', 'would', 'can', 'cost', 'encourage', 'handle', 'lay', 'offer', 'record', 'set', 'talk', 'write');
meanings = new Array('just', 'also', 'very', 'even', 'still', 'never', 'really', 'about', 'over', 'always', 'often', 'however', 'almost', 'later', 'much', 'once', 'already', 'enough', 'maybe', 'actually', 'probably', 'of course', 'perhaps', 'sometimes', 'finally', 'more', 'less', 'better', 'early', 'especially', 'either', 'quite', 'simply', 'nearly', 'certainly', 'quickly', 'recently', 'usually', 'thus', 'exactly', 'hard', 'particularly', 'pretty', 'clearly', 'indeed', 'rather', 'suddenly', 'best', 'instead', 'fast', 'eventually', 'directly');
descriptions = new Array('so', 'different', 'used', 'important', 'every', 'large', 'available', 'popular', 'able', 'basic', 'known', 'various', 'difficult', 'several', 'united', 'historical', 'hot', 'useful', 'mental', 'scared', 'additional', 'emotional', 'old', 'political', 'similar', 'healthy', 'financial', 'medical', 'traditional', 'federal', 'entire', 'strong', 'actual', 'significant', 'successful', 'electrical', 'expensive', 'pregnant', 'intelligent', 'interesting', 'poor', 'happy', 'responsible', 'cute', 'helpful', 'recent', 'willing', 'nice', 'wonderful', 'impossible', 'serious', 'huge', 'rare', 'technical', 'typical', 'competitive', 'critical', 'electronic', 'immediate', 'whose', 'aware', 'educational', 'environmental', 'global', 'legal', 'relevant', 'accurate', 'capable', 'dangerous', 'dramatic', 'efficient', 'powerful', 'foreign', 'hungry', 'practical', 'psychological', 'severe', 'suitable', 'numerous', 'sufficient', 'unusual', 'consistent', 'cultural', 'existing', 'famous', 'pure', 'afraid', 'obvious', 'careful', 'latter', 'obviously', 'unhappy', 'acceptable', 'aggressive', 'distinct', 'eastern', 'logical', 'reasonable', 'strict', 'successfully', 'administrative', 'automatic', 'civil', 'former', 'massive', 'southern', 'unfair', 'visible', 'alive', 'angry', 'desperate', 'exciting', 'friendly', 'lucky', 'realistic', 'sorry', 'ugly', 'unlikely', 'anxious', 'comprehensive', 'curious', 'impressive', 'informal', 'inner', 'pleasant', 'sexual', 'sudden', 'terrible', 'unable', 'weak', 'wooden', 'asleep', 'confident', 'conscious', 'decent', 'embarrassed', 'guilty', 'lonely', 'mad', 'nervous', 'odd', 'remarkable', 'substantial', 'suspicious', 'tall', 'tiny', 'more', 'some', 'one', 'all', 'many', 'most', 'other', 'such', 'even', 'new', 'just', 'good', 'any', 'each', 'much', 'own', 'great', 'another', 'same', 'few', 'free', 'right', 'still', 'best', 'public', 'human', 'both', 'local', 'sure', 'better', 'general', 'specific', 'enough', 'long', 'small', 'less', 'high', 'certain', 'little', 'common', 'next', 'simple', 'hard', 'past', 'big', 'possible', 'particular', 'real', 'major', 'personal', 'current', 'left', 'national', 'least', 'natural', 'physical', 'short', 'last', 'single', 'individual', 'main', 'potential', 'professional', 'international', 'lower', 'open', 'according', 'alternative', 'special', 'working', 'true', 'whole', 'clear', 'dry', 'easy', 'cold', 'commercial', 'full', 'low', 'primary', 'worth', 'necessary', 'positive', 'present', 'close', 'creative', 'green', 'late', 'fit', 'glad', 'proper', 'complex', 'content', 'due', 'effective', 'middle', 'regular', 'fast', 'independent', 'original', 'wide', 'beautiful', 'complete', 'active', 'negative', 'safe', 'visual', 'wrong', 'ago', 'quick', 'ready', 'straight', 'white', 'direct', 'excellent', 'extra', 'junior', 'pretty', 'unique', 'classic', 'final', 'overall', 'private', 'separate', 'western', 'alone', 'familiar', 'official', 'perfect', 'bright', 'broad', 'comfortable', 'flat', 'rich', 'warm', 'young', 'heavy', 'valuable', 'correct', 'leading', 'slow', 'clean', 'fresh', 'normal', 'secret', 'tough', 'brown', 'cheap', 'deep', 'objective', 'secure', 'thin', 'chemical', 'cool', 'extreme', 'exact', 'fair', 'fine', 'formal', 'opposite', 'remote', 'total', 'vast', 'lost', 'smooth', 'dark', 'double', 'equal', 'firm', 'frequent', 'internal', 'sensitive', 'constant', 'minor', 'previous', 'raw', 'soft', 'solid', 'weird', 'amazing', 'annual', 'busy', 'dead', 'false', 'round', 'sharp', 'thick', 'wise', 'equivalent', 'initial', 'narrow', 'nearby', 'proud', 'spiritual', 'wild', 'adult', 'apart', 'brief', 'crazy', 'prior', 'rough', 'sad', 'sick', 'strange', 'external', 'illegal', 'loud', 'mobile', 'nasty', 'ordinary', 'royal', 'senior', 'super', 'tight', 'upper', 'yellow', 'dependent', 'funny', 'gross', 'ill', 'spare', 'sweet', 'upstairs', 'usual', 'brave', 'calm', 'dirty', 'downtown', 'grand', 'honest', 'loose', 'male', 'quiet', 'brilliant', 'dear', 'drunk', 'empty', 'female', 'inevitable', 'neat', 'ok', 'representative', 'silly', 'slight', 'smart', 'stupid', 'temporary', 'weekly', 'that', 'this', 'what', 'which', 'time', 'these', 'work', 'no', 'only', 'first', 'over', 'business', 'his', 'game', 'think', 'after', 'life', 'day', 'home', 'economy', 'away', 'either', 'fat', 'key', 'training', 'top', 'level', 'far', 'fun', 'house', 'kind', 'future', 'action', 'live', 'period', 'subject', 'mean', 'stock', 'chance', 'beginning', 'upset', 'chicken', 'head', 'material', 'salt', 'car', 'appropriate', 'inside', 'outside', 'standard', 'medium', 'choice', 'north', 'square', 'born', 'capital', 'shot', 'front', 'living', 'plastic', 'express', 'mood', 'feeling', 'otherwise', 'plus', 'saving', 'animal', 'budget', 'minute', 'character', 'maximum', 'novel', 'plenty', 'select', 'background', 'forward', 'glass', 'joint', 'master', 'red', 'vegetable', 'ideal', 'kitchen', 'mother', 'party', 'relative', 'signal', 'street', 'connect', 'minimum', 'sea', 'south', 'status', 'daughter', 'hour', 'trick', 'afternoon', 'gold', 'mission', 'agent', 'corner', 'east', 'neither', 'parking', 'routine', 'swimming', 'winter', 'airline', 'designer', 'dress', 'emergency', 'evening', 'extension', 'holiday', 'horror', 'mountain', 'patient', 'proof', 'west', 'wine', 'expert', 'native', 'opening', 'silver', 'waste', 'plane', 'leather', 'purple', 'specialist', 'bitter', 'incident', 'motor', 'pretend', 'prize', 'resident', 'angry', 'furious', 'bad', 'awful', 'terrible', 'horrible', 'big', 'huge', 'gigantic', 'giant', 'clean', 'spotless', 'cold', 'freezing', 'crowded', 'packed', 'dirty', 'filthy', 'funny', 'hilarious', 'good', 'wonderful', 'fantastic', 'excellent', 'hot', 'boiling', 'hungry', 'starving', 'interesting', 'fascinating', 'old', 'ancient', 'pretty', 'gorgeous', 'scary', 'terrifying', 'small', 'tiny', 'surprising', 'astounding', 'tired', 'exhausted', 'ugly', 'hideous');
objects = new Array('gypsy curse', 'moment of silence', 'sausage festival', 'honest cop with nothing left to lose', 'famine', 'flesh-eating bacteria', 'flying sex snakes', 'shapeshifters', 'porn stars', '72 virgins', 'time travel paradox', 'authentic mexican cuisine', 'bling', 'consultants', 'crippling debt', 'daddy issues', 'donald trump seal of approval', 'former president george w. bush', 'full frontal nudity', 'hormone injections', 'public ridicule', 'boogers', 'inevitable heat death of the universe', 'miracle of childbirth', 'rapture', 'white privilege', 'wifely duties', 'hamburglar', 'axe body spray', 'blood of christ', 'batman', 'agriculture', 'robust mongoloid', 'natural selection', 'coat hanger abortions', 'michelle obama\'s arms', 'world of warcraft', 'obesity', 'homoerotic volleyball montage', 'lockjaw', 'mating display', 'testicular torsion', 'all-you-can-eat shrimp for $4.99', 'domino\'s oreo dessert pizza', 'kanye west', 'hot cheese', 'raptor attacks', 'smegma', 'alcoholism', 'middle-aged man on roller skates', 'care bear stare', 'oversized lollipops', 'self-loathing', 'children on leashes', 'half-assed foreplay', 'holy bible', 'german dungeon porn', 'teenage pregnancy', 'gandhi', 'uppercuts', 'customer service representatives', 'genitals', 'science', 'flightless birds', 'good sniff', 'balanced breakfast', 'historically black colleges', 'make-a-wish foundation', 'clandestine butt scratch', 'passive-aggressive post-it notes', 'chinese gymnastics team', 'nocturnal emissions', 'jews', 'humps', 'powerful thighs', 'gentle caress of the inner thigh', 'sexual tension', 'forbidden fruit', 'skeletor', 'fancy feast', 'sweet, sweet vengeance', 'republicans', 'gassy antelope', 'natalie portman', 'kamikaze pilots', 'sean connery', 'homosexual agenda', 'hardworking mexican', 'falcon with a cap on its head', 'altar boys', 'kool-aid man', 'free samples', 'big hoopla about nothing', 'three-fifths compromise', 'lactation', 'world peace', 'robocop', 'chutzpah', 'justin bieber', 'oompa-loompas', 'puberty', 'ghosts', 'asymmetric boob job', 'vigorous jazz hands', 'gogurt', 'police brutality', 'john wilkes booth', 'preteens', 'darth vader', 'sad handjob', 'adderall', 'embryonic stem cells', 'tasteful sideboob', 'panda sex', 'icepick lobotomy', 'tom cruise', 'mouth herpes', 'sperm whales', 'homeless people', 'third base', 'incest', 'pac-man uncontrollably guzzling cum', 'mime having a stroke', 'hulk hogan', 'god', 'golden showers', 'emotions', 'pabst blue ribbon', 'placenta', 'spontaneous human combustion', 'friends with benefits', 'old-people smell', 'inner demons', 'super soaker full of cat pee', 'aaron burr', 'chronic', 'cockfights', 'friendly fire', 'ronald reagan', 'disappointing birthday party', 'sassy black woman', 'mathletes', 'tiny horse', 'william shatner', 'm. night shyamalan plot twist', 'jew-fros', 'mutually-assured destruction', 'pedophiles', 'yeast', 'catapults', 'poor people', 'hustle', 'force', 'intelligent design', 'loose lips', 'aids', 'pictures of boobs', 'Ubermensch', 'sarah palin', 'american gladiators', 'scientology', 'penis envy', 'frolicking', 'midgets shitting into a bucket', 'KKK', 'genghis khan', 'crystal meth', 'serfdom', 'stranger danger', 'bop it', 'shaquille o\'neal\'s acting career', 'prancing', 'vigilante justice', 'overcompensation', 'pixelated bukkake', 'lifetime of sadness', 'racism', 'dwarf tossing', 'sunshine and rainbows', 'monkey smoking a cigar', 'flash flooding', 'lance armstrong\'s missing testicle', 'dry heaving', 'terrorists', 'britney spears at 55', 'attitude', 'leprosy', 'gloryholes', 'nipple blades', 'heart of a child', 'puppies', 'dental dams', 'toni morrison\'s vagina', 'taint', 'ethnic cleansing', 'little engine that could', 'invisible hand', 'unfathomable stupidity', 'euphoria by calvin klein', 're-gifting', 'autocannibalism', 'erectile dysfunction', 'collection of high-tech sex toys', 'pope', 'white people', 'tentacle porn', 'too much hair gel', 'seppuku', 'same-sex ice dancing', 'charisma', 'keanu reeves', 'sean penn', 'nickelback', 'look-see', 'menstruation', 'kids with ass cancer', 'salty surprise', 'south', 'violation of our most basic human rights', 'necrophilia', 'centaurs', 'bill nye the science guy', 'black people', 'chivalry', 'lunchables', 'bitches', 'profoundly handicapped', 'heartwarming orphans', 'mechahitler', 'fiery poops', 'another goddamn vampire movie', 'tangled slinky', 'estrogen', 'zesty breakfast burrito', 'bleached asshole', 'michael jackson', 'cybernetic enhancements', 'guys who don\'t call', 'smallpox blankets', 'masturbation', 'classist undertones', 'queefing', 'edible underpants', 'viagra', 'soup that is too hot', 'muhammad (praise be unto him)', 'surprise sex', 'five-dollar footlongs', 'dick fingers', 'multiple stab wounds', 'child abuse', 'anal beads', 'civilian casualties', 'robert downey, jr', 'horse meat', 'really cool hat', 'kim jong-il', 'stray pube', 'jewish fraternities', 'token minority', 'doin\' it in the butt', 'can of whoop-ass', 'windmill full of corpses', 'count chocula', 'death ray', 'glass ceiling', 'cooler full of organs', 'american dream', 'keg stands', 'take-backsies', 'dead babies', 'foreskin', 'saxophone solos', 'italians', 'fetus', 'dick cheney', 'amputees', 'eugenics', 'relationship status', 'christopher walken', 'bees', 'harry potter erotica', 'college', 'nazis', '8 oz. of sweet mexican black-tar heroin', 'stephen hawking talking dirty', 'dead parents', 'object permanence', 'opposable thumbs', 'racially-biased sat questions', 'jibber-jabber', 'chainsaws for hands', 'nicolas cage', 'child beauty pageants', 'explosions', 'repression', 'roofies', 'vagina', 'assless chaps', 'murder most foul', 'trail of tears', 'goblins', 'hope', 'rev. dr. martin luther king, jr', 'micropenis', 'soul', 'hot mess', 'vikings', 'hot people', 'seduction', 'oedipus complex', 'geese', 'global warming', 'new age music', 'hot pockets', 'vehicular manslaughter', 'women\'s suffrage', 'defective condom', 'judge judy', 'african children', 'virginia tech massacre', 'barack obama', 'asians who aren\'t good at math', 'elderly japanese men', 'heteronormativity', 'arnold schwarzenegger', 'road head', 'spectacular abs', 'figgy pudding', 'mopey zoo lion', 'bag of magic beans', 'poor life choices', 'sex life', 'auschwitz', 'thermonuclear detonation', 'clitoris', 'big bang', 'land mines', 'friends who eat all the snacks', 'goats eating cans', 'dance of the sugar plum fairy', 'man meat', 'me time', 'underground railroad', 'poorly-timed holocaust jokes', 'sea of troubles', 'lumberjack fantasies', 'morgan freeman\'s voice', 'women in yogurt commercials', 'natural male enhancement', 'genital piercings', 'passable transvestites', 'sexy pillow fights', 'balls', 'grandma', 'friction', 'party poopers', 'tempur-pedic swedish sleep system', 'hurricane katrina', 'gays', 'folly of man', 'men', 'amish', 'pterodactyl eggs', 'team-building exercises', 'brain tumor', 'fear itself', 'lady gaga', 'milk man', 'foul mouth', 'big black dick', 'beached whale', 'bloody pacifier', 'crappy little hand', 'low standard of living', 'nuanced critique', 'panty raids', 'passionate latino lover', 'rival dojo', 'web of lies', 'woman scorned', 'clams', 'appreciative snapping', 'neil patrick harris', 'shaft', 'bosnian chicken farmers', 'nubile slave boys', 'carnies', 'suicidal thoughts', 'dorito breath', 'enormous scandinavian women', 'gandalf', 'genetically engineered super-soldiers', 'george clooney\'s musk', 'gladiatorial combat', 'good grammar', 'hipsters', 'historical revisionism', 'insatiable bloodlust', 'jafar', 'jean-claude van damme', 'just the tip', 'mad hacky-sack skills', 'media coverage', 'medieval times dinner and tournament', 'moral ambiguity', 'machete', 'one thousand slim jims', 'ominous background music', 'quiche', 'quivering jowls', 'revenge fucking', 'ryan gosling riding in on a white horse', 'santa claus', 'scrotum tickling', 'sexual humiliation', 'sexy siamese twins', 'slow motion', 'space muffins', 'statistically validated stereotypes', 'sudden poop explosion disease', 'boners of the elderly', 'economy', 'fanta girls', 'gulags', 'harsh light of day', 'hiccups', 'shambling corpse of larry king', 'four arms of vishnu', 'words, words, words', 'zeus\'s sexual appetites.');

function speak(mood, stupidity, statements) {

	segments = new Array(
        '%s %a %p? %o',
        '%s %v %d',
        '%p? %o %r? %d',
        '%p %o %r %o',
        '%s %a %j, %o',
        '%s %a %o',
        '%s %a %p %d %o',
        '%o %r %p %d %o',
        '%s %t %a %o',
        '%m %a %j',
        '%i'
    );

    statements = statements || new Array(
        'if %seg, %c %seg',
        '%seg...? %seg',
        'should %s %a %p? %o %c %m %a %p %d %o',
        '%i, %seg',
        '%seg',
        '%seg. %i',
        '%s %v %d, %c? %seg',
        '%s %t %m? %a %o',
        '%o',
        'i don\'t always %a, but when i do, it\'s %o',
        'maybe she\'s born with it.  maybe it\s %o',
        'i got 99 problems but %o ain\'t one',
        'i drink to forget %p %o',
        '%seg.  that\'s how I want to die',
        'for my next trick, I will pull %o out of %o',
        '%o is a slippery slope that leads to %o',
        '%o.  high five, bro',
        'during sex, I like to think about %o',
        '%seg: kid-tested, mother-approved',
        '%o + %o = %o',
        'science will never explain %o',
        'my country, \'tis of thee, sweet land of %o',
        '#%o',
        '%o.tumblr.com',
        '%o. the other white meat',
        'you\'re not gonna believe this, but %seg',
        '%o ain\'t nothin\' to fuck wit\'!',
        'I like %o, but %i, %a the %o already'
    );

    mood = mood || getRandomItem(moods);
    
    switch(mood) {
    	default:
	    case 'anger':
	        influencers = new Array('goddamnit', 'fuck', 'shit', 'argghhh', 'grrrrr');
	        punctuations = new Array('.', '...', '!', '!!!', '?!?');
	        faces = new Array('>:)', '>:(', '>:|');
	    break;
	    case 'jealousy':
	        influencers = new Array('hrmmm', 'oh yes', 'hey', 'oooooo');
	        punctuations = new Array('.', '...', '!', '?', '!!!', '?!?');
	        faces = new Array(':)', ':(', ':d', '<3', ':c', 'c:', ':o', ':O', '.___.', '-___-', '-___-\'');
		break;
	    case 'fear':
	        influencers = new Array('oh god', 'no', 'well', 'ummmm');
	        punctuations = new Array('.', '...', '!', '?', '!!!', '?!?');
	        faces = new Array(':(', ':C', 'D:', ':o', ':O', '-___-\'');
	    break;
	    case 'paranoia':
	        influencers = new Array('wait', 'what', 'no', '');
	        punctuations = new Array('.', '!', '?', '!!!', '?!?');
	        faces = new Array(':|', ':o', ':O', ':p', '<_<', '>_>', '-___-\'');
	    break;
	    case 'curiosity':
	        influencers = new Array('ooooo', 'hey', 'wow', 'yes', 'yo', 'oh');
	        punctuations = new Array('.', '...', '!', '?');
	        faces = new Array(':)', ':3', ':o', ':O', ':D', ';)');
	    break;
	    case 'joyful':
	        influencers = new Array('oh', 'yes', 'wow', 'oh boy');
	        punctuations = new Array('!', '!!!');
	        faces = new Array(':)', ':D', ':3', '<3', 'C:', ':P');
	    break;
	    case 'excited':
	        influencers = new Array('oh', 'yay', 'wow');
	        punctuations = new Array('!', '!!!', '?!?');
	        faces = new Array(':)', ':D', ':3', '<3', 'C:', ':P', ':O');
	    break;
	    case 'calm':
	        influencers = new Array('well');
	        punctuations = new Array('.', '...');
	        faces = new Array(':|');
	    break;
	    case 'ashamed':
	        influencers = new Array('no', 'uhhh', 'ummmm', 'sorry');
	        punctuations = new Array('...');
	        faces = new Array(':(', 'D:', ':C', ':L', '.___.', '-___-', '-___-\'');
	    break;
	    case 'apathetic':
	        influencers = new Array('meh');
	        punctuations = new Array('...');
	        faces = new Array(':|', '.___.', '-___-');
	    break;
	    case 'logical':
	        influencers = new Array('yes', 'no');
	        punctuations = new Array('.');
	        faces = new Array(':|');
	    break;
    }
    
    if(stupidity === null) {
    	stupidity = 0;
    }
    
    var statement = '';
    if(getRandomRange(0, 100) <= stupidity) {
		statement = getRandomItem(segments);
	} else {
    	statement = getRandomItem(statements);
	}

    // fill in all segments
    while(statement.search('%seg') != -1) {
    	statement = statement.split('%seg').join(getRandomItem(segments));
    }

    var position = statement.search('%');
    while(position != -1) {
    	var cursor = position + 1,
    		symbol = '',
    		word = '',
    		code = statement.charCodeAt(cursor);

    	while((code >= 97 && code <= 122) || code == 63) {
    		if(code == 63) {
    			if(getRandomRange(0, 100) > 80) {
    				// reject the symbol
    				symbol = '';
    				break;
    			}
    		} else {
    			symbol += statement[cursor];
    		}
    		cursor += 1;
    		code = statement.charCodeAt(cursor);
    	}

    	// Intelligence check
    	if(getRandomRange(0, 100) <= stupidity) {
			symbol = getRandomItem(symbols);
		}
    	
    	switch(symbol) {
    		// conditional (then, but, and, or)
    		case 'c': word = getRandomItem(conditionals); break;
    			
    		// reflection (is, was, will be)
    		case 'r': word = getRandomItem(reflections); break;
    		
    		// description (adjectives)
    		case 'd': word = getRandomItem(descriptions); break;
    		
    		// object (nouns)
    		case 'o': word = getRandomItem(objects); break;
    		
    		//  source (i, we, she, he, it)
    		case 's': word = getRandomItem(sources); break;
    		
    		// action (verbs)
    		case 'a': word = getRandomItem(actions); break;
    		
    		// possessor (my, your, our, his, her, its, the, a)
    		case 'p': word = getRandomItem(possessors); break;
    		
    		// meaning (adverb)
    		case 'm': word = getRandomItem(meanings); break;
    		
    		// influencer (uhhh, come on, guys, yo, yes, well, no etc.)
    		case 'i': word = getRandomItem(influencers); break;
    		
    		// subject
    		case 'j': word = getRandomItem(subjects); break;
    		
    		// emotive action (am, can, will, shall, might, are, should, could, would)
    		case 'v':
    			var previous = position - 3;
    			if(previous < 0) {
    				previous = 0;
    			}

    			if(statement.substr(previous, 3).search('we') == -1) {
    				word = getRandomItem(singularEmotiveActions); break;	
    			} else {
    				word = getRandomItem(pluralEmotiveActions); break;
    			}
    		
    		// modal action (can, will, shall, might, are, should, could, would)
    		case 't':
    			word = getRandomItem(modalActions); break;
    		
    		default: continue;
    	}
    	console.log(word)
    	statement = spliceSlice(statement, position, cursor - position, word);
    	position = statement.search('%');
    }
    
    var result = '';
    if(statement.substr(0, 6) == 'should' || statement.substr(0, 2) == 'if') {
    	result = statement + '?';
    } else {
    	result = statement + getRandomItem(punctuations);
    }
    
    if(getRandomRange(0, 100) > 80) {
    	result += ' ' + getRandomItem(faces)
    }

    return result;
}
