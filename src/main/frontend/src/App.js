import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    axios.get('/hello')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
  }, []);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-2xl font-bold text-blue-600">
                받아온 값: {data}
            </div>
        </div>
    );
}

export default App;