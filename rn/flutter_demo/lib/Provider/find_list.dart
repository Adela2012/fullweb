import 'package:flutter/material.dart';
import 'package:flutter_demo/Tab/find/company.dart';

class FindListProvider with ChangeNotifier {

  List<Company> _companies = [];
  int _currentPage = 1;
}