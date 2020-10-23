/*
Write a function that takes a number n and turns it into the ouput. No further instructions.

eg.
mysteryFunc(521) ➞ "151211"
-> 521 is "one five, one two, one one (151211).


Good because it has quite a few implementations (regex, for loop). Good to see if the candidate thinks about extensibility, and about changing requirements.
Example below works well with integers, but not with floats, for example.

It's super short, so it's dead easy and quick to slightly change the requirements during the followup, and ask "if there's a decimal, print "1 dot"
which if you've copied the regex from the interet without understanding, is gonna be hard.
 */

function mysteryFunc(num) {
    return String(num)
        .match(/(\d)\1*/g)
        .map(group => group.length + group[0])
        .join('');
}

const res = mysteryFunc(1232);
