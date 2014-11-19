verbose
=======
Verbose is an *experimental* tool to cut down on the work of writing CSS and keep your code cleaner (even DRYer), by applying stock styles to HTML. Verbose is mostly a thought experiment, and is not intended to be used for production sites, but more as a learning exercise. See if it holds any value for you. 

If you have suggestions, improvements, corrections, additions, please let me know via @rncrtr on twitter. I am open to constructive helpful ideas. I know I've left something out and there is a lot of clarity to be added for sure. This isn't a definitive framework by any means, it is an EXPERIMENT.


# Getting Started
Include verbose.css in your site, between the &lt;head&gt; and &lt;/head&gt; tags.

    <head>
      <link rel="text/stylesheet" href="path/to/verbose.css" />
    </head>

#Usage

####Add verbose classes to your HTML elements (valid values are in multiples of 5)
    
    <div class="mt35 p10">
      This div has a 35px top margin and 10px padding. 
    </div>

#Class Reference

######Replace # below with the desired pixels, unless otherwise noted. Example: w25 applies the style "width: 25px;" 

### Width
Class|Description
---|---
w#|width

### Height
Class|Description
---|---
h#|height



##Margin
Class|Description
---|---
mt#|margin top
mr#|margin right
mb#|margin bottom
ml#|margin left
m#|margin (all sides: top, right, bottom, left)

##Padding

pt#|    padding top

pr#|    padding right

pb# |   padding bottom

pl#|    padding left

p#  |   padding (all sides: top, right, bottom, left)

**Border**

bt# |   border top

br# |   border right

bb#|    border bottom

bl#|    border left

b# |    border (all sides: top, right, bottom, left)

**Floats**

clear|   clear both

fl |     float left

fr |     float right

c |      center container (uses margins, text align center is different, see below)

.cf|Clearfix Micro (by Nicholas Gallagher)

**Positioning**

posa   position absolute

posr   position relative

posf   position fixed

**Position Properties**

t#  top

r#  right

b#  bottom

l#  left


**Z-Index**

zi#  z-index

**Display**

none      display none (collapses space like it doesn't exist)

inline    inline (no line break after the element)

block     block (includes line break after element and clears other elements)

iblock    inline block (includes line break after element but DOES NOT clear other elements)


**Visibility**

vis    visible

hid    hidden  (leaves space for element in page but doesn't show it)

**Text Align**

tal    text align left

tac    text align center

tar    text align right

**Font Size**

fs#    font size

**Font Weight**

fw#

flight#

fnormal#

fbold#


**Font Style**

tn    text normal

ti    text italic

tu    text underline

**Letter Spacing**

ls#    letter spacing (tracking)

**Line Height**

lh#    line height (leading)