export const exerciseOptions = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '8ebc13828dmshf8027592bd0212fp1af296jsn1f1643998a0d',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };
export const fetchData = async (url, options) => {
      const res = await fetch(url, options);
      const data = await res.json();
    
      return data;
    };

fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));