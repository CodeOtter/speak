speak
=====

A random sentence generator for JavaScript.  The current format of the project is sloppy and is meant for an easy conversion to UnityScript.  Once the conversion is done, I will clean this up to be more JavaScript friendly.  Currently, the object list and some statements are based on a modified variation of Cards against Humanity.

basic usage
-----------
```
speak();
```
This will randomly select a mood, populate a random premade statement, and return it.

select a mood
-------------

```
speak('angry');
speak('calm');
speak('joyful');
```
This will select a specified mood (Which controls punctuation, influencers, and faces.)  Valid emotions are ```'anger', 'jealousy', 'fear', 'paranoia', 'curiosity', 'joyful', 'excited', 'calm', 'ashamed', 'apathetic', 'logical'```  By default, the selected mood is random.

utilize stupidity
-----------------

```
speak(null, 0);
speak(null, 15);
speak(null, 100);
```
This will randomly select a mood, populate a random premade statement based on the stupidity percentage of the second parameter, and return it.  At 15, you have a 15% chance of the statement making very little sense.  At 100, you have a 100% change of the statement making very little sense. By default, the stupidy is set to 0%.

use custom statement templates
------------------------------

```
speak(null, null, ['I like %o, but %i, %a the %o already'])
```
This will select a random statement from your second argument, populate it, and return it.  The following symbols are used to build statements:

```
%c: conditional (then, but, and, or)
%r: reflection (is, was, will be)
%d: description (adjectives)
%o: object (nouns)
%s: source (i, we)
%a: action (verbs)
%p: possessor (my, your, our, his, her, its, the)
%m: meaning (adverb)
%i: influencer (uhhh, come on, guys, yo, yes, well, no etc.)
%j: subject (her, him, me, this, it, that)
%v: emotive action (am, can be, will be, shall be, might be, should be, could be, would be)
%t: modal action (can, will, shall, might, should, could, would)
%seg: Premade segment
```

Punctuation and faces will be randomly generated based on the mood (first) parameter.

*NOTE*: Tokenization is hacky as balls, so if you place an invalid symbol in a statement template, you will cause the script to hang indefinitely. :(
