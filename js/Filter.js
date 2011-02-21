function Filter(name){
	//json objekt
	var filterdata = {};

	this.getName = function() { return name; };
	this.getFilterData = function () {return filterdata; };
	
}
Filter.prototype.initFilter = function (){ 
	//först kolla om det finns sparat i localstorage
	//annars ladda hem initdata för filter 
	//fyll filterdataJSONobjektet
	//return filterdata
	return "initFilter";
};

Filter.prototype.saveFilter = function (name){ 
	//då ett filter förändrats skall man kunna spara det i localstorage
};

Filter.prototype.resetFilter = function (){ 
	//ladda init filtert
};

Filter.prototype.loadFilter = function (name){ 
	//laddar filter med ett visst namn
};

Filter.prototype.updateFilterData = function(){
	//då olika knappar trycks ned och upp så skall filterdata uppdateras.
	//toggle av knappar här
	
	//returnerar omräknad fil där totalt antal resor omräknas osv.
};


