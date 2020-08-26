import 'package:flutter/material.dart';

class GestureTask extends StatelessWidget {
  const GestureTask({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        title: Text('手势的使用'),
        elevation: 100,
        leading: new Text('左侧'),
         actions: <Widget>[
          new Text('右侧'),
        ],
      ),
      body: GestureDetector(
        onTap: (){
          print('onTap');
        },
        onLongPress: () {
          print('onLongPress');
        },
        child: Container(
          color: Colors.red,//Color.fromARGB(255, 220, 220, 220), 
          child: new Center(
            child: new Text('flutter 手势'), 
          ),
          // constraints: BoxConstraints.expand(),
        ), 
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
