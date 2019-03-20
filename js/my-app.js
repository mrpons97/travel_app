// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/promociones/',
    	url: 'promociones.html',
    	name: 'promociones',
  		},
		{
		path: '/busca/',
    	url: 'busca.html',
    	name: 'busca',
  		},
		{
		path: '/cruce/',
    	url: 'cruce.html',
    	name: 'cruce',
  		},
		{
		path: '/historial/',
    	url: 'historial.html',
    	name: 'historial',
  		},
		{
		path: '/guardado/',
    	url: 'guardado.html',
    	name: 'guardado',
  		},
		{
		path: '/ajustes/',
    	url: 'settings.html',
    	name: 'ajustes',
  		},
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		},
		{
		path: '/login/',
    	url: 'login.html',
    	name: 'login',
		},
		
		
	]
});

// Export selectors engine
var $$ = Dom7;

var notificationWelcome = myApp.notification.create({
  icon: '<i class="material-icons">info</i>',
  title: '¡Bienvenido a Travel App!',
  subtitle: '',
  text: '',
  closeButton: true,
	closeTimeout: 3000,
});
$$('.open-welcome').on('click', function () {
  notificationWelcome.open();
});
$$(window).on('load', function () {
  notificationWelcome.open();
});




 

