import 'package:flutter/material.dart';

class GridViewTask extends StatefulWidget {
  GridViewTask({Key key}) : super(key: key);

  @override
  _GridViewTaskState createState() => _GridViewTaskState();
}

class _GridViewTaskState extends State<GridViewTask> {

  final List<String> items = List.generate(50, (index) => 'item $index');

  @override
  Widget build(BuildContext context) {
    return Scaffold(
       appBar: new AppBar(
         title: new Text('GrideView的使用')
       ),
       body: getGriderView()
    );
  }

  Widget getGriderView() {
    return GridView.count(
      crossAxisCount: 2,
      crossAxisSpacing: 10,
      mainAxisSpacing: 20,
      childAspectRatio: 2.0,
      padding: EdgeInsets.symmetric(horizontal: 10,vertical: 5),
      children: getWidgetList(),
    );
  }

  List<Widget> getWidgetList() {
    return items.map((item) => getItemContainer(item)).toList();
  }

  Widget getItemContainer(String item) {
    return Container(
      // alignment: Alignment.center,
      alignment: Alignment(-0.5,0),
      child: Text(
        item,
        style: TextStyle(
          color: Colors.white,
          fontSize: 20 
        ), 
      ),
      color: Colors.orange,
    );
  }
}