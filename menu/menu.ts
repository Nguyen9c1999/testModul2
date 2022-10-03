import {Product} from "../model/product";
import {ManagerProduct} from "../service/managerProduct";
import {ManagerAlbum} from "../../caseStudy2/service/managerAlbum";

let managerProduct = new ManagerProduct()
let input = require('readline-sync');
function mainMenu() {
    let menu = `-----Menu chinh-----\n1.hiện thị danh sách\n2.Tìm kiếm mặt hàng theo tên\n3.Thêm mới mặt hàng\n4.Chỉnh Sửa\n5.Xóa\n0.Thoat`
    let choice;

    do {
        console.log(menu);
        choice = +input.question('Nhap lua chon cua ban: ');
        switch (choice) {
            case 1:
                 display()
                break;
            case 2:
                find()
                break;
            case 3:
                addProduct()
                break;
            case 4:
                edit()
                break;
                case  5:
                deleteSanPham()

                break;
            default:
                console.log('lua chon cua ban ko hop le')
                break;
        }
    } while (choice != 0)


}
mainMenu()
function addProduct(){
    let id = +input.question('Nhap id cua san pham: ');
    let name = input.question('Nhap ten cua san pham: ');
    let quantity = +input.question('Nhap so luong san pham: ');
    let cost = +input.question('Nhap gia cua san pham');
    let time = input.question('Nhap ngay tao');
    let type = input.question('Nhap loai hang');
    let describe = input.question('Nhap mo ta san pham');
    let product = new Product(id,name,type,cost,quantity,time,describe)
    managerProduct.add(product)

}
function display(){
    let listProduct = managerProduct.listProduct
    if(listProduct.length==0){
        console.log('không có dữ liệu')
    }else{
        for (let i = 0; i <listProduct.length ; i++) {
            console.log(`id: ${listProduct[i].id}, tenSP: ${listProduct[i].name} ,giaSP: ${listProduct[i].cost} ,loaiSP: ${listProduct[i].type} ,thoi gian: ${listProduct[i].time} ,mo ta : ${listProduct[i].describe}`)
        }
    }

}
function deleteSanPham(){
    let id = +input.question('Nhap id cua san pham: ');
    if (managerProduct.findIndex(id)==-1){
        console.log('ko co du lieu')
    }else {
        managerProduct.delete(id)
        console.log('đã xóa thành công')
    }
}
function edit(){
    let id = +input.question('Nhap id cua san pham: ');
    if (managerProduct.findIndex(id)==-1){
        console.log('ko co du lieu')
    }else {

        let name = input.question('Nhap ten cua san pham: ');
        let quantity = +input.question('Nhap so luong san pham: ');
        let cost = +input.question('Nhap gia cua san pham');
        let time = input.question('Nhap ngay tao');
        let type = input.question('Nhap loai hang');
        let describe = input.question('Nhap mo ta san pham');
        let product = new Product(id,name,type,cost,quantity,time,describe)
        managerProduct.edit(id,product)
    }

}
function find(){
    let listProduct = managerProduct.listProduct
    let name = input.question('Nhap ten cua san pham: ');
    let name2 = new RegExp( name)
    let flag = 0
    for (let i = 0; i <listProduct.length ; i++) {
        let a = name2.test(listProduct[i].name)
        if (a== true){
            console.log(`id: ${listProduct[i].id} ,tenSP: ${listProduct[i].name} ,giaSP: ${listProduct[i].cost} ,loaiSP: ${listProduct[i].type} ,thoi gian: ${listProduct[i].time} ,mo ta : ${listProduct[i].describe}`)
         flag++
        }

    }
    if (flag==0){
        console.log('ko co du lieu')
    }

}
