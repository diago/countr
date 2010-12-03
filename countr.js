/******************************************************

Copyright (c) 2010, Rob Sterner

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

Inspired by: http://www.jqeasy.com/jquery-character-counter/

*******************************************************/
(function($){
  $.fn.extend({
    
    countr: function(_options) {  
      return this.each(function(){
        var $this = $(this)
          , options = $.extend(
            { maxChars: 140
            , counterSuffix: '_count'
            , warnAt: 110
            , warnClass: 'warning'
            , maxClass: 'maximum'
            , callback: function(){}
            }
            , _options)
          , $characterCount = $('#' + this.id + options.counterSuffix);
        
        function setCount(){
          $characterCount.html(options.maxChars - $this.val().length);
        }
        
        function count(event) {       
          if($this.val().length >= options.maxChars)
            $this.val($this.val().substr(0, options.maxChars));
          
          setCount();
          
          $this.val().length >= options.warnAt
            ? $characterCount.addClass(options.warnClass)
            : $characterCount.removeClass(options.warnClass);
          
          $this.val().length >= options.maxChars
            ? $characterCount.addClass(options.maxClass)
            : $characterCount.removeClass(options.maxClass);
          
          options.callback.call($this);
        }
        
        $this
  				.bind('keydown keyup keypress', count)
  				.bind('focus paste', function(){setTimeout(count);});
  			
  			setCount();
      });      
    }
  });
})(jQuery);