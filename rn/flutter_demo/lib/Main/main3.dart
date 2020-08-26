import 'package:flutter/material.dart';
import 'package:flutter_demo/Screen/FindScreen.dart';
import 'package:flutter_demo/Screen/FriendScreen.dart';
import 'package:flutter_demo/Screen/ManageScreen.dart';
import 'package:flutter_demo/Screen/MineScreen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
        title: 'Flutter Demo',
        home: FirstScreen()
    );
  }
}

class FirstScreen extends StatefulWidget {
  FirstScreen({Key key}) : super(key: key);

  @override
  _FirstScreenState createState() => _FirstScreenState();
}

class _FirstScreenState extends State<FirstScreen> {
  final List<Widget> _children = [
    FriendSreen(),
    ManageSreen(),
    FindSreen(),
    MineSreen()
  ];

  int _currentIndex = 0;

  void onTabTapped(int selectIndex) {
    setState(() {
      _currentIndex = selectIndex;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _children[_currentIndex],
      bottomNavigationBar: BottomNavigationBar( 
        selectedItemColor: Colors.red,
        unselectedItemColor: Colors.grey,
        onTap: onTabTapped,
        currentIndex: _currentIndex,
        items: [
          new BottomNavigationBarItem(icon: Icon(Icons.live_tv), title: Text('好友')),
          new BottomNavigationBarItem(icon: Icon(Icons.lock_open), title: Text('发现')),
          new BottomNavigationBarItem(icon: Icon(Icons.card_membership), title: Text('管理')),
          new BottomNavigationBarItem(icon: Icon(Icons.person_outline), title: Text('我的')),
        ]
      ),
    );
  }
}




class SecondScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('界面一'),
      ),
      body: Center(
        child: Text('界面一显示的内容'),
      ),
      // drawer: new Drawer(
      //   child: new Center(
      //     child: Text(
      //       'Drawer',
      //       style: new TextStyle(
      //         fontSize: 20.0,
      //         color: Colors.blue,
      //         fontWeight: FontWeight.bold
      //       ),
      //     ),
      //   ),
      // ),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
    );
  }
}
