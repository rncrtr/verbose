verbose
=======
Verbose is an *experimental* tool to cut down on the work of writing CSS and keep your code cleaner (even DRYer), by applying stock styles to HTML. Verbose is mostly a thought experiment, and is not intended to be used for production sites, but more as a learning exercise. See if it holds any value for you. 

If you have suggestions, improvements, corrections, additions, please let me know via @rncrtr on twitter. I am open to constructive helpful ideas. I know I've left something out and there is a lot of clarity to be added for sure. This isn't a definitive framework by any means, it is an EXPERIMENT.

You will need to define your own colors and other styles that are not included, but most of the css should be pre-written for you.

# Getting Started
Include verbose.css in your site, between the &lt;head&gt; and &lt;/head&gt; tags.

    <head>
      <link rel="text/stylesheet" href="path/to/verbose.css" />
    </head>

# To Do
Add negative values for appropriate styles

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
Class|Description
---|---
w#|width (from 0-1000)

####Height
Class|Description
---|---
h#|height (from 0-1000)

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
cf|Clearfix Micro (by Nicholas Gallagher)[http://nicolasgallagher.com/micro-clearfix-hack/]

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
Replace # with number of pixels (x5) from 0-1000..

Class|Description
---|---
ls#|letter spacing (tracking)

####Line Height
Replace # with 1/10th ems. 

Example: 
######lh12 will apply "line-height: 1.2em;"

Class|Description
---|---
lh#|line height (leading)