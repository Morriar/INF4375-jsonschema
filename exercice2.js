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
	    "dateNaiss": {
			"description": "Date de naissance",
	        "type": "string",
			"pattern": "[0-9][0-9]/[0-9][0-9]/[0-9][0-9]"
	    },
		"cours": {
			"description": "Liste des cours suivis",
			"type": "array",
			"items": {
				"type": "string"
			},
			"minItems": 1,
			"uniqueItems": true
		}
	},
	"required": ["codePerm", "nom", "prenom", "dateNaiss"]	
};

var instance = {
	"codePerm": "DOEJ01020300",
	"nom": "Doe",
	"prenom": "John",
	"dateNaiss": "01/02/03",
	"cours": ["INF0101", "INF0102"]
};

console.log(v.validate(instance, schema));
