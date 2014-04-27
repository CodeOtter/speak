speak
=====

A random sentence generator for JavaScript.  The current format of the project is sloppy and is meant for an easy conversion to UnityScript.  Once the conversion is done, I will clean this up to be more JavaScript friendly.

usage
=====

```
speak();
```
This will randomly select a mood, populate a random premade statement, and return it.

```
speak('angry');
speak('calm');
speak('joyful');
```

This will select a specified mood (Which controls punctuation, influencers, and faces.)  Valid emotions are ```'anger', 'jealousy', 'fear', 'paranoia', 'curiosity', 'joyful', 'excited', 'calm', 'ashamed', 'apathetic', 'logical'```

```
speak(null, ['I like %o, but %i, %a the %o already.'])
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
