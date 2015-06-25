Template.forumPage.rendered = function() {

  url = "http://www.reddit.com/r/bodyweightfitness/.json"

  $.getJSON(url, function(result){
    Session.set('reddit_data', result.data.children);
  });
}

Template.forumPage.helpers({
  reddit_posts : function() {
    console.log(Session.get('reddit_data'));
    return Session.get('reddit_data');
  }
})