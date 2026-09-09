//#region package.json
var name = "@keychord/chords-aerospace";
var repository = {
	"type": "git",
	"url": "https://github.com/KeyChord/chords-aerospace"
};
var type = "module";
var devDependencies = { "@keychord/config": "catalog:" };
var package_default = {
	name,
	repository,
	type,
	devDependencies
};
//#endregion
export { package_default as default, devDependencies, name, repository, type };
