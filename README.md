speak
=====

A random sentence generator for JavaScript.  Currently, the default object list and some statements are based on a modified variation of Cards against Humanity.

basic usage
-----------
```
new Speak().getStatement();
```
This will randomly select a mood, populate a random premade statement, and return it.

select a mood
-------------

```
new Speak().getStatement('angry');
new Speak().getStatement('calm');
new Speak().getStatement('joyful');
```
This will select a specified mood (Which controls punctuation, influencers, and faces.)  Valid emotions are ```'anger', 'jealousy', 'fear', 'paranoia', 'curiosity', 'joyful', 'excited', 'calm', 'ashamed', 'apathetic', 'logical'```  By default, the selected mood is random.

utilize stupidity
-----------------

```
new Speak().getStatement(null, 0);
new Speak().getStatement(null, 15);
new Speak().getStatement(null, 100);
```
This will randomly select a mood, populate a random premade statement based on the stupidity percentage of the second parameter, and return it.  At 15, you have a 15% chance of the statement making very little sense.  At 100, you have a 100% change of the statement making very little sense. By default, the stupidy is set to 0%.

use custom statement templates
------------------------------

```
new Speak().getStatement(null, null, ['I like %o, but %i, %a the %o already'])
```
This will select a random statement from your second argument, populate it, and return it.  The following symbols are used to build statements:

```
%c: conditional (then, but, and, or)
%ref: reflection (is, was, will be)
%d: description (adjectives)
%o: object (nouns)
%s: source (i, we)
%a: action (verbs)
%p: possessor (my, your, our, his, her, its, the)
%m: meaning (adverb)
%i: influencer (uhhh, come on, guys, yo, yes, well, no etc.)
%sub: subject (her, him, me, this, it, that)
%emo: emotive action (am, can be, will be, shall be, might be, should be, could be, would be)
%q: questions (can, will, shall, might, should, could, would)
%punc: punctuation
%e: emoticon
%seg: Premade segment
```

Punctuation and faces will be randomly generated based on the mood (first) parameter.

*NOTE*: Tokenization is hacky as balls, so if you place an invalid symbol in a statement template, this may cause the script to hang indefinitely. :(
