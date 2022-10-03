"use strict";
exports.__esModule = true;
var product_1 = require("../model/product");
var managerProduct_1 = require("../service/managerProduct");
var managerProduct = new managerProduct_1.ManagerProduct();
var input = require('readline-sync');
function mainMenu() {
    var menu = "-----Menu chinh-----\n1.hi\u1EC7n th\u1ECB danh s\u00E1ch\n2.T\u00ECm ki\u1EBFm m\u1EB7t h\u00E0ng theo t\u00EAn\n3.Th\u00EAm m\u1EDBi m\u1EB7t h\u00E0ng\n4.Ch\u1EC9nh S\u1EEDa\n5.X\u00F3a\n0.Thoat";
    var choice;
    do {
        console.log(menu);
        choice = +input.question('Nhap lua chon cua ban: ');
        switch (choice) {
            case 1:
                display();
                break;
            case 2:
                find();
                break;
            case 3:
                addProduct();
                break;
            case 4:
                edit();
                break;
            case 5:
                deleteSanPham();
                break;
            default:
                console.log('lua chon cua ban ko hop le');
                break;
        }
    } while (choice != 0);
}
mainMenu();
function addProduct() {
    var id = +input.question('Nhap id cua san pham: ');
    var name = input.question('Nhap ten cua san pham: ');
    var quantity = +input.question('Nhap so luong san pham: ');
    var cost = +input.question('Nhap gia cua san pham');
    var time = input.question('Nhap ngay tao');
    var type = input.question('Nhap loai hang');
    var describe = input.question('Nhap mo ta san pham');
    var product = new product_1.Product(id, name, type, cost, quantity, time, describe);
    managerProduct.add(product);
}
function display() {
    var listProduct = managerProduct.listProduct;
    if (listProduct.length == 0) {
        console.log('không có dữ liệu');
    }
    else {
        for (var i = 0; i < listProduct.length; i++) {
            console.log("id: ".concat(listProduct[i].id, ", tenSP: ").concat(listProduct[i].name, " ,giaSP: ").concat(listProduct[i].cost, " ,loaiSP: ").concat(listProduct[i].type, " ,thoi gian: ").concat(listProduct[i].time, " ,mo ta : ").concat(listProduct[i].describe));
        }
    }
}
function deleteSanPham() {
    var id = +input.question('Nhap id cua san pham: ');
    if (managerProduct.findIndex(id) == -1) {
        console.log('ko co du lieu');
    }
    else {
        managerProduct["delete"](id);
        console.log('đã xóa thành công');
    }
}
function edit() {
    var id = +input.question('Nhap id cua san pham: ');
    if (managerProduct.findIndex(id) == -1) {
        console.log('ko co du lieu');
    }
    else {
        var name_1 = input.question('Nhap ten cua san pham: ');
        var quantity = +input.question('Nhap so luong san pham: ');
        var cost = +input.question('Nhap gia cua san pham');
        var time = input.question('Nhap ngay tao');
        var type = input.question('Nhap loai hang');
        var describe = input.question('Nhap mo ta san pham');
        var product = new product_1.Product(id, name_1, type, cost, quantity, time, describe);
        managerProduct.edit(id, product);
    }
}
function find() {
    var listProduct = managerProduct.listProduct;
    var name = input.question('Nhap ten cua san pham: ');
    var name2 = new RegExp(name);
    var flag = 0;
    for (var i = 0; i < listProduct.length; i++) {
        var a = name2.test(listProduct[i].name);
        if (a == true) {
            console.log("id: ".concat(listProduct[i].id, " ,tenSP: ").concat(listProduct[i].name, " ,giaSP: ").concat(listProduct[i].cost, " ,loaiSP: ").concat(listProduct[i].type, " ,thoi gian: ").concat(listProduct[i].time, " ,mo ta : ").concat(listProduct[i].describe));
            flag++;
        }
    }
    if (flag == 0) {
        console.log('ko co du lieu');
    }
}
