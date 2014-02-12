app.controller('stack', function ($scope) {
	$scope.military = [
		"barracks",
		"walls",
		"fortifications",
		"arsenal"
	];
	$scope.civilian = [
		"baths",
		"pawnshop",
		"altar",
		"theater",
		"aqueduct",
		"temple",
		"palace",
		"senate"
	];
	$scope.commercial = [
		"haven",
		"lighthouse",
		"arena",
		"chamber_of_commerce"
	];
	$scope.scientific = {
		gear: [
			"workshop",
			"laboratory",
			"observatory",
			"study"
		],
		tablet: [
			"scriptorium",
			"school"
		],
		compass: [
			"apothecary",
			"dispensary"
		]
	};
	$scope.resources = [
		"loom",
		"glassworks",
		"timber_yard",
		"ore_vein",
		"forest_cave",
		"sawmill",
		"quarry",
		"foundry",
		"baths",
		"pawnshop",
		"altar",
		"theater",
		"aqueduct",
		"temple",
		"palace",
		"senate"
	];
	$scope.guilds = [
		"workers_guild",
		"traders_guild"
	];
});