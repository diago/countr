<pre>
      _/_/_/    _/_/    _/    _/  _/_/_/    _/_/_/_/  _/  _/_/   
   _/        _/    _/  _/    _/  _/    _/    _/      _/_/        
  _/        _/    _/  _/    _/  _/    _/    _/      _/           
   _/_/_/    _/_/      _/_/_/  _/    _/      _/_/  _/
</pre>

# countr

A ridiculously minimal JavaScript counter for jQuery.

## Usage

    <html>
      <head>
        <title>countr</title>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
        <script type="text/javascript" src="countr.js"></script>
        <script type="text/javascript">
          jQuery(function(){ $('#lol').countr(); })
        </script>
      </head>
      <body>
        <input type="text" id="lol" />
        <span id="lol_count"></span>
      </body>
    </html>

## Options
  
#### Self-explanatory
  
  * maxChars (default: 140)
  * counterSuffix (default: '_count')
  
#### Etc.
  
  * warnAt (default: 110) — Give the count the `warnClass` at this many characters
  * warnClass (default: 'warning') — CSS class to assign to the count when warnAt is reached
  * maxClass (default: 'maximum') — CSS class to assign to the count when maxChars is reached
  * callback (default: function(){}) — Called at the *end* of each event handler.
  
## Copyright

Copyright &copy; 2010 Rob Sterner. See LICENSE for details.