Verbose
=======
tl;dr Experimental. Milage may vary. Yes, I am insane. Don't be surprised if this is bonkers++.

###What is Verbose? (RTFM)
Verbose is an *experimental* tool to cut down on the work of writing CSS and keep your code cleaner (even DRYer), by applying stock premade classes to HTML. Verbose is mostly a thought experiment, and is not intended to be used for production sites, but to tinker with as a learning exercise. See if it holds any value for you, if not, this is fair warning. 

###Why is Verbose (all the thinks)
The theory is that it *MIGHT* be better to write a style once in CSS, and apply very short classes to multiple places in HTML. It *COULD* have some performance savings depending on the amount of "CSS" *wink wink*, bloat, and bad code you have in your site. If your site has enough spaghetti (tangled, tomatoey code) to stock Frankie Italiano's Family Diner, Verbose may be a good alternative to that madness by eliminating the need for repeated style definitions. I realize that "real developers" (angry hipsters) will flip their pivot tables b/c this is flipping the script. #dealWithIt 

Verbose weighs in at around 150K on most days, which can be significantly better than a large CSS file or 30 of them. It is minified of course (using Sass). Verbose may be a good tool for quick prototype mockups.

If I am utterly brilliant, please let me know that too. Can't hurt to ask nicely for kind words, knowing that this is the internet where horrible monsters live mostly under bridges. Thanks.

by [@rncrtr](http://twitter.com/rncrtr)

###What's next for Verbose (If there's a future we want it now)
If you have suggestions, improvements, corrections, additions, please let me know via @rncrtr on twitter. I am open to constructive helpful ideas. I'm sure I've left things out and there is a lot of clarity to be added for sure. This isn't a definitive framework by any means, it is an *EXPERIMENT*.


###Helpful notes
You will need to define your own colors (I'm no savant) and other styles, but most of the boring css is written for you.

**Verbose** is a word meaning "too many words" or "overly wordy" see [Verbose at The Free Dictionary](http://www.thefreedictionary.com/verbose) for more info. I hope and expect you appreciate the irony herein, as I do.

If you'd like to play with my ill-conceived brain-child, be careful with it, it should probably be wearing a helmet. All you need is to do to frankenstein Verbose is to have [Sass](http://sass-lang.com/) installed, and then compile it with this command like usual:

    sass --watch verbose.css.scss:verbose.css --style compressed
    
made with #sugarFreeCode in Denver, CO using [Nitrous.io](Nitrous.io)

# Getting Started
Include verbose.css in your site, between the &lt;head&gt; and &lt;/head&gt; tags.

    <head>
      <link rel="text/stylesheet" href="path/to/verbose.css" />
    </head>

#Usage

####Add verbose classes to your HTML elements 
######valid values are in multiples of 5
    
    <div class="mt35 p10">
      This div has a 35px top margin and 10px padding. 
    </div>

#Class Reference

Example:
###### class="w25" applies the style "width: 25px;" 

####Width
Replace # with number of pixels (x5) from 0-1000.

Class|Description
---|---
w#|width

####Height
Replace # with number of pixels (x5) from 0-1000.

Class|Description
---|---
h#|height

####Margin
Replace # with number of pixels (x5) from 0-1000. 

Class|Description
---|---
mt#|margin top
mr#|margin right
mb#|margin bottom
ml#|margin left
m#|margin (all sides: top, right, bottom, left)

####Padding
Replace # with number of pixels (x5) from 0-1000. 

Class|Description
---|---
pt#|padding top
pr#|padding right
pb#|padding bottom
pl#|padding left
p#|padding (all sides: top, right, bottom, left)

####Border
Replace # with number of pixels (x5) from 0 - 200. 

Class|Description
---|---
bt#|border top
br#|border right
bb#|border bottom
bl#|border left
b#|border (all sides: top, right, bottom, left)

####Floats
Class|Description
---|---
clear|clear both
fl|float left
fr|float right
c|center container (uses margins, text align center is different, see below)
cf|Clearfix Micro [by Nicholas Gallagher](http://nicolasgallagher.com/micro-clearfix-hack/)

####Positioning
Class|Description
---|---
posa|position absolute
posr|position relative
posf|position fixed

####Position Properties
Replace # with number of pixels (x5) from 0-1000.

Class|Description
---|---
t#|top
r#|right 
b#|bottom
l#|left

####Z-Index
Replace # with number of pixels (x5). 

Class|Description
---|---
zi#|z-index

####Display
Class|Description
---|---
none|display none (collapses space like it doesn't exist)
inline|inline (no line break after the element)
block|block (includes line break after element and clears other elements)
iblock|inline block (includes line break after element but DOES NOT clear other elements)

####Visibility
Class|Description
---|---
vis|visible
hid|hidden  (leaves space for element in page but doesn't show it)

####Text Align
Class|Description
---|---
tal|text align left
tac|text align center
tar|text align right

####Font Size
Replace # with number of pixels (x5) from 0 - 200. 

Class|Description
---|---
fs#|font size

####Font Weight
 
Class|Description
---|---
fw#|font weight (replace # with number of pixels (x5) from 0-1000)
flight#|font light (100)
fnormal#|font normal (400)
fbold#|font bold (700)

####Font Style
Class|Description
---|---
tn|text normal
ti|text italic
tu|text underline

####Letter Spacing
Replace # with number of pixels (x5) from 0-1000

Class|Description
---|---
ls#|letter spacing (tracking)

####Line Height
Replace # with 1/10th ems. 

Example: lh12 will apply "line-height: 1.2em;"

Class|Description
---|---
lh#|line height (leading)








Thank you for reading all the way to the bottom. You are fantastic and amazing...and good looking. Have a bit of art:

    D
    (:0P
    D

    (puppy dog)