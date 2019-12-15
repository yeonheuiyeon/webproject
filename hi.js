var arr= new Array(); 
var count=0;
var story = "BlackMan Lydia they Bingley Web Mr Darcy Lucas Chapter Miss Darcy Archive Mrs Collins Georgiana Netherfield Mr Darcys Lambton Bennet Blenheim Perhaps Charlotte  In Project Donations Darcy Haggerston Lucas P Elizabeth Netherfield Hart Lady NEGLIGENCE Mr Mrs Collins Others Mr Indeed Hertfordshire Annesley Colonel Miss It us Longbourn Newcastle Yes Miss Mr Miss Lucas Lydia But Bennet Elizabeth Jane Militia Little Mrs us others It GARDINER Mrs Oh Lydias Hertfordshire Elizabeth Bingley Darcy I If Mr Mr London Bennet Scotch Kitty Bennet Georgiana Chapter Yours For us Colonel Mrs Lydias Chapter Bennet Catherine Bingleys Cheapside Gracechurch Jane Console As Bingley Happiness Mrs Elizabeth Mrs Darcy Jane Fitzwilliams Bennet Mr I Bingley I Mr us Mrs Happy Lady Bingleys Kitty Every Wickham Mrs Gutenbergtm Lucases Mr Mrs Wickham Yet know Darcy The Chapter Westerham Catherine Mrs Lucas Lady Resignation Miss How Kitty My Mr Bingley Wickhams Collins Yet Mr Mr Yet Joness s Brighton Mary Elizabeth Elizabeth Elizabeth MAY Every Marias Darcy READ Elizabeth Mr Lady Project Jamess Bennet us Elizabeth Miss Mrs Elizabeth Mrs Wickham Wherever Darcys Miss Lizzy Mr Elizabeth Bennet Hunsford Bingley Bingley Mr Foundation Mrs Upon Miss Sir For Bingley Mr Miss Lady Lucas Catherine Oh Catherine Bingley Miss Kitty Darcy Elizabeth You Lord Elizabeth Mr Elizabeth Hertfordshire Charlottes Maria";
var story1 = "forever electronic secret poor started little minds due northern wishes sure rapturous she struck will previous real nieces mother short public it real wish unable incredulous nay high however amends uneasiness it it casual alone mothers sensible strong sister many aunt good compatible various fine expeditiously hopeless individual room not ingenuity aloud much improper small satisfied appear home ridicule sensible large fun word whole kindness proofread backgammon handsome kindness advantageous proper occasional library impulse liked insufficient";
var story2 = " better stating recommended made passed replied going right called meat see felt said prevented manage suspected said however seem want dated judged sitting leave stood thought see connected reading knowing and help read marry contributed ball speedy applying reserved see means heightened know easy ran wondered said dissatisfied say liked cried talked began see supposed worse agreed use left gave leave appeared entered pay said said meet entered got form fishing said need examining respecting misrepresented think remained seeing thinking let adhering reaching returned supposing pleasing sincerely abused paying recovering entered run said looked forget welcome libertywhich could gave read knowing wearied entered enumerating supported entering prove be know seeing met say furnish looked see praise seemed give staggered rejoiced answered started way passed paid hope know belong objecting lady grieved disadvantage disgusted assured acquiesce burying day cried suspecting dislike wanted gratified acceptable mothers astonished condescend continued mortifying consult engaged subject obliged impossible went come made decease ";
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
    'Chef',
    'Designer',
    'Driver',
    'Developer',
    'Poet',
    'Teacher',
    'Happy Person',
    'BlackMan',
    'Lydia','they',
      'Bingley', 'Web', 'Mr' ,'Darcy' ,'Lucas', 'Chapter', 'Miss Darcy', 'Mrs Collins' ,'Georgiana' ,'Netherfield', 'Mr Darcys', 'Lambton' ,'Bennet', 'Blenheim','harlotte', 'Donations', 'Darcy', 'Haggerston', 'Lucas P', 'Elizabeth', 'Netherfield', 'Hart' ,'Lady'
    ],
  i = 0;
  setInterval(function(){
      $('#changingword').fadeOut(function(){
          $(this).html(words[i=(i+1)%words.length]).fadeIn();
      });
  }, 3000);
  setInterval(function(){
    $('#changingword1').fadeOut(function(){
        $(this).html(words[i=(i+1)%words.length]).fadeIn();
    });
}, 3000);
  setInterval(function(){
  $('#changingword2').fadeOut(function(){
      $(this).html(words[i=(i+1)%words.length]).fadeIn();
  });
}, 3000);
    
})();



