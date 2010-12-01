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
        <span id="character_count"></span>
      </body>
    </html>

## Options
  
#### Self-explanatory
  
  * maxChars (default: 140)
  * characterCountId (default: '#character_count')
  
#### Etc.
  
  * warnAt (default: 110) — Give $(characterCountId) the `warnClass` at this many characters
  * warnClass (default: 'warning') — CSS class to assign to $(characterCountId) when warnAt is reached
  * maxClass (default: 'maximum') — CSS class to assign to $(characterCountId) when maxChars is reached
  * callback (default: function(){}) — Called at the *end* of each event handler.
  
## Also


  