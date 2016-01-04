import task from './lib/task';
import fs from './lib/fs';
import request from './lib/request';

async function loadDetails(type){
	console.log(`Loading ${type} metadata`);
	let skills = JSON.parse(await request(`https://api.guildwars2.com/v2/${type}`));
	await fs.mkdir(`apidata/${type}`);

	let loaded = 0;
	const bulk = 15;

	while(skills.length > 0){
		console.log(`${skills.length} ${type} left to load.`);
		let skillsToLoad = skills.slice(0, bulk).join(',');
		let skillsDetail = JSON.parse(await request(`https://api.guildwars2.com/v2/${type}?ids=${skillsToLoad}`));
		for(let skill of skillsDetail){
			await fs.writeFile(`apidata/${type}/${skill.id}.json`, JSON.stringify(skill));
		}

		skills.splice(0, bulk);
	}
}

export default task(async function dump_api() {
	await loadDetails('skills');
	// await loadDetails('specializations');
	// await loadDetails('traits');
});

