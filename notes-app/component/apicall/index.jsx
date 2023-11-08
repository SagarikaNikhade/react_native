import {View,Text, FlatList, ActivityIndicator} from "react-native";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function ApiCall(){
    const [data,setData] = useState([]);
    // loading state
    const [loading,setLoading] = useState(false);

    // Corrected code
    useEffect(() => {
      setLoading(true);

        async function getData(){
          const api = await fetch("https://jsonplaceholder.typicode.com/users");
          const finalData = await api.json();

          if(finalData){
            setData(finalData.map((item)=>item.name))

            setLoading(false)
          }
        }
        getData()
      }, []);

      if(loading){
        return(
          <ActivityIndicator color={'red'} size='large'/>
        )
      }

   // Corrected code
    // useEffect(() => {
    //   async function fetchData() {
    //     try {
    //       const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    //       if (response.data) {
    //         setData(response.data.map(item => `${item.name} - ${item.email}`));
    //       }
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   }
  
    //   fetchData();
    // }, []);

      console.log(data);

    return(
      <View>
      <Text>Api Data :-</Text>
      <View>
        <FlatList
        data={data}
        renderItem={(el)=><Text>{el.item}</Text>}
        />
      </View>
    </View>
    )
}