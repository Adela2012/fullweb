import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_demo/Tab/find/CompanyItem.dart';
import 'package:flutter_demo/Tab/find/company.dart';
import 'package:flutter_demo/Tab/find/companyDetail/CompanyDetailScreen.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';
import 'package:http/http.dart' as http;

class FindScreen extends StatefulWidget {
  FindScreen({Key key}) : super(key: key);

  @override
  _FindScreenState createState() => _FindScreenState();
}

class _FindScreenState extends State<FindScreen> {

  List<Company> _companies = [];
  int currentPage = 1;

  ScrollController _scrollController = ScrollController();
  RefreshController _refreshController = RefreshController(initialRefresh: false);

  @override
  void initState() {
    super.initState();
    getCompanyList();

    _scrollController.addListener(() {
      if (_scrollController.position.pixels == _scrollController.position.maxScrollExtent) {
        print('scroll end');
      }
    });
  }

  getCompanyList() async{
    String url = 'http://m.app.haosou.com/index/getData?type=1&page=$currentPage';
    var response = await http.get(url);
    var data = response.body;
    var map = jsonDecode(data);
    // print(map);
    if (currentPage == 1) {
      setState(() {
        _companies = Company.fromMapData(map);
      });
      _refreshController.refreshCompleted();
    } else {
      setState(() {
        _companies.addAll(Company.fromMapData(map));
      });
      _refreshController.loadComplete();
    }

  }

  _buildContent() {
    if(_companies.isEmpty) {
      return Center(
        child: CircularProgressIndicator()
      );
    }

    return SmartRefresher(
        controller: _refreshController,
        enablePullDown: true,
        enablePullUp: true,
        header: ClassicHeader(
          refreshingText: '正在加载更多...', 
          idleText: '下拉刷新',
          completeText: '加载完成',
          releaseText: '松开刷新',
        ),
        footer: ClassicFooter(
          idleText:'加载更多数据',
          loadingText:'玩命加载中...',
          noDataText:'没有更多数据'
        ),
        onLoading: _onLoading,
        onRefresh: _onRefresh,
        child: ListView.builder(
          controller: _scrollController,
          itemCount: _companies.length,
          itemBuilder: (context, index) {
            Company model = _companies[index];
            print(index);
            return InkWell(
              onTap: () {
                Navigator.of(context).push(
                  new MaterialPageRoute(builder: (context) {
                    return CompanyDetailScreen(model);
                  })
                );
              },
              child: CompanyItem(model),
            );
          }
        )
      );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        title: new Text('发现'), 
      ),
      body:_buildContent() 
    );
  }

  _onLoading() async {
    // _refreshController.loadComplete();
    currentPage++;
    getCompanyList();
  }

  _onRefresh() async {
    currentPage = 1;
    getCompanyList();
    // _refreshController.refreshFailed();
  }
}

