import React, { useState } from "react";
import { Alert, Animated, Dimensions, Image, Linking, PanResponder, Pressable, Share, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import { card } from "../../interfaces/card";
import { TouchableOpacity } from "react-native";

interface props {
    modalIsVisible:boolean,
    onClose:()=>void,
    card:card
}
const DragModal:React.FC<{props:props}> = ({props}) => {
    const {modalIsVisible,onClose,card} = props
    
    const url = "netflix-deploy-feraskas-projects.vercel.app"
    
    const onShare = async () => {
        
        const message = `https://netflix-deploy-feraskas-projects.vercel.app/search?q=${card.title}`;
       // const url = ` https://wa.me/?text=${message}`;
        try {
          const result = await Share.share({
            message // The message and URL to share
          });
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // Shared with specific activity (like WhatsApp, etc.)
              console.log('Shared via', result.activityType);
            } else {
              // Shared successfully
              console.log('Content shared successfully');
            }
          } else if (result.action === Share.dismissedAction) {
            // Sharing was dismissed
            console.log('Sharing dismissed');
          }
        } catch (error) {
          Alert.alert('Error:', error.message);
        }
      };
    // const sendToWhatsApp = async () => {
        
    //     const message = `${`https://netflix-deploy-feraskas-projects.vercel.app/search?q=${card.title}`}`;
    //     const whatsappUrl = ` https://wa.me/?text=${message}`;
        
    //     try {
    //       const supported = await Linking.canOpenURL(whatsappUrl);
    //       console.log(supported)
    //       if (supported) {
    //         await Linking.openURL(whatsappUrl);
    //       } else {
    //         Alert.alert('WhatsApp is not installed on this device');
    //       }
    //     } catch (error) {
    //       console.error('Error opening WhatsApp:', error);
    //       Alert.alert('Failed to open WhatsApp');
    //     }
    //   };
  
  
    
     
    return (
      
      <View style={styles.container}>
        <Modal isVisible={modalIsVisible} animationIn={"fadeIn"} swipeDirection={"down"} onSwipeComplete={onClose}  propagateSwipe={true}  style={styles.modal} onBackdropPress={onClose} >
         
            <View style={ [styles.box] }
          
            >
         
                <TouchableOpacity style={styles.close} onPress={onClose}>
                    <AntDesign name="closecircle" size={25} color={"white"} />
                </TouchableOpacity>

                <View style={styles.content}>
                    <View style={styles.flex}>
                        <Image style={styles.img} source={{uri:`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`}}  />
                        <View style={styles.info}>
                        <Text style={styles.text}>{card.title}</Text>
                        <Text style={[styles.text,{fontSize: 12,
                
                marginVertical: 10,
                lineHeight: 25,
                textAlign: 'justify',}]}>{url}</Text>
                        </View>
                    </View>
                    <View style={styles.social}>
                    <View style={styles.column}>
                        <Pressable onPress={onShare}>
                        <Feather name="share" color={"white"} size={50}/>
                        </Pressable>
                        <Text style={styles.text}>Share</Text>
                    </View>
                    </View>
                </View>
          </View>
       
        </Modal>
        </View>
       
       
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    content: {
        display:"flex",
        flexDirection:"column",
        gap:10,
      },
      text: {
        color:"white",
        fontSize:16,
      },
      social: {
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
      },
      flex: {
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:10,
      },
      info: {
        display:"flex",
        flexDirection:"column",
        gap:10,
      },
      img: {
        width:100,
        height:100,
      },
      column: {
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        gap:10
      },
     
    modal: {
        flex: 1,
        justifyContent: 'flex-end', // Align modal to the bottom
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        margin:0,
        padding:0,
        
        
    },
    box: {
        position:"relative",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        
        
        backgroundColor:"black",
        
       
    },
    close: {
        position:"absolute",
        top:20,
        right:20,
        zIndex:99,
        
    },
   
})
export default DragModal