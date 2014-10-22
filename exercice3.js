var Validator = require('jsonschema').Validator;
var v = new Validator();

var schema = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "Etudiant",
	"description": "Example de schema pour un etudiant",
	"type": "object",
	"properties": {
	    "codePerm": {
	        "description": "Code permanent",
	        "type": "string"
	    },
	    "nom": {
			"description": "Nom de l'etudiant",
	        "type": "string"
	    },
		"prenom": {
			"description": "Prenom de l'etudiant",
	        "type": "string"
	    },
		"cours": {
			"description": "Liste des cours suivis",
			"type": "array",
			"minItems": 1,
			"items": {
				"type": "object",
				"properties": {
					"sigle": { "type": "string" },
					"credits": { "type": "number", "minimum": 0, "maximum": 3 },
					"reprise": { "type": "bool" }
				},
				"required": ["sigle", "credits"]
			}
		}
	},
	"required": ["codePerm", "nom", "prenom", "cours"]	
};

var instance = {
	"codePerm": "DOEJ01020300",
	"nom": "Doe",
	"prenom": "John",
	"cours": [
		{
			sigle: "INF0101",
			credits: 3
		},
		{
			sigle: "INF0102",
			credits: 3,
			reprise: true
		}
	]
};

console.log(v.validate(instance, schema));
