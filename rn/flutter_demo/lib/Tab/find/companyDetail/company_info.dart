import 'package:flutter/material.dart';
import 'package:flutter_demo/Tab/find/company.dart';


class CompanyInfo extends StatelessWidget {

  final Company company;

  CompanyInfo(this.company);

  @override
  Widget build(BuildContext context) {
    return new Padding(
      padding: EdgeInsets.all(10),
      child: new Card(
        elevation: 0,
        child: new Row(
          children: <Widget>[
            new Padding(
              padding: EdgeInsets.only(
                top: 10.0,
                left: 15.0,
                right: 15.0,
                bottom: 0.0
                ),
                child: new Image.network(
                  company.logo,
                  width: 50, height: 50.0,
                ),
            ),
            new Expanded(
              child: new Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  new Container(
                      child: new Text(
                        company.name,
                        textAlign:TextAlign.left,
                        style:TextStyle(fontSize: 15.0),
                      ),
                      margin: const EdgeInsets.only(top: 10.0, bottom: 5.0),
                    ),

                    new Padding(
                      padding: const EdgeInsets.only(
                        top: 5.0,
                        left: 0.0,
                        right: 5.0,
                        bottom: 5.0
                      ),
                      child: new Text(
                        company.location,
                        style:TextStyle(fontSize: 13.0, color: Colors.grey),
                      ),
                    ),

                    new Padding(
                      padding: const EdgeInsets.only(
                        top: 5.0,
                        left: 0.0,
                        right: 5.0,
                        bottom: 5.0
                      ),
                      child: new Text(
                        company.type + ' | ' + company.size + ' | ' + company.employee,
                        style:TextStyle(fontSize: 13.0, color: Colors.grey),
                      )
                    )
                ], 
              )
            )
          ], 
        ),
      ),
    );
  }
}