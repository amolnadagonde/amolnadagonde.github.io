/* Third Method */
var myBaseFile = (function(){
	var currentTag, mainHeader;
	var init = function(){
		function firstFunction(){
			console.log('First Function called through init(module pattern)');
		}
		/*All your code will come here*/
		console.log("in init");

		// checkForSessionStorage();
	};

	// var checkForSessionStorage = function(){
	// 	if(localStorage.dataObject){
	// 		console.log('Data existed');
	// 	}
	// 	else {
	// 		console.log('need to save data');

	// 		var obj = {
	// 			'title':$('#header-content').val(),
	// 			'content':'Here will be the description.'
	// 		}

	// 		localStorage.dataObject = JSON.stringify(obj);
	// 	}
	// };

	$('.parent-elem').on("change",function(elem){
		currentTag = $('input[name=structure]:checked', '#structure-form').val();
	});

	$('.heading-tag').on("change",function(elem){
		mainHeader = $('input[name=heading]:checked', '#structure-form').val();
	});

	var arrayData = [];
	var objData = {};

	$('#generate').on('click',function(event){
		event.preventDefault();

		arrayData.push(
			{
				'title': $('#header-content').val(),
				'text': $('#text-content').val(),
				'datax': $('#datax').val()
			}
		);
		// text: $('#text-content').val(),
		// title: $('#header-content').val()

		console.log("Array Data", arrayData);

		document.getElementById("structure-form").reset();
		// $('#toImport').append("<"+currentTag+" class='step'><p class='content'>"+$('#text-content').val()+"</p></"+currentTag+">");
		// $('#toImport').find(currentTag).prepend("<"+mainHeader+" class='content-header'>"+$('#header-content').val()+"</"+mainHeader+">");	
	});

	$('#save').on('click',function(event){
		event.preventDefault();
		
		// for(var i=0; i < arrayData.length; i++){
		// 	arrayData.forEach(function(data){
		// 		console.log(data);
		// 		//objData[data[0]] = data[1];
		// 	})	
		// }		

		// console.log('Object Data',objData);

		localStorage.dataObject = JSON.stringify(arrayData);
		// localStorage.dataObject = arrObject;
	});
	
	return {
		init: init
	}
})(jQuery);

jQuery(document).ready(function(){
	myBaseFile.init();
});