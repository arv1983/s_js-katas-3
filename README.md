# Assessment: JavaScript Katas 3 #

### Overview ###

You will create a single web page, with a labelled heading for each individual kata followed by your solution. For these katas, instead of using `console.log()` or `document.write()`, you are **required** to insert your results into the HTML using the `document.createElement()` and `node.appendChild()` methods.

*Name your repository 'katas3' and your Javascript file 'katas3.js'...also, your functions should be named kata1(), kata2(), kata3(), etc.  This will allow our grading testsuite to discover your functions*

The easiest way to get started is by copying the example file from **Mini-Lesson: Inserting new Elements within a Page**. You can copy and paste from the code embedded in the lesson.

You can keep adding each new kata onto the bottom of that page.

Several of the katas will use the following sample array, which you can copy and paste into your code:

```js
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
```

### Katas ###

1.  Display the numbers from 1 to 25: _(1, 2, 3, ..., 24, 25)_
2.  Display the numbers from 25 to 1: _(25, 24, 23, …, 2, 1)_
3.  Display the numbers from -1 to -25: _(-1, -2, -3, ..., -24, -25)_
4.  Display the numbers from -25 to -1: _(-25, -24, -23, ..., -2, -1)_
5.  Display the odd numbers from 25 to -25: _(25, 23, 21, ..., -23, -25)_
6.  Display the numbers divisible by 3 up through 100: _(3, 6, 9, …, 96, 99)_  
7.  Display the numbers divisible by 7 up through 100: _(7, 14, 21, …, 91, 98)_ 
8.  Display the numbers divisible by 3 and the numbers divisible by 7 down from 100: _(99, 98, 96, 93, 91, ..., 14, 12, 9, 7, 6, 3)_
9.  Display the odd numbers divisible by 5 up through 100: _(5, 15, 25, …, 85, 95)_
10.  Display the 20 elements of sampleArray. _(469, 755, 244, ..., 940, 472)_
11.  Display all the even numbers contained in sampleArray. _(244, 758, 450, ..., 940, 472)_
12.  Display all the odd numbers contained in sampleArray. _(469, 755, 245, ..., 179, 535)_
13.  Display the numbers divisible by 8 in sampleArray: _(712, 456, ..., 472)_
14.  Display the square of each element in sampleArray. _(219961, 570025, ..., 222784)_
15.  Display the sum of all the numbers from 1 to 20.
16.  Display the sum of all the elements in sampleArray.
17.  Display the smallest element in sampleArray.
18.  Display the largest element in sampleArray.




### Bonus ###

If you would like an additional challenge, try completing each of the above again _without using any `for` or `while` loops_.

### *Optional* Bonus (5 points) ###

*These problems involve the use of CSS styling, and require a background knowledge in CSS to complete. We'll cover this later, but feel free to do some independent research if you would like to earn some extra points!*

19.  Display 20 solid gray rectangles, each 20px high and 100px wide.
20.  Display 20 solid gray rectangles, each 20px high, with widths ranging evenly from 105px to 200px (remember #4, above).
21.  Display 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray.
22.  As in #21, but alternate colors so that every other rectangle is red.
23.  As in #21, but color the rectangles with even widths red. 

### Submission

Push your code into your GitLab repository and deploy it via GitLab pages. In Canvas, please submit your 
Gitlab Pages url (ex: https://username.gitlab.io/js-katas-03/) and, in GitLab, add KA_grading as a member on 
your project with "Reporter" permission.