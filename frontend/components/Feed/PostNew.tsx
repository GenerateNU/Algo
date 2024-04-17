import { Text, StyleSheet, View, Image } from 'react-native';
import { Post } from '../../types/types';

type PostProps = {
  post: Post;
};

const PostNew: React.FC<PostProps> = ({ post }) => {

  return (
    <View style={styles.border}>
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.image} source={{uri: post.user.image_url}}>
        </Image>
      </View>
      <View style={styles.body}>
        <Text style={styles.name}>
          {post.user.first_name} {post.user.last_name}
        </Text>
       <Text style={styles.title}>
        {post.title}
       </Text>
       <Text style={styles.comment}>
        {post.comment}
       </Text>
      </View>
    </View>
    </View>
  );
};

// Define the styles for the component
const styles = StyleSheet.create({
  border: {
    width: '100%',
    borderColor: '#C2C2C2',
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    marginTop: 15,
    marginBottom: 15,
    marginRight: 20,
  },
  profile: {
    width: '15%',
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 15,
    borderRadius: 50,
  },
  body: {
    width: '85%',
  },
  title: {
    fontWeight: '500'
  },
  name: {
    fontWeight: '500',
    color: '#666666',
    marginBottom: 7,
    fontSize: 16,
  },
  comment: {
    color: '#666666',
  }
});

export default PostNew; 