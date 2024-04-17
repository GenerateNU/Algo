import { Text, StyleSheet, View, Image } from 'react-native';
import { Post } from '../../types/types';
import Vote from './Vote';
import { SvgXml } from 'react-native-svg';

type PostProps = {
  post: Post;
};

const AddSvg = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99916 20C15.4774 20 20 15.4706 20 10C20 4.52138 15.4693 0 9.99123 0C4.52273 0 0 4.52138 0 10C0 15.4706 4.53067 20 9.99916 20Z" fill="#E8E8E8"/>
<path d="M5.26315 10.012C5.26315 9.45115 5.63621 9.05385 6.16426 9.05385H8.84484V6.22236C8.84484 5.66667 9.21532 5.26318 9.73751 5.26318C10.2688 5.26318 10.6452 5.66667 10.6452 6.22236V9.05385H13.335C13.8554 9.05385 14.236 9.45115 14.236 10.012C14.236 10.5651 13.8554 10.9464 13.335 10.9464H10.6452V13.7859C10.6452 14.3415 10.2688 14.7354 9.73751 14.7354C9.21532 14.7354 8.84484 14.3336 8.84484 13.7859V10.9464H6.16426C5.63621 10.9464 5.26315 10.5651 5.26315 10.012Z" fill="#02AD98"/>
</svg>
`;

const PostNew: React.FC<PostProps> = ({ post }) => {

  return (
    <View style={styles.border}>
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.image} source={{uri: post.User.image_url}}>
        </Image>
      </View>
      <View style={styles.body}>
        <Text style={styles.name}>
          {post.User.first_name} {post.User.last_name}
        </Text>
       <Text style={styles.title}>
        {post.title}
       </Text>
       <Text style={styles.comment}>
        {post.comment}
       </Text>
      </View>
    </View>
    <View style={styles.vote}>
      <Vote />
    </View>
    </View>
  );
};

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
    fontWeight: '500',
    fontSize: 16,
  },
  name: {
    fontWeight: '500',
    color: '#666666',
    marginBottom: 7,
    fontSize: 16,
  },
  comment: {
    color: '#666666',
    fontSize: 16,
  },
  vote: {
    left: 0,
    top: 60,
    width: 20,
    height: 20,
    zIndex: 1,
  },
    add: {
    bottom: 15,
    left: 25,
    zIndex: 1,
  }
});

export default PostNew; 
