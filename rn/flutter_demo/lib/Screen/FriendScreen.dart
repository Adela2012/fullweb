import 'package:flutter/material.dart';

class FriendSreen extends StatelessWidget {
  const FriendSreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        title: new Text('好友'),
      ),
      body: Center(
        child: new Text('好友')
      )
    );
  }
}
