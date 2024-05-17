import { Rover, RoverImages } from '../types/api';

export const getPictures = async (rover: string, camera?: string, datePriseVue?: string): Promise<RoverImages[]> => {
	const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000
    &page=1
    ${camera ? '&camera=' + camera : ''}
    ${datePriseVue ? '&earth_date' + datePriseVue : ''}
    &api_key=ppMaXSlYwFBQ277GbOnLyB1UAAdRWUgGZdfKXclB`;

	const res = await fetch(url, {
		method: 'GET'
	});
	const ret = await res.json();

	console.log(await ret.photos.length);
	return ret.photos as RoverImages[];
};
