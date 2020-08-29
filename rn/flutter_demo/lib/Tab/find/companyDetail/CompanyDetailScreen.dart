
import 'package:flutter/material.dart';
import 'package:flutter_demo/Tab/find/company.dart';

class CompanyDetailScreen extends StatefulWidget {

  final Company _company;


  CompanyDetailScreen(this._company);

  @override
  _CompanyDetailScreenState createState() => _CompanyDetailScreenState();
}

class _CompanyDetailScreenState extends State<CompanyDetailScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        title: new Text('公司详情'), 
      ),
      body: Center(
        child: new Column(
          children: <Widget> [
            Text(
              '${widget._company.name}',
              style: TextStyle(
                fontSize: 30.0
              )
            ),
            RaisedButton(
              child: Text('back 1'),
              onPressed: (){
                Navigator.of(context).pop('back params');
              },
            ),
            RaisedButton(
              child: Text('back 2'),
              onPressed: (){
                Navigator.of(context).pushReplacementNamed('/third');
              },
            ),
            RaisedButton(
              child: Text('back 3'),
              onPressed: (){
                Navigator.of(context).popAndPushNamed('/third');
              },
            )
          ]
        ), 
      ),
    );
  }
}