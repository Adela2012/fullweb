import 'package:flutter/material.dart';

class ListViewTask extends StatefulWidget {
  ListViewTask({Key key}) : super(key: key);

  @override
  _ListViewTaskState createState() => _ListViewTaskState();
}

class _ListViewTaskState extends State<ListViewTask> {

  final List<String> items = List.generate(50, (index) => 'item $index');

  @override
  Widget build(BuildContext context) {
    return Scaffold(
       appBar: new AppBar(
         title: new Text('列表的使用')
       ),
       body: getListView()
    );
  }

  Widget getListView() {
    return new ListView.separated(
      itemCount: items.length,
      itemBuilder: (context, index) {
        var content = items[index];
        return new Padding(
          padding: EdgeInsets.all(20),
          child: Text(content),
        );
      },
      separatorBuilder: (context, index) {
        return Divider(color: Colors.red);
      }, 
    );
  }

  Widget getListView2() {
    return new ListView.builder(
      itemCount: items.length,
      itemBuilder: (context, index) {
        var content = items[index];
        return new Padding(
          padding: EdgeInsets.all(20),
          child: Text(content),
        );
      }
    );
  }
}

