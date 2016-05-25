
jQuery(document).ready(function($) {
    //FEED_URL = 'http://stackoverflow.com/feeds/tag?tagnames=wordpress&sort=newest'; 
		//feed url 
	$.ajax({ 
		url: document.location.protocol + '//blogs.ntu.edu.sg/lib-databases/?feed=json',
		//document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(FEED_URL), 
		dataType: 'json', 
		success: function(data) { 
			if (data.responseData.feed && data.responseData.feed.entries) { 
				var ul = $('<ul>'), 
				titles = data.responseData.feed.entries.map(function(item) { return item.title; }); 

				//get the titles in array 
				$.each(titles.sort( case_insensitive_comp ) /* sort the titles */, function(i, r) { var li = $('<li/>', { 'text': r }) .appendTo(ul); }); 

				$('#element').html(ul); 
				//output at #element 
  			} 
  		} 
  	}) 
	}); 

//case insensitive base on @Lekensteyn answer at http://stackoverflow.com/a/5286047/1562904 
function case_insensitive_comp( strA, strB ) { 
	return strA.toLowerCase().localeCompare( strB.toLowerCase() ); 
}