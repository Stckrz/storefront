//returns an array of all of the advertisements in the database
export async function fetchAddUrl() {
	const response = await fetch('http://127.0.0.1:8000/advertisements/Advertisement/?format=json');
	const fetchedData = await response.json();
	if (response.status === 200) {
		return fetchedData
	} else {
		return []
	}
}

