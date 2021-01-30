import { useState, useEffect } from 'react';
import axios from 'axios';

export const useHttp = (url, dependencies) => {
	const [isLoading, setIsLoading] = useState(false);
	const [fetchedData, setFetchedData] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(url)
			.then((res) => {
				setFetchedData(res);
			})
			.catch((err) => {
				alert('Something went wrong.');
				console.log(err);
				setIsLoading(false);
			});
	}, dependencies);

	return [isLoading, fetchedData];
};
