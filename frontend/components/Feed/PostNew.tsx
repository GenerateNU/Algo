import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
//import { Post, PostType} from '../../types/types';
import Vote from './Vote';
import Info from './Info';
import { useNavigation } from '@react-navigation/native';
import { OutsideProfileNavProp } from '../../types/navigationTypes';

type PostProps = {
  post: Post;
};

// running into a really weird comp error, see if these can be removed latter
export interface User {
  id: string,
  first_name: string;
  last_name: string;
  username: string;
  image_url: string;
}

type Post = {
  User: User,
  post_type: PostType,
  num_data: number,
  ticker_symbol: string,
  comment: string,
  title: string
}

export enum PostType {
  ONE_MONTH_SUMMARY = '1 month summary',
  RECENT_TRADE = 'Recent trade',
  SHARE_COMMENT = 'Share comment'
}

const PostNew: React.FC<PostProps> = ({ post }) => {
  console.log(post.post_type);
  console.log(post);
  console.log("Is this a recent trade?", post.post_type == PostType.RECENT_TRADE);
  const navigation = useNavigation<OutsideProfileNavProp>();

  const handlePress = () => {
    navigation.navigate('Profile', 
      {screen: "FollowerProfile", params: { user: post.User}
    });
  };
  return (
    <View style={styles.border}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.profile} onPress={handlePress}>
          <Image
            style={styles.image}
            source={{ uri: post.User.image_url }}></Image>
        </TouchableOpacity>
        <View style={styles.body}>
          <Text style={styles.name} onPress={handlePress}>
            {post.User.first_name} {post.User.last_name}
          </Text>
          <Text style={styles.title}>{post.title}</Text>
          {post.post_type == 'Recent trade' ? (
            <View style={styles.info}>
              {post.num_data < 250 ? (
                <Info
                  type={1}
                  company={post.ticker_symbol} //post.ticker_symbol
                  price={post.num_data} //post.num_data
                  percent={17}
                />
              ) : (
                <Info
                  type={2}
                  company={post.ticker_symbol} //post.ticker_symbol
                  price={post.num_data} //post.num_data
                  percent={17}
                />
              )}
            </View>
          ) : (
            <Text style={styles.comment}>{post.comment}</Text>
          )}
          <View style={styles.vote}>
            <Vote />
          </View>
        </View>
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
    marginTop: 10,
    width: 100,
    height: 20,
  },
  info: {
    marginTop: 10,
  },
});

export default PostNew;
