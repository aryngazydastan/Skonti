// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

<script type="text/javascript">
	Parse.initialize("BgsQI0sjfguY44irzwK4uaansVcXwhEnjcBxNRHU", "YfKdBJe6lhbzkHlB0kPaXJh3Xo5FTQg3DdS9tmu5");
	var GameScore = Parse.Object.extend("MechMods");
	var query = new Parse.Query(GameScore);
	query.ascending("createdAt");
	query.find({
	   success: function (results) {
	   
		for (var i = 0; i < results.length; i++) {
			var table = document.getElementById("myTable");
			var header = table.createTHead();
			var row = header.insertRow(0);
			var cell = row.insertCell(0);
			
			var object = results[i];
			var x = object.get('image1').url();
			var phone = object.get('phone');
			var price = object.get('price');
			var about = object.get('about');
			
			
			cell.innerHTML ='<div class = "container centers">'+
							'<div class="col-xs-12 " >'+
								'<code class="col-xs-8">'+phone+' узнать больше'+'</code>'+
								'<kbd class="col-xs-4" style="text-align:right;">'+price+' тенге'+'</kbd>'+
								'<img class="col-md-12 img-rounded"  src ="'+x+'" style="margin:5px;" />'+
								'<code class="col-md-12" >'+about+'</div>'+
							'</code></div>';
			
		}
	},
		error: function (error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
</script>