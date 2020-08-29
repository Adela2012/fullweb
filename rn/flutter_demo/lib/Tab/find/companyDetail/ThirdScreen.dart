import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';


class ThridScreen extends StatefulWidget {
  ThridScreen({Key key}) : super(key: key);

  @override
  _ThridScreenState createState() => _ThridScreenState();
}

class _ThridScreenState extends State<ThridScreen> {

  Future <SharedPreferences> _prefs = SharedPreferences.getInstance();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        title: new Text('third'), 
      ),
      body: Center(
        child: FlatButton(
          onPressed: () {
            _prefs.then((SharedPreferences prefs) => {
              prefs.setString('valueKey', 'share data')
            });
          },
          child: Text('data share perfermance')
        )
      ),
    );
  }
}
