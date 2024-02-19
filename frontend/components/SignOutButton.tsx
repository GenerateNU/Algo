import { useAuth } from "@clerk/clerk-expo";
import { Button, View } from "react-native";

const SignOut = () => {
  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <View>
      <Button
        title="Sign Out"
        onPress={async () => {
          console.log("Signing out")
          await signOut();
          console.log("Signed out")

        }}
      />
    </View>
  );
};

export default SignOut;   