 
 var Main = {
 	//aray med de olika aktuella filter som klienten har
	filters: {},
	search:0,
	
	dom: {
		filterpart: "#filterinput",
		serarchpart: "#searchtable"
	},
	//initiering
	init:function (){
		// jQuerify all DOM-refs
		for(var key in this.dom){ 
		      this.dom[key] = $(this.dom[key]);
		 }
		
		//initiera initfilter d�r data laddas hem f�r att fylla vy
		Main.filters.init = new Filter('Startfilter');
		Main.search = new Search();
		
		Main.events();
	},
	events:function (){
		this.dom.datenote.text("Welcome, "+this.dom.filterpart.text()+"!");
		//hantera event ifr�n Filtervy
		FilterView.init("filter");
		//hantera event ifr�n f�rdefinerade filterknappar
		
		//hantera event ifr�n Searchvy
		
		//hantera event ifr�n SearchVy tabellhover
		
		//hantera event ifr�n sidbyte i searchvy
	}
	
};

for(var f in Main){ // set scope of all app funcs
  if ($.isFunction(Main[f])){
    Main[f] = $.proxy(Main[f],Main);
  }
}

window.onload = Main.init;