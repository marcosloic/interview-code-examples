/*
Write a sorting function that takes in an array of names and sorts them by last name either alphabetically (ASC) or reverse-alphabetically (DESC).

Example:
sortContacts([
  "John Locke",
  "Thomas Aquinas",
  "David Hume",
  "Rene Descartes"
], "ASC")

returns

[
  "Thomas Aquinas",
  "Rene Descartes",
  "David Hume",
  "John Locke"
]

// Aquinas (A) < Descartes (D) < Hume (H) < Locke (L)

Easy to implement in a few different ways.
Same as other problem, you can introduce initials in the followup question (eg. Rene M. Descartes) and see if the candidate can easily modify his/her code
 */

const sortContacts = (names, sort) => {
    if (!names) return [];

    return names.sort((a, b) => {
        const lastA = a.split(' ')[1];
        const lastB = b.split(' ')[1];

        return sort === 'ASC'
            ? lastA.localeCompare(lastB)
            : lastB.localeCompare(lastA);
    });
};

