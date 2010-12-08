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
        <input type="text" name="lol" />
        <span id="lol_countr"></span>
      </body>
    </html>

## Options
  
#### Self-explanatory
  
  * maxChars (default: 140)
  
#### Etc.
  
  * countr (default: '_countr') — suffix string or jQuery object to update 
  * warnAt (default: 110) — Give the count the `warnClass` at this many characters
  * warnClass (default: 'warning') — CSS class to assign to the count when warnAt is reached
  * onWarn  (default: function(){}) — Called when warnAt is reached
  * maxClass (default: 'maximum') — CSS class to assign to the count when maxChars is reached
  * onMax  (default: function(){}) — Called when maxChars is reached
  * hardLimit  (default: true) — prevents additional chars from being entered
  * callback (default: function(){}) — Called at the *end* of each event handler.
  
## Copyright

Copyright &copy; 2010 Rob Sterner. See LICENSE for details.
