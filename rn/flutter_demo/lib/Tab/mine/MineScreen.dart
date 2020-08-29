import 'package:flutter/material.dart';

// class MineScreen extends StatelessWidget {
//   const MineScreen({Key key}) : super(key: key);

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: new AppBar(
//         title: new Text('我的'), 
//       ),
//       body: Center(
//         child: Text('我的'), 
//       ),
//     );
//   }
// }

class MineScreen extends StatefulWidget {
  MineScreen({Key key}) : super(key: key);

  @override
  _MineScreenState createState() => _MineScreenState();
}

class _MineScreenState extends State<MineScreen> {

  int _count = 0;
  void _increaseCount(){
    setState(() {
      _count += 1;
    });
  }
  @override
  Widget build(BuildContext context) {
    return CounterProvider(
     count: _count,
     increaseCount: _increaseCount,
     child: Scaffold(
        appBar: AppBar(
            title: Text('我的')
        ),
        body: MiddleCount(),
        floatingActionButton: FloatingActionButton(
          child: Icon(Icons.add),
          onPressed: _increaseCount,
        ),
      ),
   );
  }
}

class MiddleCount extends StatelessWidget {

  // int counter = 0;
  // VoidCallback increaseCount;

  // MiddleCount({Key key, this.counter, this.increaseCount}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(
        child: Counter(),
      ),
    );
  }
}

class Counter extends StatelessWidget {

//  int counter = 0;
//  VoidCallback increaseCount;

//  Counter({Key key, this.counter, this.increaseCount}) : super(key: key);

 @override
 Widget build(BuildContext context) {

    final count = CounterProvider.of(context).count;
    final increaseCount = CounterProvider.of(context).increaseCount;

   return Center(
       child: GestureDetector(
         onTap: increaseCount,
         child: Text(
           '$count',
           style: TextStyle(fontSize: 30),
         ),
       )
   );
 }
}

class CounterProvider extends InheritedWidget {
  final int count;
  final VoidCallback increaseCount;
  final Widget child;

  CounterProvider({
    this.child,
    this.count,
    this.increaseCount
  });

  static CounterProvider of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<CounterProvider>();
  }

  @override
  bool updateShouldNotify(InheritedWidget oldWidget) {
    return true;
  }

}