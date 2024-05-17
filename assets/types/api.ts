export interface RoverImages {
	id: number;
	sol: number;
	camera: RoverCamera;
	img_src: string;
	earth_date: string;
	rover: Rover;
}

export interface RoverCamera {
	id: number;
	name: string;
	rover_id: number;
	full_name: string;
}

export interface Rover {
	id: number;
	name: string;
	landing_date: string;
	launch_date: string;
	status: string;
	max_sol: number;
	max_date: string;
	total_photos: number;
	cameras: AvailableCameras[];
}

export interface AvailableCameras {
	name: string;
	full_name: string;
}
