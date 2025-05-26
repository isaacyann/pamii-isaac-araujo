import { Text, View,} from "react-native";
import { Button, Icon, Input, SpeedDial } from '@rneui/themed';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>jõa lindo</Text>
      <Button title="Solid" size="sm" type="outline" disabled />
      <Button title="Solid" size="lg" color="warning"  />

      <Button radius={"sm"} type="solid">
  Save
  <Icon name="share" color="white" />
</Button>


    <SpeedDial.Action
      icon={{ name: 'add', color: '#fff' }}
      title="Add"
  
    />
    <SpeedDial.Action
      icon={{ name: 'delete', color: '#fff' }}
      title="Delete"
     
    />
    </View>
     
  );
}
