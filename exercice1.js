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
	    "age": {
			"description": "Age de l'etudiant",
	        "type": "number",
			"minimum": 0
	    },
		"inscrit": {
			"description": "L'etudiant est-il inscrit à un cours cette session?",
			"type": "bool"
		}
	},
	"required": ["codePerm", "nom", "prenom", "age", "inscrit"]	
};

var instance = {
	"codePerm": "DOEJ01020300",
	"nom": "Doe",
	"prenom": "John",
	"age": 11,
	"inscrit": true
};

console.log(v.validate(instance, schema));
