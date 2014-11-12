verbose
=======
Verbose is an attempt to "DRY up" your CSS, which is typically hard to do.
Verbose provides that elusive design consistency designers are always telling you about.
Verbose makes it easy to see what element has what style by the class names themselves
Verbose eliminates most of the tedious repetitive work from front end development.

This may not work the best if you only have a small amount of CSS styles. The project that spawned this idea at the time had nearly 14000 lines of not at all DRY CSS code clocking in at 267K, so this is an attempt to eliminate that load by defining styles once per website, and applying a few extra classes to elements.

# Usage
1. Include verbose.css file in your site, between the &lt;head&gt; and &lt;/head&gt; tags.

    <head>
      <link rel="text/stylesheet" href="path/to/verbose.css" />
    </head>

2. Add verbose classes to any elements that need it in multiples of 5 (most designs are in increments of 5)
    
    <div class="t16 fwb mt35 p10">
      This div is 16px bold with a top margin of 35px and padding of 10px. All this applied with 16 characters and each css style defined once.
    </div>