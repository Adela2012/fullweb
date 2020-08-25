import 'package:flutter/material.dart';

class MineSreen extends StatelessWidget {
  const MineSreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        title: new Text('我的'),
      ),
      body: Center(
        child: new Text('我的')
      )
    );
  }
}
