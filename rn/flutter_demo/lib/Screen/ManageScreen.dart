import 'package:flutter/material.dart';

class ManageSreen extends StatelessWidget {
  const ManageSreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        title: new Text('管理'),
      ),
      body: Center(
        child: new Text('管理')
      )
    );
  }
}
