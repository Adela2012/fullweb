import 'package:flutter/material.dart';

class CompanyHotJob extends StatelessWidget {
  const CompanyHotJob({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(
        child: new Row(
          children: <Widget>[
            RichText(
              text: new TextSpan(
                text: '富文本',
                style: TextStyle(
                  fontSize: 16.0,
                  color: Colors.black
                ),
                children: [
                  TextSpan(
                    text: '富文本',
                    style: TextStyle(
                      fontSize: 16.0,
                      color: Colors.red
                    ),
                  ),
                  TextSpan(
                    text: '富文本',
                    style: TextStyle(
                      fontSize: 22.0,
                      color: Colors.blue
                    ),
                  ),
                ]
              )
            )
          ], 
        ), 
      )
    );
  }

  // _roundBtnBack() {
  //   return Center(
  //       child: new Column(
  //         children: <Widget> [
  //           RaisedButton(
  //             child: Text('back 1'),
  //             onPressed: (){
  //               Navigator.of(context).pop('back params');
  //             },
  //           ),
  //           RaisedButton(
  //             child: Text('back 2'),
  //             onPressed: (){
  //               Navigator.of(context).pushReplacementNamed('/third');
  //             },
  //           ),
  //           RaisedButton(
  //             child: Text('back 3'),
  //             onPressed: (){
  //               Navigator.of(context).popAndPushNamed('/third');
  //             },
  //           )
  //         ]
  //       ), 
  //     );
  // }

}