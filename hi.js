var arr= new Array(); 
var count=0;
var story = "BlackMan fashiondesigner pilot busdriver bartender waitress waiter stonemason gardener composer solicitor judge dancer	 sculptor poet writer photographer Bingley Web accountant Darcy Lucas Chapter Miss Darcy Archive economist lawyer lecturer Netherfield biologist scientist soldier Bennet Blenheim Perhaps Charlotte  In Project Donations Darcy Haggerston Lucas investmentanalyst Elizabeth Netherfield Hart Lady NEGLIGENCE priest Mrs burglar thief stripper forger pickpocket vicar Indeed Hertfordshire projectmanager Bennet Scotch Kitty Bennet Georgiana  Darcy Elizabeth You Lord Elizabeth Mr Elizabeth Hertfordshire Charlottes Maria";
var story1 = "other good new old great high small different large local social important long young political able late general full far low public available bad main sure clear major economic only likely real black particular international special difficult certain open whole white free short easy strong European central similar human true common necessary single personal hard private poor financial wide foreign simple recent concerned American various close fine English wrong present royal happy significant industrial sorry dead specific";
var story2 = " have will say would can get make go see know take could think come give look may should use find want tell must put mean become leave work need feel seem might ask show provide keep hold turn follow begin bring like going help start";
// VARIABLES
var blockedOut = false;
var faded = false;
var punctuation = /([—.,?!;:"'])/;

// FUNCTIONS
function displayStory(storytext) {
  var poem = '';
  var array = storytext.split(' ');
  array.forEach(function(word){
    poem += "<span class>" + word+"\n"+ " </span>" 
  });
  $(".story").html(poem);
}
function displayStory1(storytext) {
    var poem = '';
    var array = storytext.split(' ');
    array.forEach(function(word){
      poem += "<span class>" + word +"\n"+ " </span>" 
    });
    $(".story1").html(poem);
  }
function displayStory2(storytext) {
    var poem = '';
    var array = storytext.split(' ');
    array.forEach(function(word){
      poem += "<span class>" + word +"\n"+ " </span>" 
    });
    $(".story2").html(poem);
  }




// Update text of poem
function updatePoem () {
  $("div.poem").html($("span.marked").text());

}


function newStory (){
  var storytext = $(".textarea").val()
  $('.story').html(displayStory(storytext));
  $(".textarea").val('');
  return false;
}

displayStory(story);
displayStory1(story1);
displayStory2(story2);




// CLICK RESET: Remove all classes, clear poem
$(".reset").on('click',function(){
$("span").removeClass('blocked faded marked');
$(".poem").html('(Marks words above to populate your poem)');
});


// Clicking on Words
$("div.story").on("click",function (evt){
  if (this === evt.target || $(evt.target).hasClass('faded') ){
  // do nothing
  } else {
      $(evt.target).removeClass("blocked")
      $(evt.target).toggleClass("marked")
      arr[count]=$("span.marked").text();
      count++;
  }
    updatePoem();
});
$("div.story1").on("click",function (evt){
    if (this === evt.target || $(evt.target).hasClass('faded') ){
    // do nothing
    } else {
        $(evt.target).removeClass("blocked")
        $(evt.target).toggleClass("marked")
        arr[count]=$("span.marked").text();
        count++;
    }
      updatePoem();
  });
$("div.story2").on("click",function (evt){
    if (this === evt.target || $(evt.target).hasClass('faded') ){
    // do nothing
    } else {
        $(evt.target).removeClass("blocked")
        $(evt.target).toggleClass("marked")
        arr[count]=$("span.marked").text();
        count++;
    }
      updatePoem();
  });

// Block out all words not "marked"
$(".blockOut").on('click', function(){
  if(blockedOut){
    $("span:not('.marked')").removeClass("blocked");
    blockedOut = false;
  } else {
    $("span:not('.marked')").addClass("blocked");
    blockedOut = true;
  }
});

// 
$(".clearMarked").on('click', function(){
  $("span").removeClass("marked");
  $(".poem").html('(Marks words above to populate your poem)');
});

(function(){
  var words = [
    'other', 'good', 'new', 'old', 'great', 'high', 'small', 'different',' large' ,'local', 'social', 'important',' long' ,'young' ,'national' ,'British' ,'right', 'early' ,'possible', 'big' ,'little' ,'political', 'able', 'late', 'general', 'full',
    'far','low',
    'public',
    'available',
    'bad',
    'main',
    'sure',
    'clear',
    'major',
    'economic',
    'only',
    'likely',
   
   ' special',
    'difficult',
   ' certain',
    'open',
   ' whole',
    'white',
    'free',
    'short',
    'easy',
   ' strong',
    'European',
    'central',
    'similar',
    'human',
    'true',
    'common',
    'necessary',
    
    'hard',
    'private',
    'poor',
    'financial',
    'wide',
    'foreign',
    'simple',
    'recent',
    'concerned',
    'American',
    'various',
    'close',
   ' fine',
    'English',
    
   ' total',
    'prime',
    'significant',
    'industrial',
    'sorry',
    'dead',
    'specific'
    ]
    var words1 = ['BlackMan', 'fashiondesigner', 'pilot', 'busdriver', 'bartender', 'waitress', 'waiter' ,'stonemason', 'gardener','composer', 'solicitor', 'judge', 'dancer','sculptor' ,'poet', 'writer', 'photographer','Bingley', 'Web' ,'accountant', 'Darcy', 'Lucas' ,'Chapter', 'Miss', 'Darcyive' ,'economist', 'lawyer' ,'lecturer' ,'priest']
      var words2 = [
        'have',
        'do',
        'will',
        'say',
        'would',
        'can',
        'get',
        'make',
        'go',
        'see',
        'know',
        'take',
        'could',
        'think',
        'come',
        'give',
        'look',
        'may',
        'should',
        'use',
        'find',
        'want',
        'tell',
       ' must',
        'put',
        'mean',
       ' become',
        'leave',
        'work',
        'need',
        'feel',
        'seem',
        'might',
        'ask',
        'show',
        'try',
        'call',
        'provide',
        'keep',
       'hold',
        'turn',
        'follow',
       ' begin',
        'bring',
        'like',
        'going',
        'help',
        'start'
        ]
  i = 0;
  setInterval(function(){
      $('#changingword').fadeOut(function(){
          $(this).html(words[i=(i+1)%words.length]).fadeIn();
      });
  }, 3000);
  setInterval(function(){
    $('#changingword1').fadeOut(function(){
        $(this).html(words1[i=(i+1)%words1.length]).fadeIn();
    });
}, 3000);
  setInterval(function(){
  $('#changingword2').fadeOut(function(){
      $(this).html(words2[i=(i+1)%words2.length]).fadeIn();
  });
}, 3000);
    
})();



