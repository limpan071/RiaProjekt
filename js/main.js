 
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
		
		//initiera initfilter där data laddas hem för att fylla vy
		Main.filters.init = new Filter('Startfilter');
		Main.search = new Search();
		
		Main.events();
	},
	events:function (){
		this.dom.datenote.text("Welcome, "+this.dom.filterpart.text()+"!");
		//hantera event ifrån Filtervy
		FilterView.init("filter");
		//hantera event ifrån fördefinerade filterknappar
		
		//hantera event ifrån Searchvy
		
		//hantera event ifrån SearchVy tabellhover
		
		//hantera event ifrån sidbyte i searchvy
	}
	
};

for(var f in Main){ // set scope of all app funcs
  if ($.isFunction(Main[f])){
    Main[f] = $.proxy(Main[f],Main);
  }
}

window.onload = Main.init;