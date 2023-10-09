// Personnalisation du bouton PayPal

paypal.Buttons({
	style : {
		color: 'blue'
	},

	// Fonction pour créer une commande

	createOrder: function(data, actions) {
		return actions.order.create({
			purchase_units:[{
			  amount: {
				  value:'0' // Montant de la commande --> 0 pour bloquer le paiement
			  }
			}]
		})
	},

	// Fonction appelée lorsque le paiement est approuvé

	onApprove: function(data, actions) {
		return actions.order.capture().then(function(details) {
			console.log(details) // Affiche les détails de la transaction dans la console
		  window.location.replace("index.html") // Redirection vers la page "success.html"
		})
	}
}).render('#paypal-payment-button');