function Search(){
	var countResult = 0;
	var countPages = 0;
	var linesInPage = 50;
	
	//jsondata
	var searchdata = {};
}
	
Search.prototype.doSearch = function (filterdata,sortDataOn){ 
	//laddar hem data med filterdata som parameter
	//sortDataOn är vilket fält som skall sorteras asc desc 
	//returnerar hemladdad sökdata
};
	
Search.prototype.initSearch = function(){
	//laddar hem initierings data 
	//returnerar initdata 
	return("initsearch");
};

Search.prototype.getPage = function(pageNr){
	//om en sökning är gjord och pagenr ligger inom countPage
	//returnara sidan med aktuell sökdata
};

Search.prototype.sortData = function (sortDataOn){ 
	//reset filter och visa allt 
};
	
Search.prototype.resetFilter = function (){ 
	//reset filter och visa allt 
};
	
