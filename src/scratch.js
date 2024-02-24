const [defaultSongs, setDefaultSongs] = useState([]);
const [defaultSingers, setDefaultSingers] = useState([]);


axios.defaults.baseURL = 'http://localhost:8080/api/';

useEffect(() => {
    axios.get('default-songs')
      .then(response => {
        console.log(response);
        (response.status === 200) && setDefaultSongs(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });

    axios.get('default-singers')
      .then(response => {
        console.log(response);
        (response.status === 200) && setDefaultSingers(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  }, []);

