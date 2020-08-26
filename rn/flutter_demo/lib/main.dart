import 'package:flutter/material.dart';
import 'package:flutter_demo/home.dart';
// import 'package:flutter_demo/Task/GridView.dart';
// import 'package:flutter_demo/Task/Gesture.dart';
// import 'package:flutter_demo/Task/ListView.dart';
void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
        title: 'Flutter Demo',
        home: FlowerApp()
    );
  }
}
