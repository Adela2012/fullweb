import 'package:flutter/material.dart';
import 'package:flutter_demo/Provider/find_list.dart';
import 'package:flutter_demo/Tab/find/companyDetail/ThirdScreen.dart';
import 'package:flutter_demo/WelcomePage.dart';
import 'package:provider/provider.dart';
// import 'package:flutter_demo/home.dart';
// import 'package:flutter_demo/Task/GridView.dart';
// import 'package:flutter_demo/Task/Gesture.dart';
// import 'package:flutter_demo/Task/ListView.dart';
// void main() {
//   runApp(MyApp());
// }

void main() => runApp(
  MultiProvider(
    providers: [
      ChangeNotifierProvider(create: (_) => FindListProvider())
    ],
    child: MyApp(),
  ),
);

class MyApp extends StatelessWidget {
  
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          primarySwatch: Colors.blue,
          visualDensity: VisualDensity.adaptivePlatformDensity,
        ),
        home: WelcomePage(),
        routes: {
          '/third':(BuildContext context) {
            return ThridScreen();
          }
        },
    );
  }
}
