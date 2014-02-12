app.controller('board', function ($scope) {
	$scope.civilisation = "babylon_b";
	$scope.selected = "";
	$scope.select = function(card){
		$scope.selected = card;
	}
	$scope.hand = [
		"press",
		"tree_farm",
		"west_trading_post",
		"glassworks",
		"pawnshop",
		"east_trading_post",
		"theater",
		"academy"
	];
	// $scope.tableau = {
	// 	militia: [
	// 		"barracks",
	// 		"walls",
	// 		"fortifications",
	// 		"arsenal"
	// 	]/*,
	// 	civilian: [
	// 		"baths",
	// 		"aqueduct",
	// 		"temple"
	// 	]*/
	// };
	$scope.ressources = [
		"loom",
		"glassworks",
		"timber_yard",
		"ore_vein",
		"forest_cave",
		"sawmill",
		"quarry",
		"foundry"
	]
});