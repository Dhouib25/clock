import {Modal, Portal, useTheme} from 'react-native-paper';
import useGlobalStyles from '../styles';
import {Dimensions, Pressable, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';

export default function Setting ({name,value,setValue,values}){
    const {colors} = useTheme();
    const style = useGlobalStyles()
    const [visible, setVisible] = useState(false);
    return(<>
        <Pressable
            onPress={()=>setVisible(true)}
            style={{
                width:Dimensions.get("window").width,
                paddingVertical: 20,
                paddingHorizontal:30,
                height: 80,
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'space-between',
            }}
        >
            <Text
                style={{
                    ...style.text,
                    fontSize:18,
                    fontWeight:"600",
                }}>
                {name}
            </Text>

            <View
                style={{
                    paddingTop:3,
                    flexDirection: 'row',
                    alignContent: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Text
                    style={{
                        paddingEnd:10,
                        color:colors.disabled
                    }}>
                    {value}
                </Text>
                <Ionicons
                    name="chevron-forward-outline"
                    size={20}
                    color={ colors.disabled}
                />
            </View>


        </Pressable>

        <Portal>
            <Modal visible={visible} onDismiss={()=>setVisible(false)} contentContainerStyle={{backgroundColor: colors.background, padding: 20,width:"75%",height:65*values.length,alignSelf:"flex-end",borderRadius:20}}>
                <View
                    style={{
                        backgroundColor: colors.background,
                    }}
                >
                    {values.map((element)=>{
                        return  (
                            <Pressable
                                onPress={()=>setValue(element)}
                                style={{
                                    paddingVertical: 20,
                                    paddingHorizontal: 15,
                                    width:"100%",
                                    height: 65,
                                    flexDirection: 'row',
                                    alignContent: 'center',
                                    justifyContent: 'space-between',
                                    backgroundColor: (value===element)?"rgba(178,82,82,0.8)":colors.background,
                                }}
                            >
                                <Text
                                    style={{
                                        ...style.text,
                                        fontSize:15,
                                        fontWeight:"600",
                                    }}>
                                    {element}
                                </Text>
                                {(value===element)?
                                    <Ionicons color={colors.text} name={"checkmark"} size={20}/>
                                    :null}
                            </Pressable>
                        )
                    })}
                </View>
            </Modal>
        </Portal>
        <Portal>
            <Modal visible={visible} onDismiss={()=>setVisible(false)} contentContainerStyle={{backgroundColor: colors.background, padding: 20,width:"75%",height:65*values.length,alignSelf:"flex-end",borderRadius:20}}>
                <View
                    style={{
                        backgroundColor: colors.background,
                    }}
                >
                    {values.map((element)=>{
                        return  (
                            <Pressable
                                onPress={()=>setValue(element)}
                                style={{
                                    paddingVertical: 20,
                                    paddingHorizontal: 15,
                                    width:"100%",
                                    height: 65,
                                    flexDirection: 'row',
                                    alignContent: 'center',
                                    justifyContent: 'space-between',
                                    backgroundColor: (value===element)?"rgba(178,82,82,0.8)":colors.background,
                                }}
                            >
                                <Text
                                    style={{
                                        ...style.text,
                                        fontSize:15,
                                        fontWeight:"600",
                                    }}>
                                    {element}
                                </Text>
                                {(value===element)?
                                    <Ionicons color={colors.text} name={"checkmark"} size={20}/>
                                    :null}
                            </Pressable>
                        )
                    })}
                </View>
            </Modal>
        </Portal>
    </>)
}
