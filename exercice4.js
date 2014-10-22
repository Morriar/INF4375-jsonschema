var Validator = require('jsonschema').Validator;
var v = new Validator();

var schema = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "Etudiant",
	"description": "Example de schema pour une facture",
	"type": "object",
	"properties": {
	    "facID": {
	        "description": "Numéro de facture",
	        "type": "string"
	    },
	    "total": {
			"description": "Montant total de la facture",
	        "type": "number",
			"minimum": 0
	    },
	},
	"patternProperties": {
		"^[A-Z][0-9]{3}$": {
			"type": "object",
			"properties": {
				"nom": { "type": "string" },
				"qt": { "type": "number", "minimum": 1 },
				"prix": { "type": "number" }
			},
			"required": ["nom", "qt", "prix"]
		},
	},
	"required": ["facID", "total"],
	"additionalProperties": false
};

var instance = {
	"facID": "123456",
	"total": 163.0,
	"A213": {
		nom: "Canard en plastique",
		qt: 3,
		prix: 1.0
	},
	"P214": {
		nom: "Flamant rose en platre",
		qt: 1,
		prix: 10.0
	},
	"X215": {
		nom: "Ours en bois",
		qt: 1,
		prix: 150
	}
};

console.log(v.validate(instance, schema));
