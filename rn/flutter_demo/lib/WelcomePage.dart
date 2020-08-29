import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_demo/Application.dart';
import 'package:flutter_demo/home.dart';

class WelcomePage extends StatefulWidget {
  WelcomePage({Key key}) : super(key: key);

  @override
  _WelcomePageState createState() => _WelcomePageState();
}

class _WelcomePageState extends State<WelcomePage> {


  int counter = 2;

  Timer _timer;

  @override
  void initState() {
    super.initState();

    _timer = new Timer.periodic(new Duration(seconds: 1), (timer){
        print(counter);

      if(counter == 1) {
        _timer.cancel();
        _timer = null;
        goHomePage();
      }
      setState(() {
        counter = --counter;
      });
    });
  }

  goHomePage() {
    Navigator.of(context).pushAndRemoveUntil(
      new MaterialPageRoute(builder: (context) => FlowerApp()), 
    (route) => route == null);
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    Application.screenWidth = size.width;
    Application.screenHeight = size.height;
    Application.statusBarHeight = MediaQuery.of(context).padding.top;
    Application.bottomBarHeight = MediaQuery.of(context).padding.bottom;

    return Scaffold(
      body: new Stack(
        children: <Widget> [
          Container(
            margin: EdgeInsets.zero,
            child: Image.asset(
              'assets/images/SplashBgImage.jpg',
              height: Application.screenHeight,
                fit: BoxFit.cover,
            )
          ),
          Positioned(
            top: Application.statusBarHeight,
            right: 20,
            child: Chip(
              label: Text('$counter秒'),
              backgroundColor: Colors.transparent,
            )
          )
        ]
      )
    );
  }
}