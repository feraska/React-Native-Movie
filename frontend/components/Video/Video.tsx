import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Pressable,

  } from 'react-native';

  import React, {useContext, useRef, useState} from 'react';
  import {
    responsiveFontSize,
    responsiveHeight,
  
  } from 'react-native-responsive-dimensions';
  import Fontisto from 'react-native-vector-icons/Fontisto';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import Entypo from 'react-native-vector-icons/Entypo';
  import Octicons from 'react-native-vector-icons/Octicons';
  import AntDesign from "react-native-vector-icons/AntDesign"
  import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { AuthContext } from '../../context/AuthContext';
import usePut from '../../hooks/usePut';
import { api } from '../../enums/api';
import { actions } from '../../interfaces/auth';
import {Video,ResizeMode} from "expo-av"
  
  const VideoPlayer = ({route}) => {
   
    const {
      id,
      title,
      release_date,
      poster_path,
      overview,
      backdrop_path,
      vote_count,
    } = route.params.movieData;
  
    const [isVideoVisible, setisVideoVisible] = useState(false);
    const {state,dispatch} = useContext(AuthContext)
    const {put} = usePut(api.addToList)
    const {put:addToLikes} = usePut(api.like)
    const {put:removeFromLikes} = usePut(`${api.dislike}`)
    const {put:remove} = usePut(`${api.removeFromList}`)
    const removeMovie = async()=> {
      try {
          await remove({image:id})
      dispatch({type:actions.remove_list,payload:id})
      } catch(err) {
          console.log(err)
      }
  }
  const addHandler = async() => {
      try {
      await put({image:id})
      
      dispatch({type:actions.add_list,payload:id})
      
      } catch(err) {
          console.log(err)
      }
  }
  const likeHandler = async(action:string) => {
      try {
          if(action === actions.like) {
              await addToLikes({image:id})
              dispatch({type:actions.like,payload:id})
          } else {
              await removeFromLikes({image:id})
              dispatch({type:actions.dislike,payload:id})
          }
      } catch(err) {
          console.log(err)
      }
  }
 
    return (
    
      
      <View style={styles.mainContainer}>
        
        <StatusBar backgroundColor={'#080508'} />
        <ScrollView style={styles.scrollContainer}>
          {!isVideoVisible? <Image
              style={styles.firstContainer}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}`,
              }}
            />:
              <Video 
              source={{uri:"https://res.cloudinary.com/dpel2vfvq/video/upload/v1715930615/video_bie12o.mp4"}}
               useNativeControls
               isLooping
              resizeMode={ResizeMode.COVER}
               shouldPlay
               
               style={{flex:1,alignSelf:"stretch",width:"auto",height: responsiveHeight(50),}}
                />
          }
           
          {/* Second Container */}
          <View style={styles.secondContainer}>
            {/* First Box */}
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <Fontisto name="netflix" size={22} color="red" />
              <Text style={{fontSize: 15, color: 'white', letterSpacing: 5}}>
                SERIES
              </Text>
            </View>
  
            {/* First Box */}
  
            {/* Second Box */}
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              {title}
            </Text>
            {/* Second Box */}
  
            {/* Third Box */}
  
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <Text style={{fontSize: 16, color: 'white'}}>
                {release_date.split('-')[0]}
              </Text>
              <View
                style={{width: 2.5, height: 20, backgroundColor: 'white'}}></View>
  
              <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                <MaterialIcons name="favorite" size={20} color="red" />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: '700',
                    lineHeight: 15,
                  }}>
                  {vote_count}
                </Text>
  
                <MaterialIcons name="hd" size={25} color="white" />
              </View>
            </View>
            {/* Third Box */}
          </View>
  
          <View style={{padding: 10, gap: 10, marginTop: 5}}>
            <TouchableOpacity
              onPress={() => {
                setisVideoVisible(true);
              }}
              activeOpacity={0.8}
              style={styles.playButton}>
              <Entypo name="controller-play" size={22} color="black" />
              <Text
                style={[
                  styles.titles,
                  {
                    fontSize: responsiveFontSize(2),
                    color: 'black',
                    fontWeight: '700',
                  },
                ]}>
                Play
              </Text>
            </TouchableOpacity>
  
            <TouchableOpacity
              onPress={() => {
               // console.log('Clicked Play Button');
              }}
              activeOpacity={0.8}
              style={[styles.playButton, {backgroundColor: '#2B292B'}]}>
              <Octicons
                style={{marginRight: 5}}
                name="download"
                size={22}
                color="white"
              />
              <Text
                style={[
                  styles.titles,
                  {
                    fontSize: responsiveFontSize(2),
                    color: 'white',
                    fontWeight: '700',
                  },
                ]}>
                Download
              </Text>
            </TouchableOpacity>
            <View style={{display:"flex",flexDirection:"row",gap:10}}>
            
              {
              !state.list.includes(id)? 
              <Pressable onPress={addHandler}>
              <AntDesign 
              name="plus"
              color="white"
              size={22}
              />
               </Pressable>
              :
              <Pressable onPress={removeMovie}>
              <AntDesign
              name="minus"
              color="white"
              size={22}
              />
              </Pressable>
              }
            
              
             

             {
             !state.likes.includes(id)?
             <Pressable onPress={()=>likeHandler("like")}>
              <SimpleLineIcons 
              name="like"
              color="white"
              size={22}
              />
              </Pressable>
              :
              <Pressable onPress={()=>likeHandler("dislike")}>
              <SimpleLineIcons
              name="dislike"
              color="white"
              size={22}
              />
              </Pressable>
            }
              

             
              
             
            </View>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                marginVertical: 10,
                lineHeight: 25,
                textAlign: 'justify',
              }}>
              {overview}
            </Text>
          </View>
        </ScrollView>
      </View>
     
    );
  };
  
  export default VideoPlayer;
  const styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
  },
    mainContainer: {
      flex: 1,
      backgroundColor: '#080508',
      marginTop: StatusBar.currentHeight,
    },
    scrollContainer: {
      flex: 1,
    },
    firstContainer: {
      height: responsiveHeight(35),
    },
    secondContainer: {
      padding: 10,
      gap: 10,
    },
    titles: {
      fontSize: responsiveFontSize(2.3),
      color: 'white',
      fontWeight: '500',
    },
    playButton: {
      backgroundColor: 'white',
      height: responsiveHeight(5.3),
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
    },
  });