import { Image, StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import { User } from '../types/types';
import { getAllUsers } from '../services/users';
import { useNavigation } from '@react-navigation/native';
import { OutsideProfileNavProp } from '../types/navigationTypes';

const Post: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const navigation = useNavigation<OutsideProfileNavProp>();

  const handlePress = (u: User) => {
    console.log("trying to navigate on user, ");
    console.log(u);
    navigation.navigate('Profile', 
      {screen: "FollowerProfile", params: { user: u}
    });
  };

  useEffect(() => {
    getAllUsers().then(data => {
      setUsers(data);
    });
  }, []);

  return (
    <View style={styles.container}>
{
      users.map((u) => (
        <TouchableOpacity style={styles.body} onPress={() => handlePress(u)}>
          <Image style={styles.image} source={{uri: u.image_url}}>
          </Image>
          <Text style={styles.name}>{u.first_name}</Text>
        </TouchableOpacity>
      ))
    }
      </View>
  )
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  body: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    padding: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  name:{
    paddingTop: 10,
    color: 'rgba(0,0,0,1)',
    fontFamily: 'Circular Std',
    fontSize: 18,
    textAlign: 'center'
  },
  person1: {
    width: 75,
    height: 159,
    // background: 'url("../images/v124_1289.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    padding: 20,
    margin: 20,
    opacity: 1,
    overflow: 'hidden',
  },
  circle1: {
    width: 75,
    height: 75,
    backgroundColor: 'rgba(217,217,217,1)',
    opacity: 1,
    position: 'absolute',
    top: 20,
    left: 0,
    borderRadius: 50,
  },
  name1_pos: {
    width: 58,
    height: 24,
    // background: 'url("../images/v124_1291.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    margin: 5,
    opacity: 1,
    position: 'absolute',
    top: 105,
    left: 5,
    overflow: 'hidden',
  },
  name1_txt: {
    width: 58,
    color: 'rgba(0,0,0,1)',
    position: 'absolute',
    top: 0,
    left: 0,
    fontFamily: 'Circular Std',
    fontWeight: 'normal',
    fontSize: 16,
    opacity: 1,
    textAlign: 'left',
  },
  person2: {
    width: 75,
    height: 159,
    // background: 'url("../images/v124_1293.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    padding: 20,
    margin: 20,
    opacity: 1,
    position: 'absolute',
    top: 0,
    left: 129,
    overflow: 'hidden',
  },
  circle2: {
    width: 75,
    height: 75,
    backgroundColor: 'rgba(217,217,217,1)',
    opacity: 1,
    position: 'absolute',
    top: 20,
    left: 0,
    borderRadius: 50,
  },
  name2_pos: {
    width: 55,
    height: 24,
    // background: 'url("../images/v124_1295.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    margin: 5,
    opacity: 1,
    position: 'absolute',
    top: 105,
    left: 10,
    overflow: 'hidden',
  },
  name2_txt: {
    width: 55,
    color: 'rgba(0,0,0,1)',
    position: 'absolute',
    top: 0,
    left: 0,
    fontFamily: 'Circular Std',
    fontWeight: 'normal',
    fontSize: 16,
    opacity: 1,
    textAlign: 'left',
  },
  person3: {
    width: 102,
    height: 159,
    // background: 'url("../images/v124_1297.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    paddingVertical: 20,
    paddingHorizontal: 0,
    margin: 20,
    opacity: 1,
    position: 'absolute',
    top: 0,
    left: 234,
    overflow: 'hidden',
  },
  circle3: {
    width: 75,
    height: 75,
    backgroundColor: 'rgba(217,217,217,1)',
    opacity: 1,
    position: 'absolute',
    top: 20,
    left: 8,
    borderRadius: 50,
  },
  name3_pos: {
    width: 92,
    height: 24,
    // background: 'url("../images/v124_1299.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    margin: 5,
    opacity: 1,
    position: 'absolute',
    top: 105,
    left: 0,
    overflow: 'hidden',
  },
  name3_txt: {
    width: 102,
    color: 'rgba(0,0,0,1)',
    position: 'absolute',
    top: 0,
    left: 0,
    fontFamily: 'Circular Std',
    fontWeight: 'normal',
    fontSize: 16,
    opacity: 1,
    textAlign: 'left',
  },
});
