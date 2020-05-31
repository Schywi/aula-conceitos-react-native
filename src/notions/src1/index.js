 import React, { useState, useEffect} from 'react'
 import api from './services/api'; 
 import {View , Text , StyleSheet, SafeAreaView, StatusBar, FlatList} from 'react-native';


  const [animes, setAnimes] = useState([])


  function App() { 
    useEffect( () => {
      api.get('animes').then(response => { 
        setAnimes(response.data);
      })
    } , [ ])

    return (
    <>
      <StatusBar  barStyle="light-content" backgroundColor='#7159c1'/>      
      <SafeAreaView>
        <FlatList 
        data={animes}
        keyExtractor={anime => anime.id}
        renderItem={({item: anime})=> ( 
          <Text style={style.title}> {anime.title}</Text>
        )}
        
        
        
        
        />
      </SafeAreaView>
      </>
    )
  }


  const style = StyleSheet.create ({
    container: { 
      flex:1,
      backgroundColoer: '#7159c1'
    }, 
    title: { 
      color: '#FFF', 
      fontSize: 20, 
    }

  }
    )
    
  