Assignment.

Given the text, gather a statistics on sizes of words. Calculate, how many words of different sizes are there and output it as a percentage value from the overall number of 
words. 

> Note: We have not yet touched functions. 
> The code below can be easily written without using them.
> However if you feel like applying your previous JS experience -
> feel free to use functions

Here's an example. Given the text:

```
var text = 'Hi World'
```

Your code should output

```
2 letters: 1 word(s) (50%)
5 letters: 1 word(s) (50%)
```

Notice that a text might have common punctuation marks. Here's a full list of what you can encounter: .,():;!?

There might be several punctuation marks, like ... or !!! or ?!, like in a normal text. Punctuation marks are never separated from the previous word.

A text might have line breaks (\n) as word separators as well as empty lines.