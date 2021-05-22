# One Away

## Problem
There are three types of edits that can be performed on strings: insert a character, removea character,
or replace a character. Given two strings, write a function to check if they are one edit (or zero edits)
away.

## Solution
Logic brain teaser. Think of this problem in the scope of change. What is a deletion? What is an insertion?
What is an edit? If you are able to determine that:
1. An insertion/deletion depends on whether one of the strings have all letters but 1 being the same
2. An edit means that you simply need to change the char in place

While progressing through the loop this pattern will seem more evident.